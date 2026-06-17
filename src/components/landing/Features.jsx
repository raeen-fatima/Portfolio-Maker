import {
  Eye,
  Rocket,
  Link2,
  Smartphone,
} from "lucide-react";
import { BiRocket } from "react-icons/bi";
import { CgSmartphone } from "react-icons/cg";
import { CiPalette } from "react-icons/ci";
import { FiZap } from "react-icons/fi";

const features = [
  {
    icon: Eye,
    title: "Live Preview",
    description:
      "See every change instantly while building your portfolio.",
  },
  {
    icon: Rocket,
    title: "One Click Publish",
    description:
      "Launch your portfolio instantly with a shareable public URL.",
  },
  {
    icon: Link2,
    title: "Custom URL",
    description:
      "Create a memorable portfolio link that reflects your identity.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Looks stunning across desktop, tablet and mobile devices.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
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
        <div className="max-w-4xl">
          <p
            className="
              text-sm
              uppercase
              tracking-[0.25em]
              text-zinc-500
            "
          >
            Features
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
            Everything you need.
            <br />
            Nothing you don't.
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-lg
              leading-relaxed
              text-zinc-400
            "
          >
            Build, customize and publish a
            professional portfolio website
            without touching complex code.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-20 grid gap-5 lg:grid-cols-3">
          {/* Live Preview */}
          <div
            className="
              group
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              p-8
              transition-all
              duration-300
              hover:border-white/20
              hover:bg-white/[0.05]
            "
          >
            <Eye size={32} />

            <h3 className="mt-6 text-2xl font-semibold">
              Live Preview
            </h3>

            <p className="mt-3 text-zinc-400">
              See updates instantly while
              building your portfolio.
            </p>

            <div
              className="
                mt-8
                h-32
                rounded-2xl
                border
                border-white/10
                bg-gradient-to-br
                from-zinc-800
                to-black
              "
            />
          </div>

          {/* Publish */}
          <div
            className="
              group
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              p-8
              transition-all
              duration-300
              hover:border-white/20
              hover:bg-white/[0.05]
            "
          >
            
            <Rocket size={32} />

            <h3 className="mt-6 text-2xl font-semibold">
              One Click Publish
            </h3>

            <p className="mt-3 text-zinc-400">
              Publish your portfolio instantly
              and share it anywhere.
            </p>

            <div
              className="
                mt-8
                flex
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-zinc-900
                p-5
                text-sm
                text-zinc-400
              "
            >
              folioforge.com/raeen
            </div>
          </div>

          {/* Big Card */}
          <div
            className="
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              p-8
              lg:row-span-2
            "
          >
            <h3 className="text-3xl font-bold">
              Built for modern creators.
            </h3>

            <p className="mt-4 text-zinc-400">
              Developers, designers,
              students and freelancers use
              FolioForge to create stunning
              personal websites.
            </p>

            <div className="mt-10 space-y-3">
  <div
    className="
      flex
      items-center
      gap-3
      rounded-2xl
      border
      border-white/10
      bg-white/[0.02]
      p-4
    "
  >
    <FiZap size={18} />

    <span>Fast Setup</span>
  </div>

  <div
    className="
      flex
      items-center
      gap-3
      rounded-2xl
      border
      border-white/10
      bg-white/[0.02]
      p-4
    "
  >
    <CiPalette size={18} />

    <span>Beautiful Templates</span>
  </div>

  <div
    className="
      flex
      items-center
      gap-3
      rounded-2xl
      border
      border-white/10
      bg-white/[0.02]
      p-4
    "
  >
    <BiRocket size={18} />

    <span>Instant Publishing</span>
  </div>

  <div
    className="
      flex
      items-center
      gap-3
      rounded-2xl
      border
      border-white/10
      bg-white/[0.02]
      p-4
    "
  >
    <CgSmartphone size={18} />

    <span>Responsive Design</span>
  </div>
</div>
          </div>

          {/* Custom URL */}
          <div
            className="
              group
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              p-8
              transition-all
              duration-300
              hover:border-white/20
              hover:bg-white/[0.05]
            "
          >
            <Link2 size={32} />

            <h3 className="mt-6 text-2xl font-semibold">
              Custom URL
            </h3>

            <p className="mt-3 text-zinc-400">
              Create a portfolio link that
              people can remember.
            </p>
          </div>

          {/* Responsive */}
          <div
            className="
              group
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              p-8
              transition-all
              duration-300
              hover:border-white/20
              hover:bg-white/[0.05]
            "
          >
            <Smartphone size={32} />

            <h3 className="mt-6 text-2xl font-semibold">
              Responsive Design
            </h3>

            <p className="mt-3 text-zinc-400">
              Optimized for every screen
              size and device.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {[
            ["3+", "Templates"],
            ["1 Click", "Publish"],
            ["100%", "Responsive"],
            ["∞", "Customization"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
                text-center
              "
            >
              <div className="text-3xl font-bold">
                {value}
              </div>

              <div className="mt-2 text-zinc-500">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}