import { useEffect, useState } from 'react';

/**
 * Scroll-spy: returns the id of the section currently closest to the middle of
 * the viewport. SSR-safe — the observer only runs in a browser effect, so the
 * server render simply falls back to the first section.
 */
export const useActiveSection = (sectionIds: readonly string[]): string => {
  const [activeSection, setActiveSection] = useState<string>(
    sectionIds[0] ?? '',
  );

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      // A detection band around the vertical centre of the viewport so the
      // active section is the one the reader is actually looking at.
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
};
