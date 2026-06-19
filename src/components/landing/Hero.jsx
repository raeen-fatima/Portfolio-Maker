"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="
        relative overflow-hidden
        text-white
        bg-black
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute inset-0 overflow-hidden
        "
      >
        <div
          className="
            absolute left-0 top-20
            h-96 w-96
            bg-violet-500/10
            rounded-full
            blur-[140px]
          "
          /
        >
        <div
          className="
            absolute right-0 bottom-0
            h-96 w-96
            bg-blue-500/10
            rounded-full
            blur-[140px]
          "
          /
        >
      </div>

      {/* Grid */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]
        "
        /
      >

      <div
        className="
          relative
          max-w-7xl
          mx-auto px-6 pt-32 pb-24
        "
      >
        <div
          className="
            grid lg:grid-cols-2 items-center
            gap-16
          "
        >
          {/* LEFT */}
          <div>
            <div
              className="
                inline-flex items-center
                px-4 py-2
                text-sm text-zinc-400
                bg-white/[0.03]
                rounded-full border border-white/10
                gap-2
              "
            >
              <Sparkles size={14} />
              Portfolio Builder for Developers
            </div>

            <h1
              className="
                mt-8
                text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95]
                tracking-tight
              "
            >
              Build a portfolio
              <span
                className="
                  block
                  text-zinc-500
                "
              >
                worth sharing.
              </span>
            </h1>

            <p
              className="
                max-w-xl
                mt-6
                text-lg text-zinc-400 leading-relaxed
              "
            >
              Create stunning developer portfolios,
              showcase projects, skills and experience,
              then publish your website in minutes.
            </p>

            {/* Buttons */}
            <div
              className="
                flex flex-wrap
                mt-10
                gap-4
              "
            >
              <Link
                href="/dashboard/portfolio"
                className="
                  inline-flex items-center
                  px-6 py-3
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
                  hidden sm:inline-flex
                  px-6 py-3
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
                grid grid-cols-3
                mt-14 p-3
                gap-3
              "
            >
              <div
                className="

                "
              >
                <h3
                  className="
                    text-2xl font-bold
                  "
                >
                  3+
                </h3>

                <p
                  className="
                    mt-1
                    text-zinc-500
                  "
                >
                  Templates
                </p>
              </div>

              <div>
                <h3
                  className="
                    text-2xl font-bold
                  "
                >
                  Live
                </h3>

                <p
                  className="
                    mt-1
                    text-zinc-500
                  "
                >
                  Preview
                </p>
              </div>

              <div>
                <h3
                  className="
                    text-2xl font-bold
                  "
                >
                  1 Click
                </h3>

                <p
                  className="
                    mt-1
                    text-zinc-500
                  "
                >
                  Publish
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="
              relative
            "
          >
            <div
              className="
                p-5
                bg-white/[0.03]
                rounded-[32px] border border-white/10
                backdrop-blur-xl
              "
            >
              <div
                className="
                  overflow-hidden
                  bg-zinc-950
                  rounded-[28px] border border-white/10
                "
              >
                {/* Browser Top */}
                <div
                  className="
                    p-4
                    border-b border-white/10
                  "
                >
                  <div
                    className="
                      flex
                      gap-2
                    "
                  >
                    <div
                      className="
                        h-3 w-3
                        bg-red-500
                        rounded-full
                      "
                      /
                    >
                    <div
                      className="
                        h-3 w-3
                        bg-yellow-500
                        rounded-full
                      "
                      /
                    >
                    <div
                      className="
                        h-3 w-3
                        bg-green-500
                        rounded-full
                      "
                      /
                    >
                  </div>
                </div>

                {/* Portfolio Preview */}
                <div
                  className="
                    p-8
                  "
                >
                  <div
                    className="
                      flex items-center
                      gap-4
                    "
                  >
                    <div
                      className="
                        h-16 w-16
                        bg-white/10
                        rounded-2xl
                      "
                      /
                    >

                    <div>
                      <h2
                        className="
                          text-2xl font-bold
                        "
                      >
                        John Doe
                      </h2>

                      <p
                        className="
                          text-zinc-400 text-sm
                        "
                      >
                        Full Stack Developer
                      </p>
                    </div>
                  </div>

                  
                  <div
                    className="
                      mt-8 space-y-3
                    "
                  >
                    <div
                      className="
                        h-20
                        bg-white/5
                        rounded-xl
                      "
                      /
                    >
                    <div
                      className="
                        h-20
                        bg-white/5
                        rounded-xl
                      "
                      /
                    >
                    <div
                      className="
                        h-20
                        bg-white/5
                        rounded-xl
                      "
                      /
                    >
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div
              className="
                absolute hidden lg:block
                p-4
                bg-black
                rounded-2xl border border-white/10
                -bottom-6 -left-6
              "
            >
              <p
                className="
                  text-sm text-zinc-500
                "
              >
                Portfolio Status
              </p>

              <h3
                className="
                  mt-1
                  text-lg font-semibold
                "
              >
                Ready to Publish 🚀
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}