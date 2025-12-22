import React, { useEffect } from "react";

export default function UniBackground() {
  useEffect(() => {
    // Load Unicorn Studio script if not already loaded
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.3/dist/unicornStudio.umd.js";
      script.onload = () => {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      document.head.appendChild(script);
    } else if (window.UnicornStudio.init && !window.UnicornStudio.isInitialized) {
      window.UnicornStudio.init();
      window.UnicornStudio.isInitialized = true;
    }
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        data-us-project="qIhe5VlQO97h5ehzZc9r"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "1440px",
          height: "900px",
          opacity: 0.6, // adjust so it doesn't overpower content
        }}
      />
    </div>
  );
}
