// AboutTimeline.jsx
import React from "react";

const AboutTimeline = () => {
  return (
    <section className="bg-[#f4f5f5] text-[#111111] py-24">
      <div className="max-w-5xl mx-auto px-4">
        {/* Top heading row */}
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              Seeing is <br />
              understanding
            </h2>
          </div>

          <div className="text-sm md:text-[13px] leading-relaxed text-neutral-600 space-y-3">
            <p>
              With over 14 years of industry experience, Artflex is a trusted IT
              solutions provider under the Manchi Group, delivering secure and
              scalable technology for modern businesses. [file:157]
            </p>
            <p>
              Our mission is to provide end‑to‑end cybersecurity, infrastructure,
              cloud, and managed services that help organizations operate
              efficiently, scale confidently, and stay protected in an evolving
              digital landscape. [file:157]
            </p>
          </div>
        </div>

        {/* Large hero image with green glow */}
        <div className="mb-24">
          <div className="relative rounded-[32px] overflow-hidden bg-black/10">
            <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(74,222,128,0.3),_transparent_60%)] pointer-events-none" />
            <img
              src="/images/about/hero-team.jpg" // your main image
              alt="Artflex team at work"
              className="w-full h-[260px] md:h-[320px] object-cover rounded-[32px]"
            />
          </div>
        </div>

        {/* main vertical timeline */}
        <div className="flex flex-col items-center">
          {/* vertical line segment */}
          <div className="h-24 w-px bg-neutral-300" />

          {/* block 1 text */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-[10px] uppercase tracking-[0.22em] text-neutral-500 mb-3">
              A foundation of expertise
            </p>
            <p className="text-base leading-relaxed text-neutral-700">
              Our team blends deep expertise across infrastructure, cloud,
              cybersecurity, and managed services—working together to design
              resilient IT foundations that keep businesses online, secure, and
              ready for growth. 
            </p>
          </div>

          {/* two mid images */}
          <div className="grid gap-10 md:grid-cols-2 items-center w-full mb-20">
            <div className="flex justify-center md:justify-start">
              <div className="relative rounded-[28px] overflow-hidden bg-black/10">
                <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.28),_transparent_60%)] pointer-events-none" />
                <img
                  src="/images/about/team-small-1.jpg"
                  alt="Artflex team"
                  className="w-[260px] h-[180px] md:w-[320px] md:h-[210px] object-cover rounded-[28px]"
                />
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative rounded-[28px] overflow-hidden bg-black/10">
                <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.28),_transparent_60%)] pointer-events-none" />
                <img
                  src="/images/about/team-small-2.jpg"
                  alt="Artflex engineers"
                  className="w-[260px] h-[180px] md:w-[320px] md:h-[210px] object-cover rounded-[28px]"
                />
              </div>
            </div>
          </div>

          {/* vertical line segment */}
          <div className="h-24 w-px bg-neutral-300" />

          {/* mission / vision block */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-[10px] uppercase tracking-[0.22em] text-neutral-500 mb-3">
              Transforming the landscape
            </p>

            <h3 className="text-base font-semibold mb-4 text-neutral-800">
              Vision &amp; Mission
            </h3>

            <div className="space-y-4 text-neutral-700 text-base leading-relaxed">
              <p>
                <span className="font-semibold">Vision.</span> To be the most
                trusted technology partner empowering organizations to thrive
                securely in the digital era through innovative, resilient, and
                sustainable IT. 
              </p>
              <p>
                <span className="font-semibold">Mission.</span> To deliver
                intelligent, end‑to‑end IT solutions that protect, optimize, and
                modernize infrastructure—so businesses can focus on growth while
                we handle uptime, security, and performance. 
              </p>
            </div>
          </div>

          {/* bottom image */}
          <div className="mb-16 w-full flex justify-center">
            <div className="relative rounded-[28px] overflow-hidden bg-black/10">
              <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.28),_transparent_60%)] pointer-events-none" />
              <img
                src="/images/about/team-bottom.jpg"
                alt="Artflex team group photo"
                className="w-[260px] h-[190px] md:w-[360px] md:h-[230px] object-cover rounded-[28px]"
              />
            </div>
          </div>

          {/* final vertical line (short) */}
          <div className="h-16 w-px bg-neutral-300" />
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
