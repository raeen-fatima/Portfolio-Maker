import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const templates = [
  {
    number: "01",
    name: "Nova",
    description:
      "A premium dark portfolio crafted for developers, designers and creators who want a modern online presence.",
    image: "/nova.png",
    tag: "Most Popular",
  },

  {
    number: "02",
    name: "Minimal",
    description:
      "Clean, elegant and distraction-free. Designed to put your work and achievements first.",
    image: "/minimal.png",
    tag: "Minimal",
  },

  {
    number: "03",
    name: "Terminal",
    description:
      "Ethical-Hackers-first portfolio inspired by terminals and modern engineering culture.",
    image: "/terminal.png",
    tag: "Cyber Security",
  },
];

export default function Templates() {
  return (
    <section
      id="templates"
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
          top-20
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-white/[0.02]
          blur-[180px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-4xl">
          <p
            className="
              text-sm
              uppercase
              tracking-[0.25em]
              text-zinc-500
            "
          >
            Templates
          </p>

          <h2
            className="
              mt-5
              text-5xl
              font-bold
              tracking-tight
              md:text-7xl
            "
          >
            Designed for every
            <br />
            kind of creator.
          </h2>

          <p
            className="
              mt-8
              max-w-2xl
              text-lg
              leading-relaxed
              text-zinc-400
            "
          >
            From minimal portfolios to developer-first
            experiences. Choose a template that fits
            your personality.
          </p>
        </div>

        {/* Templates */}
        <div className="mt-24 space-y-32">
          {templates.map((template, index) => (
            <div
              key={template.name}
              className={`
                grid
                items-center
                gap-14
                lg:grid-cols-2
                ${
                  index % 2 === 1
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }
              `}
            >
              {/* Content */}
              <div>
                <div
                  className="
                    text-7xl
                    font-bold
                    text-white/10
                  "
                >
                  {template.number}
                </div>

                <div
                  className="
                    mt-6
                    inline-flex
                    rounded-full
                    border
                    border-white/10
                    px-4
                    py-2
                    text-sm
                    text-zinc-400
                  "
                >
                  {template.tag}
                </div>

                <h3
                  className="
                    mt-8
                    text-5xl
                    font-bold
                    tracking-tight
                  "
                >
                  {template.name}
                </h3>

                <p
                  className="
                    mt-6
                    max-w-lg
                    text-lg
                    leading-relaxed
                    text-zinc-400
                  "
                >
                  {template.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span
                    className="
                      rounded-full
                      border
                      border-white/10
                      px-4
                      py-2
                      text-sm
                      text-zinc-400
                    "
                  >
                    Responsive
                  </span>

                  <span
                    className="
                      rounded-full
                      border
                      border-white/10
                      px-4
                      py-2
                      text-sm
                      text-zinc-400
                    "
                  >
                    Fast
                  </span>

                  <span
                    className="
                      rounded-full
                      border
                      border-white/10
                      px-4
                      py-2
                      text-sm
                      text-zinc-400
                    "
                  >
                    SEO Ready
                  </span>
                </div>

                <Link
                  href="/auth/register"
                  className="
                    mt-10
                    inline-flex
                    items-center
                    gap-2
                    text-lg
                    font-medium
                    text-white
                    transition
                    hover:gap-4
                  "
                >
                  Use Template

                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Preview */}
              <div
                className="
                  group
                  relative
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    rounded-[32px]
                    bg-white/[0.04]
                    blur-3xl
                    opacity-0
                    transition
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-white/10
                    bg-zinc-950
                    transition-all
                    duration-500
                    group-hover:-translate-y-2
                    group-hover:border-white/20
                    group-hover:shadow-[0_40px_100px_rgba(255,255,255,0.08)]
                  "
                >
                  {/* Browser Top */}
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      border-b
                      border-white/10
                      px-5
                      py-4
                    "
                  >
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>

                  <Image
                    src={template.image}
                    alt={template.name}
                    width={1200}
                    height={800}
                    className="
                      h-[420px]
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* Floating Badge */}
                  <div
                    className="
                      absolute
                      right-5
                      top-5
                      rounded-full
                      border
                      border-white/10
                      bg-black/80
                      px-4
                      py-2
                      text-xs
                      backdrop-blur-xl
                    "
                  >
                    ● Live Preview
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="
            mt-32
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            px-8
            py-16
            text-center
          "
        >
          <h3
            className="
              text-4xl
              font-bold
              md:text-5xl
            "
          >
            Start with any template.
          </h3>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              text-zinc-400
            "
          >
            Switch templates anytime without losing
            your portfolio data.
          </p>

          <Link
            href="/auth/register"
            className="
              mt-10
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
      </div>
    </section>
  );
}