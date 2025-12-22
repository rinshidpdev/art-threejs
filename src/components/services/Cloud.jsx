"use client";
import React from "react";
import { HeroParallax } from "../../components/ui/HeroParallax";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import { PinContainer } from "../../components/ui/3d-pin";
import { cloudProjects } from "../../data/serviceProjects";

const Cloud = () => {
  const services = [
    {
      title: "Cloud Infrastructure Deployment",
      description:
        "Design and deploy scalable cloud infrastructure tailored to your workloads.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      link: "#deployment",
    },
    {
      title: "Migration Services",
      description:
        "Plan and execute seamless migration of applications and data to the cloud.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      link: "#migration",
    },
    {
      title: "Backup & Disaster Recovery",
      description:
        "Protect workloads with automated backup and DR strategies across regions.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      link: "#backup-dr",
    },
    {
      title: "Security & Compliance",
      description:
        "Cloud security controls that align with industry and regulatory standards.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      link: "#security",
    },
    {
      title: "Cost Optimization",
      description:
        "Monitor and optimize cloud usage to control spend and improve efficiency.",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
      link: "#cost",
    },
    {
      title: "Hybrid & Multi‑Cloud",
      description:
        "Architect solutions that span on‑premises, private, and public cloud.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      link: "#hybrid",
    },
    {
      title: "Monitoring & Observability",
      description:
        "End‑to‑end visibility into cloud performance and reliability.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      link: "#monitoring",
    },
    {
      title: "Managed Cloud Services",
      description:
        "Ongoing management, patching, and support for your cloud environment.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      link: "#managed",
    },
  ];

  return (
    <div className="bg-black">
      {/* 1. HERO PARALLAX */}
      <HeroParallax products={cloudProjects} />

      {/* 2. CONTAINER SCROLL */}
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <h1 className="text-4xl font-semibold text-white">
              Scale Your Business <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                With Cloud
              </span>
            </h1>
          }
        >
          <img
            src="/images/cloud-infrastructure.jpg"
            alt="Cloud Infrastructure"
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
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What are Cloud Solutions?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-4">
              Cloud solutions enable agile, scalable, and resilient IT by
              leveraging on‑demand infrastructure and services.
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              From migration to ongoing management, we help you modernize
              applications, optimize costs, and secure workloads across public,
              private, and hybrid cloud.
            </p>
          </div>

          {/* Services Title */}
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Our Cloud Services
          </h3>

          {/* 3D Pin Cards Grid */}
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
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 overflow-hidden">
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
    </div>
  );
};

export default Cloud;
