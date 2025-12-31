// import React, { useEffect } from 'react';

// export default function ParallaxScroll() {
//   useEffect(() => {
//     const handleScroll = () => {
//       const cont = document.getElementById("cont");
//       if (!cont) return;
      
//       const contRect = cont.getBoundingClientRect();
//       const scrollProgress = Math.max(0, -contRect.top);
//       const maxScroll = cont.offsetHeight - window.innerHeight;
//       const currentPer = Math.min(100, Math.floor((scrollProgress * 100) / maxScroll));
      
//       const kidsEl = document.getElementById("kids");
//       const textEl = document.getElementById("text");
//       const tierraEl = document.getElementById("tierra");
      
//       if (kidsEl) kidsEl.style.transform = `scale(${1 + currentPer / 1})`;
//       if (textEl) textEl.style.transform = `scale(${1 + currentPer / 1})`;
//       if (tierraEl) tierraEl.style.backgroundPosition = `center -${currentPer * 3}px`;
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <style>{`
//         * {
//           // margin: 0;
//           // padding: 0;
//           box-sizing: border-box;
//         }
//         body {
//           background-color: black;
//         //   overflow-x: hidden;
//         }
//       `}</style>
      
//       <div id="cont" style={{
//         width: '100%',
//         height: '150vh',
//         display: 'flex',
//         justifyContent: 'start',
//         alignItems: 'start',
//         position: 'relative',
//         backgroundColor: 'black'
//       }}>
//         <div id="stickyDiv" style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           width: '100vw',
//           height: '100vh',
//           position: 'sticky',
//           top: '0',
//           overflow: 'hidden'
//         }}>
//           <div id="tierra" style={{
//             width: '100%',
//             height: '100%',
//             backgroundImage: 'url("https://raw.githubusercontent.com/RicardoYare/imagenes/refs/heads/main/2.jpg")',
//             backgroundPosition: 'center 0px',
//             backgroundSize: 'cover',
//             backgroundRepeat: 'no-repeat',
//             transition: 'all 0.5s',
//             filter: 'blur(0.5px)'
//           }} />
          
//           <div id="kids" style={{
//             width: '100%',
//             height: '100%',
//             backgroundImage: 'url("https://raw.githubusercontent.com/RicardoYare/imagenes/refs/heads/main/Sin%20nombre.png")',
//             backgroundPosition: 'center',
//             backgroundSize: 'cover',
//             backgroundRepeat: 'no-repeat',
//             transition: 'all 0.8s',
//             position: 'absolute',
//             objectFit: 'cover',
//             filter: 'blur(0.9px)',
//             overflow: 'hidden'
//           }} />
          
//           <div id="text" style={{
//             width: '100%',
//             height: '100%',
//             color: 'white',
//             fontFamily: '"Playfair Display", serif',
//             fontOpticalSizing: 'auto',
//             fontWeight: 600,
//             fontStyle: 'normal',
//             position: 'absolute',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             fontSize: '5dvw',
//             transition: 'all 0.8s',
//             filter: 'blur(0.7px)'
//           }}>
//             <div id="textLeft" style={{
//               width: '100%',
//               height: '50%',
//               display: 'flex',
//               justifyContent: 'start',
//               alignItems: 'center',
//               flexDirection: 'column'
//             }}>
//               <div style={{ width: '100%' }}></div>
//               <div style={{ fontSize: '4dvw', margin:'20px' }}>About us</div>
//             </div>
//             <div id="textRight" style={{
//               width: '80%',
//               height: '30%',
//               display: 'flex',
//               justifyContent: 'end',
//               alignItems: 'center',
//               flexDirection: 'column',
//               textAlign:'center'
//             }}>
//               <div style={{ width: '50%', fontSize: '4dvw' }}></div>
//               <div></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useEffect } from 'react';

export default function ParallaxScroll() {
  useEffect(() => {
    const handleScroll = () => {
      const cont = document.getElementById("cont");
      if (!cont) return;
      
      const contRect = cont.getBoundingClientRect();
      const scrollProgress = Math.max(0, -contRect.top);
      const maxScroll = cont.offsetHeight - window.innerHeight;
      const currentPer = Math.min(100, Math.floor((scrollProgress * 100) / maxScroll));
      
      const kidsEl = document.getElementById("kids");
      const textEl = document.getElementById("text");
      const tierraEl = document.getElementById("tierra");
      
      if (kidsEl) kidsEl.style.transform = `scale(${1 + currentPer / 1})`;
      if (textEl) textEl.style.transform = `scale(${1 + currentPer / 1})`;
      if (tierraEl) tierraEl.style.backgroundPosition = `center -${currentPer * 3}px`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        body {
          background-color: black;
        }
      `}</style>
      
      <div id="cont" style={{
        width: '100%',
        height: '150vh',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
        position: 'relative',
        backgroundColor: 'black'
      }}>
        <div id="stickyDiv" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          height: '100vh',
          position: 'sticky',
          top: '0',
          overflow: 'hidden'
        }}>
          <div id="tierra" style={{
            width: '100%',
            height: '100%',
            backgroundImage: 'url("https://raw.githubusercontent.com/RicardoYare/imagenes/refs/heads/main/2.jpg")',
            backgroundPosition: 'center 0px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            transition: 'all 0.5s',
            filter: 'blur(0.5px)'
          }} />
          
          <div id="kids" style={{
            width: '100%',
            height: '100%',
            backgroundImage: 'url("/abou.png")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            transition: 'all 0.8s',
            position: 'absolute',
            objectFit: 'cover',
            filter: 'blur(0.9px)',
            overflow: 'hidden'
          }} />
          
          <div id="text" style={{
            width: '100%',
            height: '100%',
            color: 'white',
            fontFamily: '"Playfair Display", serif',
            fontOpticalSizing: 'auto',
            fontWeight: 600,
            fontStyle: 'normal',
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '5dvw',
            transition: 'all 0.8s',
            filter: 'blur(0.7px)'
          }}>
            <div style={{
              fontSize: '4dvw',
              textAlign: 'center',
              color: '#2563eb'
            }}>
              About us
            </div>
          </div>
        </div>
      </div>
    </>
  );
}