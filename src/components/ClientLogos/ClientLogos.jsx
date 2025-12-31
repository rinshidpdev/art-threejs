import React from "react";
import "./ClientLogos.css";

const logos = [
  { id: 1, src: "/cli1.png", alt: "Client 1" },
  { id: 2, src: "/cli2.png", alt: "Client 2" },
  { id: 3, src: "/cli3.png", alt: "Client 3" },
  { id: 4, src: "/cli4.png", alt: "Client 4" },
  { id: 5, src: "/cli5.png", alt: "Client 5" },
  { id: 6, src: "/cli6.png", alt: "Client 6" },
  { id: 7, src: "/cli7.png", alt: "Client 7" },
  { id: 8, src: "/cli8.png", alt: "Client 8" },
];

const ClientLogos = () => {
  // duplicate logos for smooth infinite loop
  const loopLogos = [...logos, ...logos, ...logos];

  return (
    <section className="w-full bg-[#000000] py-8 md:py-12" data-aos="fade-left">
      <div className="mx-auto max-w-6xl px-4">
        {/* Container with flex-col on mobile, flex-row on desktop */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          {/* Left text */}
          <p className="text-sm md:text-base text-slate-400 text-center md:text-left md:whitespace-nowrap">
            Trusted by leading companies in tech,<br className="hidden md:block" />
            finance and e‑commerce
          </p>

          {/* Scrolling logos */}
          <div className="relative flex-1 w-full overflow-hidden">
            <div className="flex animate-logo-marquee">
              {loopLogos.map((logo, index) => (
                <div
                  key={logo.id + "-" + index}
                  className="flex items-center justify-center mx-6 md:mx-10 opacity-60 hover:opacity-100 transition-opacity flex-shrink-0"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 w-auto md:h-10 lg:h-12"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Gradient fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-16 bg-gradient-to-r from-[#000000] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-16 bg-gradient-to-l from-[#000000] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
