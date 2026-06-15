import Image from "next/image";
import Link from "next/link";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export default function Hero({
  heroData,
  socialLinks,
}) {
  const titleWords =
    heroData?.title?.split(" ") || [];

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-20 h-125 w-125 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />

        <div className="absolute right-0 top-1/2 h-87.5 w-87.5 rounded-full bg-violet-500/20 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300 mb-6">
              Available For Work ✨
            </div>

            {/* Intro */}
            <p className="text-zinc-400 text-lg mb-4">
              Hey, I&apos;m{" "}
               👋
            </p>

            {/* Title */}
            <h1
              className="
                text-6xl
                md:text-5xl
                lg:text-6xl
                font-black
                tracking-tight
                leading-[0.9]
              "
            >
              <span className="block bg-linear-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                {heroData?.name || "Your Name"}
              </span>

              <span className="block text-white md:text-4xl
                lg:text-5xl">
                {titleWords.slice(1).join(" ") ||
                  "Developer"}
              </span>
            </h1>

            {/* Tagline */}
            <p
              className="
                mt-4
                max-w-xl
                text-md
                lg:text-lg
                leading-relaxed
                text-zinc-400
              "
            >
              {heroData?.tagline ||
                "Building beautiful digital experiences with modern technologies."}
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="
                  rounded-xl
                  bg-white
                  px-4
                  py-3
                  text-black
                  font-semibold
                  transition-all
                  duration-300
                  hover:bg-violet-500
                  hover:scale-105
                "
              >
                Get In Touch
              </a>

              {heroData?.resumeUrl && (
                <a
                  href={heroData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-xl
                    border
                    border-zinc-800
                    px-6
                    py-3
                    text-white
                    font-semibold
                    transition-all
                    duration-300
                    hover:border-violet-500
                    hover:bg-violet-500
                  "
                >
                  Download Resume
                </a>
              )}
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-5">
              {socialLinks?.github && (
                <Link
                  href={socialLinks.github}
                  target="_blank"
                  className="
                    text-zinc-500
                    transition
                    hover:text-violet-400
                    hover:scale-110
                  "
                >
                  <FaGithub size={24} />
                </Link>
              )}

              {socialLinks?.linkedin && (
                <Link
                  href={socialLinks.linkedin}
                  target="_blank"
                  className="
                    text-zinc-500
                    transition
                    hover:text-violet-400
                    hover:scale-110
                  "
                >
                  <FaLinkedin size={24} />
                </Link>
              )}

              {socialLinks?.twitter && (
                <Link
                  href={socialLinks.twitter}
                  target="_blank"
                  className="
                    text-zinc-500
                    transition
                    hover:text-violet-400
                    hover:scale-110
                  "
                >
                  <FaXTwitter size={24} />
                </Link>
              )}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer Ring */}
              <div
                className="
                  absolute
                  inset-0
                  scale-110
                  rounded-full
                  border
                  border-violet-500/30
                "
              />

              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-violet-500/20
                  blur-3xl
                "
              />

              {heroData?.image ? (
                <Image
                  src={heroData.image}
                  alt={heroData.name}
                  width={420}
                  height={420}
                  priority
                  className="
                    relative
                    z-10
                    h-72
                    w-72
                    md:h-96
                    md:w-96
                    rounded-full
                    object-cover
                    shadow-[0_0_80px_rgba(139,92,246,0.25)]
                    transition-all
                    duration-500
                    hover:scale-105
                  "
                />
              ) : (
                <div
                  className="
                    relative
                    z-10
                    h-72
                    w-72
                    md:h-96
                    md:w-96
                    rounded-full
                    bg-zinc-900
                    border
                    border-zinc-800
                  "
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}