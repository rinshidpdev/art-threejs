import React, { useEffect } from "react";

const ServicesHero = () => {
  useEffect(() => {
    // Load Unicorn Studio script
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
    } else if (
      window.UnicornStudio.init &&
      !window.UnicornStudio.isInitialized
    ) {
      window.UnicornStudio.init();
      window.UnicornStudio.isInitialized = true;
    }
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0a0e1f] via-[#0d1127] to-[#121830]">
      {/* Unicorn Studio Background - full screen */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          data-us-project="qIhe5VlQO97h5ehzZc9r"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 lg:px-12">
        <div className="max-w-2xl">
          {/* Heading */}
          <h1 className="text-6xl font-black leading-tight text-white md:text-7xl lg:text-8xl">
            Our Services
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg leading-relaxed text-slate-300 md:text-xl">
            Complete IT solutions for cybersecurity, infrastructure, cloud, and managed services.
          </p>

          {/* CTA Button */}
          <button className="group mt-10 flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-slate-900 shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]">
            <span>SEE IN ACTION</span>
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
