import React from "react";
import "./ClientLogos.css";
const logos = [
  { id: 1, src: "/logos/logo1.svg", alt: "Client 1" },
  { id: 2, src: "/logos/logo2.svg", alt: "Client 2" },
  { id: 3, src: "/logos/logo3.svg", alt: "Client 3" },
  { id: 4, src: "/logos/logo4.svg", alt: "Client 4" },
  { id: 5, src: "/logos/logo5.svg", alt: "Client 5" },
];

const ClientLogos = () => {
  // duplicate logos for smooth infinite loop
  const loopLogos = [...logos, ...logos];

  return (
    <section className="w-full bg-[#00000] py-8">
      <div className="mx-auto max-w-6xl px-4 flex items-center gap-10">
        {/* left text like screenshot */}
        <p className="text-sm md:text-base text-slate-400 whitespace-nowrap">
          Trusted by leading companies in tech, <br className="hidden md:block" />
          finance and e‑commerce
        </p>

        {/* scrolling logos */}
        <div className="relative flex-1 overflow-hidden">
          <div className="flex animate-logo-marquee">
            {loopLogos.map((logo) => (
              <div
                key={logo.id + "-" + Math.random()}
                className="flex items-center justify-center mx-10 opacity-60 hover:opacity-100 transition-opacity"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 w-auto md:h-12"
                />
              </div>
            ))}
          </div>

          {/* gradient fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#000000] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#000000 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
