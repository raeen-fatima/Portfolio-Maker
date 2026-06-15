import Image from "next/image";

export default function About({
  aboutData,
}) {
  if (!aboutData) return null;

  return (
    <section
      id="about"
      className="
        bg-black
        px-6
        py-24
        text-zinc-100
      "
    >
      <div className="mx-auto max-w-6xl">
        <div
          className="
            overflow-hidden
            rounded-3xl
            border
            border-zinc-800
            bg-zinc-950
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
              about.txt
            </span>
          </div>

          <div
            className="
              grid
              gap-12
              p-8
              md:p-12
              lg:grid-cols-2
            "
          >
            {/* Image */}
            <div>
              {aboutData?.image && (
                <div
                  className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-zinc-800
                  "
                >
                  <Image
                    src={aboutData.image}
                    alt="About"
                    width={600}
                    height={700}
                    className="
                      h-[450px]
                      w-full
                      object-cover
                    "
                  />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="font-mono">
              <p className="text-green-500">
                $ cat about.txt
              </p>

              <p
                className="
                  mt-6
                  leading-8
                  text-zinc-400
                "
              >
                {aboutData.bio}
              </p>

              <div className="mt-10 space-y-4">
                {aboutData?.location && (
                  <div>
                    <span className="text-green-500">
                      location:
                    </span>

                    <span className="ml-3 text-zinc-300">
                      {aboutData.location}
                    </span>
                  </div>
                )}

                {aboutData?.email && (
                  <div>
                    <span className="text-green-500">
                      email:
                    </span>

                    <span className="ml-3 text-zinc-300">
                      {aboutData.email}
                    </span>
                  </div>
                )}

                {aboutData?.phone && (
                  <div>
                    <span className="text-green-500">
                      phone:
                    </span>

                    <span className="ml-3 text-zinc-300">
                      {aboutData.phone}
                    </span>
                  </div>
                )}
              </div>

              <div
                className="
                  mt-10
                  flex
                  items-center
                  gap-2
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
      </div>
    </section>
  );
}