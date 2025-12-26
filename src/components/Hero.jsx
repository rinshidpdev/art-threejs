import React from "react";
import video from "../assets/hero.webm";

export default function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="text-section">
          <div>
            <h1 className="hero-title">
              The all-in-one IT solution to turn infrastructure into uptime
            </h1>

            {/* buttons row */}
            <div className="hero-buttons">
              <button className="btn-primary">
                Talk to our team
              </button>
              <button className="btn-secondary">
                Services
              </button>
            </div>
          </div>
        </div>

        <div className="video-section">
          <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <style jsx>{`
        .hero-container {
          width: 100%;
          min-height: 100vh;
          background-color: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }

        .hero-content {
          width: 100%;
          max-width: 1400px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .text-section {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.2;
          background: linear-gradient(
            90deg,
            #60a5fa 0%,
            #c084fc 25%,
            #f472b6 50%,
            #fb923c 75%,
            #fbbf24 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
        }

        /* buttons */

        .hero-buttons {
          margin-top: 28px;
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-primary {
          padding: 12px 22px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          background: linear-gradient(90deg, #6366f1, #a855f7);
          color: #0b1020;
          box-shadow: 0 18px 45px rgba(59, 130, 246, 0.55);
          transition: transform 0.18s ease, box-shadow 0.18s ease,
            filter 0.18s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 22px 55px rgba(79, 70, 229, 0.75);
          filter: brightness(1.08);
        }

        .btn-secondary {
          padding: 12px 22px;
          border-radius: 999px;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          background: rgba(15, 23, 42, 0.85);
          color: #e5e7eb;
          border: 1px solid rgba(148, 163, 184, 0.4);
          backdrop-filter: blur(10px);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: background 0.18s ease, border-color 0.18s ease,
            transform 0.18s ease;
        }

        .btn-secondary::after {
          content: "→";
          font-size: 0.9rem;
        }

        .btn-secondary:hover {
          background: rgba(30, 64, 175, 0.65);
          border-color: rgba(129, 140, 248, 0.8);
          transform: translateY(-1px);
        }

        .video-section {
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          padding: 0;
          border-radius: 0;
        }

        .hero-video {
          width: 100%;
          max-width: 600px;
          height: auto;
          border-radius: 0;
          box-shadow: none;
          background-color: transparent;
          mix-blend-mode: screen;
          border: none;
          outline: none;
        }

        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .hero-title {
            font-size: 2.5rem;
            text-align: center;
          }

          .hero-buttons {
            justify-content: center;
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 1.875rem;
          }

          .hero-buttons {
            gap: 12px;
          }
        }
      `}</style>
    </div>
  );
}
