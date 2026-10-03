import { useEffect, useState } from 'react';
import { useReducedMotion } from 'motion/react';

/**
 * Types `text` out one character at a time. It lives in its own component so
 * each keystroke re-renders this span alone, not the whole Hero.
 *
 * The prerender and visitors who prefer reduced motion get the full text at once.
 */
const Typewriter = ({ text }: { text: string }) => {
  const prefersReducedMotion = useReducedMotion();
  const [typed, setTyped] = useState('');

  useEffect(() => {
    if (prefersReducedMotion) return;

    let index = 0;
    let timeoutId: ReturnType<typeof setTimeout>;
    const typeNext = () => {
      if (index <= text.length) {
        setTyped(text.slice(0, index));
        index++;
        timeoutId = setTimeout(typeNext, 100);
      }
    };
    typeNext();
    return () => clearTimeout(timeoutId);
  }, [prefersReducedMotion, text]);

  return typeof window === 'undefined' || prefersReducedMotion ? text : typed;
};

export default Typewriter;
