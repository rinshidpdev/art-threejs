// "use client";
// import React from "react";
// import { HeroParallax } from "../../components/ui/HeroParallax";
// import { ContainerScroll } from "../../components/ui/container-scroll-animation";
// import { PinContainer } from "../../components/ui/3d-pin";
// import { amcProjects } from "../../data/serviceProjects";
// import Testimonials from "../Testimonials/Testimonials";

// const AMCPage = () => {
//   const services = [
//     {
//       title: "Preventive Maintenance",
//       description: "Regular health checks to prevent failures before they occur.",
//       image:
//         "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=600&h=400&fit=crop",
//       link: "#preventive",
//     },
//     {
//       title: "Hardware & Network Support",
//       description:
//         "Troubleshooting and support for servers, endpoints, and network gear.",
//       image:
//         "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
//       link: "#hardware",
//     },
//     {
//       title: "Software & Security Maintenance",
//       description:
//         "Patching, updates, and security hardening across your IT stack.",
//       image:
//         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
//       link: "#software",
//     },
//     {
//       title: "Cloud & Infrastructure Support",
//       description:
//         "Ongoing support for on‑prem, cloud, and hybrid infrastructure.",
//       image:
//         "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
//       link: "#cloud-infra",
//     },
//     {
//       title: "On‑Site Support",
//       description:
//         "Engineers available on‑site for critical issues and projects.",
//       image:
//         "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=600&h=400&fit=crop",
//       link: "#onsite",
//     },
//     {
//       title: "Emergency Support",
//       description:
//         "Rapid incident response to minimize downtime and impact.",
//       image:
//         "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
//       link: "#emergency",
//     },
//     {
//       title: "SLA‑Driven Services",
//       description:
//         "Defined response and resolution times aligned with your business.",
//       image:
//         "https://images.unsplash.com/photo-1580894894513-541e068a3e2c?w=600&h=400&fit=crop",
//       link: "#sla",
//     },
//     {
//       title: "Reporting & Reviews",
//       description:
//         "Regular reports and service reviews to keep you in control.",
//       image:
//         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
//       link: "#reports",
//     },
//   ];

//   return (
//     <div className="bg-black">
//       {/* 1. HERO PARALLAX */}
//       {/* <HeroParallax products={amcProjects} /> */}

//       <HeroParallax 
//   products={amcProjects}
//   title="AMC Services"
//   description="24/7 monitoring and support for your business"
// />


//       {/* 2. CONTAINER SCROLL */}
//       <div className="flex flex-col overflow-hidden">
//         <ContainerScroll
//           titleComponent={
//             <h1 className="text-4xl font-semibold text-white">
//               24/7 Support <br />
//               <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
//                 Always Available
//               </span>
//             </h1>
//           }
//         >
//           <img
//             src="/images/amc-support.jpg"
//             alt="AMC Support Services"
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
//               What are AMC Services?
//             </h2>
//             <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-4">
//               Annual Maintenance Contracts (AMC) provide always‑on IT support to
//               keep your infrastructure healthy, secure, and available.
//             </p>
//             <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
//               With proactive maintenance, rapid incident response, and defined
//               SLAs, your teams can focus on business while we handle the
//               technology.
//             </p>
//           </div>

//           {/* Services Title */}
//           <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
//             Our AMC Services
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
//         <Testimonials/>
//       </section>
//     </div>
//   );
// };

// export default AMCPage;

"use client";
import React from "react";
import { HeroParallax } from "../../components/ui/HeroParallax";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import { PinContainer } from "../../components/ui/3d-pin";
import { amcProjects } from "../../data/serviceProjects";
import Testimonials from "../Testimonials/Testimonials";
import amc from '../../assets/amc.png'

const AMCPage = () => {
  const services = [
    {
      title: "Preventive Maintenance",
      description: "Regular health checks to prevent failures before they occur.",
      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=600&h=400&fit=crop",
      link: "#preventive",
    },
    {
      title: "Hardware & Network Support",
      description:
        "Troubleshooting and support for servers, endpoints, and network gear.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      link: "#hardware",
    },
    {
      title: "Software & Security Maintenance",
      description:
        "Patching, updates, and security hardening across your IT stack.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      link: "#software",
    },
    {
      title: "Cloud & Infrastructure Support",
      description:
        "Ongoing support for on‑prem, cloud, and hybrid infrastructure.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      link: "#cloud-infra",
    },
    {
      title: "On‑Site Support",
      description:
        "Engineers available on‑site for critical issues and projects.",
      image:
        "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=600&h=400&fit=crop",
      link: "#onsite",
    },
    {
      title: "Emergency Support",
      description:
        "Rapid incident response to minimize downtime and impact.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      link: "#emergency",
    },
    {
      title: "SLA‑Driven Services",
      description:
        "Defined response and resolution times aligned with your business.",
      image:
        "https://images.unsplash.com/photo-1580894894513-541e068a3e2c?w=600&h=400&fit=crop",
      link: "#sla",
    },
    {
      title: "Reporting & Reviews",
      description:
        "Regular reports and service reviews to keep you in control.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      link: "#reports",
    },
  ];

  return (
    <div className="bg-black">
      {/* 1. HERO PARALLAX - Already has Artiflex color in title */}
      <HeroParallax 
        products={amcProjects}
        title="AMC Services"
        description="24/7 monitoring and support for your business"
      />

      {/* 2. CONTAINER SCROLL - Updated with Artiflex blue */}
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <h1 className="text-4xl font-semibold text-white">
              24/7 Support <br />
              <span 
                className="text-4xl md:text-[6rem] font-bold mt-1 leading-none"
                style={{
                  background: 'linear-gradient(90deg, #2d68ff 0%, #5b8fff 50%, #2d68ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Always Available
              </span>
            </h1>
          }
        >
          <img
            src={amc}
            alt="AMC Support Services"
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
              What are AMC Services?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-4">
              Annual Maintenance Contracts (AMC) provide always‑on IT support to
              keep your infrastructure healthy, secure, and available.
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              With proactive maintenance, rapid incident response, and defined
              SLAs, your teams can focus on business while we handle the
              technology.
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
            Our AMC Services
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
        <Testimonials/>
      </section>
    </div>
  );
};

export default AMCPage;
