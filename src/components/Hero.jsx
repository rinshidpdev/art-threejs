// import React from "react";
// import video from "../assets/hero.webm";

// export default function HeroSection() {
//   return (
//     <div className="hero-container">
//       <div className="hero-content">
//         <div className="text-section">
//           <div>
//             <h1 className="hero-title">
//               The all-in-one IT solution to turn infrastructure into uptime
//             </h1>

//             {/* buttons row */}
//             <div className="hero-buttons">
//               <button className="btn-primary">
//                 Talk to our team
//               </button>
//               <button className="btn-secondary">
//                 Services
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="video-section">
//           <video
//             className="hero-video"
//             autoPlay
//             loop
//             muted
//             playsInline
//           >
//             <source src={video} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       </div>

//       <style jsx>{`
//         .hero-container {
//           width: 100%;
//           min-height: 100vh;
//           background-color: #000000;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 40px 20px;
//         }

//         .hero-content {
//           width: 100%;
//           max-width: 1400px;
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 60px;
//           align-items: center;
//         }

//         .text-section {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .hero-title {
//           font-size: 3.5rem;
//           font-weight: 700;
//           line-height: 1.2;
//           background: linear-gradient(
//             90deg,
//             #60a5fa 0%,
//             #c084fc 25%,
//             #f472b6 50%,
//             #fb923c 75%,
//             #fbbf24 100%
//           );
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           margin: 0;
//         }

//         /* buttons */

//         .hero-buttons {
//           margin-top: 28px;
//           display: flex;
//           gap: 16px;
//           flex-wrap: wrap;
//         }

//         .btn-primary {
//           padding: 12px 22px;
//           border-radius: 999px;
//           border: none;
//           cursor: pointer;
//           font-size: 0.9rem;
//           font-weight: 600;
//           letter-spacing: 0.04em;
//           text-transform: uppercase;
//           background: linear-gradient(90deg, #6366f1, #a855f7);
//           color: #0b1020;
//           box-shadow: 0 18px 45px rgba(59, 130, 246, 0.55);
//           transition: transform 0.18s ease, box-shadow 0.18s ease,
//             filter 0.18s ease;
//         }

//         .btn-primary:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 22px 55px rgba(79, 70, 229, 0.75);
//           filter: brightness(1.08);
//         }

//         .btn-secondary {
//           padding: 12px 22px;
//           border-radius: 999px;
//           cursor: pointer;
//           font-size: 0.9rem;
//           font-weight: 600;
//           letter-spacing: 0.04em;
//           text-transform: uppercase;
//           background: rgba(15, 23, 42, 0.85);
//           color: #e5e7eb;
//           border: 1px solid rgba(148, 163, 184, 0.4);
//           backdrop-filter: blur(10px);
//           display: inline-flex;
//           align-items: center;
//           gap: 6px;
//           transition: background 0.18s ease, border-color 0.18s ease,
//             transform 0.18s ease;
//         }

//         .btn-secondary::after {
//           content: "→";
//           font-size: 0.9rem;
//         }

//         .btn-secondary:hover {
//           background: rgba(30, 64, 175, 0.65);
//           border-color: rgba(129, 140, 248, 0.8);
//           transform: translateY(-1px);
//         }

//         .video-section {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: transparent;
//           padding: 0;
//           border-radius: 0;
//         }

//         .hero-video {
//           width: 100%;
//           max-width: 600px;
//           height: auto;
//           border-radius: 0;
//           box-shadow: none;
//           background-color: transparent;
//           mix-blend-mode: screen;
//           border: none;
//           outline: none;
//         }

//         @media (max-width: 1024px) {
//           .hero-content {
//             grid-template-columns: 1fr;
//             gap: 40px;
//           }

//           .hero-title {
//             font-size: 2.5rem;
//             text-align: center;
//           }

//           .hero-buttons {
//             justify-content: center;
//           }
//         }

//         @media (max-width: 640px) {
//           .hero-title {
//             font-size: 1.875rem;
//           }

//           .hero-buttons {
//             gap: 12px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
// import React from "react";
// import video from "../assets/hero.webm";
// import "./HeroSection.css";

// export default function HeroSection() {
//   return (
//     <div className="hero-container">
//       <div className="hero-content">
//         <div className="text-section">
//           <div>
//             <h1 className="hero-title">
//               The all-in-one IT solution to turn infrastructure into uptime
//             </h1>

//             <div className="hero-buttons">
//               <button className="btn-primary">Talk to our team</button>
//               <button className="btn-secondary">Services</button>
//             </div>
//           </div>
//         </div>

//         <div className="video-section">
//           <video
//             className="hero-video"
//             autoPlay
//             loop
//             muted
//             playsInline
//           >
//             <source src={video} type="video/webm" />
//           </video>
//         </div>
//       </div>
//     </div>
//   );
// }
// import React, { useEffect, useRef } from "react";
// import { gsap } from 'gsap';
// import video from "../assets/hero.webm";
// import "./HeroSection.css";

// export default function HeroSection() {
//   const canvasRef = useRef(null);
//   const containerRef = useRef(null);
//   const animationRef = useRef({
//     width: 0,
//     height: 0,
//     points: [],
//     target: { x: 0, y: 0 },
//     animateHeader: true
//   });

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const container = containerRef.current;
//     if (!canvas || !container) return;

//     const ctx = canvas.getContext('2d');
//     const anim = animationRef.current;

//     const initHeader = () => {
//       anim.width = window.innerWidth;
//       anim.height = window.innerHeight;
//       anim.target = { x: anim.width / 2, y: anim.height / 2 };

//       canvas.width = anim.width;
//       canvas.height = anim.height;

//       anim.points = [];
//       for (let x = 0; x < anim.width; x = x + anim.width / 20) {
//         for (let y = 0; y < anim.height; y = y + anim.height / 20) {
//           const px = x + (Math.random() * anim.width) / 20;
//           const py = y + (Math.random() * anim.height) / 20;
//           const p = { x: px, originX: px, y: py, originY: py };
//           anim.points.push(p);
//         }
//       }

//       for (let i = 0; i < anim.points.length; i++) {
//         const closest = [];
//         const p1 = anim.points[i];
//         for (let j = 0; j < anim.points.length; j++) {
//           const p2 = anim.points[j];
//           if (p1 !== p2) {
//             let placed = false;
//             for (let k = 0; k < 5; k++) {
//               if (!placed) {
//                 if (closest[k] === undefined) {
//                   closest[k] = p2;
//                   placed = true;
//                 }
//               }
//             }

//             for (let k = 0; k < 5; k++) {
//               if (!placed) {
//                 if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
//                   closest[k] = p2;
//                   placed = true;
//                 }
//               }
//             }
//           }
//         }
//         p1.closest = closest;
//       }

//       for (let i in anim.points) {
//         const c = {
//           pos: anim.points[i],
//           radius: 2 + Math.random() * 2,
//           active: 0
//         };
//         anim.points[i].circle = c;
//       }
//     };

//     const getDistance = (p1, p2) => {
//       return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
//     };

//     const drawLines = (p) => {
//       if (!p.active) return;
//       for (let i in p.closest) {
//         ctx.beginPath();
//         ctx.moveTo(p.x, p.y);
//         ctx.lineTo(p.closest[i].x, p.closest[i].y);
//         ctx.strokeStyle = 'rgba(45, 104, 255,' + p.active + ')';
//         ctx.stroke();
//       }
//     };

//     const drawCircle = (circle) => {
//       if (!circle.active) return;
//       ctx.beginPath();
//       ctx.arc(circle.pos.x, circle.pos.y, circle.radius, 0, 2 * Math.PI, false);
//       ctx.fillStyle = 'rgba(45, 104, 255,' + circle.active + ')';
//       ctx.fill();
//     };

//     const shiftPoint = (p) => {
//       gsap.to(p, {
//         duration: 1 + 1 * Math.random(),
//         x: p.originX - 50 + Math.random() * 100,
//         y: p.originY - 50 + Math.random() * 100,
//         ease: 'circ.inOut',
//         onComplete: () => shiftPoint(p)
//       });
//     };

//     const animate = () => {
//       if (anim.animateHeader) {
//         ctx.clearRect(0, 0, anim.width, anim.height);
//         for (let i in anim.points) {
//           const distance = Math.abs(getDistance(anim.target, anim.points[i]));
          
//           if (distance < 4000) {
//             anim.points[i].active = 0.3;
//             anim.points[i].circle.active = 0.6;
//           } else if (distance < 20000) {
//             anim.points[i].active = 0.1;
//             anim.points[i].circle.active = 0.3;
//           } else if (distance < 40000) {
//             anim.points[i].active = 0.02;
//             anim.points[i].circle.active = 0.1;
//           } else {
//             anim.points[i].active = 0;
//             anim.points[i].circle.active = 0;
//           }

//           drawLines(anim.points[i]);
//           drawCircle(anim.points[i].circle);
//         }
//       }
//       requestAnimationFrame(animate);
//     };

//     const handleMouseMove = (e) => {
//       let posx = 0, posy = 0;
//       if (e.pageX || e.pageY) {
//         posx = e.pageX;
//         posy = e.pageY;
//       } else if (e.clientX || e.clientY) {
//         posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
//         posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
//       }
//       anim.target.x = posx;
//       anim.target.y = posy;
//     };

//     const handleResize = () => {
//       anim.width = window.innerWidth;
//       anim.height = window.innerHeight;
//       canvas.width = anim.width;
//       canvas.height = anim.height;
//     };

//     initHeader();
//     animate();
//     for (let i in anim.points) {
//       shiftPoint(anim.points[i]);
//     }

//     if (!('ontouchstart' in window)) {
//       window.addEventListener('mousemove', handleMouseMove);
//     }
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div className="hero-container" ref={containerRef}>
//       {/* Animated Canvas Background */}
//       <canvas ref={canvasRef} className="hero-canvas" />

//       <div className="hero-content">
//         <div className="text-section">
//           <div>
//             <h1 className="hero-title">
//               The all-in-one IT solution to turn infrastructure into uptime
//             </h1>

//             <div className="hero-buttons">
//               <button className="btn-primary">Talk to our team</button>
//               <button className="btn-secondary">Services</button>
//             </div>
//           </div>
//         </div>

//         <div className="video-section">
//           <video
//             className="hero-video"
//             autoPlay
//             loop
//             muted
//             playsInline
//           >
//             <source src={video} type="video/webm" />
//           </video>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useRef } from "react";
// import { gsap } from 'gsap';
// import * as THREE from 'three';

// export default function HeroSection() {
//   const canvasRef = useRef(null);
//   const containerRef = useRef(null);
//   const planetContainerRef = useRef(null);
//   const animationRef = useRef({
//     width: 0,
//     height: 0,
//     points: [],
//     target: { x: 0, y: 0 },
//     animateHeader: true
//   });
//   const threeRefs = useRef({
//     renderer: null,
//     scene: null,
//     animationId: null
//   });

//   // Three.js Planet Setup
//   useEffect(() => {
//     if (!planetContainerRef.current) return;

//     const vertexShader = `
//       vec3 mod289(vec3 x) {
//         return x - floor(x * (1.0 / 289.0)) * 289.0;
//       }
//       vec4 mod289(vec4 x) {
//         return x - floor(x * (1.0 / 289.0)) * 289.0;
//       }
//       vec4 permute(vec4 x) {
//         return mod289(((x*34.0)+1.0)*x);
//       }
//       vec4 taylorInvSqrt(vec4 r) {
//         return 1.79284291400159 - 0.85373472095314 * r;
//       }
//       vec3 fade(vec3 t) {
//         return t*t*t*(t*(t*6.0-15.0)+10.0);
//       }

//       float cnoise(vec3 P) {
//         vec3 Pi0 = floor(P);
//         vec3 Pi1 = Pi0 + vec3(1.0);
//         Pi0 = mod289(Pi0);
//         Pi1 = mod289(Pi1);
//         vec3 Pf0 = fract(P);
//         vec3 Pf1 = Pf0 - vec3(1.0);
//         vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
//         vec4 iy = vec4(Pi0.yy, Pi1.yy);
//         vec4 iz0 = Pi0.zzzz;
//         vec4 iz1 = Pi1.zzzz;
//         vec4 ixy = permute(permute(ix) + iy);
//         vec4 ixy0 = permute(ixy + iz0);
//         vec4 ixy1 = permute(ixy + iz1);
//         vec4 gx0 = ixy0 * (1.0 / 7.0);
//         vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
//         gx0 = fract(gx0);
//         vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
//         vec4 sz0 = step(gz0, vec4(0.0));
//         gx0 -= sz0 * (step(0.0, gx0) - 0.5);
//         gy0 -= sz0 * (step(0.0, gy0) - 0.5);
//         vec4 gx1 = ixy1 * (1.0 / 7.0);
//         vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
//         gx1 = fract(gx1);
//         vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
//         vec4 sz1 = step(gz1, vec4(0.0));
//         gx1 -= sz1 * (step(0.0, gx1) - 0.5);
//         gy1 -= sz1 * (step(0.0, gy1) - 0.5);
//         vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
//         vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
//         vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
//         vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
//         vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
//         vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
//         vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
//         vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
//         vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
//         g000 *= norm0.x;
//         g010 *= norm0.y;
//         g100 *= norm0.z;
//         g110 *= norm0.w;
//         vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
//         g001 *= norm1.x;
//         g011 *= norm1.y;
//         g101 *= norm1.z;
//         g111 *= norm1.w;
//         float n000 = dot(g000, Pf0);
//         float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
//         float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
//         float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
//         float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
//         float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
//         float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
//         float n111 = dot(g111, Pf1);
//         vec3 fade_xyz = fade(Pf0);
//         vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
//         vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
//         float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
//         return 2.2 * n_xyz;
//       }

//       float pnoise(vec3 P, vec3 rep) {
//         vec3 Pi0 = mod(floor(P), rep);
//         vec3 Pi1 = mod(Pi0 + vec3(1.0), rep);
//         Pi0 = mod289(Pi0);
//         Pi1 = mod289(Pi1);
//         vec3 Pf0 = fract(P);
//         vec3 Pf1 = Pf0 - vec3(1.0);
//         vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
//         vec4 iy = vec4(Pi0.yy, Pi1.yy);
//         vec4 iz0 = Pi0.zzzz;
//         vec4 iz1 = Pi1.zzzz;
//         vec4 ixy = permute(permute(ix) + iy);
//         vec4 ixy0 = permute(ixy + iz0);
//         vec4 ixy1 = permute(ixy + iz1);
//         vec4 gx0 = ixy0 * (1.0 / 7.0);
//         vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
//         gx0 = fract(gx0);
//         vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
//         vec4 sz0 = step(gz0, vec4(0.0));
//         gx0 -= sz0 * (step(0.0, gx0) - 0.5);
//         gy0 -= sz0 * (step(0.0, gy0) - 0.5);
//         vec4 gx1 = ixy1 * (1.0 / 7.0);
//         vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
//         gx1 = fract(gx1);
//         vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
//         vec4 sz1 = step(gz1, vec4(0.0));
//         gx1 -= sz1 * (step(0.0, gx1) - 0.5);
//         gy1 -= sz1 * (step(0.0, gy1) - 0.5);
//         vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
//         vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
//         vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
//         vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
//         vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
//         vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
//         vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
//         vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
//         vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
//         g000 *= norm0.x;
//         g010 *= norm0.y;
//         g100 *= norm0.z;
//         g110 *= norm0.w;
//         vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
//         g001 *= norm1.x;
//         g011 *= norm1.y;
//         g101 *= norm1.z;
//         g111 *= norm1.w;
//         float n000 = dot(g000, Pf0);
//         float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
//         float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
//         float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
//         float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
//         float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
//         float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
//         float n111 = dot(g111, Pf1);
//         vec3 fade_xyz = fade(Pf0);
//         vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
//         vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
//         float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
//         return 2.2 * n_xyz;
//       }

//       float turbulence(vec3 p) {
//         float w = 100.0;
//         float t = -.5;
//         for (float f = 1.0 ; f <= 10.0 ; f++ ){
//           float power = pow(2.0, f);
//           t += abs(pnoise(vec3(power * p), vec3(10.0, 10.0, 10.0)) / power);
//         }
//         return t;
//       }

//       uniform float time;
//       varying vec2 vUv;
//       varying vec3 vNormal;
//       varying vec3 newPosition;
//       varying float noise;

//       void main() {
//         vUv = uv;
//         vNormal = normalize(normalMatrix * normal);
        
//         noise = turbulence(0.4150 * position + normal * ((time/2.) * 2.2));
//         vec3 displacement = vec3((position.x) * noise, position.y * noise, position.z * noise);
//         newPosition = (position + normal) + displacement;
        
//         gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
//       }
//     `;

//     const fragmentShader = `
//       uniform float time;
//       varying vec2 vUv;
//       varying vec3 newPosition;
//       varying float noise;

//       void main() {
//         vec3 color = vec3(vUv * (.2 - 2. * noise), 1.0);
//         vec3 finalColors = vec3(color.b * 1., color.r, color.r);
//         vec4 diffuseColor = vec4(cos(finalColors * noise * 3.), 1.);
        
//         gl_FragColor = diffuseColor;
//       }
//     `;

//     const container = planetContainerRef.current;
//     const width = container.clientWidth;
//     const height = container.clientHeight;

//     const renderer = new THREE.WebGLRenderer({ 
//       antialias: true,
//       alpha: true
//     });
//     renderer.setClearColor(0x000000, 0);
//     renderer.setSize(width, height);
//     container.appendChild(renderer.domElement);
//     threeRefs.current.renderer = renderer;

//     const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 5000);
//     camera.position.z = 52;

//     const scene = new THREE.Scene();
//     threeRefs.current.scene = scene;

//     const light = new THREE.DirectionalLight(0xffffff, 0.6);
//     light.position.set(100, 100, 200);
//     scene.add(light);

//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
//     scene.add(ambientLight);

//     const uniforms = {
//       time: { value: 0 }
//     };

//     const material = new THREE.ShaderMaterial({
//       uniforms: uniforms,
//       vertexShader: vertexShader,
//       fragmentShader: fragmentShader,
//       transparent: true
//     });

//     const geometry = new THREE.SphereGeometry(20, 150, 150);
//     const planet = new THREE.Mesh(geometry, material);
//     scene.add(planet);

//     const start = Date.now();
//     function animate() {
//       uniforms.time.value = 0.00005 * (Date.now() - start);

//       planet.rotation.y += 0.002;
//       planet.rotation.z += 0.003;
//       planet.rotation.x += 0.001;

//       renderer.render(scene, camera);
//       threeRefs.current.animationId = requestAnimationFrame(animate);
//     }
//     animate();

//     const handleResize = () => {
//       const w = container.clientWidth;
//       const h = container.clientHeight;
//       camera.aspect = w / h;
//       camera.updateProjectionMatrix();
//       renderer.setSize(w, h);
//     };
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       if (threeRefs.current.animationId) {
//         cancelAnimationFrame(threeRefs.current.animationId);
//       }
//       if (container && renderer.domElement) {
//         container.removeChild(renderer.domElement);
//       }
//       geometry.dispose();
//       material.dispose();
//       renderer.dispose();
//     };
//   }, []);

//   // Canvas Animation Setup
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const container = containerRef.current;
//     if (!canvas || !container) return;

//     const ctx = canvas.getContext('2d');
//     const anim = animationRef.current;

//     const initHeader = () => {
//       anim.width = window.innerWidth;
//       anim.height = window.innerHeight;
//       anim.target = { x: anim.width / 2, y: anim.height / 2 };

//       canvas.width = anim.width;
//       canvas.height = anim.height;

//       anim.points = [];
//       for (let x = 0; x < anim.width; x = x + anim.width / 20) {
//         for (let y = 0; y < anim.height; y = y + anim.height / 20) {
//           const px = x + (Math.random() * anim.width) / 20;
//           const py = y + (Math.random() * anim.height) / 20;
//           const p = { x: px, originX: px, y: py, originY: py };
//           anim.points.push(p);
//         }
//       }

//       for (let i = 0; i < anim.points.length; i++) {
//         const closest = [];
//         const p1 = anim.points[i];
//         for (let j = 0; j < anim.points.length; j++) {
//           const p2 = anim.points[j];
//           if (p1 !== p2) {
//             let placed = false;
//             for (let k = 0; k < 5; k++) {
//               if (!placed) {
//                 if (closest[k] === undefined) {
//                   closest[k] = p2;
//                   placed = true;
//                 }
//               }
//             }

//             for (let k = 0; k < 5; k++) {
//               if (!placed) {
//                 if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
//                   closest[k] = p2;
//                   placed = true;
//                 }
//               }
//             }
//           }
//         }
//         p1.closest = closest;
//       }

//       for (let i in anim.points) {
//         const c = {
//           pos: anim.points[i],
//           radius: 2 + Math.random() * 2,
//           active: 0
//         };
//         anim.points[i].circle = c;
//       }
//     };

//     const getDistance = (p1, p2) => {
//       return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
//     };

//     const drawLines = (p) => {
//       if (!p.active) return;
//       for (let i in p.closest) {
//         ctx.beginPath();
//         ctx.moveTo(p.x, p.y);
//         ctx.lineTo(p.closest[i].x, p.closest[i].y);
//         ctx.strokeStyle = 'rgba(45, 104, 255,' + p.active + ')';
//         ctx.stroke();
//       }
//     };

//     const drawCircle = (circle) => {
//       if (!circle.active) return;
//       ctx.beginPath();
//       ctx.arc(circle.pos.x, circle.pos.y, circle.radius, 0, 2 * Math.PI, false);
//       ctx.fillStyle = 'rgba(45, 104, 255,' + circle.active + ')';
//       ctx.fill();
//     };

//     const shiftPoint = (p) => {
//       gsap.to(p, {
//         duration: 1 + 1 * Math.random(),
//         x: p.originX - 50 + Math.random() * 100,
//         y: p.originY - 50 + Math.random() * 100,
//         ease: 'circ.inOut',
//         onComplete: () => shiftPoint(p)
//       });
//     };

//     const animate = () => {
//       if (anim.animateHeader) {
//         ctx.clearRect(0, 0, anim.width, anim.height);
//         for (let i in anim.points) {
//           const distance = Math.abs(getDistance(anim.target, anim.points[i]));
          
//           if (distance < 4000) {
//             anim.points[i].active = 0.3;
//             anim.points[i].circle.active = 0.6;
//           } else if (distance < 20000) {
//             anim.points[i].active = 0.1;
//             anim.points[i].circle.active = 0.3;
//           } else if (distance < 40000) {
//             anim.points[i].active = 0.02;
//             anim.points[i].circle.active = 0.1;
//           } else {
//             anim.points[i].active = 0;
//             anim.points[i].circle.active = 0;
//           }

//           drawLines(anim.points[i]);
//           drawCircle(anim.points[i].circle);
//         }
//       }
//       requestAnimationFrame(animate);
//     };

//     const handleMouseMove = (e) => {
//       let posx = 0, posy = 0;
//       if (e.pageX || e.pageY) {
//         posx = e.pageX;
//         posy = e.pageY;
//       } else if (e.clientX || e.clientY) {
//         posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
//         posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
//       }
//       anim.target.x = posx;
//       anim.target.y = posy;
//     };

//     const handleResize = () => {
//       anim.width = window.innerWidth;
//       anim.height = window.innerHeight;
//       canvas.width = anim.width;
//       canvas.height = anim.height;
//     };

//     initHeader();
//     animate();
//     for (let i in anim.points) {
//       shiftPoint(anim.points[i]);
//     }

//     if (!('ontouchstart' in window)) {
//       window.addEventListener('mousemove', handleMouseMove);
//     }
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div style={styles.heroContainer} ref={containerRef}>
//       <canvas ref={canvasRef} style={styles.heroCanvas} />

//       <div style={styles.heroContent}>
//         <div style={styles.textSection}>
//           <div>
//             <h1 style={styles.heroTitle}>
//               The all-in-one IT solution to turn infrastructure into uptime
//             </h1>

//             <div style={styles.heroButtons}>
//               <button style={styles.btnPrimary}>Talk to our team</button>
//               <button style={styles.btnSecondary}>
//                 Services <span style={styles.arrow}>→</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div style={styles.planetSection}>
//           <div ref={planetContainerRef} style={styles.planetContainer} />
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   heroContainer: {
//     position: 'relative',
//     width: '100%',
//     minHeight: '100vh',
//     backgroundColor: '#000000',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '40px 20px',
//     overflow: 'hidden'
//   },
//   heroCanvas: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     zIndex: 1,
//     pointerEvents: 'none'
//   },
//   heroContent: {
//     position: 'relative',
//     zIndex: 10,
//     width: '100%',
//     maxWidth: '1400px',
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr',
//     gap: '60px',
//     alignItems: 'center'
//   },
//   textSection: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   heroTitle: {
//     fontSize: '3.5rem',
//     fontWeight: 700,
//     lineHeight: 1.2,
//     background: 'linear-gradient(90deg, #60a5fa 0%, #c084fc 25%, #f472b6 50%, #fb923c 75%, #fbbf24 100%)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//     backgroundClip: 'text',
//     margin: 0
//   },
//   heroButtons: {
//     marginTop: '28px',
//     display: 'flex',
//     gap: '16px',
//     flexWrap: 'wrap'
//   },
//   btnPrimary: {
//     padding: '12px 22px',
//     borderRadius: '999px',
//     border: 'none',
//     cursor: 'pointer',
//     fontSize: '0.9rem',
//     fontWeight: 600,
//     letterSpacing: '0.04em',
//     textTransform: 'uppercase',
//     background: 'linear-gradient(90deg, #6366f1, #a855f7)',
//     color: '#0b1020',
//     boxShadow: '0 18px 45px rgba(59, 130, 246, 0.55)',
//     transition: 'transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease'
//   },
//   btnSecondary: {
//     padding: '12px 22px',
//     borderRadius: '999px',
//     cursor: 'pointer',
//     fontSize: '0.9rem',
//     fontWeight: 600,
//     letterSpacing: '0.04em',
//     textTransform: 'uppercase',
//     background: 'rgba(15, 23, 42, 0.85)',
//     color: '#e5e7eb',
//     border: '1px solid rgba(148, 163, 184, 0.4)',
//     backdropFilter: 'blur(10px)',
//     display: 'inline-flex',
//     alignItems: 'center',
//     gap: '6px',
//     transition: 'background 0.18s ease, border-color 0.18s ease, transform 0.18s ease'
//   },
//   arrow: {
//     fontSize: '0.9rem'
//   },
//   planetSection: {
//     position: 'relative',
//     zIndex: 10,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//     height: '600px'
//   },
//   planetContainer: {
//     width: '100%',
//     height: '100%',
//     position: 'relative'
//   }
// };


// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from 'gsap';
// import * as THREE from 'three';

// export default function HeroSection() {
//   const canvasRef = useRef(null);
//   const containerRef = useRef(null);
//   const planetContainerRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const animationRef = useRef({
//     width: 0,
//     height: 0,
//     points: [],
//     target: { x: 0, y: 0 },
//     animateHeader: true
//   });
//   const threeRefs = useRef({
//     renderer: null,
//     scene: null,
//     animationId: null
//   });

//   // Check if mobile
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 1024);
//     };
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   // Three.js Planet Setup
//   useEffect(() => {
//     if (!planetContainerRef.current) return;

//     const vertexShader = `
//       vec3 mod289(vec3 x) {
//         return x - floor(x * (1.0 / 289.0)) * 289.0;
//       }
//       vec4 mod289(vec4 x) {
//         return x - floor(x * (1.0 / 289.0)) * 289.0;
//       }
//       vec4 permute(vec4 x) {
//         return mod289(((x*34.0)+1.0)*x);
//       }
//       vec4 taylorInvSqrt(vec4 r) {
//         return 1.79284291400159 - 0.85373472095314 * r;
//       }
//       vec3 fade(vec3 t) {
//         return t*t*t*(t*(t*6.0-15.0)+10.0);
//       }

//       float cnoise(vec3 P) {
//         vec3 Pi0 = floor(P);
//         vec3 Pi1 = Pi0 + vec3(1.0);
//         Pi0 = mod289(Pi0);
//         Pi1 = mod289(Pi1);
//         vec3 Pf0 = fract(P);
//         vec3 Pf1 = Pf0 - vec3(1.0);
//         vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
//         vec4 iy = vec4(Pi0.yy, Pi1.yy);
//         vec4 iz0 = Pi0.zzzz;
//         vec4 iz1 = Pi1.zzzz;
//         vec4 ixy = permute(permute(ix) + iy);
//         vec4 ixy0 = permute(ixy + iz0);
//         vec4 ixy1 = permute(ixy + iz1);
//         vec4 gx0 = ixy0 * (1.0 / 7.0);
//         vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
//         gx0 = fract(gx0);
//         vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
//         vec4 sz0 = step(gz0, vec4(0.0));
//         gx0 -= sz0 * (step(0.0, gx0) - 0.5);
//         gy0 -= sz0 * (step(0.0, gy0) - 0.5);
//         vec4 gx1 = ixy1 * (1.0 / 7.0);
//         vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
//         gx1 = fract(gx1);
//         vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
//         vec4 sz1 = step(gz1, vec4(0.0));
//         gx1 -= sz1 * (step(0.0, gx1) - 0.5);
//         gy1 -= sz1 * (step(0.0, gy1) - 0.5);
//         vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
//         vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
//         vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
//         vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
//         vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
//         vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
//         vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
//         vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
//         vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
//         g000 *= norm0.x;
//         g010 *= norm0.y;
//         g100 *= norm0.z;
//         g110 *= norm0.w;
//         vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
//         g001 *= norm1.x;
//         g011 *= norm1.y;
//         g101 *= norm1.z;
//         g111 *= norm1.w;
//         float n000 = dot(g000, Pf0);
//         float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
//         float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
//         float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
//         float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
//         float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
//         float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
//         float n111 = dot(g111, Pf1);
//         vec3 fade_xyz = fade(Pf0);
//         vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
//         vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
//         float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
//         return 2.2 * n_xyz;
//       }

//       float pnoise(vec3 P, vec3 rep) {
//         vec3 Pi0 = mod(floor(P), rep);
//         vec3 Pi1 = mod(Pi0 + vec3(1.0), rep);
//         Pi0 = mod289(Pi0);
//         Pi1 = mod289(Pi1);
//         vec3 Pf0 = fract(P);
//         vec3 Pf1 = Pf0 - vec3(1.0);
//         vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
//         vec4 iy = vec4(Pi0.yy, Pi1.yy);
//         vec4 iz0 = Pi0.zzzz;
//         vec4 iz1 = Pi1.zzzz;
//         vec4 ixy = permute(permute(ix) + iy);
//         vec4 ixy0 = permute(ixy + iz0);
//         vec4 ixy1 = permute(ixy + iz1);
//         vec4 gx0 = ixy0 * (1.0 / 7.0);
//         vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
//         gx0 = fract(gx0);
//         vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
//         vec4 sz0 = step(gz0, vec4(0.0));
//         gx0 -= sz0 * (step(0.0, gx0) - 0.5);
//         gy0 -= sz0 * (step(0.0, gy0) - 0.5);
//         vec4 gx1 = ixy1 * (1.0 / 7.0);
//         vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
//         gx1 = fract(gx1);
//         vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
//         vec4 sz1 = step(gz1, vec4(0.0));
//         gx1 -= sz1 * (step(0.0, gx1) - 0.5);
//         gy1 -= sz1 * (step(0.0, gy1) - 0.5);
//         vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
//         vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
//         vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
//         vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
//         vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
//         vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
//         vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
//         vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
//         vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
//         g000 *= norm0.x;
//         g010 *= norm0.y;
//         g100 *= norm0.z;
//         g110 *= norm0.w;
//         vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
//         g001 *= norm1.x;
//         g011 *= norm1.y;
//         g101 *= norm1.z;
//         g111 *= norm1.w;
//         float n000 = dot(g000, Pf0);
//         float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
//         float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
//         float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
//         float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
//         float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
//         float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
//         float n111 = dot(g111, Pf1);
//         vec3 fade_xyz = fade(Pf0);
//         vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
//         vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
//         float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
//         return 2.2 * n_xyz;
//       }

//       float turbulence(vec3 p) {
//         float w = 100.0;
//         float t = -.5;
//         for (float f = 1.0 ; f <= 10.0 ; f++ ){
//           float power = pow(2.0, f);
//           t += abs(pnoise(vec3(power * p), vec3(10.0, 10.0, 10.0)) / power);
//         }
//         return t;
//       }

//       uniform float time;
//       varying vec2 vUv;
//       varying vec3 vNormal;
//       varying vec3 newPosition;
//       varying float noise;

//       void main() {
//         vUv = uv;
//         vNormal = normalize(normalMatrix * normal);
        
//         noise = turbulence(0.4150 * position + normal * ((time/2.) * 2.2));
//         vec3 displacement = vec3((position.x) * noise, position.y * noise, position.z * noise);
//         newPosition = (position + normal) + displacement;
        
//         gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
//       }
//     `;

//     const fragmentShader = `
//       uniform float time;
//       varying vec2 vUv;
//       varying vec3 newPosition;
//       varying float noise;

//       void main() {
//         vec3 color = vec3(vUv * (.2 - 2. * noise), 1.0);
//         vec3 finalColors = vec3(color.b * 1., color.r, color.r);
//         vec4 diffuseColor = vec4(cos(finalColors * noise * 3.), 1.);
        
//         gl_FragColor = diffuseColor;
//       }
//     `;

//     const container = planetContainerRef.current;
    
//     // Small delay to ensure container has dimensions
//     setTimeout(() => {
//       const width = container.clientWidth || window.innerWidth;
//       const height = container.clientHeight || 400;

//       if (width === 0 || height === 0) return;

//       const renderer = new THREE.WebGLRenderer({ 
//         antialias: true,
//         alpha: true
//       });
//       renderer.setClearColor(0x000000, 0);
//       renderer.setSize(width, height);
//       renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//       container.appendChild(renderer.domElement);
//       threeRefs.current.renderer = renderer;

//       const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 5000);
//       camera.position.z = 52;

//       const scene = new THREE.Scene();
//       threeRefs.current.scene = scene;

//       const light = new THREE.DirectionalLight(0xffffff, 0.6);
//       light.position.set(100, 100, 200);
//       scene.add(light);

//       const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
//       scene.add(ambientLight);

//       const uniforms = {
//         time: { value: 0 }
//       };

//       const material = new THREE.ShaderMaterial({
//         uniforms: uniforms,
//         vertexShader: vertexShader,
//         fragmentShader: fragmentShader,
//         transparent: true
//       });

//       const geometry = new THREE.SphereGeometry(20, 150, 150);
//       const planet = new THREE.Mesh(geometry, material);
//       scene.add(planet);

//       const start = Date.now();
//       function animate() {
//         uniforms.time.value = 0.00005 * (Date.now() - start);

//         planet.rotation.y += 0.002;
//         planet.rotation.z += 0.003;
//         planet.rotation.x += 0.001;

//         renderer.render(scene, camera);
//         threeRefs.current.animationId = requestAnimationFrame(animate);
//       }
//       animate();

//       const handleResize = () => {
//         const w = container.clientWidth || window.innerWidth;
//         const h = container.clientHeight || 400;
//         camera.aspect = w / h;
//         camera.updateProjectionMatrix();
//         renderer.setSize(w, h);
//         renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//       };
//       window.addEventListener('resize', handleResize);

//       threeRefs.current.cleanup = () => {
//         window.removeEventListener('resize', handleResize);
//         if (threeRefs.current.animationId) {
//           cancelAnimationFrame(threeRefs.current.animationId);
//         }
//         if (container && renderer.domElement && container.contains(renderer.domElement)) {
//           container.removeChild(renderer.domElement);
//         }
//         geometry.dispose();
//         material.dispose();
//         renderer.dispose();
//       };
//     }, 100);

//     return () => {
//       if (threeRefs.current.cleanup) {
//         threeRefs.current.cleanup();
//       }
//     };
//   }, []);

//   // Canvas Animation Setup
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const container = containerRef.current;
//     if (!canvas || !container) return;

//     const ctx = canvas.getContext('2d');
//     const anim = animationRef.current;

//     const initHeader = () => {
//       anim.width = window.innerWidth;
//       anim.height = window.innerHeight;
//       anim.target = { x: anim.width / 2, y: anim.height / 2 };

//       canvas.width = anim.width;
//       canvas.height = anim.height;

//       anim.points = [];
//       for (let x = 0; x < anim.width; x = x + anim.width / 20) {
//         for (let y = 0; y < anim.height; y = y + anim.height / 20) {
//           const px = x + (Math.random() * anim.width) / 20;
//           const py = y + (Math.random() * anim.height) / 20;
//           const p = { x: px, originX: px, y: py, originY: py };
//           anim.points.push(p);
//         }
//       }

//       for (let i = 0; i < anim.points.length; i++) {
//         const closest = [];
//         const p1 = anim.points[i];
//         for (let j = 0; j < anim.points.length; j++) {
//           const p2 = anim.points[j];
//           if (p1 !== p2) {
//             let placed = false;
//             for (let k = 0; k < 5; k++) {
//               if (!placed) {
//                 if (closest[k] === undefined) {
//                   closest[k] = p2;
//                   placed = true;
//                 }
//               }
//             }

//             for (let k = 0; k < 5; k++) {
//               if (!placed) {
//                 if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
//                   closest[k] = p2;
//                   placed = true;
//                 }
//               }
//             }
//           }
//         }
//         p1.closest = closest;
//       }

//       for (let i in anim.points) {
//         const c = {
//           pos: anim.points[i],
//           radius: 2 + Math.random() * 2,
//           active: 0
//         };
//         anim.points[i].circle = c;
//       }
//     };

//     const getDistance = (p1, p2) => {
//       return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
//     };

//     const drawLines = (p) => {
//       if (!p.active) return;
//       for (let i in p.closest) {
//         ctx.beginPath();
//         ctx.moveTo(p.x, p.y);
//         ctx.lineTo(p.closest[i].x, p.closest[i].y);
//         ctx.strokeStyle = 'rgba(45, 104, 255,' + p.active + ')';
//         ctx.stroke();
//       }
//     };

//     const drawCircle = (circle) => {
//       if (!circle.active) return;
//       ctx.beginPath();
//       ctx.arc(circle.pos.x, circle.pos.y, circle.radius, 0, 2 * Math.PI, false);
//       ctx.fillStyle = 'rgba(45, 104, 255,' + circle.active + ')';
//       ctx.fill();
//     };

//     const shiftPoint = (p) => {
//       gsap.to(p, {
//         duration: 1 + 1 * Math.random(),
//         x: p.originX - 50 + Math.random() * 100,
//         y: p.originY - 50 + Math.random() * 100,
//         ease: 'circ.inOut',
//         onComplete: () => shiftPoint(p)
//       });
//     };

//     const animate = () => {
//       if (anim.animateHeader) {
//         ctx.clearRect(0, 0, anim.width, anim.height);
//         for (let i in anim.points) {
//           const distance = Math.abs(getDistance(anim.target, anim.points[i]));
          
//           if (distance < 4000) {
//             anim.points[i].active = 0.3;
//             anim.points[i].circle.active = 0.6;
//           } else if (distance < 20000) {
//             anim.points[i].active = 0.1;
//             anim.points[i].circle.active = 0.3;
//           } else if (distance < 40000) {
//             anim.points[i].active = 0.02;
//             anim.points[i].circle.active = 0.1;
//           } else {
//             anim.points[i].active = 0;
//             anim.points[i].circle.active = 0;
//           }

//           drawLines(anim.points[i]);
//           drawCircle(anim.points[i].circle);
//         }
//       }
//       requestAnimationFrame(animate);
//     };

//     const handleMouseMove = (e) => {
//       let posx = 0, posy = 0;
//       if (e.pageX || e.pageY) {
//         posx = e.pageX;
//         posy = e.pageY;
//       } else if (e.clientX || e.clientY) {
//         posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
//         posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
//       }
//       anim.target.x = posx;
//       anim.target.y = posy;
//     };

//     const handleResize = () => {
//       anim.width = window.innerWidth;
//       anim.height = window.innerHeight;
//       canvas.width = anim.width;
//       canvas.height = anim.height;
//     };

//     initHeader();
//     animate();
//     for (let i in anim.points) {
//       shiftPoint(anim.points[i]);
//     }

//     if (!('ontouchstart' in window)) {
//       window.addEventListener('mousemove', handleMouseMove);
//     }
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const getResponsiveStyles = () => ({
//     ...styles,
//     heroContent: {
//       ...styles.heroContent,
//       gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
//       gap: isMobile ? '40px' : '60px'
//     },
//     heroTitle: {
//       ...styles.heroTitle,
//       fontSize: isMobile ? (window.innerWidth <= 640 ? '1.875rem' : '2.5rem') : '3.5rem',
//       textAlign: isMobile ? 'center' : 'left'
//     },
//     heroButtons: {
//       ...styles.heroButtons,
//       justifyContent: isMobile ? 'center' : 'flex-start'
//     },
//     planetSection: {
//       ...styles.planetSection,
//       height: isMobile ? (window.innerWidth <= 640 ? '400px' : '500px') : '600px',
//       minHeight: isMobile ? '400px' : '600px'
//     },
//     planetContainer: {
//       ...styles.planetContainer,
//       minHeight: isMobile ? '400px' : '600px'
//     }
//   });

//   const responsiveStyles = getResponsiveStyles();

//   return (
//     <div style={responsiveStyles.heroContainer} ref={containerRef}>
//       <canvas ref={canvasRef} style={responsiveStyles.heroCanvas} />

//       <div style={responsiveStyles.heroContent}>
//         <div style={responsiveStyles.textSection}>
//           <div>
//             <h1 style={responsiveStyles.heroTitle}>
//               The all-in-one IT solution to turn infrastructure into uptime
//             </h1>

//             <div style={responsiveStyles.heroButtons}>
//               <button style={responsiveStyles.btnPrimary}>Talk to our team</button>
//               <button style={responsiveStyles.btnSecondary}>
//                 Services <span style={responsiveStyles.arrow}>→</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div style={responsiveStyles.planetSection}>
//           <div ref={planetContainerRef} style={responsiveStyles.planetContainer} />
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   heroContainer: {
//     position: 'relative',
//     width: '100%',
//     minHeight: '100vh',
//     backgroundColor: '#000000',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '40px 20px',
//     overflow: 'hidden'
//   },
//   heroCanvas: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     zIndex: 1,
//     pointerEvents: 'none'
//   },
//   heroContent: {
//     position: 'relative',
//     zIndex: 10,
//     width: '100%',
//     maxWidth: '1400px',
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr',
//     gap: '60px',
//     alignItems: 'center'
//   },
//   textSection: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   heroTitle: {
//     fontSize: '3.5rem',
//     fontWeight: 700,
//     lineHeight: 1.2,
//     background: 'linear-gradient(90deg, #60a5fa 0%, #c084fc 25%, #f472b6 50%, #fb923c 75%, #fbbf24 100%)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//     backgroundClip: 'text',
//     margin: 0
//   },
//   heroButtons: {
//     marginTop: '28px',
//     display: 'flex',
//     gap: '16px',
//     flexWrap: 'wrap'
//   },
//   btnPrimary: {
//     padding: '12px 22px',
//     borderRadius: '999px',
//     border: 'none',
//     cursor: 'pointer',
//     fontSize: '0.9rem',
//     fontWeight: 600,
//     letterSpacing: '0.04em',
//     textTransform: 'uppercase',
//     background: 'linear-gradient(90deg, #6366f1, #a855f7)',
//     color: '#0b1020',
//     boxShadow: '0 18px 45px rgba(59, 130, 246, 0.55)',
//     transition: 'transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease'
//   },
//   btnSecondary: {
//     padding: '12px 22px',
//     borderRadius: '999px',
//     cursor: 'pointer',
//     fontSize: '0.9rem',
//     fontWeight: 600,
//     letterSpacing: '0.04em',
//     textTransform: 'uppercase',
//     background: 'rgba(15, 23, 42, 0.85)',
//     color: '#e5e7eb',
//     border: '1px solid rgba(148, 163, 184, 0.4)',
//     backdropFilter: 'blur(10px)',
//     display: 'inline-flex',
//     alignItems: 'center',
//     gap: '6px',
//     transition: 'background 0.18s ease, border-color 0.18s ease, transform 0.18s ease'
//   },
//   arrow: {
//     fontSize: '0.9rem'
//   },
//   planetSection: {
//     position: 'relative',
//     zIndex: 10,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//     height: '600px',
//     minHeight: '600px'
//   },
//   planetContainer: {
//     width: '100%',
//     height: '100%',
//     minHeight: '600px',
//     position: 'relative'
//   }
// };

// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from 'gsap';
// import * as THREE from 'three';

// export default function HeroSection() {
//   const canvasRef = useRef(null);
//   const containerRef = useRef(null);
//   const planetContainerRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const animationRef = useRef({
//     width: 0,
//     height: 0,
//     points: [],
//     target: { x: 0, y: 0 },
//     animateHeader: true
//   });
//   const threeRefs = useRef({
//     renderer: null,
//     scene: null,
//     camera: null,
//     planet: null,
//     animationId: null,
//     initialized: false
//   });

//   // Check if mobile
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 1024);
//     };
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   // Three.js Planet Setup
//   useEffect(() => {
//     if (!planetContainerRef.current || threeRefs.current.initialized) return;
//     threeRefs.current.initialized = true;

//     const vertexShader = `
//       vec3 mod289(vec3 x) {
//         return x - floor(x * (1.0 / 289.0)) * 289.0;
//       }
//       vec4 mod289(vec4 x) {
//         return x - floor(x * (1.0 / 289.0)) * 289.0;
//       }
//       vec4 permute(vec4 x) {
//         return mod289(((x*34.0)+1.0)*x);
//       }
//       vec4 taylorInvSqrt(vec4 r) {
//         return 1.79284291400159 - 0.85373472095314 * r;
//       }
//       vec3 fade(vec3 t) {
//         return t*t*t*(t*(t*6.0-15.0)+10.0);
//       }

//       float cnoise(vec3 P) {
//         vec3 Pi0 = floor(P);
//         vec3 Pi1 = Pi0 + vec3(1.0);
//         Pi0 = mod289(Pi0);
//         Pi1 = mod289(Pi1);
//         vec3 Pf0 = fract(P);
//         vec3 Pf1 = Pf0 - vec3(1.0);
//         vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
//         vec4 iy = vec4(Pi0.yy, Pi1.yy);
//         vec4 iz0 = Pi0.zzzz;
//         vec4 iz1 = Pi1.zzzz;
//         vec4 ixy = permute(permute(ix) + iy);
//         vec4 ixy0 = permute(ixy + iz0);
//         vec4 ixy1 = permute(ixy + iz1);
//         vec4 gx0 = ixy0 * (1.0 / 7.0);
//         vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
//         gx0 = fract(gx0);
//         vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
//         vec4 sz0 = step(gz0, vec4(0.0));
//         gx0 -= sz0 * (step(0.0, gx0) - 0.5);
//         gy0 -= sz0 * (step(0.0, gy0) - 0.5);
//         vec4 gx1 = ixy1 * (1.0 / 7.0);
//         vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
//         gx1 = fract(gx1);
//         vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
//         vec4 sz1 = step(gz1, vec4(0.0));
//         gx1 -= sz1 * (step(0.0, gx1) - 0.5);
//         gy1 -= sz1 * (step(0.0, gy1) - 0.5);
//         vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
//         vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
//         vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
//         vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
//         vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
//         vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
//         vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
//         vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
//         vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
//         g000 *= norm0.x;
//         g010 *= norm0.y;
//         g100 *= norm0.z;
//         g110 *= norm0.w;
//         vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
//         g001 *= norm1.x;
//         g011 *= norm1.y;
//         g101 *= norm1.z;
//         g111 *= norm1.w;
//         float n000 = dot(g000, Pf0);
//         float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
//         float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
//         float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
//         float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
//         float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
//         float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
//         float n111 = dot(g111, Pf1);
//         vec3 fade_xyz = fade(Pf0);
//         vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
//         vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
//         float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
//         return 2.2 * n_xyz;
//       }

//       float pnoise(vec3 P, vec3 rep) {
//         vec3 Pi0 = mod(floor(P), rep);
//         vec3 Pi1 = mod(Pi0 + vec3(1.0), rep);
//         Pi0 = mod289(Pi0);
//         Pi1 = mod289(Pi1);
//         vec3 Pf0 = fract(P);
//         vec3 Pf1 = Pf0 - vec3(1.0);
//         vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
//         vec4 iy = vec4(Pi0.yy, Pi1.yy);
//         vec4 iz0 = Pi0.zzzz;
//         vec4 iz1 = Pi1.zzzz;
//         vec4 ixy = permute(permute(ix) + iy);
//         vec4 ixy0 = permute(ixy + iz0);
//         vec4 ixy1 = permute(ixy + iz1);
//         vec4 gx0 = ixy0 * (1.0 / 7.0);
//         vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
//         gx0 = fract(gx0);
//         vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
//         vec4 sz0 = step(gz0, vec4(0.0));
//         gx0 -= sz0 * (step(0.0, gx0) - 0.5);
//         gy0 -= sz0 * (step(0.0, gy0) - 0.5);
//         vec4 gx1 = ixy1 * (1.0 / 7.0);
//         vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
//         gx1 = fract(gx1);
//         vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
//         vec4 sz1 = step(gz1, vec4(0.0));
//         gx1 -= sz1 * (step(0.0, gx1) - 0.5);
//         gy1 -= sz1 * (step(0.0, gy1) - 0.5);
//         vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
//         vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
//         vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
//         vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
//         vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
//         vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
//         vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
//         vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
//         vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
//         g000 *= norm0.x;
//         g010 *= norm0.y;
//         g100 *= norm0.z;
//         g110 *= norm0.w;
//         vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
//         g001 *= norm1.x;
//         g011 *= norm1.y;
//         g101 *= norm1.z;
//         g111 *= norm1.w;
//         float n000 = dot(g000, Pf0);
//         float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
//         float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
//         float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
//         float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
//         float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
//         float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
//         float n111 = dot(g111, Pf1);
//         vec3 fade_xyz = fade(Pf0);
//         vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
//         vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
//         float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
//         return 2.2 * n_xyz;
//       }

//       float turbulence(vec3 p) {
//         float w = 100.0;
//         float t = -.5;
//         for (float f = 1.0 ; f <= 10.0 ; f++ ){
//           float power = pow(2.0, f);
//           t += abs(pnoise(vec3(power * p), vec3(10.0, 10.0, 10.0)) / power);
//         }
//         return t;
//       }

//       uniform float time;
//       varying vec2 vUv;
//       varying vec3 vNormal;
//       varying vec3 newPosition;
//       varying float noise;

//       void main() {
//         vUv = uv;
//         vNormal = normalize(normalMatrix * normal);
        
//         noise = turbulence(0.4150 * position + normal * ((time/2.) * 2.2));
//         vec3 displacement = vec3((position.x) * noise, position.y * noise, position.z * noise);
//         newPosition = (position + normal) + displacement;
        
//         gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
//       }
//     `;

//     const fragmentShader = `
//       uniform float time;
//       varying vec2 vUv;
//       varying vec3 newPosition;
//       varying float noise;

//       void main() {
//         vec3 color = vec3(vUv * (.2 - 2. * noise), 1.0);
//         vec3 finalColors = vec3(color.b * 1., color.r, color.r);
//         vec4 diffuseColor = vec4(cos(finalColors * noise * 3.), 1.);
        
//         gl_FragColor = diffuseColor;
//       }
//     `;

//     const container = planetContainerRef.current;
    
//     // Wait for container to have proper dimensions
//     const initThreeJS = () => {
//       const width = container.offsetWidth || container.clientWidth;
//       const height = container.offsetHeight || container.clientHeight;

//       if (width === 0 || height === 0) {
//         setTimeout(initThreeJS, 50);
//         return;
//       }

//       const renderer = new THREE.WebGLRenderer({ 
//         antialias: true,
//         alpha: true
//       });
//       renderer.setClearColor(0x000000, 0);
//       renderer.setSize(width, height);
//       renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//       container.innerHTML = ''; // Clear any existing content
//       container.appendChild(renderer.domElement);
//       threeRefs.current.renderer = renderer;

//       const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 5000);
//       camera.position.z = 52;
//       threeRefs.current.camera = camera;

//       const scene = new THREE.Scene();
//       threeRefs.current.scene = scene;

//       const light = new THREE.DirectionalLight(0xffffff, 0.6);
//       light.position.set(100, 100, 200);
//       scene.add(light);

//       const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
//       scene.add(ambientLight);

//       const uniforms = {
//         time: { value: 0 }
//       };

//       const material = new THREE.ShaderMaterial({
//         uniforms: uniforms,
//         vertexShader: vertexShader,
//         fragmentShader: fragmentShader,
//         transparent: true
//       });

//       const geometry = new THREE.SphereGeometry(20, 150, 150);
//       const planet = new THREE.Mesh(geometry, material);
//       scene.add(planet);
//       threeRefs.current.planet = planet;

//       const start = Date.now();
//       function animate() {
//         uniforms.time.value = 0.00005 * (Date.now() - start);

//         planet.rotation.y += 0.002;
//         planet.rotation.z += 0.003;
//         planet.rotation.x += 0.001;

//         renderer.render(scene, camera);
//         threeRefs.current.animationId = requestAnimationFrame(animate);
//       }
//       animate();

//       const handleResize = () => {
//         const w = container.offsetWidth || container.clientWidth;
//         const h = container.offsetHeight || container.clientHeight;
//         if (w > 0 && h > 0) {
//           camera.aspect = w / h;
//           camera.updateProjectionMatrix();
//           renderer.setSize(w, h);
//           renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//         }
//       };
//       window.addEventListener('resize', handleResize);

//       threeRefs.current.handleResize = handleResize;
//     };

//     setTimeout(initThreeJS, 100);

//     return () => {
//       threeRefs.current.initialized = false;
      
//       if (threeRefs.current.handleResize) {
//         window.removeEventListener('resize', threeRefs.current.handleResize);
//       }
      
//       if (threeRefs.current.animationId) {
//         cancelAnimationFrame(threeRefs.current.animationId);
//       }
      
//       if (threeRefs.current.planet) {
//         threeRefs.current.planet.geometry.dispose();
//         threeRefs.current.planet.material.dispose();
//       }
      
//       if (threeRefs.current.renderer) {
//         threeRefs.current.renderer.dispose();
//         if (container && threeRefs.current.renderer.domElement && container.contains(threeRefs.current.renderer.domElement)) {
//           container.removeChild(threeRefs.current.renderer.domElement);
//         }
//       }
//     };
//   }, []);

//   // Canvas Animation Setup
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const container = containerRef.current;
//     if (!canvas || !container) return;

//     const ctx = canvas.getContext('2d');
//     const anim = animationRef.current;

//     const initHeader = () => {
//       anim.width = window.innerWidth;
//       anim.height = window.innerHeight;
//       anim.target = { x: anim.width / 2, y: anim.height / 2 };

//       canvas.width = anim.width;
//       canvas.height = anim.height;

//       anim.points = [];
//       for (let x = 0; x < anim.width; x = x + anim.width / 20) {
//         for (let y = 0; y < anim.height; y = y + anim.height / 20) {
//           const px = x + (Math.random() * anim.width) / 20;
//           const py = y + (Math.random() * anim.height) / 20;
//           const p = { x: px, originX: px, y: py, originY: py };
//           anim.points.push(p);
//         }
//       }

//       for (let i = 0; i < anim.points.length; i++) {
//         const closest = [];
//         const p1 = anim.points[i];
//         for (let j = 0; j < anim.points.length; j++) {
//           const p2 = anim.points[j];
//           if (p1 !== p2) {
//             let placed = false;
//             for (let k = 0; k < 5; k++) {
//               if (!placed) {
//                 if (closest[k] === undefined) {
//                   closest[k] = p2;
//                   placed = true;
//                 }
//               }
//             }

//             for (let k = 0; k < 5; k++) {
//               if (!placed) {
//                 if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
//                   closest[k] = p2;
//                   placed = true;
//                 }
//               }
//             }
//           }
//         }
//         p1.closest = closest;
//       }

//       for (let i in anim.points) {
//         const c = {
//           pos: anim.points[i],
//           radius: 2 + Math.random() * 2,
//           active: 0
//         };
//         anim.points[i].circle = c;
//       }
//     };

//     const getDistance = (p1, p2) => {
//       return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
//     };

//     const drawLines = (p) => {
//       if (!p.active) return;
//       for (let i in p.closest) {
//         ctx.beginPath();
//         ctx.moveTo(p.x, p.y);
//         ctx.lineTo(p.closest[i].x, p.closest[i].y);
//         ctx.strokeStyle = 'rgba(45, 104, 255,' + p.active + ')';
//         ctx.stroke();
//       }
//     };

//     const drawCircle = (circle) => {
//       if (!circle.active) return;
//       ctx.beginPath();
//       ctx.arc(circle.pos.x, circle.pos.y, circle.radius, 0, 2 * Math.PI, false);
//       ctx.fillStyle = 'rgba(45, 104, 255,' + circle.active + ')';
//       ctx.fill();
//     };

//     const shiftPoint = (p) => {
//       gsap.to(p, {
//         duration: 1 + 1 * Math.random(),
//         x: p.originX - 50 + Math.random() * 100,
//         y: p.originY - 50 + Math.random() * 100,
//         ease: 'circ.inOut',
//         onComplete: () => shiftPoint(p)
//       });
//     };

//     const animate = () => {
//       if (anim.animateHeader) {
//         ctx.clearRect(0, 0, anim.width, anim.height);
//         for (let i in anim.points) {
//           const distance = Math.abs(getDistance(anim.target, anim.points[i]));
          
//           if (distance < 4000) {
//             anim.points[i].active = 0.3;
//             anim.points[i].circle.active = 0.6;
//           } else if (distance < 20000) {
//             anim.points[i].active = 0.1;
//             anim.points[i].circle.active = 0.3;
//           } else if (distance < 40000) {
//             anim.points[i].active = 0.02;
//             anim.points[i].circle.active = 0.1;
//           } else {
//             anim.points[i].active = 0;
//             anim.points[i].circle.active = 0;
//           }

//           drawLines(anim.points[i]);
//           drawCircle(anim.points[i].circle);
//         }
//       }
//       requestAnimationFrame(animate);
//     };

//     const handleMouseMove = (e) => {
//       let posx = 0, posy = 0;
//       if (e.pageX || e.pageY) {
//         posx = e.pageX;
//         posy = e.pageY;
//       } else if (e.clientX || e.clientY) {
//         posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
//         posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
//       }
//       anim.target.x = posx;
//       anim.target.y = posy;
//     };

//     const handleResize = () => {
//       anim.width = window.innerWidth;
//       anim.height = window.innerHeight;
//       canvas.width = anim.width;
//       canvas.height = anim.height;
//     };

//     initHeader();
//     animate();
//     for (let i in anim.points) {
//       shiftPoint(anim.points[i]);
//     }

//     if (!('ontouchstart' in window)) {
//       window.addEventListener('mousemove', handleMouseMove);
//     }
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const getResponsiveStyles = () => {
//     const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1024;
    
//     return {
//       ...styles,
//       heroContent: {
//         ...styles.heroContent,
//         gridTemplateColumns: windowWidth <= 1024 ? '1fr' : '1fr 1fr',
//         gap: windowWidth <= 1024 ? '40px' : '60px'
//       },
//       heroTitle: {
//         ...styles.heroTitle,
//         fontSize: windowWidth <= 640 ? '1.875rem' : windowWidth <= 1024 ? '2.5rem' : '3.5rem',
//         textAlign: windowWidth <= 1024 ? 'center' : 'left'
//       },
//       heroButtons: {
//         ...styles.heroButtons,
//         justifyContent: windowWidth <= 1024 ? 'center' : 'flex-start'
//       },
//       planetSection: {
//         ...styles.planetSection,
//         height: windowWidth <= 640 ? '400px' : windowWidth <= 1024 ? '500px' : '600px',
//         minHeight: windowWidth <= 640 ? '400px' : windowWidth <= 1024 ? '500px' : '600px'
//       },
//       planetContainer: {
//         ...styles.planetContainer,
//         minHeight: windowWidth <= 640 ? '400px' : windowWidth <= 1024 ? '500px' : '600px'
//       }
//     };
//   };

//   const responsiveStyles = getResponsiveStyles();

//   return (
//     <div style={responsiveStyles.heroContainer} ref={containerRef}>
//       <canvas ref={canvasRef} style={responsiveStyles.heroCanvas} />

//       <div style={responsiveStyles.heroContent}>
//         <div style={responsiveStyles.textSection}>
//           <div>
//             <h1 style={responsiveStyles.heroTitle}>
//               The all-in-one IT solution to turn infrastructure into uptime
//             </h1>

//             <div style={responsiveStyles.heroButtons}>
//               <button style={responsiveStyles.btnPrimary}>Talk to our team</button>
//               <button style={responsiveStyles.btnSecondary}>
//                 Services <span style={responsiveStyles.arrow}>→</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div style={responsiveStyles.planetSection}>
//           <div ref={planetContainerRef} style={responsiveStyles.planetContainer} />
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   heroContainer: {
//     position: 'relative',
//     width: '100%',
//     minHeight: '100vh',
//     backgroundColor: '#000000',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '10px 20px',
//     overflow: 'hidden'
//   },
//   heroCanvas: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     zIndex: 1,
//     pointerEvents: 'none'
//   },
//   heroContent: {
//     position: 'relative',
//     zIndex: 10,
//     width: '100%',
//     maxWidth: '1400px',
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr',
//     gap: '60px',
//     alignItems: 'center'
//   },
//   textSection: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   heroTitle: {
//     fontSize: '3.5rem',
//     fontWeight: 700,
//     lineHeight: 1.2,
//     background: 'linear-gradient(90deg, #60a5fa 0%, #c084fc 25%, #f472b6 50%, #fb923c 75%, #fbbf24 100%)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//     backgroundClip: 'text',
//     margin: 0
//   },
//   heroButtons: {
//     marginTop: '28px',
//     display: 'flex',
//     gap: '16px',
//     flexWrap: 'wrap'
//   },
//   btnPrimary: {
//     padding: '12px 22px',
//     borderRadius: '999px',
//     border: 'none',
//     cursor: 'pointer',
//     fontSize: '0.9rem',
//     fontWeight: 600,
//     letterSpacing: '0.04em',
//     textTransform: 'uppercase',
//     background: 'linear-gradient(90deg, #6366f1, #a855f7)',
//     color: '#0b1020',
//     boxShadow: '0 18px 45px rgba(59, 130, 246, 0.55)',
//     transition: 'transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease'
//   },
//   btnSecondary: {
//     padding: '12px 22px',
//     borderRadius: '999px',
//     cursor: 'pointer',
//     fontSize: '0.9rem',
//     fontWeight: 600,
//     letterSpacing: '0.04em',
//     textTransform: 'uppercase',
//     background: 'rgba(15, 23, 42, 0.85)',
//     color: '#e5e7eb',
//     border: '1px solid rgba(148, 163, 184, 0.4)',
//     backdropFilter: 'blur(10px)',
//     display: 'inline-flex',
//     alignItems: 'center',
//     gap: '6px',
//     transition: 'background 0.18s ease, border-color 0.18s ease, transform 0.18s ease'
//   },
//   arrow: {
//     fontSize: '0.9rem'
//   },
//   planetSection: {
//     position: 'relative',
//     zIndex: 10,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//     height: '600px',
//     minHeight: '600px'
//   },
//   planetContainer: {
//     width: '100%',
//     height: '100%',
//     minHeight: '600px',
//     position: 'relative'
//   }
// };



import React, { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';
import * as THREE from 'three';

export default function HeroSection() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const planetContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const animationRef = useRef({
    width: 0,
    height: 0,
    points: [],
    target: { x: 0, y: 0 },
    animateHeader: true
  });
  const threeRefs = useRef({
    renderer: null,
    scene: null,
    camera: null,
    planet: null,
    animationId: null,
    initialized: false
  });

  // Add responsive CSS with high specificity
  useEffect(() => {
    const styleId = 'hero-responsive-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        @media (max-width: 1024px) {
          div.hero-container-responsive {
            min-height: 100vh !important;
            padding: 80px 20px 40px 20px !important;
            display: flex !important;
            align-items: center !important;
          }
          div.hero-content-responsive {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
            padding: 0 !important;
            max-width: 100% !important;
          }
          h1.hero-title-responsive {
            font-size: 2rem !important;
            text-align: center !important;
            line-height: 1.2 !important;
            padding: 0 10px !important;
          }
          div.hero-buttons-responsive {
            justify-content: center !important;
            margin-top: 20px !important;
            flex-wrap: wrap !important;
          }
          div.planet-section-responsive {
            height: 350px !important;
            min-height: 350px !important;
            max-height: 350px !important;
            order: -1 !important;
            margin-bottom: 20px !important;
          }
          div.planet-container-responsive {
            min-height: 350px !important;
            height: 350px !important;
            max-height: 350px !important;
          }
          div.planet-container-responsive canvas {
            max-height: 350px !important;
          }
        }
        @media (max-width: 640px) {
          div.hero-container-responsive {
            padding: 60px 15px 30px 15px !important;
            min-height: 100vh !important;
          }
          h1.hero-title-responsive {
            font-size: 1.5rem !important;
            line-height: 1.3 !important;
            padding: 0 5px !important;
          }
          div.hero-buttons-responsive {
            flex-direction: column !important;
            width: 100% !important;
            align-items: stretch !important;
            gap: 12px !important;
            margin-top: 20px !important;
          }
          div.hero-buttons-responsive button {
            width: 100% !important;
            text-align: center !important;
            justify-content: center !important;
            padding: 14px 20px !important;
            font-size: 0.85rem !important;
          }
          div.planet-section-responsive {
            height: 280px !important;
            min-height: 280px !important;
            max-height: 280px !important;
            margin-bottom: 15px !important;
          }
          div.planet-container-responsive {
            min-height: 280px !important;
            height: 280px !important;
            max-height: 280px !important;
          }
          div.planet-container-responsive canvas {
            max-height: 280px !important;
          }
        }
        @media (max-width: 480px) {
          div.hero-container-responsive {
            padding: 50px 12px 25px 12px !important;
          }
          h1.hero-title-responsive {
            font-size: 1.35rem !important;
          }
          div.planet-section-responsive {
            height: 250px !important;
            min-height: 250px !important;
            max-height: 250px !important;
          }
          div.planet-container-responsive {
            min-height: 250px !important;
            height: 250px !important;
            max-height: 250px !important;
          }
          div.planet-container-responsive canvas {
            max-height: 250px !important;
          }
        }
        @media (max-width: 375px) {
          h1.hero-title-responsive {
            font-size: 1.25rem !important;
          }
          div.planet-section-responsive {
            height: 220px !important;
            min-height: 220px !important;
            max-height: 220px !important;
          }
          div.planet-container-responsive {
            min-height: 220px !important;
            height: 220px !important;
            max-height: 220px !important;
          }
          div.planet-container-responsive canvas {
            max-height: 220px !important;
          }
        }
      `;
      document.head.appendChild(style);
    }
    return () => {
      const styleEl = document.getElementById(styleId);
      if (styleEl) styleEl.remove();
    };
  }, []);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Three.js Planet Setup
  useEffect(() => {
    if (!planetContainerRef.current || threeRefs.current.initialized) return;
    threeRefs.current.initialized = true;

    const vertexShader = `
      vec3 mod289(vec3 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
      }
      vec4 mod289(vec4 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
      }
      vec4 permute(vec4 x) {
        return mod289(((x*34.0)+1.0)*x);
      }
      vec4 taylorInvSqrt(vec4 r) {
        return 1.79284291400159 - 0.85373472095314 * r;
      }
      vec3 fade(vec3 t) {
        return t*t*t*(t*(t*6.0-15.0)+10.0);
      }

      float cnoise(vec3 P) {
        vec3 Pi0 = floor(P);
        vec3 Pi1 = Pi0 + vec3(1.0);
        Pi0 = mod289(Pi0);
        Pi1 = mod289(Pi1);
        vec3 Pf0 = fract(P);
        vec3 Pf1 = Pf0 - vec3(1.0);
        vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
        vec4 iy = vec4(Pi0.yy, Pi1.yy);
        vec4 iz0 = Pi0.zzzz;
        vec4 iz1 = Pi1.zzzz;
        vec4 ixy = permute(permute(ix) + iy);
        vec4 ixy0 = permute(ixy + iz0);
        vec4 ixy1 = permute(ixy + iz1);
        vec4 gx0 = ixy0 * (1.0 / 7.0);
        vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
        gx0 = fract(gx0);
        vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
        vec4 sz0 = step(gz0, vec4(0.0));
        gx0 -= sz0 * (step(0.0, gx0) - 0.5);
        gy0 -= sz0 * (step(0.0, gy0) - 0.5);
        vec4 gx1 = ixy1 * (1.0 / 7.0);
        vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
        gx1 = fract(gx1);
        vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
        vec4 sz1 = step(gz1, vec4(0.0));
        gx1 -= sz1 * (step(0.0, gx1) - 0.5);
        gy1 -= sz1 * (step(0.0, gy1) - 0.5);
        vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
        vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
        vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
        vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
        vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
        vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
        vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
        vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
        vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
        g000 *= norm0.x;
        g010 *= norm0.y;
        g100 *= norm0.z;
        g110 *= norm0.w;
        vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
        g001 *= norm1.x;
        g011 *= norm1.y;
        g101 *= norm1.z;
        g111 *= norm1.w;
        float n000 = dot(g000, Pf0);
        float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
        float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
        float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
        float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
        float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
        float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
        float n111 = dot(g111, Pf1);
        vec3 fade_xyz = fade(Pf0);
        vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
        vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
        float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
        return 2.2 * n_xyz;
      }

      float pnoise(vec3 P, vec3 rep) {
        vec3 Pi0 = mod(floor(P), rep);
        vec3 Pi1 = mod(Pi0 + vec3(1.0), rep);
        Pi0 = mod289(Pi0);
        Pi1 = mod289(Pi1);
        vec3 Pf0 = fract(P);
        vec3 Pf1 = Pf0 - vec3(1.0);
        vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
        vec4 iy = vec4(Pi0.yy, Pi1.yy);
        vec4 iz0 = Pi0.zzzz;
        vec4 iz1 = Pi1.zzzz;
        vec4 ixy = permute(permute(ix) + iy);
        vec4 ixy0 = permute(ixy + iz0);
        vec4 ixy1 = permute(ixy + iz1);
        vec4 gx0 = ixy0 * (1.0 / 7.0);
        vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
        gx0 = fract(gx0);
        vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
        vec4 sz0 = step(gz0, vec4(0.0));
        gx0 -= sz0 * (step(0.0, gx0) - 0.5);
        gy0 -= sz0 * (step(0.0, gy0) - 0.5);
        vec4 gx1 = ixy1 * (1.0 / 7.0);
        vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
        gx1 = fract(gx1);
        vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
        vec4 sz1 = step(gz1, vec4(0.0));
        gx1 -= sz1 * (step(0.0, gx1) - 0.5);
        gy1 -= sz1 * (step(0.0, gy1) - 0.5);
        vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
        vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
        vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
        vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
        vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
        vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
        vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
        vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
        vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
        g000 *= norm0.x;
        g010 *= norm0.y;
        g100 *= norm0.z;
        g110 *= norm0.w;
        vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
        g001 *= norm1.x;
        g011 *= norm1.y;
        g101 *= norm1.z;
        g111 *= norm1.w;
        float n000 = dot(g000, Pf0);
        float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
        float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
        float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
        float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
        float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
        float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
        float n111 = dot(g111, Pf1);
        vec3 fade_xyz = fade(Pf0);
        vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
        vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
        float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
        return 2.2 * n_xyz;
      }

      float turbulence(vec3 p) {
        float w = 100.0;
        float t = -.5;
        for (float f = 1.0 ; f <= 10.0 ; f++ ){
          float power = pow(2.0, f);
          t += abs(pnoise(vec3(power * p), vec3(10.0, 10.0, 10.0)) / power);
        }
        return t;
      }

      uniform float time;
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 newPosition;
      varying float noise;

      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        
        noise = turbulence(0.4150 * position + normal * ((time/2.) * 2.2));
        vec3 displacement = vec3((position.x) * noise, position.y * noise, position.z * noise);
        newPosition = (position + normal) + displacement;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float time;
      varying vec2 vUv;
      varying vec3 newPosition;
      varying float noise;

      void main() {
        vec3 color = vec3(vUv * (.2 - 2. * noise), 1.0);
        vec3 finalColors = vec3(color.b * 1., color.r, color.r);
        vec4 diffuseColor = vec4(cos(finalColors * noise * 3.), 1.);
        
        gl_FragColor = diffuseColor;
      }
    `;

    const container = planetContainerRef.current;
    
    // Wait for container to have proper dimensions
    const initThreeJS = () => {
      const width = container.offsetWidth || container.clientWidth;
      const height = container.offsetHeight || container.clientHeight;

      if (width === 0 || height === 0) {
        setTimeout(initThreeJS, 50);
        return;
      }

      const renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true
      });
      renderer.setClearColor(0x000000, 0);
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.innerHTML = ''; // Clear any existing content
      container.appendChild(renderer.domElement);
      threeRefs.current.renderer = renderer;

      const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 5000);
      camera.position.z = 52;
      threeRefs.current.camera = camera;

      const scene = new THREE.Scene();
      threeRefs.current.scene = scene;

      const light = new THREE.DirectionalLight(0xffffff, 0.6);
      light.position.set(100, 100, 200);
      scene.add(light);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
      scene.add(ambientLight);

      const uniforms = {
        time: { value: 0 }
      };

      const material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        transparent: true
      });

      const geometry = new THREE.SphereGeometry(20, 150, 150);
      const planet = new THREE.Mesh(geometry, material);
      scene.add(planet);
      threeRefs.current.planet = planet;

      const start = Date.now();
      function animate() {
        uniforms.time.value = 0.00005 * (Date.now() - start);

        planet.rotation.y += 0.002;
        planet.rotation.z += 0.003;
        planet.rotation.x += 0.001;

        renderer.render(scene, camera);
        threeRefs.current.animationId = requestAnimationFrame(animate);
      }
      animate();

      const handleResize = () => {
        const w = container.offsetWidth || container.clientWidth;
        const h = container.offsetHeight || container.clientHeight;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        }
      };
      window.addEventListener('resize', handleResize);

      threeRefs.current.handleResize = handleResize;
    };

    setTimeout(initThreeJS, 100);

    return () => {
      threeRefs.current.initialized = false;
      
      if (threeRefs.current.handleResize) {
        window.removeEventListener('resize', threeRefs.current.handleResize);
      }
      
      if (threeRefs.current.animationId) {
        cancelAnimationFrame(threeRefs.current.animationId);
      }
      
      if (threeRefs.current.planet) {
        threeRefs.current.planet.geometry.dispose();
        threeRefs.current.planet.material.dispose();
      }
      
      if (threeRefs.current.renderer) {
        threeRefs.current.renderer.dispose();
        if (container && threeRefs.current.renderer.domElement && container.contains(threeRefs.current.renderer.domElement)) {
          container.removeChild(threeRefs.current.renderer.domElement);
        }
      }
    };
  }, []);

  // Canvas Animation Setup
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    const anim = animationRef.current;

    const initHeader = () => {
      anim.width = window.innerWidth;
      anim.height = window.innerHeight;
      anim.target = { x: anim.width / 2, y: anim.height / 2 };

      canvas.width = anim.width;
      canvas.height = anim.height;

      anim.points = [];
      for (let x = 0; x < anim.width; x = x + anim.width / 20) {
        for (let y = 0; y < anim.height; y = y + anim.height / 20) {
          const px = x + (Math.random() * anim.width) / 20;
          const py = y + (Math.random() * anim.height) / 20;
          const p = { x: px, originX: px, y: py, originY: py };
          anim.points.push(p);
        }
      }

      for (let i = 0; i < anim.points.length; i++) {
        const closest = [];
        const p1 = anim.points[i];
        for (let j = 0; j < anim.points.length; j++) {
          const p2 = anim.points[j];
          if (p1 !== p2) {
            let placed = false;
            for (let k = 0; k < 5; k++) {
              if (!placed) {
                if (closest[k] === undefined) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }

            for (let k = 0; k < 5; k++) {
              if (!placed) {
                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }
          }
        }
        p1.closest = closest;
      }

      for (let i in anim.points) {
        const c = {
          pos: anim.points[i],
          radius: 2 + Math.random() * 2,
          active: 0
        };
        anim.points[i].circle = c;
      }
    };

    const getDistance = (p1, p2) => {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    };

    const drawLines = (p) => {
      if (!p.active) return;
      for (let i in p.closest) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle = 'rgba(45, 104, 255,' + p.active + ')';
        ctx.stroke();
      }
    };

    const drawCircle = (circle) => {
      if (!circle.active) return;
      ctx.beginPath();
      ctx.arc(circle.pos.x, circle.pos.y, circle.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'rgba(45, 104, 255,' + circle.active + ')';
      ctx.fill();
    };

    const shiftPoint = (p) => {
      gsap.to(p, {
        duration: 1 + 1 * Math.random(),
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: 'circ.inOut',
        onComplete: () => shiftPoint(p)
      });
    };

    const animate = () => {
      if (anim.animateHeader) {
        ctx.clearRect(0, 0, anim.width, anim.height);
        for (let i in anim.points) {
          const distance = Math.abs(getDistance(anim.target, anim.points[i]));
          
          if (distance < 4000) {
            anim.points[i].active = 0.3;
            anim.points[i].circle.active = 0.6;
          } else if (distance < 20000) {
            anim.points[i].active = 0.1;
            anim.points[i].circle.active = 0.3;
          } else if (distance < 40000) {
            anim.points[i].active = 0.02;
            anim.points[i].circle.active = 0.1;
          } else {
            anim.points[i].active = 0;
            anim.points[i].circle.active = 0;
          }

          drawLines(anim.points[i]);
          drawCircle(anim.points[i].circle);
        }
      }
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      let posx = 0, posy = 0;
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      } else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
      anim.target.x = posx;
      anim.target.y = posy;
    };

    const handleResize = () => {
      anim.width = window.innerWidth;
      anim.height = window.innerHeight;
      canvas.width = anim.width;
      canvas.height = anim.height;
    };

    initHeader();
    animate();
    for (let i in anim.points) {
      shiftPoint(anim.points[i]);
    }

    if (!('ontouchstart' in window)) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getResponsiveStyles = () => {
    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1024;
    
    return {
      ...styles,
      heroContent: {
        ...styles.heroContent,
        gridTemplateColumns: windowWidth <= 1024 ? '1fr' : '1fr 1fr',
        gap: windowWidth <= 1024 ? '40px' : '60px'
      },
      heroTitle: {
        ...styles.heroTitle,
        fontSize: windowWidth <= 640 ? '1.875rem' : windowWidth <= 1024 ? '2.5rem' : '3.5rem',
        textAlign: windowWidth <= 1024 ? 'center' : 'left'
      },
      heroButtons: {
        ...styles.heroButtons,
        justifyContent: windowWidth <= 1024 ? 'center' : 'flex-start'
      },
      planetSection: {
        ...styles.planetSection,
        height: windowWidth <= 640 ? '400px' : windowWidth <= 1024 ? '500px' : '600px',
        minHeight: windowWidth <= 640 ? '400px' : windowWidth <= 1024 ? '500px' : '600px'
      },
      planetContainer: {
        ...styles.planetContainer,
        minHeight: windowWidth <= 640 ? '400px' : windowWidth <= 1024 ? '500px' : '600px'
      }
    };
  };

  const responsiveStyles = getResponsiveStyles();

  return (
    <div style={responsiveStyles.heroContainer} ref={containerRef} className="hero-container-responsive">
      <canvas ref={canvasRef} style={responsiveStyles.heroCanvas} />

      <div style={responsiveStyles.heroContent} className="hero-content-responsive">
        <div style={responsiveStyles.textSection}>
          <div>
            <h1 style={responsiveStyles.heroTitle} className="hero-title-responsive">
              The all-in-one IT solution to turn infrastructure into uptime
            </h1>

            <div style={responsiveStyles.heroButtons} className="hero-buttons-responsive">
              <button style={responsiveStyles.btnPrimary}>Talk to our team</button>
              <button style={responsiveStyles.btnSecondary}>
                Services <span style={responsiveStyles.arrow}>→</span>
              </button>
            </div>
          </div>
        </div>

        <div style={responsiveStyles.planetSection} className="planet-section-responsive">
          <div ref={planetContainerRef} style={responsiveStyles.planetContainer} className="planet-container-responsive" />
        </div>
      </div>
    </div>
  );
}

const styles = {
  heroContainer: {
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#000000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 20px',
    overflow: 'hidden'
  },
  heroCanvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    pointerEvents: 'none'
  },
  heroContent: {
    position: 'relative',
    zIndex: 10,
    width: '100%',
    maxWidth: '1400px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center'
  },
  textSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: 700,
    lineHeight: 1.2,
    background: 'linear-gradient(90deg, #60a5fa 0%, #c084fc 25%, #f472b6 50%, #fb923c 75%, #fbbf24 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: 0
  },
  heroButtons: {
    marginTop: '28px',
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  },
  btnPrimary: {
    padding: '12px 22px',
    borderRadius: '999px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 600,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    background: 'linear-gradient(90deg, #6366f1, #a855f7)',
    color: '#0b1020',
    boxShadow: '0 18px 45px rgba(59, 130, 246, 0.55)',
    transition: 'transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease'
  },
  btnSecondary: {
    padding: '12px 22px',
    borderRadius: '999px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 600,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    background: '#2563eb',
    color: '#e5e7eb',
    border: '1px solid rgba(148, 163, 184, 0.4)',
    backdropFilter: 'blur(10px)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    transition: 'background 0.18s ease, border-color 0.18s ease, transform 0.18s ease'
  },
  arrow: {
    fontSize: '0.9rem'
  },
  planetSection: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '600px',
    minHeight: '600px'
  },
  planetContainer: {
    width: '100%',
    height: '100%',
    minHeight: '600px',
    position: 'relative'
  }
};