// import React from "react";

// const Testimonials = () => {
//   const testimonials = [
//     {
//       id: 1,
//       text: "The feedback and analytics tools have also helped us gain valuable insights and continuously improve our services. It's like having our own virtual office!",
//       name: "David Brown",
//       role: "Business Owner",
//       company: "luminous",
//       avatar: "/avatars/david.jpg",
//       logo: "/logos/luminous.png",
//     },
//     {
//       id: 2,
//       text: "As a marketing professional, I rely heavily on data to drive my campaigns. They have been instrumental in helping me analyze and visualize data effectively.",
//       name: "Jennifer Lee",
//       role: "Entrepreneur",
//       company: "monaco",
//       avatar: "/avatars/jennifer.jpg",
//       logo: "/logos/monaco.png",
//     },
//     {
//       id: 3,
//       text: "With its powerful help desk features and automation capabilities, we have been able to provide faster and more personalized support to our clients.",
//       name: "Emily Johnson",
//       role: "Business Manager",
//       company: "Peach",
//       avatar: "/avatars/emily.jpg",
//       logo: "/logos/peach.png",
//     },
//   ];

//   // Duplicate for seamless loop
//   const duplicatedTestimonials = [...testimonials, ...testimonials];

//   return (
//     <div className="bg-black py-16 md:py-24 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 mb-12 md:mb-16">
//         <div className="text-center">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-6">
//             <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
//             </svg>
//             <span className="text-emerald-400 text-sm font-medium">Testimonials</span>
//           </div>

//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
//             What are people saying
//           </h2>

//           <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-4xl mx-auto">
//             Our customers continue to be the core of our business and their feedback vividly illustrates the success of our efforts.
//           </p>
//         </div>
//       </div>

//       {/* Scrolling Container */}
//       <div className="relative">
//         <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
//         <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

//         <div className="testimonial-scroll flex gap-6">
//           {duplicatedTestimonials.map((testimonial, index) => (
//             <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
//           ))}
//         </div>
//       </div>

//       {/* Inline styles for animation */}
//       <style jsx>{`
//         @keyframes scroll-left {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         .testimonial-scroll {
//           animation: scroll-left 30s linear infinite;
//         }

//         .testimonial-scroll:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </div>
//   );
// };

// const TestimonialCard = ({ testimonial }) => {
//   return (
//     <div className="flex-shrink-0 w-[340px] sm:w-[380px] md:w-[420px]">
//       <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 md:p-8 h-full hover:border-gray-700 transition-colors">
//         <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
//           {testimonial.text}
//         </p>

//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <img
//               src={testimonial.avatar}
//               alt={testimonial.name}
//               className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
//             />
//             <div>
//               <h4 className="text-white font-semibold text-sm md:text-base">
//                 {testimonial.name}
//               </h4>
//               <p className="text-gray-500 text-xs md:text-sm">
//                 {testimonial.role}
//               </p>
//             </div>
//           </div>

//           <img
//             src={testimonial.logo}
//             alt={testimonial.company}
//             className="h-6 md:h-8 opacity-60"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

import React from "react";

const Testimonials = () => {
  const testimonialsRow1 = [
    {
      id: 1,
      text: "Artiflex transformed our IT infrastructure with their expertise in cybersecurity. Their certified security experts helped us protect our systems from evolving threats.",
      name: "Ahmed Al-Mansoori",
      role: "IT Director",
      company: "Dubai Finance Group",
      avatar: "/avatars/ahmed.jpg",
      platform: "LinkedIn",
    },
    {
      id: 2,
      text: "The cloud migration was seamless. Artiflex's team delivered end-to-end solutions from design to deployment. Their 14+ years of experience really showed.",
      name: "Sarah Williams",
      role: "CTO",
      company: "TechVision MENA",
      avatar: "/avatars/sarah.jpg",
      platform: "Discord",
    },
    {
      id: 3,
      text: "Their AMC services keep our operations running 24/7. Always-on support with preventive maintenance has boosted our uptime significantly.",
      name: "Rajesh Kumar",
      role: "Operations Manager",
      company: "Global Logistics UAE",
      avatar: "/avatars/rajesh.jpg",
      platform: "Twitter",
    },
  ];

  const testimonialsRow2 = [
    {
      id: 4,
      text: "Customized IT solutions tailored to our business needs. Artiflex provided infrastructure solutions that optimized our network performance beyond expectations.",
      name: "Mohammed Al-Hashimi",
      role: "CEO",
      company: "Smart Solutions",
      avatar: "/avatars/mohammed.jpg",
      platform: "YouTube",
    },
    {
      id: 5,
      text: "From structured cabling to virtualization platforms, Artiflex handled everything. Their global reach and local expertise made all the difference.",
      name: "Lisa Chen",
      role: "Project Manager",
      company: "Enterprise Cloud",
      avatar: "/avatars/lisa.jpg",
      platform: "Discord",
    },
    {
      id: 6,
      text: "Backup and disaster recovery solutions from Artiflex gave us peace of mind. Their security and compliance expertise is unmatched in the region.",
      name: "Omar Khalil",
      role: "Security Head",
      company: "Financial Services Co",
      avatar: "/avatars/omar.jpg",
      platform: "Twitter",
    },
  ];

  // Duplicate for seamless loop
  const duplicatedRow1 = [...testimonialsRow1, ...testimonialsRow1, ...testimonialsRow1];
  const duplicatedRow2 = [...testimonialsRow2, ...testimonialsRow2, ...testimonialsRow2];

  return (
    <div className="bg-gradient-to-b from-[#00000] to-black py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12 md:mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Happiness speaks
          </h2>

          <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-4xl mx-auto">
            What some of our 400K+ creators and developers in 180+ countries building everything from side projects to enterprise apps have to say.
          </p>
        </div>
      </div>

      {/* First Row - Scroll Left */}
      <div className="relative mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#0a1628] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#0a1628] to-transparent z-10 pointer-events-none"></div>

        <div className="testimonial-scroll-left flex gap-6">
          {duplicatedRow1.map((testimonial, index) => (
            <TestimonialCard key={`row1-${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Second Row - Scroll Right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#0a1628] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#0a1628] to-transparent z-10 pointer-events-none"></div>

        <div className="testimonial-scroll-right flex gap-6">
          {duplicatedRow2.map((testimonial, index) => (
            <TestimonialCard key={`row2-${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Inline styles for animation */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .testimonial-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .testimonial-scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        .testimonial-scroll-left:hover,
        .testimonial-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  const platformIcons = {
    LinkedIn: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    Discord: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
    Twitter: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    YouTube: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
      </svg>
    ),
  };

  return (
    <div className="flex-shrink-0 w-[340px] sm:w-[380px] md:w-[420px]">
      <div className="bg-[#1e3a5f]/30 border border-[#37B4BE]/20 rounded-2xl p-6 md:p-8 h-full hover:border-[#37B4BE]/50 transition-all backdrop-blur-sm">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-[#37B4BE]/30"
            />
            <div>
              <h4 className="text-white font-semibold text-sm md:text-base">
                {testimonial.name}
              </h4>
              <p className="text-gray-400 text-xs md:text-sm">
                @{testimonial.name.toLowerCase().replace(' ', '')}
              </p>
            </div>
          </div>
          <div className="text-[#37B4BE]">
            {platformIcons[testimonial.platform]}
          </div>
        </div>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          "{testimonial.text}"
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
