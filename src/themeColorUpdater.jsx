import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { themeColors } from "./themeColors";

function ThemeColorUpdater() {
  const location = useLocation();

  useEffect(() => {
    const color = themeColors[location.pathname] || "#ffffff"; // fallback
    const metaTag = document.querySelector('meta[name="theme-color"]');
    if (metaTag) {
      metaTag.setAttribute("content", color);
    }
  }, [location]);

  return null; // nothing renders
}

export default ThemeColorUpdater;
