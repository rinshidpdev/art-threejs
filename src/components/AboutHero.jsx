import React from 'react';
import abhero from '../assets/about.png';

const AboutHero = () => {
  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Small Green Label */}
        <p className="text-green-400 text-sm font-bold uppercase tracking-widest mb-8">
          OUR MISSION
        </p>

        {/* Main Heading - Two Lines */}
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
          Transforming the world of <br />
          <span className="relative inline-block">
            <span className="relative z-10 px-4">IT security</span>
            <span className="absolute inset-0 bg-green-400 rounded-3xl transform -skew-x-3"></span>
          </span>{" "}
          for good
        </h1>

        {/* Description */}
        <div className="max-w-4xl mx-auto space-y-4 text-lg md:text-xl mb-16">
          <p className="text-white">
            We empower the backbone of digital transformation:{" "}
            <span className="font-bold">businesses worldwide.</span>{" "}
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
  className="w-[1200px] h-[700px] mx-auto object-cover"
/>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;
