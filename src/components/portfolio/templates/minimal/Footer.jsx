// import {
//   FaGithub,
//   FaLinkedin,
//   FaInstagram,
// } from "react-icons/fa";

// export default function Footer({
//   heroData,
//   aboutData,
// }) {
//   return (
//     <footer className="bg-white">
//       <div className="mx-auto max-w-7xl px-6 py-10">
//         <div
//           className="
//             flex
//             flex-col
//             items-center
//             justify-between
//             gap-6
            
//             pt-8
//             md:flex-row
//           "
//         >
//           {/* Left */}
//           <div>
//             <h3
//               className="
//                 text-lg
//                 font-bold
//                 text-black
//               "
//             >
//               {heroData?.name}
//             </h3>

//             <p
//               className="
//                 mt-1
//                 text-sm
//                 text-zinc-500
//               "
//             >
//               {heroData?.title}
//             </p>
//           </div>

//           {/* Socials */}
//           <div className="flex items-center gap-5">
//             {aboutData?.github && (
//               <a
//                 href={aboutData.github}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="
//                   text-zinc-500
//                   transition
//                   hover:text-lime-500
//                 "
//               >
//                 <FaGithub size={18} />
//               </a>
//             )}

//             {aboutData?.linkedin && (
//               <a
//                 href={aboutData.linkedin}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="
//                   text-zinc-500
//                   transition
//                   hover:text-lime-500
//                 "
//               >
//                 <FaLinkedin size={18} />
//               </a>
//             )}

//             {aboutData?.instagram && (
//               <a
//                 href={aboutData.instagram}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="
//                   text-zinc-500
//                   transition
//                   hover:text-lime-500
//                 "
//               >
//                 <FaInstagram size={18} />
//               </a>
//             )}
//           </div>
//         </div>

//         {/* Bottom */}
//         <div
//           className="
//             mt-6
//             flex
//             flex-col
//             items-center
//             justify-between
//             gap-3
//             text-sm
//             text-zinc-500
//             md:flex-row
//           "
//         >
//           <p>
//             © {new Date().getFullYear()}{" "}
//             {heroData?.name}. All rights
//             reserved.
//           </p>

//           <p>
//             Built with{" "}
//             <span className="font-medium text-lime-500">
//               FolioForge
//             </span>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import { useRef } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { ArrowUpRight, Heart } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap/gsap";

export default function Footer({ heroData, aboutData }) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (typeof window !== "undefined") {
        ScrollTrigger.refresh();
      }

      gsap.fromTo(
        ".footer-animate",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <footer
      ref={containerRef}
      className="border-t border-zinc-200 bg-white text-zinc-800"
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
       
        

        {/* Links and Socials Row */}
        <div className="footer-animate mt-12 flex flex-col items-center justify-between gap-8 border-b border-zinc-200 pb-12 md:flex-row">
          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-zinc-600">
            <a href="#about" className="transition hover:text-lime-600">
              About
            </a>
            <a href="#skills" className="transition hover:text-lime-600">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-lime-600">
              Projects
            </a>
            <a href="#experience" className="transition hover:text-lime-600">
              Experience
            </a>
            <a href="#education" className="transition hover:text-lime-600">
              Education
            </a>
            <a href="#contact" className="transition hover:text-lime-600">
              Contact
            </a>
          </nav>

          {/* Social Icons Cards */}
          <div className="flex items-center gap-3">
            {aboutData?.github && (
              <a
                href={aboutData.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 transition hover:border-lime-400 hover:bg-lime-50 hover:text-lime-600 shadow-xs"
              >
                <FaGithub size={20} />
              </a>
            )}

            {aboutData?.linkedin && (
              <a
                href={aboutData.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 transition hover:border-lime-400 hover:bg-lime-50 hover:text-lime-600 shadow-xs"
              >
                <FaLinkedin size={20} />
              </a>
            )}

            {aboutData?.instagram && (
              <a
                href={aboutData.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 transition hover:border-lime-400 hover:bg-lime-50 hover:text-lime-600 shadow-xs"
              >
                <FaInstagram size={20} />
              </a>
            )}
          </div>
           <a
            href="#hero"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-lime-500 hover:text-white"
          >
            Back to top
            <ArrowUpRight size={16} />
          </a>
        </div>


        {/* Bottom Credits */}
        <div className="footer-animate mt-8 flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} {heroData?.name || "All rights reserved"}. All rights reserved.
          </p>

          <p className="inline-flex items-center gap-1.5 font-medium">
            Crafted with <Heart size={14} className="fill-red-500 text-red-500" /> using{" "}
            <span className="font-bold text-black">FolioForge</span>
          </p>
        </div>
      </div>
    </footer>
  );
}