import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "The feedback and analytics tools have also helped us gain valuable insights and continuously improve our services. It's like having our own virtual office!",
      name: "David Brown",
      role: "Business Owner",
      company: "luminous",
      avatar: "/avatars/david.jpg",
      logo: "/logos/luminous.png",
    },
    {
      id: 2,
      text: "As a marketing professional, I rely heavily on data to drive my campaigns. They have been instrumental in helping me analyze and visualize data effectively.",
      name: "Jennifer Lee",
      role: "Entrepreneur",
      company: "monaco",
      avatar: "/avatars/jennifer.jpg",
      logo: "/logos/monaco.png",
    },
    {
      id: 3,
      text: "With its powerful help desk features and automation capabilities, we have been able to provide faster and more personalized support to our clients.",
      name: "Emily Johnson",
      role: "Business Manager",
      company: "Peach",
      avatar: "/avatars/emily.jpg",
      logo: "/logos/peach.png",
    },
  ];

  // Duplicate for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="bg-black py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12 md:mb-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-6">
            <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            <span className="text-emerald-400 text-sm font-medium">Testimonials</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            What are people saying
          </h2>

          <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-4xl mx-auto">
            Our customers continue to be the core of our business and their feedback vividly illustrates the success of our efforts.
          </p>
        </div>
      </div>

      {/* Scrolling Container */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        <div className="testimonial-scroll flex gap-6">
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
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
            transform: translateX(-50%);
          }
        }

        .testimonial-scroll {
          animation: scroll-left 30s linear infinite;
        }

        .testimonial-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex-shrink-0 w-[340px] sm:w-[380px] md:w-[420px]">
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 md:p-8 h-full hover:border-gray-700 transition-colors">
        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
          {testimonial.text}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
            />
            <div>
              <h4 className="text-white font-semibold text-sm md:text-base">
                {testimonial.name}
              </h4>
              <p className="text-gray-500 text-xs md:text-sm">
                {testimonial.role}
              </p>
            </div>
          </div>

          <img
            src={testimonial.logo}
            alt={testimonial.company}
            className="h-6 md:h-8 opacity-60"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
