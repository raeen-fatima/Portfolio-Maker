// export default function Footer() {
//   return (
//     <footer className="border-t border-zinc-900 bg-black">
//       <div className="mx-auto max-w-7xl px-6 py-8 text-center">
//         <p className="text-sm text-zinc-500">
//           © {new Date().getFullYear()}
//           {" "}
//           <span className="font-medium text-violet-400">
//             FolioForge
//           </span>
//           . All rights reserved.
//         </p>

//         <p className="mt-2 text-xs text-zinc-600">
//           Crafted for developers, designers & creators.
//         </p>
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
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <footer
      ref={containerRef}
      className="relative overflow-hidden border-t border-zinc-900 bg-black text-zinc-400"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-40 w-96 rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        {/* Links & Socials Row */}
        <div className="footer-animate mt-12 flex flex-col items-center justify-between gap-8 border-b border-zinc-900 pb-12 md:flex-row">
          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-zinc-400">
            <a href="#about" className="transition hover:text-violet-400">
              About
            </a>
            <a href="#skills" className="transition hover:text-violet-400">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-violet-400">
              Projects
            </a>
            <a href="#experience" className="transition hover:text-violet-400">
              Experience
            </a>
            <a href="#education" className="transition hover:text-violet-400">
              Education
            </a>
            <a href="#contact" className="transition hover:text-violet-400">
              Contact
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {aboutData?.github && (
              <a
                href={aboutData.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/40 text-zinc-400 transition-all hover:border-violet-500 hover:text-violet-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]"
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
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/40 text-zinc-400 transition-all hover:border-violet-500 hover:text-violet-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]"
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
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/40 text-zinc-400 transition-all hover:border-violet-500 hover:text-violet-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]"
              >
                <FaInstagram size={20} />
              </a>
            )}
          </div>
          <a
            href="#hero"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-black px-5 py-2.5 text-sm font-semibold text-white transition-all hover:border-violet-500/50 hover:text-violet-400"
          >
            Back to top
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Bottom Credits */}
        <div className="footer-animate mt-8 flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">
          <p>
            © {new Date().getFullYear()}{" "}
            {heroData?.name || "All rights reserved"}. All rights reserved.
          </p>

          <p className="inline-flex items-center gap-1.5 font-medium">
            Crafted with{" "}
            <Heart size={14} className="fill-violet-500 text-violet-500" />{" "}
            using <span className="font-bold text-violet-400">FolioForge</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
