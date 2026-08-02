import Image from "next/image";
import { FaGithub, FaLinkedin,FaInstagram } from "react-icons/fa";
import { MapPin, Mail, Phone } from "lucide-react";

export default function About({ aboutData, HeroData }) {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-zinc-900 bg-black"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 h-72 w-72 rounded-full bg-violet-600/20 blur-[140px]" />
      <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.4em] text-white ">
            About Me
          </p>

          <h2 className="mt-2 text-3xl font-bold text-violet-400 md:text-5xl">
            Get to know me.
          </h2>

          {/* <p className="mt-3 max-w-2xl text-md text-zinc-400">
            Learn more about my journey, experience, and passion for building
            modern digital products and meaningful user experiences.
          </p> */}
        </div>

        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            {aboutData?.image ? (
              <div
                className="
                  group
                  overflow-hidden
                  
                  border
                  border-zinc-800
                  bg-zinc-900/40
                  backdrop-blur-sm
                "
              >
                <Image
                  src={aboutData.image}
                  alt="About"
                  width={600}
                  height={600}
                  className="
                    h-100
                    w-full
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>
            ) : (
              <div className="h-125 rounded-3xl border border-zinc-800 bg-zinc-900" />
            )}
          </div>

          {/* Right Side */}
          <div>
            <div className="flex items-center gap-4 text-zinc-500">
            <h3 className="text-2xl font-bold text-white md:text-3xl">
              {HeroData?.name || "Your Name"}
            </h3>

            {HeroData?.title && (
              <div className="">
                <span
                  className="
                    rounded-full
                    border
                    border-violet-500/20
                    bg-violet-500/10
                    px-4
                    py-2
                    text-sm
                    text-violet-400
                  "
                >
                  {HeroData.title}
                </span>
              </div>
            )}
            </div>

            <p className="mt-4 max-w-xl text-md leading-8 text-zinc-400">
              {aboutData?.bio}
            </p>

            

            {/* Social Links */}
            <div className="mt-10">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
                Connect With Me
              </p>

              <div className="flex gap-4">
                {aboutData?.github && (
                  <a
                    href={aboutData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      rounded-2xl
                      border border-zinc-800
                      bg-zinc-900/40
                      p-4
                      text-zinc-400
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-violet-500
                      hover:text-violet-400
                    "
                  >
                    <FaGithub size={22} />
                  </a>
                )}

                {aboutData?.linkedin && (
                  <a
                    href={aboutData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      rounded-2xl
                      border border-zinc-800
                      bg-zinc-900/40
                      p-4
                      text-zinc-400
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-violet-500
                      hover:text-violet-400
                    "
                  >
                    <FaLinkedin size={22} />
                  </a>
                )}
                {aboutData?.instagram && (
                  <a
                    href={aboutData.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      rounded-2xl
                      border border-zinc-800
                      bg-zinc-900/40
                      p-4
                      text-zinc-400
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-violet-500
                      hover:text-violet-400
                    "
                  >
                    <FaInstagram size={22} />
                  </a>
                )}
              </div>
              
            </div>
          </div>
        </div>
         {/* Contact Cards
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {aboutData?.location && (
                <div
                  className="
                    flex items-center gap-3
                    rounded-2xl
                    border border-zinc-800
                    bg-zinc-900/40
                    p-4
                    transition
                    hover:border-violet-500/50
                  "
                >
                  <MapPin size={18} className="text-violet-400" />
                  <span className="text-zinc-300">
                    {aboutData.location}
                  </span>
                </div>
              )}

              {aboutData?.email && (
                <div
                  className="
                    flex items-center gap-3
                    rounded-2xl
                    border border-zinc-800
                    bg-zinc-900/40
                    p-4
                    transition
                    hover:border-violet-500/50
                  "
                >
                  <Mail size={18} className="text-violet-400" />
                  <span className="text-zinc-300 break-all">
                    {aboutData.email}
                  </span>
                </div>
              )}

              {aboutData?.phone && (
                <div
                  className="
                    flex items-center gap-3
                    rounded-2xl
                    border border-zinc-800
                    bg-zinc-900/40
                    p-4
                    transition
                    hover:border-violet-500/50
                  "
                >
                  <Phone size={18} className="text-violet-400" />
                  <span className="text-zinc-300">
                    {aboutData.phone}
                  </span>
                </div>
              )}
            </div> */}
      </div>
    </section>
  );
}