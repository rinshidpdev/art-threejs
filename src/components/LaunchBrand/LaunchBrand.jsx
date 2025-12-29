// import React, { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./LaunchBrand.css";
// import logo from "../../assets/ball.png";

// gsap.registerPlugin(ScrollTrigger);

// const LaunchBrand = () => {
//   const sectionRef = useRef(null);
//   const ballRef = useRef(null);

//   useGSAP(() => {
//     // Ball moves up AND rotates when scrolling
//     gsap.fromTo(ballRef.current, 
//       {
//         y: 0,
//         rotation: 0
//       },
//       {
//         y: -500,
//         rotation: 360, // Full rotation
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: 0.5,
//         }
//       }
//     );
//   }, { scope: sectionRef });

//   return (
//     <div className="launch-brand" ref={sectionRef}>
//       <div className="content">
//         <img 
//           ref={ballRef}
//           src={logo} 
//           alt="Brand Logo" 
//           className="brand-logo" 
//         />
//         <h1>Launch your Brand</h1>
//         <p className="description">
//           With a brand strategy in place, it's time for the big unveil. Whether it's an exciting new product or an existing corporate brand that needs a refresh, it needs to have a go-to-market strategy.
//         </p>
//         <p className="description">
//           With comprehensive branding solutions to support your brand expansion, we are one of the leading branding companies in Dubai.
//         </p>

//         <div className="features">
//           <span>Launch Planning</span>
//           <span>Brand Activations</span>
//           <span>Campaign Development</span>
//         </div>

//         <button className="read-more">Read More</button>
//       </div>
//     </div>
//   );
// };

// export default LaunchBrand;
// LaunchBrand.jsx
// import React, { useRef, useEffect } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./LaunchBrand.css";
// import img from "../../assets/str.png";
// import bowlImage from "../../assets/second.png";
// import ballLogo from "../../assets/ball.png";

// gsap.registerPlugin(ScrollTrigger);

// const LaunchBrand = () => {
//   const sectionRef = useRef(null);
//   const ballRef = useRef(null);

//   // Ball scroll animation (up + rotate, reversible)
//   useGSAP(
//     () => {
//       if (!ballRef.current || !sectionRef.current) return;

//       gsap.fromTo(
//         ballRef.current,
//         { y: 0, rotation: 0 },
//         {
//           y: -900,          // go high enough to visually reach upper section
//           rotation: 720,    // 2 full spins
//           ease: "none",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: 0.5,
//           },
//         }
//       );
//     },
//     { scope: sectionRef }
//   );

//   return (
//     <>
//       {/* Strategy Section - TOP */}
//       <section className="strategy">
//         <div className="content-wrapper">
//           <div className="strategy-content">
//             <h1>Start with Security Strategy</h1>
//             <p>
//               IT security goes beyond firewalls and antivirus software. <br />
//               A business built on an authentic and comprehensive security
//               strategy <br />
//               can ensure business continuity and maintain trust in the digital
//               world.
//             </p>

//             <div className="branding-categories">
//               <span>Threat Detection</span>
//               <span>Network Defense</span>
//               <span>Identity Protection</span>
//             </div>

//             {/* <div className="buttons">
//               <button className="btn">Read More</button>
//               <button className="btn">Get In Touch</button>
//             </div> */}
//           </div>

//           <div className="strategy-image">
//             <img
//               src={img}
//               alt="3D Strategy Illustration"
//               className="main-object"
//             />
//             <img
//               src={bowlImage}
//               alt="Bowl"
//               className="bowl-image"
//               style={{ width: 250 }}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Launch Brand Section with Ball - BOTTOM */}
//       <section className="launch-brand" ref={sectionRef}>
//         <div className="launch-content">
//           <img
//             ref={ballRef}
//             src={ballLogo}
//             alt="Artiflex Logo"
//             className="brand-logo"
//           />

//           <h2 className="launch-title">Deploy Your IT Infrastructure</h2>

//           <p className="launch-description">
//             With a security strategy in place, it's time for deployment.
//             Whether it's a complete IT infrastructure overhaul or cloud
//             migration that needs expert execution, it requires end-to-end
//             project delivery from design to deployment.
//           </p>
//           <p className="launch-description">
//             With comprehensive IT solutions spanning cybersecurity,
//             infrastructure, cloud, and managed services, we enable businesses to
//             operate efficiently, scale confidently, and stay protected in an
//             evolving digital landscape.
//           </p>

//           <div className="launch-features">
//             <span>Infrastructure Deployment</span>
//             <span>Cloud Migration</span>
//             <span>Security Implementation</span>
//           </div>

//           {/* <button className="read-more">Read More</button> */}
//         </div>
//       </section>
//     </>
//   );
// };

// export default LaunchBrand;
import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./LaunchBrand.css";
import img from "../../assets/str.png";
import bowlImage from "../../assets/second.png";
import ballLogo from "../../assets/ball.png";

gsap.registerPlugin(ScrollTrigger);

const LaunchBrand = () => {
  const sectionRef = useRef(null);
  const ballRef = useRef(null);

  // Ball scroll animation (up + rotate, reversible)
  useGSAP(
    () => {
      if (!ballRef.current || !sectionRef.current) return;

      gsap.fromTo(
        ballRef.current,
        { y: 0, rotation: 0 },
        {
          y: -900,          // go high enough to visually reach upper section
          rotation: 720,    // 2 full spins
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <>
      {/* Strategy Section - TOP */}
      <section className="strategy">
        <div className="content-wrapper">
          <div className="strategy-content">
            <h1>Start with Security Strategy</h1>
            <p>
              IT security goes beyond firewalls and antivirus software. <br />
              A business built on an authentic and comprehensive security
              strategy <br />
              can ensure business continuity and maintain trust in the digital
              world.
            </p>

            <div className="branding-categories">
              <span>Threat Detection</span>
              <span>Network Defense</span>
              <span>Identity Protection</span>
            </div>
          </div>

          <div className="strategy-image">
            <img
              src={img}
              alt="3D Strategy Illustration"
              className="main-object"
            />
            <img
              src={bowlImage}
              alt="Bowl"
              className="bowl-image"
              style={{ width: 250 }}
            />
          </div>
        </div>
      </section>

      {/* Launch Brand Section with Ball - BOTTOM */}
      <section className="launch-brand" ref={sectionRef}>
        <div className="launch-content">
          <img
            ref={ballRef}
            src={ballLogo}
            alt="Artiflex Logo"
            className="brand-logo"
          />

          <h2 className="launch-title">Deploy Your IT Infrastructure</h2>

          <p className="launch-description">
            With a security strategy in place, it's time for deployment.
            Whether it's a complete IT infrastructure overhaul or cloud
            migration that needs expert execution, it requires end-to-end
            project delivery from design to deployment.
          </p>
          <p className="launch-description">
            With comprehensive IT solutions spanning cybersecurity,
            infrastructure, cloud, and managed services, we enable businesses to
            operate efficiently, scale confidently, and stay protected in an
            evolving digital landscape.
          </p>

          <div className="launch-features">
            <span>Infrastructure Deployment</span>
            <span>Cloud Migration</span>
            <span>Security Implementation</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default LaunchBrand;
