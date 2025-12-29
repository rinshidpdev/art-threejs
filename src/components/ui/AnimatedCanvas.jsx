import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedCanvas = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef({
    width: 0,
    height: 0,
    points: [],
    target: { x: 0, y: 0 },
    animateHeader: true
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    const anim = animationRef.current;

    // Initialize
    const initHeader = () => {
      anim.width = window.innerWidth;
      anim.height = window.innerHeight;
      anim.target = { x: anim.width / 2, y: anim.height / 2 };

      container.style.height = anim.height + 'px';
      canvas.width = anim.width;
      canvas.height = anim.height;

      // Create points
      anim.points = [];
      for (let x = 0; x < anim.width; x = x + anim.width / 20) {
        for (let y = 0; y < anim.height; y = y + anim.height / 20) {
          const px = x + (Math.random() * anim.width) / 20;
          const py = y + (Math.random() * anim.height) / 20;
          const p = { x: px, originX: px, y: py, originY: py };
          anim.points.push(p);
        }
      }

      // Find 5 closest points for each point
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

      // Assign circle to each point
      for (let i in anim.points) {
        const c = {
          pos: anim.points[i],
          radius: 2 + Math.random() * 2,
          color: 'rgba(255,255,255,0.3)',
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
        ctx.strokeStyle = 'rgba(156,217,249,' + p.active + ')';
        ctx.stroke();
      }
    };

    const drawCircle = (circle) => {
      if (!circle.active) return;
      ctx.beginPath();
      ctx.arc(circle.pos.x, circle.pos.y, circle.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'rgba(156,217,249,' + circle.active + ')';
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

    // Event handlers
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

    const handleScroll = () => {
      if (document.body.scrollTop > anim.height) {
        anim.animateHeader = false;
      } else {
        anim.animateHeader = true;
      }
    };

    const handleResize = () => {
      anim.width = window.innerWidth;
      anim.height = window.innerHeight;
      container.style.height = anim.height + 'px';
      canvas.width = anim.width;
      canvas.height = anim.height;
    };

    // Initialize and start animation
    initHeader();
    animate();
    for (let i in anim.points) {
      shiftPoint(anim.points[i]);
    }

    // Add event listeners
    if (!('ontouchstart' in window)) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="large-header"
      style={{
        position: 'relative',
        width: '100%',
        background: '#333',
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        zIndex: 1,
        backgroundImage: 'url("https://www.marcoguglie.it/Codepen/AnimatedHeaderBg/demo-1/img/demo-1-bg.jpg")'
      }}
    >
      <canvas ref={canvasRef} id="demo-canvas" />
      
      {/* Optional: Add your title here */}
      {/* <h1 className="main-title">
        <span className="thin">Your</span> Title
      </h1> */}
    </div>
  );
};

export default AnimatedCanvas;
