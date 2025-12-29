// import React, { useRef } from "react";
// import { GoogleGeminiEffect } from "./google-gemini-effect";
// import { useInView, useMotionValue, useSpring, useTransform } from "motion/react";
// import { useEffect } from "react";

// export default function GeminiEffectDemo() {
//   const ref = useRef(null);
//   const isInView = useInView(ref);

//   // Create infinite progressing values
//   const progress = useMotionValue(0);
  
//   useEffect(() => {
//     if (isInView) {
//       const interval = setInterval(() => {
//         progress.set((progress.get() + 0.01) % 1); // loops 0 to 1
//       }, 30);
      
//       return () => clearInterval(interval);
//     }
//   }, [isInView, progress]);

//   // Transform to path lengths
//   const pathLengthFirst = useTransform(progress, [0, 0.8], [0.2, 1.2]);
//   const pathLengthSecond = useTransform(progress, [0, 0.8], [0.15, 1.2]);
//   const pathLengthThird = useTransform(progress, [0, 0.8], [0.1, 1.2]);
//   const pathLengthFourth = useTransform(progress, [0, 0.8], [0.05, 1.2]);
//   const pathLengthFifth = useTransform(progress, [0, 0.8], [0, 1.2]);

//   return (
//     <div
//       className="h-screen bg-black w-full rounded-md relative pt-40 overflow-clip"
//       ref={ref}
//     >
//       <GoogleGeminiEffect
//         title="Complete IT Solutions"
//         description="Innovate. Secure. Transform."
//         pathLengths={[
//           pathLengthFirst,
//           pathLengthSecond,
//           pathLengthThird,
//           pathLengthFourth,
//           pathLengthFifth,
//         ]}
//       />
//     </div>
//   );
// }

import React, { useRef } from "react";
import { GoogleGeminiEffect } from "./google-gemini-effect";
import { useInView, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

export default function GeminiEffectDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  // Create infinite progressing values
  const progress = useMotionValue(0);
  
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        progress.set((progress.get() + 0.01) % 1); // loops 0 to 1
      }, 30);
      
      return () => clearInterval(interval);
    }
  }, [isInView, progress]);

  // Transform to path lengths
  const pathLengthFirst = useTransform(progress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(progress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(progress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(progress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(progress, [0, 0.8], [0, 1.2]);

  return (
    <div
      className="h-screen bg-black w-full rounded-md relative overflow-clip"
      ref={ref}
    >
      {/* Custom Content Above Effect */}
      <div className="absolute top-20 md:top-32 left-0 right-0 z-40 flex flex-col items-center justify-center px-4 text-center">
        {/* Small Label */}
        <p className="mb-4 text-xs md:text-sm font-bold uppercase tracking-widest text-[#2d68ff]">
          INNOVATE. SECURE. TRANSFORM.
        </p>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
          Complete IT{" "}
          <span className="text-[#2d68ff]">Solutions</span>
        </h1>
        
        {/* Description */}
        <p className="text-base md:text-lg text-neutral-300 mb-8 max-w-2xl">
          Empowering organizations with cutting-edge cybersecurity, infrastructure, cloud, and managed services.
        </p>
        
        {/* Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">
          <button className="group px-6 md:px-8 py-2.5 md:py-3 bg-[#2d68ff] text-white rounded-full text-sm md:text-base font-semibold hover:bg-[#2558e6] transition-all shadow-[0_0_30px_rgba(45,104,255,0.4)] hover:shadow-[0_0_40px_rgba(45,104,255,0.6)] flex items-center gap-2">
            Get Started
            <svg 
              className="w-4 h-4 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          
          <button className="group px-6 md:px-8 py-2.5 md:py-3 bg-transparent border-2 border-[#2d68ff] text-[#2d68ff] rounded-full text-sm md:text-base font-semibold hover:bg-[#2d68ff]/10 transition-all flex items-center gap-2">
            Contact Us
            <svg 
              className="w-4 h-4 transition-transform group-hover:rotate-45" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Gemini Effect Below - NO title/description props! */}
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  );
}
