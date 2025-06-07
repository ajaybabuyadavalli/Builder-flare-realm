// Focus management utilities for accessibility

// Focus the first input with an error
export const focusFirstError = (formRef: HTMLFormElement | null) => {
  if (!formRef) return;

  const firstErrorInput = formRef.querySelector(
    '[aria-invalid="true"]',
  ) as HTMLElement;
  if (firstErrorInput) {
    firstErrorInput.focus();
    return;
  }

  // Fallback to first input if no error-specific input found
  const firstInput = formRef.querySelector(
    "input, textarea, select",
  ) as HTMLElement;
  if (firstInput) {
    firstInput.focus();
  }
};

// Focus trap for modals and dialogs
export class FocusTrap {
  private element: HTMLElement;
  private focusableElements: HTMLElement[];
  private firstFocusable: HTMLElement | null;
  private lastFocusable: HTMLElement | null;
  private previousActiveElement: Element | null;

  constructor(element: HTMLElement) {
    this.element = element;
    this.previousActiveElement = document.activeElement;
    this.updateFocusableElements();
    this.firstFocusable = this.focusableElements[0] || null;
    this.lastFocusable =
      this.focusableElements[this.focusableElements.length - 1] || null;
  }

  private updateFocusableElements() {
    const focusableSelectors = [
      "button:not([disabled])",
      "input:not([disabled])",
      "textarea:not([disabled])",
      "select:not([disabled])",
      "a[href]",
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]',
    ].join(",");

    this.focusableElements = Array.from(
      this.element.querySelectorAll(focusableSelectors),
    ) as HTMLElement[];
  }

  activate() {
    this.element.addEventListener("keydown", this.handleKeyDown);
    if (this.firstFocusable) {
      this.firstFocusable.focus();
    }
  }

  deactivate() {
    this.element.removeEventListener("keydown", this.handleKeyDown);
    if (this.previousActiveElement instanceof HTMLElement) {
      this.previousActiveElement.focus();
    }
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key !== "Tab") return;

    if (this.focusableElements.length === 0) {
      event.preventDefault();
      return;
    }

    if (this.focusableElements.length === 1) {
      event.preventDefault();
      this.firstFocusable?.focus();
      return;
    }

    if (event.shiftKey) {
      if (document.activeElement === this.firstFocusable) {
        event.preventDefault();
        this.lastFocusable?.focus();
      }
    } else {
      if (document.activeElement === this.lastFocusable) {
        event.preventDefault();
        this.firstFocusable?.focus();
      }
    }
  };
}

// Skip to main content for screen readers
export const addSkipLink = () => {
  const skipLink = document.createElement("a");
  skipLink.href = "#main-content";
  skipLink.textContent = "Skip to main content";
  skipLink.className =
    "sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-primary text-primary-foreground p-2 z-50";

  skipLink.addEventListener("click", (e) => {
    e.preventDefault();
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView();
    }
  });

  document.body.insertBefore(skipLink, document.body.firstChild);
};

// Announce content changes to screen readers
export const announceToScreenReader = (
  message: string,
  priority: "polite" | "assertive" = "polite",
) => {
  const announcement = document.createElement("div");
  announcement.setAttribute("aria-live", priority);
  announcement.setAttribute("aria-atomic", "true");
  announcement.className = "sr-only";
  announcement.textContent = message;

  document.body.appendChild(announcement);

  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

// Manage focus for route changes
export const manageFocusOnRouteChange = (routeName: string) => {
  // Announce route change
  announceToScreenReader(`Navigated to ${routeName}`);

  // Focus the main heading or skip link target
  const mainHeading = document.querySelector("h1");
  const mainContent = document.getElementById("main-content");

  if (mainHeading) {
    (mainHeading as HTMLElement).focus();
  } else if (mainContent) {
    mainContent.focus();
  }
};

// Restore focus after modal closes
export const createFocusManager = () => {
  let previouslyFocusedElement: Element | null = null;

  return {
    save: () => {
      previouslyFocusedElement = document.activeElement;
    },
    restore: () => {
      if (previouslyFocusedElement instanceof HTMLElement) {
        previouslyFocusedElement.focus();
      }
    },
  };
};
