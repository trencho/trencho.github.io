import { useEffect, useState } from 'react';
import type ReCAPTCHA from 'react-google-recaptcha';
import { config } from '@/config/environment';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface LazyReCAPTCHAProps {
  onChange: (value: string | null) => void;
  theme?: 'light' | 'dark';
}

const LazyReCAPTCHA = ({ onChange, theme = 'dark' }: LazyReCAPTCHAProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ReCAPTCHAComponent, setReCAPTCHAComponent] = useState<
    typeof ReCAPTCHA | null
  >(null);
  const { ref: containerRef, isIntersecting } = useIntersectionObserver({
    rootMargin: '100px',
    triggerOnce: true,
    threshold: 0.01,
  });

  useEffect(() => {
    // Load reCAPTCHA script only when component comes into viewport
    if (!isIntersecting || isLoaded) return;

    void (async () => {
      try {
        // Dynamically import react-google-recaptcha only when needed
        const module = await import('react-google-recaptcha');
        const ReCAPTCHA = module.default;
        setReCAPTCHAComponent(() => ReCAPTCHA);
        setIsLoaded(true);
      } catch (error) {
        console.error('Failed to load reCAPTCHA:', error);
      }
    })();
  }, [isIntersecting, isLoaded]);

  return (
    <div
      ref={containerRef as React.RefObject<HTMLDivElement>}
      className='flex flex-col items-center justify-center min-h-[78px]'
    >
      {ReCAPTCHAComponent ? (
        <ReCAPTCHAComponent
          // className="mb-4 sm:mb-6 scale-[0.75] sm:scale-[0.85] md:scale-[1]"
          sitekey={config.recaptcha.siteKey}
          onChange={onChange}
          theme={theme}
        />
      ) : (
        <div className='flex items-center justify-center text-white/50 text-sm'>
          Loading verification...
        </div>
      )}
    </div>
  );
};

export default LazyReCAPTCHA;
