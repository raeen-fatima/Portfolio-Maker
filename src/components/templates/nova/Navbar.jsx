export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-lg font-bold text-white">
          FolioForge
        </h1>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-zinc-400 hover:text-white"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-zinc-400 hover:text-white"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-zinc-400 hover:text-white"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-zinc-400 hover:text-white"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}