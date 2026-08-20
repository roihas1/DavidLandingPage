import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import siteContent from "../data/siteContent";
import Logo from "./Logo";
import { PhoneIcon } from "./ServiceIcon";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef(null);
  const mobileNavRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    mobileNavRef.current?.querySelector("a")?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      role="banner"
      className={`safe-top sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 shadow-md backdrop-blur-sm"
          : "bg-navy"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6 md:py-4">
        <Link
          to="/#hero"
          className="flex min-w-0 items-center gap-2 text-base font-bold text-white sm:gap-3 sm:text-lg md:text-xl"
        >
          <Logo className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
          <span className="truncate sm:max-w-none">{siteContent.businessName}</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="ניווט ראשי">
          {siteContent.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-amber"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 lg:gap-3">
          <a
            href={`tel:${siteContent.phoneLink}`}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg bg-amber px-3 text-navy transition-all duration-200 hover:bg-amber-dark lg:gap-2 lg:px-4 lg:py-2"
            aria-label={`התקשר ל-${siteContent.phone}`}
          >
            <PhoneIcon className="h-5 w-5" />
            <span className="hidden font-semibold lg:inline">{siteContent.phone}</span>
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-white lg:hidden"
            aria-label={menuOpen ? "סגור תפריט" : "פתח תפריט"}
            aria-controls="mobile-nav"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          ref={mobileNavRef}
          id="mobile-nav"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-navy px-4 py-4 lg:hidden"
          aria-label="ניווט נייד"
        >
          <ul className="flex flex-col gap-1">
            {siteContent.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex min-h-11 items-center py-2 text-base text-white/90 hover:text-amber"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={siteContent.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 w-full items-center justify-center rounded-lg bg-whatsapp px-4 py-3 text-base font-semibold text-navy transition-colors hover:bg-whatsapp-dark"
                aria-label="שליחת הודעה בוואטסאפ, נפתח בחלון חדש"
                onClick={closeMenu}
              >
                שליחת הודעה בוואטסאפ
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
