import React, { useRef } from "react";
import { GoogleGeminiEffect } from "./google-gemini-effect";
import { useInView, useMotionValue, useSpring, useTransform } from "motion/react";
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
      className="h-screen bg-black w-full rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        title="Complete IT Solutions"
        description="Innovate. Secure. Transform."
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
