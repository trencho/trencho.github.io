import { useState, useEffect, useRef, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  minHeight?: string;
}

/**
 * LazySection component that only loads its children when they're about to enter the viewport.
 * This breaks the critical request chain by deferring non-critical component loading.
 */
const LazySection = ({
  children,
  fallback,
  rootMargin = '200px', // Start loading 200px before section enters viewport
  minHeight = '400px',
}: LazySectionProps) => {
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // If already rendered, no need to observe
    if (shouldRender) return;

    // Create Intersection Observer to detect when section is near viewport
    if (containerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !shouldRender) {
              // Start loading when section is about to enter viewport
              setShouldRender(true);
              // Disconnect observer after first trigger
              if (observerRef.current) {
                observerRef.current.disconnect();
              }
            }
          });
        },
        {
          rootMargin, // Start loading before section becomes visible
          threshold: 0.01, // Trigger as soon as any part is visible
        }
      );

      observerRef.current.observe(containerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [shouldRender, rootMargin]);

  return (
    <div ref={containerRef} style={{ minHeight: shouldRender ? 'auto' : minHeight }}>
      {shouldRender
        ? children
        : fallback || (
            <div className="min-h-[400px] flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
            </div>
          )}
    </div>
  );
};

export default LazySection;
