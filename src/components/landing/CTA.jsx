import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-zinc-950
            px-8
            py-16
            text-center
            md:px-16
            md:py-24
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[400px]
              w-[400px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white/[0.04]
              blur-[120px]
            "
          />

          <div className="relative">
            <h2
              className="
                text-4xl
                font-bold
                tracking-tight
                md:text-6xl
              "
            >
              Ready to build your
              portfolio?
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-lg
                text-zinc-400
              "
            >
              Create a beautiful personal
              website, showcase your work
              and publish it in minutes.
            </p>

            <div className="mt-10">
              <Link
                href="/auth/register"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-2xl
                  bg-white
                  px-7
                  py-4
                  font-medium
                  text-black
                  transition
                  hover:scale-105
                "
              >
                Start Building

                <ArrowRight size={18} />
              </Link>
            </div>

            <p
              className="
                mt-6
                text-sm
                text-zinc-500
              "
            >
              Free to start • No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}