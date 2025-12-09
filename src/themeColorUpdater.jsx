// // File: src/ThemeColor.jsx   (or .tsx if you're using TypeScript)

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ThemeColor() {
  const location = useLocation();

  useEffect(() => {
    // Change this object if you ever add a page with a different background color
    const pageColors = {
      "/": "#0B0D17",           // Home
      "/destination": "#0B0D17",
      "/crew": "#0B0D17",
      "/technology": "#0B0D17",
    };

    const currentColor = pageColors[location.pathname] || "#0B0D17";

    // Update the main theme-color meta tag
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", currentColor);

    // Optional: also update Android-specific one
    document
      .querySelector('meta[name="msapplication-navbutton-color"]')
      ?.setAttribute("content", currentColor);
  }, [location.pathname]); // Runs every time the page/route changes

  // This component doesn't show anything on screen
  return null;
}