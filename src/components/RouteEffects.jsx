import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RouteEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    const isAccessibilityPage = pathname === "/accessibility";
    document.title = isAccessibilityPage
      ? "הצהרת נגישות | דויד שלום פרץ"
      : "דויד שלום פרץ | הנדסאי חשמל בעל תעודה";

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
