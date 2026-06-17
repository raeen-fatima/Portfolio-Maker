import {
  Mail,
  MessageCircle,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-5xl text-center">
          <p
            className="
              text-sm
              uppercase
              tracking-[0.25em]
              text-zinc-500
            "
          >
            Support
          </p>

          <h1
            className="
              mt-6
              text-5xl
              font-bold
              tracking-tight
              md:text-7xl
            "
          >
            Need help?
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              text-zinc-400
            "
          >
            Have questions about FolioForge?
            We're here to help you build,
            customize and publish your portfolio.
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Email */}
            <div
              className="
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                transition
                hover:border-white/20
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
                Email Support
              </h3>

              <p className="mt-3 text-zinc-400">
                Reach out directly to our team.
              </p>

              <p className="mt-6 text-white">
                support@folioforge.com
              </p>
            </div>

            {/* Community */}
            <div
              className="
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                transition
                hover:border-white/20
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
                Community
              </h3>

              <p className="mt-3 text-zinc-400">
                Connect with other creators and
                get help from the community.
              </p>

              <p className="mt-6 text-white">
                Join Discussions
              </p>
            </div>

            {/* Docs */}
            <div
              className="
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                transition
                hover:border-white/20
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
                <BookOpen size={22} />
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                Documentation
              </h3>

              <p className="mt-3 text-zinc-400">
                Learn how everything works.
              </p>

              <p className="mt-6 text-white">
                Browse Docs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div
            className="
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.03]
              p-8
              md:p-12
            "
          >
            <div className="mb-10">
              <h2 className="text-3xl font-bold">
                Contact us
              </h2>

              <p className="mt-3 text-zinc-400">
                Send us a message and we'll get
                back to you as soon as possible.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
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
                      focus:border-white/20
                    "
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
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
                      focus:border-white/20
                    "
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="How can we help?"
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
                    focus:border-white/20
                  "
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell us about your issue..."
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

          {/* Trust */}
          <div className="mt-12 text-center">
            <p className="text-zinc-500">
              Average response time
            </p>

            <p className="mt-2 text-2xl font-bold">
              Less than 24 hours
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}