import {
  PenSquare,
  Palette,
  Rocket,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: PenSquare,
    title: "Build",
    description:
      "Add your projects, skills and experience through a simple dashboard.",
    preview: "Dashboard",
  },
  {
    icon: Palette,
    title: "Customize",
    description:
      "Choose a template and personalize every detail of your portfolio.",
    preview: "Templates",
  },
  {
    icon: Rocket,
    title: "Publish",
    description:
      "Launch your portfolio with a unique URL and share it instantly.",
    preview: "Live Site",
  },
];

export default function BuildCustomizePublish() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-black
        px-6
        py-32
        text-white
      "
    >
      {/* Background Glow */}
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

      {/* Watermark */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-10
          -translate-x-1/2
          select-none
          text-[140px]
          font-black
          tracking-tight
          text-white/[0.02]
          md:text-[220px]
        "
      >
        BUILD
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p
            className="
              text-sm
              uppercase
              tracking-[0.25em]
              text-zinc-500
            "
          >
            How It Works
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
            From idea to
            <br />
            portfolio.
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-relaxed
              text-zinc-400
            "
          >
            Create, customize and publish
            your portfolio in just a few
            minutes.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-24 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="
                  group
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-white/20
                  hover:bg-white/[0.05]
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                  "
                >
                  <Icon size={24} />
                </div>

                <h3
                  className="
                    mt-8
                    text-3xl
                    font-bold
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-4
                    leading-relaxed
                    text-zinc-400
                  "
                >
                  {step.description}
                </p>

                {/* Preview */}
                <div
                  className="
                    mt-8
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/40
                    p-4
                  "
                >
                  <div className="mb-4 flex gap-2">
                    <div className="h-2 w-2 rounded-full bg-zinc-600" />
                    <div className="h-2 w-2 rounded-full bg-zinc-600" />
                    <div className="h-2 w-2 rounded-full bg-zinc-600" />
                  </div>

                  <div
                    className="
                      flex
                      h-28
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-gradient-to-b
                      from-white/[0.04]
                      to-transparent
                      text-sm
                      text-zinc-500
                    "
                  >
                    {step.preview}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Flow */}
        {/* Process Flow */}
        <div
          className="
            mt-20
            hidden
            items-center
            justify-center
            gap-8
            lg:flex
          "
        >
          <div
            className="
              rounded-full
              border
              border-white/10
              px-6
              py-3
              text-zinc-400
            "
          >
            Add Content
          </div>

          <ArrowRight
            className="text-zinc-600"
            size={20}
          />

          <div
            className="
              rounded-full
              border
              border-white/10
              px-6
              py-3
              text-zinc-400
            "
          >
            Choose Template
          </div>

          <ArrowRight
            className="text-zinc-600"
            size={20}
          />

          <div
            className="
              rounded-full
              border
              border-white/10
              px-6
              py-3
              text-zinc-400
            "
          >
            Publish Portfolio
          </div>
        </div>
      </div>
    </section>
  );
}