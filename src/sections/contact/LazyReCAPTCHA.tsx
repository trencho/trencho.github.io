import React, { useEffect, useState } from 'react';
import type ReCAPTCHA from 'react-google-recaptcha';
import { config } from '@/config/environment';
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';

interface LazyReCAPTCHAProps {
  onChange: (value: string | null) => void;
  theme?: 'light' | 'dark';
  // Forwarded to the widget so a caller can `.reset()` it. A reCAPTCHA token is single-use, so a
  // form that stays mounted after a failed submit has to clear the widget as well as its own state
  // -- otherwise the checkbox still reads as solved while the token behind it is spent.
  // Named explicitly rather than taking `ref`, because this component already puts a ref on its
  // own wrapper div and one `ref` meaning two things would be a trap.
  widgetRef?: React.RefObject<ReCAPTCHA | null>;
}

const LazyReCAPTCHA = ({
  onChange,
  theme = 'dark',
  widgetRef,
}: LazyReCAPTCHAProps) => {
  const siteKey = config.recaptcha.siteKey;
  const [isLoaded, setIsLoaded] = useState(false);
  const [ReCAPTCHAComponent, setReCAPTCHAComponent] = useState<
    typeof ReCAPTCHA | null
  >(null);
  const { ref: containerRef, isIntersecting } = useIntersectionObserver({
    rootMargin: '100px',
    triggerOnce: true,
    threshold: 0.01,
  });

  // Fallback notices sit on the contact form (white in light / deep-indigo in
  // dark) — white/50 was invisible in light mode, so key the colour off theme.
  const noticeColor = theme === 'dark' ? 'text-white/60' : 'text-gray-600';

  useEffect(() => {
    // Load reCAPTCHA script only when the widget is configured and in viewport.
    // Without a site key `react-google-recaptcha` throws on render, which the
    // app-level ErrorBoundary would escalate into a full-page crash — so bail
    // early and let the fallback notice render instead.
    if (!siteKey || !isIntersecting || isLoaded) return;

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
  }, [siteKey, isIntersecting, isLoaded]);

  return (
    <div
      ref={containerRef as React.RefObject<HTMLDivElement>}
      className='flex flex-col items-center justify-center min-h-19.5'
    >
      {!siteKey ? (
        <div
          className={`flex items-center justify-center text-sm text-center ${noticeColor}`}
        >
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
        <div
          className={`flex items-center justify-center text-sm ${noticeColor}`}
        >
          Loading verification...
        </div>
      )}
    </div>
  );
};

export default LazyReCAPTCHA;
