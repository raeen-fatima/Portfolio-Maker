export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-zinc-800
        bg-black
      "
    >
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="font-mono">
          <p className="text-green-500">
            $ echo "folioforge"
          </p>

          <p className="mt-3 text-zinc-300">
            Crafting developer portfolios, one command at a time.
          </p>

          <div
            className="
              mt-8
              flex
              flex-col
              gap-3
              border-t
              border-zinc-800
              pt-6
              text-sm
              text-zinc-500
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <p>
              © {new Date().getFullYear()} All rights reserved.
            </p>

            <p>
              Powered by{" "}
              <span className="text-green-500">
                FolioForge
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}