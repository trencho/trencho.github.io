import { useState, useEffect, useRef } from 'react';
import { config } from '../config/environment';

interface LazyReCAPTCHAProps {
  onChange: (value: string | null) => void;
  theme?: 'light' | 'dark';
}

const LazyReCAPTCHA = ({ onChange, theme = 'dark' }: LazyReCAPTCHAProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ReCAPTCHAComponent, setReCAPTCHAComponent] = useState<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Load reCAPTCHA script only when component is in viewport
    const loadReCAPTCHA = async () => {
      if (isLoaded) return;

      try {
        // Dynamically import react-google-recaptcha only when needed
        const module = await import('react-google-recaptcha');
        const ReCAPTCHA = module.default;
        setReCAPTCHAComponent(() => ReCAPTCHA);
        setIsLoaded(true);
      } catch (error) {
        console.error('Failed to load reCAPTCHA:', error);
      }
    };

    // Use Intersection Observer to load reCAPTCHA when component is visible
    if (containerRef.current && !isLoaded) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadReCAPTCHA();
              if (observerRef.current) {
                observerRef.current.disconnect();
              }
            }
          });
        },
        {
          rootMargin: '100px', // Start loading 100px before it comes into view
        }
      );

      observerRef.current.observe(containerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isLoaded]);

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center min-h-[78px]">
      {ReCAPTCHAComponent ? (
        <ReCAPTCHAComponent
          // className="mb-4 sm:mb-6 scale-[0.75] sm:scale-[0.85] md:scale-[1]"
          sitekey={config.recaptcha.siteKey}
          onChange={onChange}
          theme={theme}
        />
      ) : (
        <div className="flex items-center justify-center text-white/50 text-sm">
          Loading verification...
        </div>
      )}
    </div>
  );
};

export default LazyReCAPTCHA;
