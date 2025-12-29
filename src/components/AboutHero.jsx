// import React from 'react';
// import abhero from '../assets/about.png';

// const AboutHero = () => {
//   return (
//     <section className="relative bg-black text-white py-20 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         {/* Small Green Label */}
//         <p className="text-green-400 text-sm font-bold uppercase tracking-widest mb-8">
//           OUR MISSION
//         </p>

//         {/* Main Heading - Two Lines */}
//         <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
//           Transforming the world of <br />
//           <span className="relative inline-block">
//             <span className="relative z-10 px-4">IT security</span>
//             <span className="absolute inset-0 bg-green-400 rounded-3xl transform -skew-x-3"></span>
//           </span>{" "}
//           for good
//         </h1>

//         {/* Description */}
//         <div className="max-w-4xl mx-auto space-y-4 text-lg md:text-xl mb-16">
//           <p className="text-white">
//             We empower the backbone of digital transformation:{" "}
//             <span className="font-bold">businesses worldwide.</span>{" "}
//             <span className="text-gray-400">
//               Operating across multiple countries, we believe every organization
//               deserves enterprise-grade security.
//             </span>
//           </p>
//         </div>

//         {/* Bottom Image - Larger Size */}
//         <div className="mt-20">
//         <img
//   src={abhero}
//   alt="Infrastructure"
//   className="w-[1200px] h-[700px] mx-auto object-cover"
// />

//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutHero;
import React from "react";
import abhero from "../assets/about.png";

const AboutHero = () => {
  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      {/* ====== HERO PART ====== */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Small Cyan Label */}
        <p className="text-[#37B4BE] text-sm font-bold uppercase tracking-widest mb-8">
          OUR MISSION
        </p>

        {/* Main Heading - Two Lines */}
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
          Transforming the world of <br />
          <span className="relative inline-block">
            <span className="relative z-10 px-4">IT security</span>
            <span className="absolute inset-0 bg-[#37B4BE] rounded-3xl transform -skew-x-3" />
          </span>{" "}
          for good
        </h1>

        {/* Description */}
        <div className="max-w-4xl mx-auto space-y-4 text-lg md:text-xl mb-16">
          <p className="text-white">
            We empower the backbone of digital transformation:{" "}
            <span className="font-bold text-[#37B4BE]">businesses worldwide.</span>{" "}
            <span className="text-gray-400">
              Operating across multiple countries, we believe every organization
              deserves enterprise-grade security.
            </span>
          </p>
        </div>

        {/* Bottom Image - Larger Size */}
        <div className="mt-20">
          <img
            src={abhero}
            alt="Infrastructure"
            className="w-full max-w-[1200px] h-auto mx-auto object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* ====== TIMELINE PART ====== */}
      <div className="mt-28 max-w-5xl mx-auto px-4">
        {/* Top heading row */}
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] mb-16 text-left">
          <div>
            {/* cyan label */}
            <p className="text-[#37B4BE] text-sm font-bold uppercase tracking-widest mb-4">
              WHO WE ARE
            </p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Seeing is <br />
              understanding
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-lg md:text-xl text-white font-semibold">
              We design secure, scalable IT foundations that keep your business
              running — always on, always protected.
            </p>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              With over <span className="text-[#37B4BE] font-semibold">14 years of experience</span> under the Manchi Group, Artiflex
              delivers integrated infrastructure, cloud, cybersecurity, and
              managed services tailored to the way modern organizations work.
            </p>
          </div>
        </div>

        {/* Large hero image with cyan glow */}
        <div className="mb-24">
          <div className="relative rounded-[32px] overflow-hidden bg-white/5 border border-[#37B4BE]/20">
            <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(55,180,190,0.25),_transparent_60%)] pointer-events-none" />
            <img
              src="/images/about/hero-team.jpg"
              alt="Artiflex team at work"
              className="w-full h-[260px] md:h-[320px] object-cover rounded-[32px]"
            />
          </div>
        </div>

        {/* vertical timeline */}
        <div className="flex flex-col items-center">
          {/* line - cyan */}
          <div className="h-24 w-px bg-[#37B4BE]/30" />

          {/* block 1 */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-[#37B4BE] text-sm font-bold uppercase tracking-widest mb-4">
              A FOUNDATION OF EXPERTISE
            </p>
            <p className="text-lg md:text-xl text-white font-semibold">
              A cross‑functional team aligned around <span className="text-[#37B4BE]">uptime and security.</span>
            </p>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed mt-3">
              Our architects, engineers, and security specialists work together
              to build environments where performance, resilience, and
              protection are baked in from day one.
            </p>
          </div>

          {/* two mid images with cyan glow */}
          <div className="grid gap-10 md:grid-cols-2 items-center w-full mb-20">
            <div className="flex justify-center md:justify-start">
              <div className="relative rounded-[28px] overflow-hidden bg-white/5 border border-[#37B4BE]/20">
                <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top,_rgba(55,180,190,0.25),_transparent_60%)] pointer-events-none" />
                <img
                  src="/images/about/team-small-1.jpg"
                  alt="Artiflex team"
                  className="w-[260px] h-[180px] md:w-[320px] md:h-[210px] object-cover rounded-[28px]"
                />
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative rounded-[28px] overflow-hidden bg-white/5 border border-[#37B4BE]/20">
                <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top,_rgba(55,180,190,0.25),_transparent_60%)] pointer-events-none" />
                <img
                  src="/images/about/team-small-2.jpg"
                  alt="Artiflex engineers"
                  className="w-[260px] h-[180px] md:w-[320px] md:h-[210px] object-cover rounded-[28px]"
                />
              </div>
            </div>
          </div>

          {/* line - cyan */}
          <div className="h-24 w-px bg-[#37B4BE]/30" />

          {/* mission + vision block */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-[#37B4BE] text-sm font-bold uppercase tracking-widest mb-4">
              MISSION &amp; VISION
            </p>
            <p className="text-lg md:text-xl text-white font-semibold">
              A clear direction that keeps every solution focused on <span className="text-[#37B4BE]">security and growth.</span>
            </p>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed mt-4">
              <span className="font-bold text-[#37B4BE]">Vision.</span> To be the
              most trusted technology partner empowering organizations to thrive
              securely in the digital era through innovative, resilient, and
              sustainable IT.
            </p>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed mt-3">
              <span className="font-bold text-[#37B4BE]">Mission.</span> To deliver
              end‑to‑end IT solutions across cybersecurity, infrastructure,
              cloud, and managed services—so our clients can scale confidently
              while we protect uptime, performance, and data.
            </p>
          </div>

          {/* bottom image with cyan glow */}
          <div className="mb-16 w-full flex justify-center">
            <div className="relative rounded-[28px] overflow-hidden bg-white/5 border border-[#37B4BE]/20">
              <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top,_rgba(55,180,190,0.25),_transparent_60%)] pointer-events-none" />
              <img
                src="/images/about/team-bottom.jpg"
                alt="Artiflex team group photo"
                className="w-[260px] h-[190px] md:w-[360px] md:h-[230px] object-cover rounded-[28px]"
              />
            </div>
          </div>

          {/* line - cyan */}
          <div className="h-16 w-px bg-[#37B4BE]/30" />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
