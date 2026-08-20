import { useEffect, useState } from "react";
import AccessibilityContext from "./accessibilityContext";

const STORAGE_KEY = "david-website-a11y";

const defaultSettings = {
  fontScale: 0,
  highContrast: false,
  highlightLinks: false,
  grayscale: false,
  readableFont: false,
  stopAnimations: false,
  bigCursor: false,
};

function loadSettings() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? { ...defaultSettings, ...JSON.parse(stored) } : defaultSettings;
  } catch {
    return defaultSettings;
  }
}

function applySettings({
  fontScale,
  highContrast,
  highlightLinks,
  grayscale,
  readableFont,
  stopAnimations,
  bigCursor,
}) {
  const root = document.documentElement;
  root.classList.remove("a11y-text-lg", "a11y-text-xl");
  root.classList.toggle("a11y-high-contrast", highContrast);
  root.classList.toggle("a11y-highlight-links", highlightLinks);
  root.classList.toggle("a11y-grayscale", grayscale);
  root.classList.toggle("a11y-readable-font", readableFont);
  root.classList.toggle("a11y-stop-animations", stopAnimations);
  root.classList.toggle("a11y-big-cursor", bigCursor);

  if (fontScale === 1) root.classList.add("a11y-text-lg");
  if (fontScale >= 2) root.classList.add("a11y-text-xl");
}

export function AccessibilityProvider({ children }) {
  const [settings, setSettings] = useState(() => {
    const initial = loadSettings();
    applySettings(initial);
    return initial;
  });

  useEffect(() => {
    applySettings(settings);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

  const increaseText = () =>
    setSettings((current) => ({
      ...current,
      fontScale: Math.min(current.fontScale + 1, 2),
    }));

  const decreaseText = () =>
    setSettings((current) => ({
      ...current,
      fontScale: Math.max(current.fontScale - 1, 0),
    }));

  const toggleHighContrast = () =>
    setSettings((current) => ({
      ...current,
      highContrast: !current.highContrast,
    }));

  const toggleHighlightLinks = () =>
    setSettings((current) => ({
      ...current,
      highlightLinks: !current.highlightLinks,
    }));

  const toggleGrayscale = () =>
    setSettings((current) => ({
      ...current,
      grayscale: !current.grayscale,
    }));

  const toggleReadableFont = () =>
    setSettings((current) => ({
      ...current,
      readableFont: !current.readableFont,
    }));

  const toggleStopAnimations = () =>
    setSettings((current) => ({
      ...current,
      stopAnimations: !current.stopAnimations,
    }));

  const toggleBigCursor = () =>
    setSettings((current) => ({
      ...current,
      bigCursor: !current.bigCursor,
    }));

  const resetSettings = () => setSettings(defaultSettings);

  return (
    <AccessibilityContext.Provider
      value={{
        settings,
        increaseText,
        decreaseText,
        toggleHighContrast,
        toggleHighlightLinks,
        toggleGrayscale,
        toggleReadableFont,
        toggleStopAnimations,
        toggleBigCursor,
        resetSettings,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}
