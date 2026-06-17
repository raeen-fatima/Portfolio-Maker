export default function PortfolioShowcase() {
  const projects = [
    {
      title: "Portfolio Builder",
      tech: "Next.js • MongoDB • Tailwind",
    },
    {
      title: "Travel Landing Page",
      tech: "React • Framer Motion",
    },
   
  ];

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
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-white/[0.03]
          blur-[180px]
        "
      />

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
            Portfolio Preview
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
            See what your portfolio
            <br />
            could look like.
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
            Professional portfolio websites
            generated from your content and
            ready to publish in minutes.
          </p>
        </div>

        {/* Showcase */}
        <div className="mt-24">
          <div className="relative">
            {/* Outer Glow */}
            <div
              className="
                absolute
                inset-0
                rounded-[40px]
                bg-white/[0.02]
                blur-3xl
              "
            />

            {/* Browser */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[40px]
                border
                border-white/10
                bg-zinc-950
                shadow-[0_30px_120px_rgba(255,255,255,0.05)]
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
                  px-6
                  py-4
                "
              >
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />

                <div
                  className="
                    ml-4
                    rounded-full
                    bg-white/5
                    px-4
                    py-1
                    text-sm
                    text-zinc-500
                  "
                >
                  folioforge.com/raeen
                </div>

                <div className="ml-auto">
                  <div
                    className="
                      rounded-full
                      border
                      border-emerald-500/20
                      bg-emerald-500/10
                      px-3
                      py-1
                      text-xs
                      text-emerald-400
                    "
                  >
                    ● Live
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="grid lg:grid-cols-2">
                {/* Left */}
                <div className="p-10 lg:p-16">
                  <div
                    className="
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
                    Full Stack Developer
                  </div>

                  <h3
                    className="
                      mt-8
                      text-5xl
                      font-bold
                      leading-none
                      md:text-6xl
                    "
                  >
                    Raeen
                    <br />
                    Fatima
                  </h3>

                  <p
                    className="
                      mt-6
                      max-w-md
                      text-zinc-400
                      leading-relaxed
                    "
                  >
                    Building modern web
                    applications with Next.js,
                    React, MongoDB and scalable
                    backend systems.
                  </p>

                  {/* Skills */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {[
                      "React",
                      "Next.js",
                      "MongoDB",
                      "Tailwind",
                    ].map((skill) => (
                      <div
                        key={skill}
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
                        {skill}
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="mt-12 grid grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-3xl font-bold">
                        12
                      </h4>

                      <p className="mt-1 text-zinc-500">
                        Projects
                      </p>
                    </div>

                    <div>
                      <h4 className="text-3xl font-bold">
                        20+
                      </h4>

                      <p className="mt-1 text-zinc-500">
                        Skills
                      </p>
                    </div>

                    <div>
                      <h4 className="text-3xl font-bold">
                        5
                      </h4>

                      <p className="mt-1 text-zinc-500">
                        Certificates
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div
                  className="
                    border-t
                    border-white/10
                    p-8
                    lg:border-l
                    lg:border-t-0
                  "
                >
                  <div className="space-y-5">
                    {projects.map((project) => (
                      <div
                        key={project.title}
                        className="
                          group
                          rounded-3xl
                          border
                          border-white/10
                          bg-white/[0.03]
                          p-5
                          transition-all
                          duration-300
                          hover:border-white/20
                          hover:bg-white/[0.05]
                        "
                      >
                        <div
                          className="
                            h-36
                            rounded-2xl
                            bg-gradient-to-br
                            from-zinc-800
                            via-zinc-900
                            to-black
                          "
                        />

                        <h4
                          className="
                            mt-4
                            text-lg
                            font-semibold
                          "
                        >
                          {project.title}
                        </h4>

                        <p
                          className="
                            mt-2
                            text-sm
                            text-zinc-500
                          "
                        >
                          {project.tech}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Metrics */}
          <div
            className="
              mt-12
              grid
              gap-4
              md:grid-cols-4
            "
          >
            {[
              ["3", "Templates"],
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
      </div>
    </section>
  );
}