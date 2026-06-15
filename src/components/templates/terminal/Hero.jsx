"use client";

export default function Hero({ heroData }) {
  return (
    <section
      id="hero"
      className="
        min-h-screen
        bg-black
        px-6
        py-24
        text-zinc-100
      "
    >
      <div className="mx-auto max-w-6xl">
        {/* Terminal Window */}
        <div
          className="
            overflow-hidden
            rounded-3xl
            border
            border-zinc-800
            bg-zinc-950
            shadow-[0_0_60px_rgba(34,197,94,0.08)]
          "
        >
          {/* Terminal Header */}
          <div
            className="
              flex
              items-center
              gap-2
              border-b
              border-zinc-800
              px-5
              py-4
            "
          >
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />

            <span
              className="
                ml-4
                text-sm
                text-zinc-500
              "
            >
              terminal
            </span>
          </div>

          {/* Terminal Content */}
          <div
            className="
              space-y-8
              p-8
              font-mono
              md:p-12
            "
          >
            {/* whoami */}
            <div>
              <p className="text-green-500">
                $ whoami
              </p>

              <h1
                className="
                  mt-4
                  text-4xl
                  font-bold
                  text-white
                  md:text-6xl
                "
              >
                {heroData?.name}
              </h1>
            </div>

            {/* role */}
            <div>
              <p className="text-green-500">
                $ role
              </p>

              <p
                className="
                  mt-3
                  text-xl
                  text-zinc-300
                "
              >
                {heroData?.title}
              </p>
            </div>

            {/* status */}
            {heroData?.tagline && (
              <div>
                <p className="text-green-500">
                  $ status
                </p>

                <p
                  className="
                    mt-3
                    max-w-3xl
                    leading-8
                    text-zinc-400
                  "
                >
                  {heroData.tagline}
                </p>
              </div>
            )}

            {/* skills */}
            <div>
              <p className="text-green-500">
                $ ls skills/
              </p>

              <div
                className="
                  mt-4
                  flex
                  flex-wrap
                  gap-3
                "
              >
                {[
                  "nextjs",
                  "react",
                  "mongodb",
                  "tailwind",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-lg
                      border
                      border-zinc-800
                      bg-zinc-900
                      px-3
                      py-2
                      text-sm
                      text-green-400
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="
                  rounded-lg
                  border
                  border-green-500
                  px-5
                  py-3
                  text-green-500
                  transition
                  hover:bg-green-500
                  hover:text-black
                "
              >
                view-projects.sh
              </a>

              <a
                href="#contact"
                className="
                  rounded-lg
                  border
                  border-zinc-700
                  px-5
                  py-3
                  text-zinc-300
                  transition
                  hover:border-green-500
                  hover:text-green-500
                "
              >
                contact.sh
              </a>
            </div>

            {/* Cursor */}
            <div
              className="
                flex
                items-center
                gap-2
                pt-4
                text-green-500
              "
            >
              <span>$</span>

              <span
                className="
                  h-5
                  w-3
                  animate-pulse
                  bg-green-500
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}