import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Hero({ heroData, aboutData }) {
  return (
    <section
      id="hero"
      className="
        overflow-hidden
        border-b
        border-zinc-200
        bg-white
      "
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            {/* Intro */}
            <p
              className="
                text-xs
                uppercase
                tracking-[0.35em]
                text-zinc-500
              "
            >
              Hello, I&apos;am
            </p>

            {/* Name */}
            <h1
              className="
                mt-2
                text-5xl
                font-bold
                leading-[0.9]
                tracking-tight
                text-lime-400

                sm:text-4xl
                md:text-5xl
                lg:text-6xl
              "
            >
              {heroData?.name}
            </h1>

            {/* Title */}
            {heroData?.title && (
              <h2
                className="
                  mt-3
                  text-xl
                  font-bold
                  text-zinc-700

                  md:text-2xl
                "
              >
                {heroData.title}
              </h2>
              
            )}
            <div className="mt-4 h-0.5 w-26 bg-lime-400 rounded-full" />

            {/* Tagline */}
            {heroData?.tagline && (
              <p
                className="
                  mt-4
                  max-w-xl
                  text-md
                  leading-8
                  text-zinc-500
                "
              >
                {heroData.tagline}
              </p>
            )}

            {/* Socials
            <div className="mt-6 flex items-center gap-5">
              {aboutData?.github && (
                <a
                  href={aboutData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    text-zinc-500
                   
                    hover:text-lime-500 hover:-translate-y-1 transition-all duration-300
                  "
                >
                  <FaGithub size={20} />
                </a>
              )}

              {aboutData?.linkedin && (
                <a
                  href={aboutData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    text-zinc-500
                   hover:text-lime-500 hover:-translate-y-1 transition-all duration-300
                  "
                >
                  <FaLinkedin size={20} />
                </a>
              )}

              {aboutData?.instagram && (
                <a
                  href={aboutData.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    text-zinc-500
                   hover:text-lime-500 hover:-translate-y-1 transition-all duration-300
                  "
                >
                  <FaInstagram size={20} />
                </a>
              )}
            </div> */}

            {/* CTA */}
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="
                  rounded-full
                  bg-lime-300
                  px-6
                  py-2
                  text-sm
                  font-bold
                  text-black
                  transition
                  hover:opacity-90
                  hover:bg-lime-500
                "
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="
                  rounded-full
                  border-2
                  border-lime-300
                  px-6
                  py-2
                  text-sm
                  font-bold
                  text-black
                  transition
                  hover:bg-lime-400
                "
              >
                Hire Me
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background Frame */}
              <div
                className="
                  absolute
                  -left-5
                  -bottom-5
                  h-full
                  w-full
                  rounded-3xl
                  border
                  border-lime-300
                "
              />

              {/* Image */}
              <div
                className="
                  relative
                  h-125
                  w-90
                  overflow-hidden
                  rounded-3xl
                  bg-zinc-100
                "
              >
                {heroData?.image && (
                  <Image
                    src={heroData.image}
                    alt={heroData?.name}
                    fill
                    sizes="360px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
