// "use client";
// import React from "react";
// import { HeroParallax } from "../../components/ui/HeroParallax";
// import { ContainerScroll } from "../../components/ui/container-scroll-animation";
// import { PinContainer } from "../../components/ui/3d-pin";
// import { infrastructureProjects } from "../../data/serviceProjects";
// // import your own images instead of URLs if you have them


// const Infrastructure = () => {
//   const services = [
//     {
//       title: "Access Points",
//       description: "Secure wireless connectivity across your offices and branches.",
//       image: '',
//       link: "#access-points",
//     },
//     {
//       title: "CCTV Cameras",
//       description: "IP-based surveillance integrated with your IT network.",
//       image:
//         "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop",
//       link: "#cctv",
//     },
//     {
//       title: "Switches & Servers",
//       description: "High-performance switching and compute platforms.",
//       image:
//         "https://images.unsplash.com/photo-1587202372395-9a8b5e77a3a0?w=600&h=400&fit=crop",
//       link: "#servers",
//     },
//     {
//       title: "Storage Systems",
//       description: "Reliable and scalable storage for business-critical data.",
//       image:
//         "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
//       link: "#storage",
//     },
//     {
//       title: "Virtualization Platforms",
//       description: "Modern virtualization for efficient resource utilization.",
//       image:
//         "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
//       link: "#virtualization",
//     },
//     {
//       title: "Backup Solutions",
//       description: "Protect data with automated backup and quick restore.",
//       image:
//         "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
//       link: "#backup",
//     },
//     {
//       title: "Passive Infrastructure",
//       description: "Structured cabling, racks, cabinets, and power systems.",
//       image:
//         "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=600&h=400&fit=crop",
//       link: "#passive",
//     },
//     {
//       title: "Hardware Supply",
//       description: "End‑to‑end IT hardware sourcing and deployment.",
//       image:
//         "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
//       link: "#hardware",
//     },
//   ];

//   return (
//     <div className="bg-black">
//       {/* 1. HERO PARALLAX */}
//       {/* <HeroParallax products={infrastructureProjects} /> */}
//       <HeroParallax 
//   products={infrastructureProjects}
//   title="IT Infrastructure"
//   description="Build robust and reliable IT foundations"
// />


//       {/* 2. CONTAINER SCROLL */}
//       <div className="flex flex-col overflow-hidden">
//         <ContainerScroll
//           titleComponent={
//             <h1 className="text-4xl font-semibold text-white">
//               Complete IT Infrastructure <br />
//               <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                 Active & Passive
//               </span>
//             </h1>
//           }
//         >
//           <img
//             src="/images/infrastructure-setup.jpg"
//             alt="Infrastructure Setup"
//             height={720}
//             width={1400}
//             className="mx-auto rounded-2xl object-cover h-full object-left-top"
//             draggable={false}
//           />
//         </ContainerScroll>
//       </div>

//       {/* 3. CONTENT + 3D PIN CARDS */}
//       <section className="py-20 px-4 bg-black">
//         <div className="max-w-7xl mx-auto">
//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//               What are Infrastructure Solutions?
//             </h2>
//             <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-4">
//               Infrastructure solutions optimize network performance through
//               secure, scalable architecture. They ensure reliable connectivity,
//               availability, and performance for your business operations.
//             </p>
//             <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
//               From active network components to passive cabling and power, we
//               design and implement end‑to‑end infrastructure tailored to your
//               environment.
//             </p>
//           </div>

//           {/* Services Title */}
//           <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
//             Our Infrastructure Services
//           </h3>

//           {/* 3D Pin Cards Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
//             {services.map((service, idx) => (
//               <div
//                 key={idx}
//                 className="h-[25rem] w-full flex items-center justify-center"
//               >
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

// export default Infrastructure;

"use client";
import React from "react";
import { HeroParallax } from "../../components/ui/HeroParallax";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import { PinContainer } from "../../components/ui/3d-pin";
import { infrastructureProjects } from "../../data/serviceProjects";
import GeminiEffectDemo from "../ui/GeminiEffectDemo";
import Testimonials from "../Testimonials/Testimonials";

const Infrastructure = () => {
  const services = [
    {
      title: "Access Points",
      description: "Secure wireless connectivity across your offices and branches.",
      image: '',
      link: "#access-points",
    },
    {
      title: "CCTV Cameras",
      description: "IP-based surveillance integrated with your IT network.",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop",
      link: "#cctv",
    },
    {
      title: "Switches & Servers",
      description: "High-performance switching and compute platforms.",
      image:
        "https://images.unsplash.com/photo-1587202372395-9a8b5e77a3a0?w=600&h=400&fit=crop",
      link: "#servers",
    },
    {
      title: "Storage Systems",
      description: "Reliable and scalable storage for business-critical data.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      link: "#storage",
    },
    {
      title: "Virtualization Platforms",
      description: "Modern virtualization for efficient resource utilization.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      link: "#virtualization",
    },
    {
      title: "Backup Solutions",
      description: "Protect data with automated backup and quick restore.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      link: "#backup",
    },
    {
      title: "Passive Infrastructure",
      description: "Structured cabling, racks, cabinets, and power systems.",
      image:
        "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=600&h=400&fit=crop",
      link: "#passive",
    },
    {
      title: "Hardware Supply",
      description: "End‑to‑end IT hardware sourcing and deployment.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      link: "#hardware",
    },
  ];

  return (
    <div className="bg-black">
      {/* 1. HERO PARALLAX - Already has Artiflex color in title */}
      <HeroParallax 
        products={infrastructureProjects}
        title="IT Infrastructure"
        description="Build robust and reliable IT foundations"
      />

      {/* 2. CONTAINER SCROLL - Updated with Artiflex blue */}
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <h1 className="text-4xl font-semibold text-white">
              Complete IT Infrastructure <br />
              <span 
                className="text-4xl md:text-[6rem] font-bold mt-1 leading-none"
                style={{
                  background: 'linear-gradient(90deg, #2d68ff 0%, #5b8fff 50%, #2d68ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Active & Passive
              </span>
            </h1>
          }
        >
          <img
            src="/inf2.jpg"
            alt="Infrastructure Setup"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>

      {/* 3. CONTENT + 3D PIN CARDS */}
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
              What are Infrastructure Solutions?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-4">
              Infrastructure solutions optimize network performance through
              secure, scalable architecture. They ensure reliable connectivity,
              availability, and performance for your business operations.
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              From active network components to passive cabling and power, we
              design and implement end‑to‑end infrastructure tailored to your
              environment.
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
            Our Infrastructure Services
          </h3>

          {/* 3D Pin Cards Grid - Updated gradient with Artiflex blue */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="h-[25rem] w-full flex items-center justify-center"
              >
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
        <GeminiEffectDemo/>
        <Testimonials/>
      </section>
    </div>
  );
};

export default Infrastructure;
