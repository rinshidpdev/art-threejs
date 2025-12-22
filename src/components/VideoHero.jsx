// import React from "react";
// import bg1 from "../assets/aboutV.webm";
// import bg2 from "../assets/istockphoto-1288131372-640_adpp_is.mp4";

// export default function VideoHero({
//   title = (
//     <>
//       Work together.
//       <br />
//       Like in the office.
//     </>
//   ),
//   subtitle = "Create customized virtual office spaces for any department or event with high quality audio and video conferencing.",
//   bgVideoSrc = bg1,
//   mainVideoSrc = bg2,
// }) {
//   return (
//     <section className="relative w-full overflow-hidden bg-white">
//       {/* Background grid + glows */}
//       <div className="pointer-events-none absolute inset-0">
//         <div
//           className="absolute inset-0 opacity-70"
//           style={{
//             backgroundImage:
//               "linear-gradient(to right, rgba(226,232,240,.9) 1px, transparent 1px), linear-gradient(to bottom, rgba(226,232,240,.9) 1px, transparent 1px)",
//             backgroundSize: "140px 140px",
//           }}
//         />
//         <div className="absolute -left-24 top-40 h-[380px] w-[380px] rounded-full bg-cyan-300/40 blur-3xl" />
//         <div className="absolute -right-24 top-44 h-[380px] w-[380px] rounded-full bg-sky-300/40 blur-3xl" />
//       </div>

//       <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-14">
//         {/* Text */}
//         <div className="text-center">
//           <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
//             {title}
//           </h1>
//           <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
//             {subtitle}
//           </p>
//         </div>

//         {/* Video frame area */}
//         <div className="relative mt-10">
//           {/* Ambient background video behind the frame */}
//           <div className="absolute inset-0 -z-10">
//             <video
//               className="h-full w-full object-cover opacity-35"
//               src={bgVideoSrc}
//               autoPlay
//               muted
//               loop
//               playsInline
//               preload="metadata"
//             />
//           </div>

//           {/* Glass frame + main video */}
//           <div className="mx-auto w-full max-w-5xl rounded-[30px] border border-white/70 bg-white/40 p-3 backdrop-blur-md shadow-[0_30px_90px_rgba(15,23,42,0.18)]">
//             <div className="overflow-hidden rounded-[24px] bg-white">
//               <video
//                 className="aspect-video w-full object-cover"
//                 src={mainVideoSrc}
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 preload="metadata"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import bg1 from "../assets/aboutV.webm";
import bg2 from "../assets/istockphoto-1288131372-640_adpp_is.mp4";

// Import your icon images
import infrastructureIcon from "../assets/image.png";
import cyberSecurityIcon from "../assets/image.png";
import cloudIcon from "../assets/image.png";
import amcIcon from "../assets/image.png";

export default function VideoHero({
  title = (
    <>
      Innovate. Secure.
      <br />
      Transform.
    </>
  ),
  subtitle = "With over 14 years of industry experience, we are a trusted IT Solutions provider operating under the esteemed Manchi Group.",
  bgVideoSrc = bg1,
  mainVideoSrc = bg2,
}) {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background grid + glows */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(226,232,240,.9) 1px, transparent 1px), linear-gradient(to bottom, rgba(226,232,240,.9) 1px, transparent 1px)",
            backgroundSize: "140px 140px",
          }}
        />
        <div className="absolute -left-24 top-40 h-[380px] w-[380px] rounded-full bg-cyan-300/40 blur-3xl" />
        <div className="absolute -right-24 top-44 h-[380px] w-[380px] rounded-full bg-sky-300/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-14">
        {/* Text */}
        <div className="text-center">
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
            {subtitle}
          </p>
        </div>

        {/* Video frame area */}
        <div className="relative mt-10">
          {/* Ambient background video behind the frame */}
          <div className="absolute inset-0 -z-10">
            <video
              className="h-full w-full object-cover opacity-35"
              src={bgVideoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>

          {/* Glass frame + main video */}
          <div className="mx-auto w-full max-w-5xl rounded-[30px] border border-white/70 bg-white/40 p-3 backdrop-blur-md shadow-[0_30px_90px_rgba(15,23,42,0.18)]">
            <div className="overflow-hidden rounded-[24px] bg-white">
              <video
                className="aspect-video w-full object-cover"
                src={mainVideoSrc}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
          </div>
        </div>

        {/* Four feature columns - content from PPTX */}
        <div className="mt-16">
          {/* Intro heading */}
          <h2 className="mx-auto max-w-4xl text-center text-3xl font-semibold text-slate-900 sm:text-4xl">
            Complete IT Solutions
          </h2>

          {/* Feature cards grid */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 - Infrastructure Solutions */}
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center">
                <img
                  src={infrastructureIcon}
                  alt="Infrastructure Solutions"
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Infrastructure Solutions
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Optimizing network performance through secure infrastructure solutions.
              </p>
            </div>

            {/* Card 2 - Cyber Security */}
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center">
                <img
                  src={cyberSecurityIcon}
                  alt="Cyber Security"
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Cyber Security
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Defending systems from evolving digital security threats.
              </p>
            </div>

            {/* Card 3 - Cloud Solutions */}
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center">
                <img
                  src={cloudIcon}
                  alt="Cloud Solutions"
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Cloud Solutions
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Innovative cloud solutions for agile, scalable businesses.
              </p>
            </div>

            {/* Card 4 - AMC */}
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center">
                <img
                  src={amcIcon}
                  alt="AMC"
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                AMC
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Always-on IT support to boost uptime and security.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
