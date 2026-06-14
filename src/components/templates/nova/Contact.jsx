import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { FaGithub, FaLinkedin,FaInstagram } from "react-icons/fa";

export default function Contact({
  aboutData,
}) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-zinc-900 bg-black"
    >
      {/* Glow */}
      <div className="absolute top-20 left-0 h-72 w-72 rounded-full bg-violet-600/20 blur-[140px]" />
      <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.4em] text-violet-400">
            Contact
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white md:text-5xl">
            Let's Work Together
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Have a project in mind or simply want to connect?
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-4">
            {aboutData?.email && (
              <div className="flex gap-4 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-5">
                <Mail className="text-violet-400" />
                <div>
                  <p className="text-sm text-zinc-500">
                    Email
                  </p>

                  <p className="text-white">
                    {aboutData.email}
                  </p>
                </div>
              </div>
            )}

            {aboutData?.phone && (
              <div className="flex gap-4 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-5">
                <Phone className="text-violet-400" />
                <div>
                  <p className="text-sm text-zinc-500">
                    Phone
                  </p>

                  <p className="text-white">
                    {aboutData.phone}
                  </p>
                </div>
              </div>
            )}

            {aboutData?.location && (
              <div className="flex gap-4 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-5">
                <MapPin className="text-violet-400" />
                <div>
                  <p className="text-sm text-zinc-500">
                    Location
                  </p>

                  <p className="text-white">
                    {aboutData.location}
                  </p>
                </div>
              </div>
            )}

            {/* Social Links */}

            
            
          </div>
          
          
          

          {/* Form */}
          <div
            className="
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-900/40
              p-6
              backdrop-blur-sm
            "
          >
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-zinc-800
                  bg-black
                  px-4
                  py-4
                  text-white
                  outline-none
                  focus:border-violet-500
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-zinc-800
                  bg-black
                  px-4
                  py-4
                  text-white
                  outline-none
                  focus:border-violet-500
                "
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-zinc-800
                  bg-black
                  px-4
                  py-4
                  text-white
                  outline-none
                  resize-none
                  focus:border-violet-500
                "
              />

              <button
                className="
                  w-full
                  rounded-2xl
                  bg-violet-600
                  py-4
                  font-medium
                  text-white
                  transition
                  hover:bg-violet-500
                "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}