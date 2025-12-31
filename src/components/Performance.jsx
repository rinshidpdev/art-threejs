// import { useRef } from "react";
// import React from "react";
// import { useGSAP } from "@gsap/react";
// import { gsap } from "gsap";
// import { performanceImages, performanceImgPositions } from "../constants/index.js";
// import { useMediaQuery } from "react-responsive";

// const Performance = () => {
//   const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
//   const sectionRef = useRef(null);

//   useGSAP(
//     () => {
//       const sectionEl = sectionRef.current;
//       if (!sectionEl) return;

//       // Text Animation
//       gsap.fromTo(
//         ".content p",
//         { opacity: 0, y: 10 },
//         {
//           opacity: 1,
//           y: 0,
//           ease: "power1.out",
//           scrollTrigger: {
//             trigger: ".content p",
//             start: "top bottom",
//             end: "top center",
//             scrub: true,
//             invalidateOnRefresh: true,
//           },
//         }
//       );

//       if (isMobile) return;

//       // Image Positioning Timeline
//       const tl = gsap.timeline({
//         defaults: { duration: 2, ease: "power1.inOut", overwrite: "auto" },
//         scrollTrigger: {
//           trigger: sectionEl,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: 1,
//           invalidateOnRefresh: true,
//         },
//       });

//       // Position Each Performance Image
//       performanceImgPositions.forEach((item) => {
//         if (item.id === "p5") return;

//         const selector = `.${item.id}`;
//         const vars = {};

//         if (typeof item.left === "number") vars.left = `${item.left}%`;
//         if (typeof item.right === "number") vars.right = `${item.right}%`;
//         if (typeof item.bottom === "number") vars.bottom = `${item.bottom}%`;

//         if (item.transform) vars.transform = item.transform;

//         tl.to(selector, vars, 0);
//       });
//     },
//     { scope: sectionRef, dependencies: [isMobile] }
//   );

//   return (
//     <section
//       id="performance"
//       ref={sectionRef}
//       className="relative py-20 lg:py-28"
//     >
//       <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//         Advanced Threat Intelligence Engine
//       </h2>

//       <div className="wrapper relative">
//         {performanceImages.map((item, index) => (
//           <img
//             key={index}
//             src={item.src}
//             className={item.id}
//             alt={item.alt || `Performance Image #${index + 1}`}
//           />
//         ))}
//       </div>

//       {/* Main description */}
//       <div className="content mt-12">
//         <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-medium max-w-4xl mx-auto text-center">
//           Deploy{" "}
//           <span className="text-white font-semibold">
//             AI-powered threat detection with real-time response
//           </span>{" "}
//           across your entire infrastructure. Artiflex identifies, analyzes, and
//           neutralizes cyber threats before they impact your business with{" "}
//           <span className="text-blue-400 font-semibold">
//             24/7 automated monitoring and incident response
//           </span>{" "}
//           designed for modern enterprises. With integrated{" "}
//           <span className="text-purple-400 font-semibold">
//             MDR, EDR, and XDR capabilities
//           </span>
//           , we deliver enterprise-grade protection that scales with your growth.
//         </p>
//       </div>

//       {/* Why choose us */}
//       <div className="mt-16 max-w-5xl mx-auto">
//         <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
//           Why choose <span className="text-blue-400">Artiflex</span> for
//           security?
//         </h3>

//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col gap-3">
//             <h4 className="text-lg font-semibold text-white">
//               24/7 Managed Protection
//             </h4>
//             <p className="text-sm text-gray-300 leading-relaxed">
//               Always-on monitoring, alerting, and response from our Security
//               Operations Center so your business stays protected day and night.
//             </p>
//           </div>

//           <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col gap-3">
//             <h4 className="text-lg font-semibold text-white">
//               Certified Security Experts
//             </h4>
//             <p className="text-sm text-gray-300 leading-relaxed">
//               A team of certified cybersecurity specialists and ethical hackers
//               helping you stay ahead of evolving threats and compliance demands.
//             </p>
//           </div>

//           <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col gap-3">
//             <h4 className="text-lg font-semibold text-white">
//               Scalable Enterprise Platform
//             </h4>
//             <p className="text-sm text-gray-300 leading-relaxed">
//               A flexible security stack that grows with your business,
//               integrating seamlessly across endpoints, network, cloud, and
//               identity.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Performance;


// import { useRef } from "react";
// import React from "react";
// import { useGSAP } from "@gsap/react";
// import { gsap } from "gsap";
// import { performanceImages, performanceImgPositions } from "../constants/index.js";
// import { useMediaQuery } from "react-responsive";

// const Performance = () => {
//   const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
//   const sectionRef = useRef(null);

//   useGSAP(
//     () => {
//       const sectionEl = sectionRef.current;
//       if (!sectionEl) return;

//       // Text Animation
//       gsap.fromTo(
//         ".content p",
//         { opacity: 0, y: 10 },
//         {
//           opacity: 1,
//           y: 0,
//           ease: "power1.out",
//           scrollTrigger: {
//             trigger: ".content p",
//             start: "top bottom",
//             end: "top center",
//             scrub: true,
//             invalidateOnRefresh: true,
//           },
//         }
//       );

//       if (isMobile) return;

//       // Image Positioning Timeline
//       const tl = gsap.timeline({
//         defaults: { duration: 2, ease: "power1.inOut", overwrite: "auto" },
//         scrollTrigger: {
//           trigger: sectionEl,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: 1,
//           invalidateOnRefresh: true,
//         },
//       });

//       // Position Each Performance Image
//       performanceImgPositions.forEach((item) => {
//         if (item.id === "p5") return;

//         const selector = `.${item.id}`;
//         const vars = {};

//         if (typeof item.left === "number") vars.left = `${item.left}%`;
//         if (typeof item.right === "number") vars.right = `${item.right}%`;
//         if (typeof item.bottom === "number") vars.bottom = `${item.bottom}%`;

//         if (item.transform) vars.transform = item.transform;

//         tl.to(selector, vars, 0);
//       });
//     },
//     { scope: sectionRef, dependencies: [isMobile] }
//   );

//   return (
//     <section
//       id="performance"
//       ref={sectionRef}
//       className="relative py-20 lg:py-28"
//     >
//       <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//         Advanced Threat Intelligence Engine
//       </h2>

//       <div className="wrapper relative">
//         {performanceImages.map((item, index) => (
//           <img
//             key={index}
//             src={item.src}
//             className={item.id}
//             alt={item.alt || `Performance Image #${index + 1}`}
//           />
//         ))}
//       </div>

//       {/* Main description */}
//       <div className="content mt-12">
//         <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-medium max-w-4xl mx-auto text-center">
//           Deploy{" "}
//           <span className="text-white font-semibold">
//             AI-powered threat detection with real-time response
//           </span>{" "}
//           across your entire infrastructure. Artiflex identifies, analyzes, and
//           neutralizes cyber threats before they impact your business with{" "}
//           <span className="text-blue-400 font-semibold">
//             24/7 automated monitoring and incident response
//           </span>{" "}
//           designed for modern enterprises. With integrated{" "}
//           <span className="text-purple-400 font-semibold">
//             MDR, EDR, and XDR capabilities
//           </span>
//           , we deliver enterprise-grade protection that scales with your growth.
//         </p>
//       </div>

//       {/* Why choose us - From PPT */}
//       <div className="mt-20 max-w-6xl mx-auto px-4">
//         <h3 className="text-3xl md:text-4xl font-black text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//           Why Choose Us
//         </h3>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Card 1 */}
//           <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
//             <div className="flex items-start gap-4">
//               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
//                 <span className="text-2xl">🏆</span>
//               </div>
//               <div>
//                 <h4 className="text-lg font-bold text-white mb-2">
//                   14+ Years Experience
//                 </h4>
//                 <p className="text-sm text-gray-300 leading-relaxed">
//                   Over 14 years of experience delivering IT solutions across various industries
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
//             <div className="flex items-start gap-4">
//               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
//                 <span className="text-2xl">🛡️</span>
//               </div>
//               <div>
//                 <h4 className="text-lg font-bold text-white mb-2">
//                   Certified Experts
//                 </h4>
//                 <p className="text-sm text-gray-300 leading-relaxed">
//                   Certified security experts and ethical hackers protecting your business
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
//             <div className="flex items-start gap-4">
//               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
//                 <span className="text-2xl">⚙️</span>
//               </div>
//               <div>
//                 <h4 className="text-lg font-bold text-white mb-2">
//                   Customized Solutions
//                 </h4>
//                 <p className="text-sm text-gray-300 leading-relaxed">
//                   Customised IT solutions tailored to your business needs
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Card 4 */}
//           <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20">
//             <div className="flex items-start gap-4">
//               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
//                 <span className="text-2xl">🚀</span>
//               </div>
//               <div>
//                 <h4 className="text-lg font-bold text-white mb-2">
//                   End-to-End Delivery
//                 </h4>
//                 <p className="text-sm text-gray-300 leading-relaxed">
//                   End to end project delivery from design, deployment and support
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Card 5 */}
//           <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:border-orange-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20">
//             <div className="flex items-start gap-4">
//               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
//                 <span className="text-2xl">🌍</span>
//               </div>
//               <div>
//                 <h4 className="text-lg font-bold text-white mb-2">
//                   Global Reach
//                 </h4>
//                 <p className="text-sm text-gray-300 leading-relaxed">
//                   Global reach with presence in multiple countries
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Card 6 */}
//           <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:border-pink-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/20">
//             <div className="flex items-start gap-4">
//               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
//                 <span className="text-2xl">⏰</span>
//               </div>
//               <div>
//                 <h4 className="text-lg font-bold text-white mb-2">
//                   24/7 Support
//                 </h4>
//                 <p className="text-sm text-gray-300 leading-relaxed">
//                   Always-on IT support to boost uptime and security
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Performance;


import { useRef } from "react";
import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { performanceImages, performanceImgPositions } from "../constants";
import { useMediaQuery } from "react-responsive";
import trust1 from "../assets/trust1.png";
import trust2 from "../assets/trust2.png";
import trust3 from "../assets/trust3.png";
import trust4 from "../assets/trust4.png";
import { PinContainer } from "./ui/3d-pin";

const Performance = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const sectionEl = sectionRef.current;
      if (!sectionEl) return;

      // Text Animation
      gsap.fromTo(
        ".content p",
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".content p",
            start: "top bottom",
            end: "top center",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      if (isMobile) return;

      // Image Positioning Timeline
      const tl = gsap.timeline({
        defaults: { duration: 2, ease: "power1.inOut", overwrite: "auto" },
        scrollTrigger: {
          trigger: sectionEl,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      performanceImgPositions.forEach((item) => {
        if (item.id === "p5") return;

        const selector = `.${item.id}`;
        const vars = {};

        if (typeof item.left === "number") vars.left = `${item.left}%`;
        if (typeof item.right === "number") vars.right = `${item.right}%`;
        if (typeof item.bottom === "number") vars.bottom = `${item.bottom}%`;
        if (item.transform) vars.transform = item.transform;

        tl.to(selector, vars, 0);
      });
    },
    { scope: sectionRef, dependencies: [isMobile] }
  );

  const trustCards = [
    {
      label: "[ PROVEN RESULTS ]",
      title: "500+ businesses secured",
      image: trust1,
    },
    {
      label: "[ SEAMLESS INTEGRATION ]",
      title: "Works with your existing tools",
      image: trust2,
    },
    {
      label: "[ TAILORED FOR YOU ]",
      title: "Custom security solutions",
      image: trust3,
    },
    {
      label: "[ ONGOING SUPPORT ]",
      title: "We ensure your systems run smoothly",
      image: trust4,
    },
  ];

  return (
    <section
      id="performance"
      ref={sectionRef}
      className="relative py-20 lg:py-28"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Advanced Threat Intelligence Engine
      </h2>

      <div className="wrapper relative">
        {performanceImages.map((item, index) => (
          <img
            key={index}
            src={item.src}
            className={item.id}
            alt={item.alt || `Performance Image #${index + 1}`}
          />
        ))}
      </div>

      {/* Main description */}
      <div className="content mt-12">
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-medium max-w-4xl mx-auto text-center">
          Deploy{" "}
          <span className="text-white font-semibold">
            AI-powered threat detection with real-time response
          </span>{" "}
          across your entire infrastructure. Artiflex identifies, analyzes, and
          neutralizes cyber threats before they impact your business with{" "}
          <span className="text-blue-400 font-semibold">
            24/7 automated monitoring and incident response
          </span>{" "}
          designed for modern enterprises. With integrated{" "}
          <span className="text-purple-400 font-semibold">
            MDR, EDR, and XDR capabilities
          </span>
          , we deliver enterprise-grade protection that scales with your growth.
        </p>
      </div>

      {/* Why Top Brands Trust Us */}
      <div className="mt-20 max-w-7xl mx-auto px-4">
        <h3 className="text-4xl md:text-5xl font-black text-center mb-16 text-white">
          Why Top Brands Trust Us
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"  data-aos="flip-up">
          {trustCards.map((card, index) => (
            <PinContainer
              key={index}
              title={card.title}
              href="#"
              containerClassName="flex items-center justify-center"
              className="w-[260px] h-[360px]"
            >
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 border border-slate-700/60 flex flex-col items-center text-center w-[260px] h-[360px]">
                {/* Bracket Label */}
                <div className="text-[10px] font-bold text-gray-400 tracking-[0.16em] mb-6 uppercase">
                  {card.label}
                </div>

                {/* 3D Image */}
                <div className="flex-1 flex items-center justify-center mb-6">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-40 h-40 object-contain"
                  />
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold text-white leading-snug">
                  {card.title}
                </h4>
              </div>
            </PinContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Performance;
