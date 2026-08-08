// export default function PortfolioShowcase() {
//   const projects = [
//     {
//       title: "Portfolio Builder",
//       tech: "Next.js • MongoDB • Tailwind",
//     },
//     {
//       title: "Travel Landing Page",
//       tech: "React • Framer Motion",
//     },
   
//   ];

//   return (
//     <section
//       className="
//         relative
//         overflow-hidden
//         bg-black
//         px-6
//         py-32
//         text-white
//       "
//     >
//       {/* Background Glow */}
//       <div
//         className="
//           absolute
//           left-1/2
//           top-0
//           h-[600px]
//           w-[600px]
//           -translate-x-1/2
//           rounded-full
//           bg-white/[0.03]
//           blur-[180px]
//         "
//       />

//       <div className="relative mx-auto max-w-7xl">
//         {/* Heading */}
//         <div className="mx-auto max-w-4xl text-center">
//           <p
//             className="
//               text-sm
//               uppercase
//               tracking-[0.25em]
//               text-zinc-500
//             "
//           >
//             Portfolio Preview
//           </p>

//           <h2
//             className="
//               mt-6
//               text-5xl
//               font-bold
//               tracking-tight
//               md:text-7xl
//             "
//           >
//             See what your portfolio
//             <br />
//             could look like.
//           </h2>

//           <p
//             className="
//               mx-auto
//               mt-8
//               max-w-2xl
//               text-lg
//               leading-relaxed
//               text-zinc-400
//             "
//           >
//             Professional portfolio websites
//             generated from your content and
//             ready to publish in minutes.
//           </p>
//         </div>

//         {/* Showcase */}
//         <div className="mt-24">
//           <div className="relative">
//             {/* Outer Glow */}
//             <div
//               className="
//                 absolute
//                 inset-0
//                 rounded-[40px]
//                 bg-white/[0.02]
//                 blur-3xl
//               "
//             />

//             {/* Browser */}
//             <div
//               className="
//                 relative
//                 overflow-hidden
//                 rounded-[40px]
//                 border
//                 border-white/10
//                 bg-zinc-950
//                 shadow-[0_30px_120px_rgba(255,255,255,0.05)]
//               "
//             >
//               {/* Browser Top */}
//               <div
//                 className="
//                   flex
//                   items-center
//                   gap-2
//                   border-b
//                   border-white/10
//                   px-6
//                   py-4
//                 "
//               >
//                 <div className="h-3 w-3 rounded-full bg-red-500" />
//                 <div className="h-3 w-3 rounded-full bg-yellow-500" />
//                 <div className="h-3 w-3 rounded-full bg-green-500" />

//                 <div
//                   className="
//                     ml-4
//                     rounded-full
//                     bg-white/5
//                     px-4
//                     py-1
//                     text-sm
//                     text-zinc-500
//                   "
//                 >
//                   folioforge.com/john
//                 </div>

//                 <div className="ml-auto">
//                   <div
//                     className="
//                       rounded-full
//                       border
//                       border-emerald-500/20
//                       bg-emerald-500/10
//                       px-3
//                       py-1
//                       text-xs
//                       text-emerald-400
//                     "
//                   >
//                     ● Live
//                   </div>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="grid lg:grid-cols-2">
//                 {/* Left */}
//                 <div className="p-10 lg:p-16">
//                   <div
//                     className="
//                       inline-flex
//                       rounded-full
//                       border
//                       border-white/10
//                       px-4
//                       py-2
//                       text-sm
//                       text-zinc-400
//                     "
//                   >
//                     Full Stack Developer
//                   </div>

//                   <h3
//                     className="
//                       mt-8
//                       text-5xl
//                       font-bold
//                       leading-none
//                       md:text-6xl
//                     "
//                   >
//                     john
//                     <br />
//                     Doe
//                   </h3>

//                   <p
//                     className="
//                       mt-6
//                       max-w-md
//                       text-zinc-400
//                       leading-relaxed
//                     "
//                   >
//                     Building modern web
//                     applications with Next.js,
//                     React, MongoDB and scalable
//                     backend systems.
//                   </p>

//                   {/* Skills */}
//                   <div className="mt-8 flex flex-wrap gap-3">
//                     {[
//                       "React",
//                       "Next.js",
//                       "MongoDB",
//                       "Tailwind",
//                     ].map((skill) => (
//                       <div
//                         key={skill}
//                         className="
//                           rounded-full
//                           border
//                           border-white/10
//                           px-4
//                           py-2
//                           text-sm
//                           text-zinc-400
//                         "
//                       >
//                         {skill}
//                       </div>
//                     ))}
//                   </div>

//                   {/* Stats */}
//                   <div className="mt-12 grid grid-cols-3 gap-6">
//                     <div>
//                       <h4 className="text-3xl font-bold">
//                         12
//                       </h4>

//                       <p className="mt-1 text-zinc-500">
//                         Projects
//                       </p>
//                     </div>

//                     <div>
//                       <h4 className="text-3xl font-bold">
//                         20+
//                       </h4>

//                       <p className="mt-1 text-zinc-500">
//                         Skills
//                       </p>
//                     </div>

//                     <div>
//                       <h4 className="text-3xl font-bold">
//                         5
//                       </h4>

//                       <p className="mt-1 text-zinc-500">
//                         Certificates
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Right */}
//                 <div
//                   className="
//                     border-t
//                     border-white/10
//                     p-8
//                     lg:border-l
//                     lg:border-t-0
//                   "
//                 >
//                   <div className="space-y-5">
//                     {projects.map((project) => (
//                       <div
//                         key={project.title}
//                         className="
//                           group
//                           rounded-3xl
//                           border
//                           border-white/10
//                           bg-white/[0.03]
//                           p-5
//                           transition-all
//                           duration-300
//                           hover:border-white/20
//                           hover:bg-white/[0.05]
//                         "
//                       >
//                         <div
//                           className="
//                             h-36
//                             rounded-2xl
//                             bg-gradient-to-br
//                             from-zinc-800
//                             via-zinc-900
//                             to-black
//                           "
//                         />

//                         <h4
//                           className="
//                             mt-4
//                             text-lg
//                             font-semibold
//                           "
//                         >
//                           {project.title}
//                         </h4>

//                         <p
//                           className="
//                             mt-2
//                             text-sm
//                             text-zinc-500
//                           "
//                         >
//                           {project.tech}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Metrics */}
//           <div
//             className="
//               mt-12
//               grid
//               gap-4
//               md:grid-cols-4
//             "
//           >
//             {[
//               ["3", "Templates"],
//               ["1 Click", "Publish"],
//               ["100%", "Responsive"],
//               ["∞", "Customization"],
//             ].map(([value, label]) => (
//               <div
//                 key={label}
//                 className="
//                   rounded-2xl
//                   border
//                   border-white/10
//                   bg-white/[0.03]
//                   p-6
//                   text-center
//                 "
//               >
//                 <div className="text-3xl font-bold">
//                   {value}
//                 </div>

//                 <div className="mt-2 text-zinc-500">
//                   {label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import { useRef } from "react";
import { Globe, Code2 } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap/gsap";

export default function PortfolioShowcase() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (typeof window !== "undefined") {
        ScrollTrigger.refresh();
      }

      // 1. Header Animation
      gsap.from(".showcase-header-item", {
        scrollTrigger: {
          trigger: ".showcase-header",
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "opacity,transform",
      });

      // 2. Main Browser Frame Entrance
      gsap.from(".hero-mockup", {
        scrollTrigger: {
          trigger: ".showcase-mockup-wrapper",
          start: "top 85%",
        },
        y: 40,
        scale: 0.96,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        clearProps: "opacity,transform",
      });

      // 3. Floating Glass Badges Pop-in
      gsap.from(".hero-float-badge", {
        scrollTrigger: {
          trigger: ".showcase-mockup-wrapper",
          start: "top 80%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        delay: 0.2,
        ease: "back.out(1.7)",
        clearProps: "opacity,transform",
      });

      // 4. Bottom Metric Cards Entrance
      gsap.from(".showcase-metric-card", {
        scrollTrigger: {
          trigger: ".showcase-metrics",
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "opacity,transform",
      });

      // Floating Badges Continuous Drift Motion
      gsap.to(".hero-float-1", {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-float-2", {
        y: 10,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="
        relative
        overflow-hidden
        bg-black
        px-4 sm:px-6
        py-20 sm:py-32
        text-white
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[450px] sm:h-[600px]
          w-[450px] sm:w-[600px]
          -translate-x-1/2
          rounded-full
          bg-white/[0.03]
          blur-[140px] sm:blur-[180px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="showcase-header mx-auto max-w-4xl text-center">
          <p
            className="
              showcase-header-item
              text-xs sm:text-sm
              uppercase
              tracking-[0.25em]
              text-zinc-500
            "
          >
            Portfolio Preview
          </p>

          <h2
            className="
              showcase-header-item
              mt-4 sm:mt-6
              text-3xl sm:text-5xl md:text-7xl
              font-bold
              tracking-tight
            "
          >
            See what your portfolio
            <br />
            could look like.
          </h2>

          <p
            className="
              showcase-header-item
              mx-auto
              mt-6 sm:mt-8
              max-w-2xl
              text-base sm:text-lg
              leading-relaxed
              text-zinc-400
            "
          >
            Professional portfolio websites generated from your content and
            ready to publish in minutes.
          </p>
        </div>

        {/* Hero Mockup Showcase with Floating Badges */}
        <div className="showcase-mockup-wrapper mt-12 sm:mt-20 relative">
          {/* Floating Glass Badge 1 - Left */}
          <div className="hero-float-badge hero-float-1 absolute -left-4 md:left-6 top-12 z-20 hidden md:flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/90 p-4 shadow-2xl backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Globe size={20} />
            </div>
            <div>
              <div className="text-xs text-zinc-500">Live Status</div>
              <div className="text-sm font-semibold text-white">
                folioforge.com/john
              </div>
            </div>
          </div>

          {/* Floating Glass Badge 2 - Right */}
          <div className="hero-float-badge hero-float-2 absolute -right-4 md:right-6 bottom-16 z-20 hidden md:flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/90 p-4 shadow-2xl backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Code2 size={20} />
            </div>
            <div>
              <div className="text-xs text-zinc-500">Active Template</div>
              <div className="text-sm font-semibold text-white">
                Nova Dark Edition
              </div>
            </div>
          </div>

          {/* Browser Window Frame */}
          <div className="hero-mockup relative overflow-hidden rounded-[28px] md:rounded-[40px] border border-white/10 bg-zinc-950 p-2 shadow-[0_40px_120px_rgba(0,0,0,0.8)]">
            {/* Browser Top Navigation Bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-4 sm:px-6 py-3.5 sm:py-4 bg-zinc-900/50 rounded-t-[24px] sm:rounded-t-[28px]">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>

              <div className="mx-auto hidden sm:block rounded-full bg-black/50 border border-white/5 px-6 py-1.5 text-xs text-zinc-400 font-mono">
                folioforge.com/preview
              </div>

              <div className="text-xs text-emerald-400 font-mono flex items-center gap-1.5 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Preview
              </div>
            </div>

            {/* Inner Mockup Visual */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-b-[24px] sm:rounded-b-[28px] bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-6 sm:p-8 md:p-12 flex flex-col justify-between">
              {/* Profile Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 sm:pb-6">
                <div className="flex items-center gap-3">
                  <div className="h-8 sm:h-10 w-8 sm:w-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-white text-xs sm:text-base">
                    JD
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white">
                      John Doe
                    </div>
                    <div className="text-[10px] sm:text-xs text-zinc-400">
                      Full Stack Developer
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex gap-4 text-xs text-zinc-400">
                  <span>Projects</span>
                  <span>Skills</span>
                  <span>Experience</span>
                  <span className="text-white font-medium">Contact</span>
                </div>
              </div>

              {/* Main Profile Body */}
              <div className="my-auto py-4 sm:py-6">
                <div className="inline-block rounded-full bg-white/5 px-3 py-1 text-[10px] sm:text-xs text-zinc-400 border border-white/10 mb-3 sm:mb-4">
                  Available for new opportunities
                </div>

                <h2 className="text-xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white max-w-2xl leading-tight">
                  Building scalable web applications & modern digital products.
                </h2>

                <p className="mt-2 sm:mt-4 text-xs sm:text-base text-zinc-400 max-w-lg">
                  Specialized in React, Next.js, Node.js and cloud solutions.
                </p>
              </div>

              {/* Mockup Footer */}
              <div className="flex items-center justify-between border-t border-white/10 pt-4 sm:pt-6">
                <div className="flex gap-1.5 sm:gap-2">
                  <span className="rounded-lg bg-white/5 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs text-zinc-400 border border-white/5">
                    React
                  </span>
                  <span className="rounded-lg bg-white/5 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs text-zinc-400 border border-white/5">
                    Next.js
                  </span>
                  <span className="rounded-lg bg-white/5 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs text-zinc-400 border border-white/5">
                    MongoDB
                  </span>
                </div>

                <div className="text-[10px] sm:text-xs text-zinc-500">
                  Powered by{" "}
                  <span className="text-white font-semibold">FolioForge</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics */}
        <div className="showcase-metrics mt-8 sm:mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ["3", "Templates"],
            ["1 Click", "Publish"],
            ["100%", "Responsive"],
            ["∞", "Customization"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="showcase-metric-card rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold">{value}</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-zinc-500">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}