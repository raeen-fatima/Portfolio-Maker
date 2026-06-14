export default function Skills({ skills }) {
  if (!skills?.length) return null;

  return (
  <section
  id="skills"
  className="relative overflow-hidden border-tz border-zinc-900 bg-black"
>
  {/* Glow */}
  <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[180px]" />
  <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-[180px]" />

  <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
    {/* Heading */}
    <div className="mb-14">
      <p className="text-xs uppercase tracking-[0.4em] text-violet-400">
        Skills
      </p>

      <h2 className="mt-2 text-3xl font-bold text-white md:text-5xl">
        Technologies I Work With
      </h2>

      <p className="mt-4 max-w-2xl text-zinc-400">
        Technologies, frameworks, and tools I use to craft modern digital
        experiences.
      </p>
    </div>

    {/* Skills Grid */}
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {skills?.map((skill) => (
        <div
          key={skill._id}
          className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-zinc-800
            bg-zinc-900/40
            p-6
            backdrop-blur-sm
            transition-all
            duration-500
            hover:-translate-y-2
            hover:border-violet-500/40
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              inset-0
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
              bg-gradient-to-br
              from-violet-500/10
              via-transparent
              to-fuchsia-500/10
            "
          />

          {/* Number */}
          <span
            className="
              absolute
              right-5
              top-5
              text-4xl
              font-bold
              text-zinc-800
              transition
              group-hover:text-zinc-700
            "
          >
            0{skills.indexOf(skill) + 1}
          </span>

          {/* Icon Circle
          <div
            className="
              mb-6
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-violet-500/10
              text-xl
              text-violet-400
            "
          >
            ⚡
          </div> */}

          <h3 className="relative  text-xl font-semibold text-white">
            {skill.name}
          </h3>

          {/* <p className="relative mt-2 text-sm text-zinc-500">
            Technology & Development Tool
          </p> */}
        </div>
      ))}
    </div>
  </div>
</section>
  );
}