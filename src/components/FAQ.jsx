import React, { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What cybersecurity solutions do you offer?",
      answer:
        "We provide comprehensive cybersecurity services including Endpoint Protection, Firewalls, Email Security, MDR Solutions, UEM Solutions, NDR, Identity Threat Detection & Response, and Advisory Services to protect your business from evolving digital threats.",
    },
    {
      question: "How can IT infrastructure support my business growth?",
      answer:
        "Our infrastructure solutions span Active Infrastructure (Access Points, CCTV, Switches, Servers, Storage, Virtualization, Backup) and Passive Infrastructure (Structured Cabling, Racks, Power Systems) to optimize network performance and ensure scalability.",
    },
    {
      question: "What cloud services do you provide?",
      answer:
        "We offer Cloud Infrastructure Deployment, Migration Services, Backup and Disaster Recovery, and Security & Compliance solutions to help your business operate with agility and scale confidently in the cloud.",
    },
    {
      question: "What's included in your AMC services?",
      answer:
        "Our AMC services include Preventive Maintenance, Hardware and Network Support, Software and Security Maintenance, Cloud and Infrastructure Support, plus On-Site and Emergency Support to boost uptime and security.",
    },
    {
      question: "Why choose Artiflex for IT solutions?",
      answer:
        "With over 14 years of experience, certified security experts, customized IT solutions, end-to-end project delivery, and global reach, we deliver smart, scalable, and secure solutions that drive digital transformation.",
    },
    {
      question: "Do you offer custom IT consulting?",
      answer:
        "Yes, we provide tailored IT consulting and advisory services across cybersecurity, infrastructure, cloud, and managed services to meet your unique business needs and ensure you stay protected in an evolving digital landscape.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#00000] py-20 px-5">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
        {/* Left side */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="text-5xl font-bold text-white lg:text-6xl">FAQ</h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-slate-400 lg:text-lg">
            Our AI-driven automation eliminates busywork, streamlines your
            operations, and helps your business grow, without extra effort.
          </p>
        </div>

        {/* Right side - Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-700/50 bg-[#1a1f3a] transition-all duration-300 hover:border-slate-600"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors"
              >
                <span className="pr-4 text-base font-medium text-slate-200 lg:text-lg">
                  {faq.question}
                </span>
                <span
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-700/50 text-slate-300 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="border-t border-slate-700/30 px-6 py-5 text-sm leading-relaxed text-slate-400 lg:text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
