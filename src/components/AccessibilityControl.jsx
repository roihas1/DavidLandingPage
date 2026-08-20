import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useAccessibility from "../hooks/useAccessibility";
import AccessibilityIcon from "./AccessibilityIcon";

const menuItemClass =
  "flex min-h-11 w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-navy transition-colors hover:border-amber hover:bg-offwhite";

export default function AccessibilityControl() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const wrapperRef = useRef(null);
  const buttonRef = useRef(null);
  const {
    settings,
    increaseText,
    decreaseText,
    toggleHighContrast,
    toggleHighlightLinks,
    resetSettings,
  } = useAccessibility();

  useEffect(() => {
    if (!open) return;

    const panel = wrapperRef.current?.querySelector('[role="dialog"]');
    const focusable = panel?.querySelectorAll("button, a[href]");
    focusable?.[0]?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const handlePointerDown = (event) => {
      if (!wrapperRef.current?.contains(event.target)) setOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  return (
    <div ref={wrapperRef} className="relative">
      {open && (
        <div
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${panelId}-title`}
          className="absolute bottom-full left-0 mb-3 max-h-[70svh] w-72 max-w-[calc(100vw-2rem)] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl"
        >
          <h2 id={`${panelId}-title`} className="mb-3 text-base font-bold text-navy">
            הגדרות נגישות
          </h2>
          <div className="space-y-2">
            <button type="button" className={menuItemClass} onClick={increaseText}>
              <span>הגדלת טקסט</span>
              <span aria-hidden="true">A+</span>
            </button>
            <button type="button" className={menuItemClass} onClick={decreaseText}>
              <span>הקטנת טקסט</span>
              <span aria-hidden="true">A−</span>
            </button>
            <button
              type="button"
              className={menuItemClass}
              onClick={toggleHighContrast}
              aria-pressed={settings.highContrast}
            >
              <span>ניגודיות גבוהה</span>
              <span aria-hidden="true">{settings.highContrast ? "פעיל" : "כבוי"}</span>
            </button>
            <button
              type="button"
              className={menuItemClass}
              onClick={toggleHighlightLinks}
              aria-pressed={settings.highlightLinks}
            >
              <span>הדגשת קישורים</span>
              <span aria-hidden="true">{settings.highlightLinks ? "פעיל" : "כבוי"}</span>
            </button>
            <button type="button" className={menuItemClass} onClick={resetSettings}>
              <span>איפוס הגדרות</span>
            </button>
            <Link
              to="/accessibility"
              className={menuItemClass}
              onClick={() => setOpen(false)}
            >
              <span>הצהרת נגישות</span>
              <span aria-hidden="true">←</span>
            </Link>
          </div>
        </div>
      )}

      <button
        ref={buttonRef}
        type="button"
        className="accessibility-toggle flex h-12 min-h-12 min-w-12 items-center justify-center rounded-full bg-[#0066cc] text-white shadow-lg transition-transform hover:bg-[#005bb5] active:scale-95 sm:w-auto sm:gap-2 sm:px-5"
        aria-label={open ? "סגירת תפריט נגישות" : "פתיחת תפריט נגישות"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <AccessibilityIcon className="text-2xl leading-none" />
        <span className="hidden font-semibold sm:inline">נגישות</span>
      </button>
    </div>
  );
}
