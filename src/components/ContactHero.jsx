import React from 'react';

export default function ContactHero() {
  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Large gradient circle bottom left */}
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-purple-600/30 via-purple-500/20 to-transparent blur-3xl -translate-x-1/3 translate-y-1/3"></div>
      
      {/* Large gradient circle bottom right */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-tl from-blue-600/30 via-purple-600/20 to-transparent blur-3xl translate-x-1/3 translate-y-1/3"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-4 pt-24 text-center">
        <button className="mb-8 px-5 py-2 bg-slate-800/60 text-[#2d68ff] rounded-full text-sm font-semibold backdrop-blur-sm border border-[#2d68ff]/30 hover:bg-[#2d68ff]/10 hover:border-[#2d68ff]/50 transition-colors">
          Contact Us
        </button>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          We're here to <span className="text-[#2d68ff]">help</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed">
          Get in touch with our sales and support teams for product questions, live<br className="hidden md:block" />
          architecture sessions, demos and more.
        </p>
      </div>
    </div>
  );
}
