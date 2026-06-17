"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-black px-6 pb-24 pt-30 text-white">
      <div className="mx-auto max-w-7xl">
        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-zinc-950
          "
        >
          {/* Grid */}
          <div
            className="
              absolute
              inset-0
              bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
              bg-[size:60px_60px]
            "
          />

          {/* Glow */}
          <div
            className="
              absolute
              -bottom-32
              right-0
              h-[500px]
              w-[500px]
              rounded-full
              bg-violet-500/20
              blur-[150px]
            "
          />

          <div
            className="
              relative
              grid
              gap-12
              px-8
              py-12
              lg:grid-cols-2
              lg:px-16
              lg:py-16
            "
          >
            {/* Left */}
            <div className="flex flex-col justify-center">
              <div
                className="
                  inline-flex
                  w-fit
                  rounded-full
                  border
                  border-white/10
                  px-4
                  py-2
                  text-sm
                  text-zinc-400
                "
              >
                Portfolio Builder
              </div>

              <h1
                className="
                  mt-8
                  text-5xl
                  font-bold
                  leading-none
                  tracking-tight
                  md:text-7xl
                "
              >
                Build a portfolio
                <span className="block text-zinc-500">
                  worth sharing.
                </span>
              </h1>

              <p
                className="
                  mt-6
                  max-w-xl
                  text-lg
                  text-zinc-400
                "
              >
                Create beautiful personal websites,
                showcase your projects and publish
                your portfolio in minutes.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/auth/register"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-white
                    px-6
                    py-3
                    font-medium
                    text-black
                  "
                >
                  Start Building
                  <ArrowRight size={18} />
                </Link>

                <a
                  href="#templates"
                  className="
                    rounded-xl
                    border
                    border-white/10
                    px-6
                    py-3
                    text-white
                  "
                >
                  View Templates
                </a>
              </div>

              <div
                className="
                  mt-12
                  flex
                  gap-8
                "
              >
                <div>
                  <h3 className="text-3xl font-bold">
                    3+
                  </h3>

                  <p className="text-zinc-500">
                    Templates
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold">
                    Live
                  </h3>

                  <p className="text-zinc-500">
                    Preview
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold">
                    1 Click
                  </h3>

                  <p className="text-zinc-500">
                    Publish
                  </p>
                </div>
              </div>
            </div>

            {/* Right Preview */}
            <div className="relative">
              <div
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-4
                  backdrop-blur
                "
              >
                <div
                  className="
                    overflow-hidden
                    rounded-2xl
                    bg-zinc-900
                  "
                >
                  <div className="border-b border-white/10 p-4">
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-zinc-500">
                      Portfolio Preview
                    </p>

                    <h2 className="mt-4 text-5xl font-bold">
                      John
                      <br />
                      Doe
                    </h2>

                    <p className="mt-4 text-zinc-400">
                      Full Stack Developer
                    </p>

                    <div className="mt-8 grid grid-cols-2 gap-4">
                      <div className="h-24 rounded-xl bg-white/5" />
                      <div className="h-24 rounded-xl bg-white/5" />
                      <div className="h-24 rounded-xl bg-white/5" />
                      <div className="h-24 rounded-xl bg-white/5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}