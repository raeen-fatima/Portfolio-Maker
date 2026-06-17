"use client";

import {
  Mail,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-black
        px-6
        py-32
        text-white
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-white/[0.03]
          blur-[180px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <p
            className="
              text-sm
              uppercase
              tracking-[0.25em]
              text-zinc-500
            "
          >
            Contact
          </p>

          <h2
            className="
              mt-6
              text-5xl
              font-bold
              tracking-tight
              md:text-7xl
            "
          >
            Let's build
            <br />
            something great.
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
            Have a question, opportunity or
            project idea? We'd love to hear
            from you.
          </p>
        </div>

        <div
          className="
            mt-20
            grid
            gap-8
            lg:grid-cols-[1fr_1.5fr]
          "
        >
          {/* Left Side */}
          <div className="space-y-6">
            <div
              className="
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white/5
                "
              >
                <Mail size={22} />
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                Email
              </h3>

              <p className="mt-3 text-zinc-400">
                Reach out directly anytime.
              </p>

              <p className="mt-6 text-white">
                hello@folioforge.com
              </p>
            </div>

            <div
              className="
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white/5
                "
              >
                <MessageCircle size={22} />
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                Response Time
              </h3>

              <p className="mt-3 text-zinc-400">
                Usually within 24 hours.
              </p>

              <p className="mt-6 text-white">
                Fast & Reliable Support
              </p>
            </div>
          </div>

          {/* Form */}
          <div
            className="
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.03]
              p-8
              md:p-10
            "
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold">
                Send a message
              </h3>

              <p className="mt-3 text-zinc-400">
                Fill out the form below and
                we'll get back to you.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-zinc-500">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-white/10
                      bg-black
                      px-4
                      py-4
                      text-white
                      outline-none
                      transition
                      focus:border-white/20
                    "
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-500">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-white/10
                      bg-black
                      px-4
                      py-4
                      text-white
                      outline-none
                      transition
                      focus:border-white/20
                    "
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-500">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-black
                    px-4
                    py-4
                    text-white
                    outline-none
                    transition
                    focus:border-white/20
                  "
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-500">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-black
                    px-4
                    py-4
                    text-white
                    outline-none
                    transition
                    focus:border-white/20
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-2xl
                  bg-white
                  px-6
                  py-4
                  font-medium
                  text-black
                  transition
                  hover:scale-[1.02]
                "
              >
                Send Message

                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}