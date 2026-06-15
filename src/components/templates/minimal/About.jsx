import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function About({
  aboutData,
}) {
  return (
    <section
      id="about"
      className="
        border-b
        border-zinc-200
        bg-white
      "
    >
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          
          {/* Image */}
          <div>
            {aboutData?.image && (
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-4xl
                  border-2
                  border-zinc-200
                "
              >
                <Image
                  src={aboutData.image}
                  alt="About"
                  width={600}
                  height={700}
                  
                  className="
                    h-137.5
                    w-full
                    object-cover
                  "
                />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            
            <p
              className="
                text-xs
                uppercase
                tracking-[0.35em]
                text-zinc-500
              "
            >
              About Me
            </p>

            <h2
              className="
                mt-2
                text-3xl
                font-bold
                tracking-tight
                text-black
                md:text-4xl
              "
            >
              Building meaningful digital
              experiences.
            </h2>

            <p
              className="
                mt-4
                text-sm
                leading-8
                text-zinc-600
              "
            >
              {aboutData?.bio}
            </p>

            {/* Stats */}
            <div
              className="
                mt-4
                grid
                grid-cols-3
                gap-6
                border-y
                border-zinc-200
                py-8
              "
            >
              <div>
                <h3 className="text-3xl font-bold text-lime-500">
                  2+
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                  Years Learning
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-lime-500">
                  10+
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-lime-500">
                  100%
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                  Dedication
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="mt-10">
              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  gap-2
                  font-bold
                  text-black
                  transition
                  hover:text-lime-500
                "
              >
                Let&apos;s Connect
                <ArrowRight size={18} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}