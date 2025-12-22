import React from "react";

const OrbitingLogos = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-6">
            <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="text-emerald-400 text-sm font-medium">Integrations</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Our Tech Stack
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            We offer seamless integration solutions that empower your business with enhanced efficiency and productivity.
          </p>
        </div>

        {/* Orbiting Animation */}
        <div className="relative flex items-center justify-center h-[700px]">
          {/* Center Icon */}
          <div className="absolute z-20 w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center border-2 border-gray-800">
            <svg
              className="w-10 h-10 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>

          {/* Inner Orbit - slower rotation */}
          <div className="absolute w-[400px] h-[400px] border border-gray-800/50 rounded-full animate-orbit-reverse">
            <Logo
              imagePath="/logos/figma.png" // replace with your image path
              style={{ top: "0%", left: "50%", transform: "translate(-50%, -50%)" }}
            />
            <Logo
              imagePath="/logos/notion.png"
              style={{ top: "50%", left: "0%", transform: "translate(-50%, -50%)" }}
            />
            <Logo
              imagePath="/logos/discord.png"
              style={{ top: "100%", left: "50%", transform: "translate(-50%, -50%)" }}
            />
            <Logo
              imagePath="/logos/slack.png"
              style={{ top: "50%", left: "100%", transform: "translate(-50%, -50%)" }}
            />
          </div>

          {/* Outer Orbit - slower rotation */}
          <div className="absolute w-[650px] h-[650px] border border-gray-800/50 rounded-full animate-orbit">
            <Logo
              imagePath="/logos/zoom.png"
              style={{ 
                top: "50%", 
                left: "50%", 
                transform: "translate(-50%, -50%) translate(0, -325px)" 
              }}
            />
            <Logo
              imagePath="/logos/asana.png"
              style={{ 
                top: "50%", 
                left: "50%", 
                transform: "translate(-50%, -50%) rotate(45deg) translate(0, -325px) rotate(-45deg)" 
              }}
            />
            <Logo
              imagePath="/logos/figma2.png"
              style={{ 
                top: "50%", 
                left: "50%", 
                transform: "translate(-50%, -50%) rotate(90deg) translate(0, -325px) rotate(-90deg)" 
              }}
            />
            <Logo
              imagePath="/logos/intercom.png"
              style={{ 
                top: "50%", 
                left: "50%", 
                transform: "translate(-50%, -50%) rotate(135deg) translate(0, -325px) rotate(-135deg)" 
              }}
            />
            <Logo
              imagePath="/logos/github.png"
              style={{ 
                top: "50%", 
                left: "50%", 
                transform: "translate(-50%, -50%) rotate(180deg) translate(0, -325px) rotate(-180deg)" 
              }}
            />
            <Logo
              imagePath="/logos/slack2.png"
              style={{ 
                top: "50%", 
                left: "50%", 
                transform: "translate(-50%, -50%) rotate(225deg) translate(0, -325px) rotate(-225deg)" 
              }}
            />
            <Logo
              imagePath="/logos/miro.png"
              style={{ 
                top: "50%", 
                left: "50%", 
                transform: "translate(-50%, -50%) rotate(270deg) translate(0, -325px) rotate(-270deg)" 
              }}
            />
            <Logo
              imagePath="/logos/jira.png"
              style={{ 
                top: "50%", 
                left: "50%", 
                transform: "translate(-50%, -50%) rotate(315deg) translate(0, -325px) rotate(-315deg)" 
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Logo = ({ imagePath, style }) => {
  return (
    <div
      className="absolute w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center shadow-xl border border-gray-800"
      style={style}
    >
      <div className="animate-counter-rotate w-10 h-10">
        <img 
          src={imagePath} 
          alt="logo" 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default OrbitingLogos;
