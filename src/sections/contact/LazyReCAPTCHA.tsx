import type React from 'react';
import { useEffect, useState } from 'react';
import type ReCAPTCHA from 'react-google-recaptcha';
import { config } from '@/config/environment';
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';

interface LazyReCAPTCHAProps {
  onChange: (value: string | null) => void;
  theme?: 'light' | 'dark';
  // Forwarded to the widget so a caller can `.reset()` it after a failed send.
  // Named apart from `ref`, which this component would otherwise confuse with its own wrapper.
  widgetRef?: React.RefObject<ReCAPTCHA | null>;
}

const noticeClasses =
  'flex items-center justify-center text-sm text-center text-gray-600 dark:text-white/70';

/** Loads the reCAPTCHA widget only once the form scrolls near the viewport. */
const LazyReCAPTCHA = ({
  onChange,
  theme = 'dark',
  widgetRef,
}: LazyReCAPTCHAProps) => {
  const siteKey = config.recaptcha.siteKey;
  const [ReCAPTCHAComponent, setReCAPTCHAComponent] = useState<
    typeof ReCAPTCHA | null
  >(null);
  const { ref: containerRef, isIntersecting } =
    useIntersectionObserver<HTMLDivElement>({
      rootMargin: '100px',
      triggerOnce: true,
      threshold: 0.01,
    });

  useEffect(() => {
    // Without a site key the widget throws on render, and the app-level
    // ErrorBoundary would turn that into a full-page crash, so render the notice.
    if (!siteKey || !isIntersecting || ReCAPTCHAComponent) return;

    void (async () => {
      try {
        const module = await import('react-google-recaptcha');
        setReCAPTCHAComponent(() => module.default);
      } catch (error) {
        console.error('Failed to load reCAPTCHA:', error);
      }
    })();
  }, [siteKey, isIntersecting, ReCAPTCHAComponent]);

  return (
    <div
      ref={containerRef}
      className='flex flex-col items-center justify-center min-h-19.5'
    >
      {!siteKey ? (
        <div className={noticeClasses}>
          Verification is unavailable right now.
        </div>
      ) : ReCAPTCHAComponent ? (
        <ReCAPTCHAComponent
          ref={widgetRef}
          sitekey={siteKey}
          onChange={onChange}
          theme={theme}
        />
      ) : (
        <div className={noticeClasses}>Loading verification...</div>
      )}
    </div>
  );
};

export default LazyReCAPTCHA;
