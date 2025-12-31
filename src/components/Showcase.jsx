// import React, { useRef } from "react";
// import { useMediaQuery } from "react-responsive";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Showcase = () => {
//     const isTablet = useMediaQuery({ query: '(max-width: 1024px)'});

//     useGSAP(() => {
//         if(!isTablet) {
//             const timeline = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: '#showcase',
//                     start: 'top top',
//                     end: 'bottom top',
//                     scrub: true,
//                     pin: true,
//                 }
//             });

//             timeline
//                 .to('.mask img', {
//                     transform: 'scale(1.1)'
//                 }).to('.content', { opacity: 1, y: 0, ease: 'power1.in' });
//         }
//     }, [isTablet])

//     return (
//         <section id="showcase">
//             <div className="media">
//                 <video src="/videos/game.mp4" loop muted autoPlay playsInline />
//                 <div className="mask">
//                     <img src="/mask-logo.png" />
//                 </div>
//             </div>

//             <div className="content">
//                 <div className="wrapper">
//                     <div className="lg:max-w-md">
//                         <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//                             Cyber Defense
//                         </h2>

//                         <div className="space-y-5 mt-7 pe-10">
//                             <p className="text-lg leading-relaxed text-gray-300 font-medium">
//                                 Introducing {" "}
//                                 <span className="text-white font-bold">
//                                     Next-Gen Security Platform
//                                 </span>
//                                 . Artiflex powers enterprise protection
//                             </p>
//                             <p className="text-base leading-loose text-gray-400">
//                                 It drives AI-powered threat detection on your infrastructure, so you can defend, respond, and protect with ease. All in a solution that's reliable, scalable, and powerful.
//                             </p>
//                             <p className="text-base leading-loose text-gray-400">
//                                 A brand-new security engine delivers real-time monitoring, incident response, and compliance. And next-gen threat intelligence with automated defense brings enterprise-level protection to your business.
//                             </p>
//                             <p className="text-primary font-semibold hover:underline cursor-pointer transition-all">
//                                 Learn more about our solutions →
//                             </p>
//                         </div>
//                     </div>

//                     <div className="max-w-3xs space-y-14">
//                         <div className="space-y-2">
//                             <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Up to</p>
//                             <h3 className="text-6xl font-black bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
//                                 99.9%
//                             </h3>
//                             <p className="text-base text-gray-300 font-medium">threat detection accuracy</p>
//                         </div>
//                         <div className="space-y-2">
//                             <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Under</p>
//                             <h3 className="text-6xl font-black bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
//                                 15 min
//                             </h3>
//                             <p className="text-base text-gray-300 font-medium">incident response time</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Showcase
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
        <video src="/videos/homeFeature.mp4" loop muted autoPlay playsInline />
        <div className="mask">
          <img src="/mask.png" />
        </div>
      </div>

      <div className="content" data-aos="zoom-in-right">
        <div className="services-wrapper">
          <h2 className="services-heading">Inovate. Secure. Transform.</h2>

          <div className="services-grid">
            {/* Column 1 */}
            <div className="service-item">
              <div className="service-icon">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2d68ff"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="service-title">Built for modern IT</h3>
              <p className="service-description">
                Artiflex designs secure, scalable IT foundations that keep
                infrastructure always-on and always protected—across
                data center, campus, and cloud.
              </p>
              <p className="service-link">How we architect your stack →</p>
            </div>

            {/* Column 2 */}
            <div className="service-item">
              <div className="service-icon">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2d68ff"
                  strokeWidth="2"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3 className="service-title">Security at the core</h3>
              <p className="service-description">
                From endpoint and email protection to MDR and NDR, our team of
                certified security experts helps you stay ahead of evolving
                threats.
              </p>
              <p className="service-link">See our defense approach →</p>
            </div>

            {/* Column 3 */}
            <div className="service-item">
              <div className="service-icon">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2d68ff"
                  strokeWidth="2"
                >
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                </svg>
              </div>
              <h3 className="service-title">Cloud & uptime obsessed</h3>
              <p className="service-description">
                Cloud, backup, disaster recovery, and AMC support work together
                to maximise uptime, improve performance, and keep your teams
                online 24/7.
              </p>
              <p className="service-link">Explore how we keep you running →</p>
            </div>
          </div>
        </div>

        <style jsx>{`
          .services-wrapper {
            max-width: 1400px;
            margin: 0 auto;
            padding: 80px 40px;
          }

          .services-heading {
            font-size: 3rem;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 60px;
            text-align: left;
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 50px;
          }

          .service-item {
            display: flex;
            flex-direction: column;
            gap: 18px;
          }

          .service-icon {
            width: 56px;
            height: 56px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }

          .service-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #ffffff;
            line-height: 1.3;
          }

          .service-description {
            font-size: 1rem;
            line-height: 1.7;
            color: #94a3b8;
            margin: 0;
          }

          .service-link {
            margin-top: 8px;
            color: #ffffff;
            font-size: 0.95rem;
            font-weight: 600;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 4px;
            transition: all 0.3s;
          }

          .service-link:hover {
            color: #2d68ff;
            transform: translateX(4px);
          }

          @media (max-width: 1024px) {
            .services-grid {
              grid-template-columns: 1fr;
              gap: 40px;
            }

            .services-heading {
              font-size: 2.5rem;
            }
          }

          @media (max-width: 768px) {
            .services-wrapper {
              padding: 60px 20px;
            }

            .services-heading {
              font-size: 2rem;
              margin-bottom: 40px;
            }

            .service-title {
              font-size: 1.25rem;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Showcase;
