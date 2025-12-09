import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { themeColors } from "./themeColors";

export default function ThemeColorUpdater() {
  const location = useLocation();

  useEffect(() => {
    const baseRoute = "/" + location.pathname.split("/")[1]; // handles nested routes
    const color = themeColors[baseRoute] || "#0b0d17";
    const metaTag = document.querySelector('meta[name="theme-color"]');
    if (metaTag) {
      metaTag.setAttribute("content", color);
    }
  }, [location]);

  return null;
}
