import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  minHeight?: string;
}

/**
 * LazySection component that only loads its children when they're about to enter the viewport.
 * This breaks the critical request chain by deferring non-critical component loading.
 * Internally uses the useIntersectionObserver hook for consistent behavior.
 */
const LazySection = ({
  children,
  fallback,
  rootMargin = '200px',
  minHeight = '400px',
}: LazySectionProps) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    rootMargin,
    triggerOnce: true,
    threshold: 0.01,
  });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ minHeight: isIntersecting ? 'auto' : minHeight }}
    >
      {isIntersecting
        ? children
        : (fallback ?? (
            <div className='min-h-[400px] flex items-center justify-center'>
              <div
                className='animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500'
                aria-hidden='true'
              />
            </div>
          ))}
    </div>
  );
};

export default LazySection;
