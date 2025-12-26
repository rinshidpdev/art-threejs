import React from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    if (!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#showcase",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      timeline
        .to(".mask img", {
          transform: "scale(1.1)",
        })
        .to(".content", { opacity: 1, y: 0, ease: "power1.in" });
    }
  }, [isTablet]);

  return (
    <section id="showcase">
      <div className="media">
        <video src="/videos/game.mp4" loop muted autoPlay playsInline />
        <div className="mask">
          <img src="/mask-logo.svg" alt="Mask" />
        </div>
      </div>

      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2 className="text-5xl font-black mb-6 text-white">
              Cyber Defense
            </h2>

            <div className="space-y-5 mt-7 pe-10">
              <p className="text-lg leading-relaxed text-slate-100 font-semibold border-l-4 border-blue-500 pl-4">
                Introducing{" "}
                <span className="text-blue-400 font-bold">
                  Next-Gen Security Platform
                </span>
                . Artiflex powers enterprise protection
              </p>

              <p className="text-base leading-loose text-slate-300">
                It drives AI-powered threat detection on your infrastructure, so
                you can defend, respond, and protect with ease. All in a
                solution that's reliable, scalable, and powerful.
              </p>

              <p className="text-base leading-loose text-slate-300">
                A brand-new security engine delivers real-time monitoring,
                incident response, and compliance. And next-gen threat
                intelligence with automated defense brings enterprise-level
                protection to your business.
              </p>

              <p className="text-base text-blue-400 font-semibold hover:text-blue-300 cursor-pointer transition-colors inline-flex items-center gap-1">
                Learn more about our solutions
                <span className="text-sm">→</span>
              </p>
            </div>
          </div>

          <div className="max-w-3xs space-y-14">
            <div className="space-y-2 p-6 rounded-2xl bg-slate-900/40 border border-slate-700/50">
              <p className="text-sm text-blue-400 uppercase tracking-wider font-semibold">
                Up to
              </p>
              <h3 className="text-6xl font-black text-white">99.9%</h3>
              <p className="text-base text-slate-300 font-medium">
                threat detection accuracy
              </p>
            </div>

            <div className="space-y-2 p-6 rounded-2xl bg-slate-900/40 border border-slate-700/50">
              <p className="text-sm text-purple-400 uppercase tracking-wider font-semibold">
                Under
              </p>
              <h3 className="text-6xl font-black text-white">15 min</h3>
              <p className="text-base text-slate-300 font-medium">
                incident response time
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
