import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

// Import your assets correctly
import pinVideo from "/videos/newPin.mp4"; // or "../assets/pin-video.mp4"
import circleText from "../assets/circle-text.svg";
import playIcon from "../assets/play.svg";

gsap.registerPlugin(ScrollTrigger);

const VideoPinSection = () => {
  const sectionRef = useRef(null);
  const videoBoxRef = useRef(null);

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(
    () => {
      if (!isMobile && videoBoxRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "200% top",
            scrub: 1.5,
            pin: true,
            markers: false, // set to true for debugging
          },
        });

        tl.to(videoBoxRef.current, {
          clipPath: "circle(100% at 50% 50%)",
          ease: "power1.inOut",
        });
      }
    },
    { scope: sectionRef, dependencies: [isMobile] }
  );

  return (
    <section ref={sectionRef} className="vd-pin-section relative h-screen w-full bg-black">
      <div
        ref={videoBoxRef}
        style={{
          clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(6% at 50% 50%)",
        }}
        className="video-box absolute inset-0 h-full w-full"
      >
        <video
          src={pinVideo}
          playsInline
          muted
          loop
          autoPlay
          className="h-full w-full object-cover"
        />

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:scale-100 scale-200">
          <img
            src={circleText}
            alt="Circle text"
            className="spin-circle w-[20vw] md:w-[15vw] animate-spin-slow"
          />
          <div className="play-btn absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <img
              src={playIcon}
              alt="Play"
              className="w-[8vw] md:w-[3vw] ml-[0.5vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPinSection;
