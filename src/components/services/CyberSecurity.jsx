// "use client";
// import React from "react";
// import { HeroParallax } from "../../components/ui/HeroParallax";
// import { ContainerScroll } from "../../components/ui/container-scroll-animation";
// import { PinContainer } from "../../components/ui/3d-pin";
// import { cyberSecurityProjects } from "../../data/serviceProjects";
// import im from '../../assets/trust1.png'

// const CybersecurityPage = () => {
//   const services = [
//     {
//       title: "Endpoint Protection",
//       description: "Comprehensive security for all endpoint devices across your network",
//       image: im,
//       link: "#endpoint"
//     },
//     {
//       title: "Firewalls",
//       description: "Advanced network security and threat prevention systems",
//       image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
//       link: "#firewall"
//     },
//     {
//       title: "Email Security",
//       description: "Protect against phishing and email-based threats",
//       image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
//       link: "#email"
//     },
//     {
//       title: "MDR Solutions",
//       description: "Managed Detection and Response services 24/7",
//       image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
//       link: "#mdr"
//     },
//     {
//       title: "UEM Solutions",
//       description: "Unified Endpoint Management for all devices",
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
//       link: "#uem"
//     },
//     {
//       title: "NDR",
//       description: "Network Detection and Response systems",
//       image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
//       link: "#ndr"
//     },
//     {
//       title: "Identity Threat Detection",
//       description: "Advanced identity security and threat detection",
//       image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop",
//       link: "#identity"
//     },
//     {
//       title: "Response Advisory",
//       description: "Expert guidance for incident response",
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
//       link: "#advisory"
//     }
//   ];

//   return (
//     <div className="bg-black">
//       {/* 1. HERO PARALLAX */}
     
//     <HeroParallax 
//   products={cyberSecurityProjects}
//   title="Cybersecurity Solutions"
//   description="Protect your business with advanced security measures"
// />





//     {/* 3. CONTAINER SCROLL */}


// <div className="flex flex-col overflow-hidden">
//         <ContainerScroll
//           titleComponent={
//             <>
//               <h1 className="text-4xl font-semibold text-white">
//                 Protect Your Business <br />
//                 <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
//                   24/7 Security
//                 </span>
//               </h1>
//             </>
//           }
//         >
//           <img
//             src="/images/cybersecurity-dashboard.jpg"
//             alt="Cybersecurity Dashboard"
//             height={720}
//             width={1400}
//             className="mx-auto rounded-2xl object-cover h-full object-left-top"
//             draggable={false}
//           />
//         </ContainerScroll>
//       </div>





//       {/* 2. ARTIFLEX CONTENT WITH 3D PIN CARDS */}
//       <section className="py-20 px-4 bg-black">
//         <div className="max-w-7xl mx-auto">
//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//               What is Cyber Security?
//             </h2>
//             <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-4">
//               Cybersecurity is the practice of protecting computer systems, networks, and data from 
//               unauthorized access, attacks, or damage. It's crucial because it safeguards sensitive 
//               information, ensures business continuity, and maintains trust in an increasingly digital world.
//             </p>
//             <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
//               Without strong cybersecurity, organizations risk data breaches, financial loss, and 
//               reputational damage.
//             </p>
//           </div>










          

//           {/* Services Title */}
//           <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
//             Our Cybersecurity Services
//           </h3>

//           {/* 3D Pin Cards Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
//             {services.map((service, idx) => (
//               <div key={idx} className="h-[25rem] w-full flex items-center justify-center">
//                 <PinContainer title={service.title} href={service.link}>
//                   <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
//                     <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
//                       {service.title}
//                     </h3>
//                     <div className="text-base !m-0 !p-0 font-normal">
//                       <span className="text-slate-500">
//                         {service.description}
//                       </span>
//                     </div>
//                     <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 overflow-hidden">
//                       <img 
//                         src={service.image}
//                         alt={service.title}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   </div>
//                 </PinContainer>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

  
      
//     </div>
//   );
// };

// export default CybersecurityPage;

"use client";
import React from "react";
import { HeroParallax } from "../../components/ui/HeroParallax";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import { PinContainer } from "../../components/ui/3d-pin";
import { cyberSecurityProjects } from "../../data/serviceProjects";
import im from '../../assets/trust1.png'
import GeminiEffectDemo from "../ui/GeminiEffectDemo";
import Testimonials from "../Testimonials/Testimonials";
import ClientLogos from "../ClientLogos/ClientLogos";

const CybersecurityPage = () => {
  const services = [
    {
      title: "Endpoint Protection",
      description: "Comprehensive security for all endpoint devices across your network",
      image: im,
      link: "#endpoint"
    },
    {
      title: "Firewalls",
      description: "Advanced network security and threat prevention systems",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      link: "#firewall"
    },
    {
      title: "Email Security",
      description: "Protect against phishing and email-based threats",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
      link: "#email"
    },
    {
      title: "MDR Solutions",
      description: "Managed Detection and Response services 24/7",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      link: "#mdr"
    },
    {
      title: "UEM Solutions",
      description: "Unified Endpoint Management for all devices",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      link: "#uem"
    },
    {
      title: "NDR",
      description: "Network Detection and Response systems",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      link: "#ndr"
    },
    {
      title: "Identity Threat Detection",
      description: "Advanced identity security and threat detection",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop",
      link: "#identity"
    },
    {
      title: "Response Advisory",
      description: "Expert guidance for incident response",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      link: "#advisory"
    }
  ];

  return (
    <div className="bg-black">
      {/* 1. HERO PARALLAX - Already has Artiflex color in title */}
      <HeroParallax 
        products={cyberSecurityProjects}
        title="Cybersecurity Solutions"
        description="Protect your business with advanced security measures"
      />

      {/* 2. CONTAINER SCROLL - Updated with Artiflex blue */}
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-white">
                Protect Your Business <br />
                <span 
                  className="text-4xl md:text-[6rem] font-bold mt-1 leading-none"
                  style={{
                    background: 'linear-gradient(90deg, #2d68ff 0%, #5b8fff 50%, #2d68ff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  24/7 Security
                </span>
              </h1>
            </>
          }
        >
          <img
            src="/cyber2.jpg"
            alt="Cybersecurity Dashboard"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>

      {/* 3. CONTENT WITH 3D PIN CARDS */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Header - Updated with Artiflex blue */}
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{
                background: 'linear-gradient(90deg, #2d68ff, #6b8fff, #2d68ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              What is Cyber Security?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-4">
              Cybersecurity is the practice of protecting computer systems, networks, and data from 
              unauthorized access, attacks, or damage. It's crucial because it safeguards sensitive 
              information, ensures business continuity, and maintains trust in an increasingly digital world.
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              Without strong cybersecurity, organizations risk data breaches, financial loss, and 
              reputational damage.
            </p>
          </div>

          {/* Services Title - Updated with Artiflex blue */}
          <h3 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            style={{
              background: 'linear-gradient(90deg, #2d68ff, #6b8fff, #2d68ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Our Cybersecurity Services
          </h3>

          {/* 3D Pin Cards Grid - Updated gradient with Artiflex blue */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {services.map((service, idx) => (
              <div key={idx} className="h-[25rem] w-full flex items-center justify-center">
                <PinContainer title={service.title} href={service.link}>
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                      {service.title}
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                      <span className="text-slate-500">
                        {service.description}
                      </span>
                    </div>
                    {/* Updated gradient with Artiflex blue */}
                    <div 
                      className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, #2d68ff 0%, #6b8fff 50%, #2d68ff 100%)'
                      }}
                    >
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </PinContainer>
              </div>
            ))}
          </div>
        </div>
      </section>
      <GeminiEffectDemo/>
      <ClientLogos/>
      <Testimonials/>
    </div>
  );
};

export default CybersecurityPage;
