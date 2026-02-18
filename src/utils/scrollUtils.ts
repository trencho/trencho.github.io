import { MouseEvent } from 'react';

export const scrollToElement = (
  e: MouseEvent<HTMLAnchorElement>,
  elementId: string,
): void => {
  e.preventDefault();
  const element: HTMLElement | null = document.getElementById(elementId);
  if (element) {
    const yOffset = -50;
    const yPosition =
      element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: 'smooth' });
  }
};
