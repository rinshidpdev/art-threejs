import React from "react";
export default function Handnvid() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
     className="absolute top-0 left-0 w-full h-full  translate-y-[30%]"

      >
        <source src="/videos/hand.webm" type="video/mp4" />
      </video>

      {/* DARK OVERLAY (OPTIONAL) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8">
          Design bold.
          <br />
          Launch fast.
        </h1>

        <div className="flex gap-4">
          <button className="px-8 py-3 bg-white text-black rounded-full font-semibold">
            Start for free
          </button>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold">
            Start with AI
          </button>
        </div>
      </div>
    </div>
  );
}
