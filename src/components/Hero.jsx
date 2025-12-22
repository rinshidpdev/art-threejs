import React from 'react';
import video from '../assets/hero.webm'
export default function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="text-section">
          <h1 className="hero-title">
            The all-in-one IT solution to turn infrastructure into uptime
          </h1>
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
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 1.875rem;
          }
        }
      `}</style>
    </div>
  );
}