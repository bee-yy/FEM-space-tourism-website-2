// // src/ThemeColor.jsx
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export default function ThemeColorUpdater() {
//   const location = useLocation();

//   useEffect(() => {
//     const pageColors = {
//       "/": "#0D0F1C",      
//       "/destination": "#131522", 
//       "/crew": "#181B24", 
//       "/technology": "#12101E" 
//     };

//     const currentColor = pageColors[location.pathname] || "#0B0D17";

//     // iOS Safari workaround: Remove and re-add the meta tag
//     let metaThemeColor = document.querySelector('meta[name="theme-color"]');
//     if (metaThemeColor) {
//       metaThemeColor.remove();
//     }
    
//     // Create fresh meta tag
//     metaThemeColor = document.createElement('meta');
//     metaThemeColor.name = 'theme-color';
//     metaThemeColor.content = currentColor;
//     document.head.appendChild(metaThemeColor);

//     // Optional: Android-specific
//     let msAppMeta = document.querySelector('meta[name="msapplication-navbutton-color"]');
//     if (msAppMeta) {
//       msAppMeta.setAttribute("content", currentColor);
//     }
//   }, [location.pathname]);

//   return null;
// }