export default function Navbar({ heroData }) {
  return (
    <header className="sticky top-4 z-50 px-4">
      <div
        className="
          mx-auto
          flex
          h-16
          max-w-6xl
          items-center
          justify-between
          rounded-2xl
          border
          border-zinc-800
          bg-zinc-950/70
          px-6
          backdrop-blur-xl
          shadow-[0_8px_30px_rgb(0,0,0,0.3)]
        "
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <div
            className="
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-xl
      border
      border-violet-500/20
      bg-violet-500/10
      text-sm
      font-bold
      text-violet-400
    "
          >
            {heroData?.name
              ?.split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("") || "PF"}
          </div>

          <div>
            <p className="font-semibold text-white leading-none">
              {heroData?.name || "Portfolio"}
            </p>

            <p className="text-xs text-zinc-500">Portfolio</p>
          </div>
        </a>

        {/* Nav Links */}
        <nav className="hidden items-center gap-8 md:flex">
          {["About", "Skills", "Projects", "Experience", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                relative
                text-sm
                font-medium
                text-zinc-400
                transition
                hover:text-white

                after:absolute
                after:left-0
                after:-bottom-1
                after:h-0.5
                after:w-0
                after:bg-violet-400
                after:transition-all
                hover:after:w-full
              "
              >
                {item}
              </a>
            ),
          )}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="
            hidden
            rounded-xl
            border
            border-violet-500/30
            bg-violet-500/10
            px-4
            py-2
            text-sm
            font-medium
            text-violet-400
            transition
            hover:bg-violet-500/20
            md:block
          "
        >
          Let&lsquo;s Talk
        </a>
      </div>
    </header>
  );
}
