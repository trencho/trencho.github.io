import { MouseEvent } from "react";

export const scrollToElement = (e: MouseEvent, elementId: string): void => {
    e.preventDefault();
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
        console.warn("Element with ID '${elementId}' not found.");
    }
};
