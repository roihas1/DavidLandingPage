import { Link } from "react-router-dom";
import AccessibilityStatement from "../components/AccessibilityStatement";
import AccessibilityToolbar from "../components/AccessibilityToolbar";
import SkipLink from "../components/SkipLink";
import Logo from "../components/Logo";
import { Footer } from "../components/Sections";
import siteContent from "../data/siteContent";

export default function AccessibilityPage() {
  return (
    <>
      <SkipLink />
      <header role="banner" className="safe-top bg-navy">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6 md:py-4">
          <Link
            to="/"
            className="flex min-w-0 items-center gap-2 text-base font-bold text-white sm:gap-3 sm:text-lg md:text-xl"
          >
            <Logo className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
            <span className="truncate sm:max-w-none">{siteContent.businessName}</span>
          </Link>
          <Link
            to="/"
            className="inline-flex min-h-11 items-center rounded-lg bg-amber px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-amber-dark"
          >
            חזרה לדף הבית
          </Link>
        </div>
      </header>
      <main id="main-content" className="pb-4" tabIndex={-1}>
        <AccessibilityStatement pageTitle />
      </main>
      <Footer />
      <AccessibilityToolbar />
    </>
  );
}
