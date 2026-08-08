'use client';

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap/gsap";

export default function Hero() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (typeof window !== "undefined") {
        ScrollTrigger.refresh();
      }

      // Entrance Timeline Sequence
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.from(".hero-badge", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        clearProps: "opacity,transform",
      })
        .from(
          ".hero-title",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
            clearProps: "opacity,transform",
          },
          "-=0.3"
        )
        .from(
          ".hero-description",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            clearProps: "opacity,transform",
          },
          "-=0.4"
        )
        .from(
          ".hero-buttons",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            clearProps: "opacity,transform",
          },
          "-=0.3"
        )
        .from(
          ".hero-stats",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            clearProps: "opacity,transform",
          },
          "-=0.3"
        )
        .from(
          ".hero-preview",
          {
            y: 40,
            scale: 0.96,
            opacity: 0,
            duration: 0.8,
            clearProps: "opacity,transform",
          },
          "-=0.4"
        )
        .from(
          ".hero-float-badge",
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
            clearProps: "opacity,transform",
          },
          "-=0.3"
        );

      // Continuous subtle ambient drift animations
      gsap.to(".hero-float-badge", {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-float-cards", {
        y: 6,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="home"
      className="
        relative overflow-hidden
        text-white
        bg-black
        px-4 sm:px-6
        pt-32 pb-24
      "
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute left-0 top-20
            h-96 w-96
            bg-violet-500/10
            rounded-full
            blur-[140px]
          "
        />
        <div
          className="
            absolute right-0 bottom-0
            h-96 w-96
            bg-blue-500/10
            rounded-full
            blur-[140px]
          "
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]
        "
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* LEFT COLUMN */}
          <div>
            <div
              className="
                hero-badge
                inline-flex items-center
                px-4 py-2
                text-sm text-zinc-400
                bg-white/[0.03]
                rounded-full border border-white/10
                gap-2
              "
            >
              <Sparkles size={14} className="text-amber-400 shrink-0" />
              <span>Portfolio Builder for Developers</span>
            </div>

            <h1
              className="
                hero-title
                mt-8
                text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.02]
                tracking-tight
              "
            >
              Build a portfolio
              <span className="block text-zinc-500">
                worth sharing.
              </span>
            </h1>

            <p
              className="
                hero-description
                max-w-xl
                mt-6
                text-base sm:text-lg text-zinc-400 leading-relaxed
              "
            >
              Create stunning developer portfolios, showcase projects, skills
              and experience, then publish your website in minutes.
            </p>

            {/* Buttons */}
            <div
              className="
                hero-buttons
                flex flex-wrap items-center
                mt-10
                gap-4
              "
            >
              <Link
                href="/dashboard/portfolio"
                className="
                  inline-flex items-center justify-center
                  w-full sm:w-auto
                  px-6 py-3.5
                  font-medium text-black
                  bg-white
                  rounded-xl
                  transition hover:opacity-90
                  gap-2
                "
              >
                Start Building
                <ArrowRight size={18} />
              </Link>

              <a
                href="#templates"
                className="
                  hidden sm:inline-flex items-center justify-center
                  px-6 py-3.5
                  font-medium text-white
                  hover:bg-white/[0.04]
                  rounded-xl border border-white/10
                  transition
                "
              >
                View Templates
              </a>
            </div>

            {/* Stats */}
            <div
              className="
                hero-stats
                grid grid-cols-3
                mt-14 p-3
                gap-3
              "
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">3+</h3>
                <p className="mt-1 text-xs sm:text-sm text-zinc-500">Templates</p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold">Live</h3>
                <p className="mt-1 text-xs sm:text-sm text-zinc-500">Preview</p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold">1 Click</h3>
                <p className="mt-1 text-xs sm:text-sm text-zinc-500">Publish</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative">
            <div
              className="
                hero-preview
                p-4 sm:p-5
                bg-white/[0.03]
                rounded-[28px] sm:rounded-[32px] border border-white/10
                backdrop-blur-xl
              "
            >
              <div
                className="
                  overflow-hidden
                  bg-zinc-950
                  rounded-[24px] sm:rounded-[28px] border border-white/10
                "
              >
                {/* Browser Top */}
                <div className="p-4 border-b border-white/10">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 bg-red-500/80 rounded-full" />
                    <div className="h-3 w-3 bg-yellow-500/80 rounded-full" />
                    <div className="h-3 w-3 bg-green-500/80 rounded-full" />
                  </div>
                </div>

                {/* Portfolio Preview */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="h-14 sm:h-16 w-14 sm:w-16 bg-white/10 rounded-2xl flex items-center justify-center font-bold text-lg">
                      JD
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold">
                        John Doe
                      </h2>
                      <p className="text-zinc-400 text-xs sm:text-sm">
                        Full Stack Developer
                      </p>
                    </div>
                  </div>

                  <div className="hero-float-cards mt-6 sm:mt-8 space-y-3">
                    <div className="h-16 sm:h-20 bg-white/5 rounded-xl border border-white/5" />
                    <div className="h-16 sm:h-20 bg-white/5 rounded-xl border border-white/5" />
                    <div className="h-16 sm:h-20 bg-white/5 rounded-xl border border-white/5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Status Badge */}
            <div
              className="
                hero-float-badge
                absolute hidden lg:block
                p-4
                bg-zinc-900/90 backdrop-blur-xl
                rounded-2xl border border-white/10
                -bottom-6 -left-6
                shadow-2xl
                z-10
              "
            >
              <p className="text-xs text-zinc-500">Portfolio Status</p>
              <h3 className="mt-1 text-sm font-semibold text-white">
                Ready to Publish 🚀
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}