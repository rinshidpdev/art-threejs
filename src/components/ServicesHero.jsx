// import React, { useEffect } from "react";

// const ServicesHero = () => {
//   useEffect(() => {
//     // Load Unicorn Studio script
//     if (!window.UnicornStudio) {
//       window.UnicornStudio = { isInitialized: false };
//       const script = document.createElement("script");
//       script.src =
//         "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.3/dist/unicornStudio.umd.js";
//       script.onload = () => {
//         if (!window.UnicornStudio.isInitialized) {
//           window.UnicornStudio.init();
//           window.UnicornStudio.isInitialized = true;
//         }
//       };
//       document.head.appendChild(script);
//     } else if (
//       window.UnicornStudio.init &&
//       !window.UnicornStudio.isInitialized
//     ) {
//       window.UnicornStudio.init();
//       window.UnicornStudio.isInitialized = true;
//     }
//   }, []);

//   return (
//     <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0a0e1f] via-[#0d1127] to-[#121830]">
//       {/* Unicorn Studio Background - full screen */}
//       <div className="pointer-events-none absolute inset-0 z-0">
//         <div
//           data-us-project="qIhe5VlQO97h5ehzZc9r"
//           style={{
//             width: "100%",
//             height: "100%",
//           }}
//         />
//       </div>

//       <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 lg:px-12">
//         <div className="max-w-2xl">
//           {/* Heading */}
//           <h1 className="text-6xl font-black leading-tight text-white md:text-7xl lg:text-8xl">
//             Our Services
//           </h1>

//           {/* Subtitle */}
//           <p className="mt-6 text-lg leading-relaxed text-slate-300 md:text-xl">
//             Complete IT solutions for cybersecurity, infrastructure, cloud, and managed services.
//           </p>

//           {/* CTA Button */}
//           <button className="group mt-10 flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-slate-900 shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]">
//             <span>SEE IN ACTION</span>
//             <svg
//               className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M17 8l4 4m0 0l-4 4m4-4H3"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesHero;

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
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0a0e1f] via-[#0d1127] to-[#0a1628]">
      {/* Cyan overlay gradient for Artiflex branding */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_30%_50%,_rgba(55,180,190,0.15),_transparent_50%)]" />
      
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
          {/* Small Label */}
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#2563eb]">
            COMPLETE IT SOLUTIONS
          </p>

          {/* Heading with cyan accent */}
          <h1 className="text-6xl font-black leading-tight text-white md:text-7xl lg:text-8xl">
            Our{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#2563eb]">Services</span>
              <span className="absolute bottom-2 left-0 h-3 w-full bg-[#37B4BE]/30 blur-sm"></span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg leading-relaxed text-slate-300 md:text-xl">
            Complete IT solutions for{" "}
            <span className="font-semibold text-[#2563eb]">cybersecurity</span>,{" "}
            <span className="font-semibold text-[#2563eb]">infrastructure</span>,{" "}
            <span className="font-semibold text-[#2563eb]">cloud</span>, and{" "}
            <span className="font-semibold text-[#2563eb]">managed services</span>.
          </p>

          {/* CTA Button with cyan accent */}
          <button className="group mt-10 flex items-center gap-3 rounded-full bg-[#2563eb] px-8 py-4 text-base font-bold text-black shadow-[0_0_40px_rgba(55,180,190,0.4)] transition-all duration-300 hover:scale-105 hover:bg-[#2da3b3] hover:shadow-[0_0_60px_rgba(55,180,190,0.6)]">
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

          {/* Feature badges */}
          <div className="mt-12 flex flex-wrap gap-3">
            <span className="rounded-full border border-[#37B4BE]/30 bg-[#37B4BE]/10 px-4 py-2 text-sm font-semibold text-[#2563eb]">
              14+ Years Experience
            </span>
            <span className="rounded-full border border-[#37B4BE]/30 bg-[#37B4BE]/10 px-4 py-2 text-sm font-semibold text-[#2563eb]">
              Global Reach
            </span>
            <span className="rounded-full border border-[#37B4BE]/30 bg-[#37B4BE]/10 px-4 py-2 text-sm font-semibold text-[#2563eb]">
              24/7 Support
            </span>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#37B4BE]/50 to-transparent"></div>
    </section>
  );
};

export default ServicesHero;
