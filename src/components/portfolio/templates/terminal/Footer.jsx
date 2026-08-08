// export default function Footer() {
//   return (
//     <footer
//       className="
//         border-t
//         border-zinc-800
//         bg-black
//       "
//     >
//       <div className="mx-auto max-w-6xl px-6 py-10">
//         <div className="font-mono">
//           <p className="text-green-500">
//             $ echo "folioforge"
//           </p>

//           <p className="mt-3 text-zinc-300">
//             Crafting developer portfolios, one command at a time.
//           </p>

//           <div
//             className="
//               mt-8
//               flex
//               flex-col
//               gap-3
//               border-t
//               border-zinc-800
//               pt-6
//               text-sm
//               text-zinc-500
//               md:flex-row
//               md:items-center
//               md:justify-between
//             "
//           >
//             <p>
//               © {new Date().getFullYear()} All rights reserved.
//             </p>

//             <p>
//               Powered by{" "}
//               <span className="text-green-500">
//                 FolioForge
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


"use client";

import { useRef } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";
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
        ".footer-terminal-animate",
        { opacity: 0, y: 20 },
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
      className="border-t border-zinc-800 bg-black font-mono text-zinc-100"
    >
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="space-y-8">
          {/* Echo Command */}
          <div className="footer-terminal-animate">
            <p className="text-green-500">$ echo &quot;portfolio.info&quot;</p>
            <p className="mt-3 text-lg text-zinc-300 font-bold">
              {heroData?.name || "Developer Portfolio"}
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              {heroData?.title || "Crafting digital experiences command by command."}
            </p>
          </div>

          {/* Nav & Socials Row */}
          <div className="footer-terminal-animate flex flex-col gap-6 border-t border-zinc-800/80 pt-6 md:flex-row md:items-center md:justify-between">
            {/* Nav Shortcuts */}
            <nav className="flex flex-wrap gap-4 text-xs text-zinc-400">
              <a href="#about" className="hover:text-green-500 transition">
                ./about
              </a>
              <a href="#skills" className="hover:text-green-500 transition">
                ./skills
              </a>
              <a href="#projects" className="hover:text-green-500 transition">
                ./projects
              </a>
              <a href="#experience" className="hover:text-green-500 transition">
                ./experience
              </a>
              <a href="#education" className="hover:text-green-500 transition">
                ./education
              </a>
              <a href="#contact" className="hover:text-green-500 transition">
                ./contact
              </a>
            </nav>

            {/* Social Links */}
            <div className="flex items-center gap-4 text-zinc-400">
              {aboutData?.github && (
                <a
                  href={aboutData.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="hover:text-green-500 transition"
                >
                  <FaGithub size={18} />
                </a>
              )}
              {aboutData?.linkedin && (
                <a
                  href={aboutData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-green-500 transition"
                >
                  <FaLinkedin size={18} />
                </a>
              )}
              {aboutData?.instagram && (
                <a
                  href={aboutData.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="hover:text-green-500 transition"
                >
                  <FaInstagram size={18} />
                </a>
              )}
              {aboutData?.twitter && (
                <a
                  href={aboutData.twitter}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  className="hover:text-green-500 transition"
                >
                  <FaXTwitter size={18} />
                </a>
              )}

              <a
                href="#hero"
                className="ml-2 inline-flex items-center gap-1 rounded-md border border-zinc-800 px-2.5 py-1 text-xs text-zinc-400 hover:border-green-500 hover:text-green-500 transition"
              >
                top <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          {/* Credits */}
          <div className="footer-terminal-animate flex flex-col gap-2 border-t border-zinc-800/80 pt-6 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} {heroData?.name || "FolioForge"}. All rights reserved.</p>

            <p>
              Powered by <span className="text-green-500">FolioForge</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}