import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const ArtflexShowcase = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const TIMELINE_PRELOAD = gsap.timeline();
    
    TIMELINE_PRELOAD
      .fromTo(".preload-logo", {
        opacity: 0,
        y: '10%'
      }, {
        opacity: 1,
        y: '0',
        duration: 1.5,
        ease: 'power2.out'
      })
      .to(".preload-logo", {
        opacity: 0,
        delay: 0.2,
        ease: 'power2.out'
      })
      .to(".preload-line", {
        height: "0",
        duration: 1,
        ease: 'power2.out'
      });

    gsap.to(".hero-img", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    const cards = cardsRef.current.filter(Boolean);
    if (cards.length === 0) return;

    const lastCardIndex = cards.length - 1;

    const lastCardST = ScrollTrigger.create({
      trigger: cards[lastCardIndex],
      start: "center center"
    });

    cards.forEach((card, index) => {
      const scale = index === lastCardIndex ? 1 : 0.96;
      
      const scaleDown = gsap.to(card, {
        scale: scale,
      });

      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        end: () => lastCardST.start,
        pin: true,
        pinSpacing: false,
        scrub: 0.5,
        ease: "none",
        animation: scaleDown,
        toggleActions: "restart none none reverse"
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const services = [
    {
      id: 1,
      number: "01",
      title: "Cyber Security",
      subtitle: "Enterprise-Grade Protection",
      description: "AI-powered threat detection reduced security incidents by 85% and tripled response speed for a global enterprise. See how automation improved customer experience.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=800&fit=crop",
      tags: ["Security", "Enterprise"],
      link: "/services/cybersecurity"
    },
    {
      id: 2,
      number: "02",
      title: "Infrastructure Solutions",
      subtitle: "Building Modern IT Backbone",
      description: "Infrastructure deployment reduced downtime by 70% and increased network performance by 3x for a leading corporation. Discover enterprise-grade solutions.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop",
      tags: ["Infrastructure", "Cloud"],
      link: "/services/infrastructure"
    },
    {
      id: 3,
      number: "03",
      title: "Cloud Solutions",
      subtitle: "Scalable Cloud Infrastructure",
      description: "Cloud migration improved scalability by 300% and cut operational costs by 45% for multinational businesses. Transform operations with cloud expertise.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop",
      tags: ["Cloud", "Migration"],
      link: "/services/cloud"
    },
    {
      id: 4,
      number: "04",
      title: "AMC Support",
      subtitle: "Always-On IT Support",
      description: "Proactive maintenance increased system uptime to 99.9% and reduced emergency calls by 60% for enterprise clients. Experience comprehensive AMC services.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&h=800&fit=crop",
      tags: ["Support", "Maintenance"],
      link: "/services/amc"
    }
  ];

  return (
    <div className="bg-white">
      {/* Services Section */}
      <section className="py-20 bg-black">
        {/* Header with Gradient Title */}
        <div className="text-center mb-16 px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to transform your business
          </p>
        </div>

        {/* Cards */}
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="mt-6 w-full bg-[#0f1226] rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 md:gap-8 p-6 md:p-10 min-h-[500px]">
                {/* Left Side - Content */}
                <div className="flex flex-col justify-center text-white">
                  {/* Number Badge */}
                  <div className="mb-6">
                    <span className="text-5xl md:text-6xl font-black text-white/10">
                      [{service.number}]
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-4xl md:text-5xl font-black mb-4 text-white leading-tight">
                    {service.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="text-lg md:text-xl font-light text-blue-400 mb-6">
                    {service.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-base leading-relaxed text-gray-300 mb-8">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex gap-3 mb-8">
                    {service.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <Link 
                    to={service.link}
                    className="group inline-flex items-center gap-3 px-6 py-3 bg-[#37B4BE] hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 w-fit"
                  >
                    Read More
                    <svg 
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                {/* Right Side - Image with Border */}
                <div className="relative flex items-center justify-center">
                  <div className="relative w-full h-full min-h-[350px] rounded-2xl overflow-hidden border-4 border-slate-700/50 shadow-xl">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-[40vh]" />
      </section>
    </div>
  );
};

export default ArtflexShowcase;
