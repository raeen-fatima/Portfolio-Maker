export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-8 text-center">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()}
          {" "}
          <span className="font-medium text-violet-400">
            FolioForge
          </span>
          . All rights reserved.
        </p>

        <p className="mt-2 text-xs text-zinc-600">
          Crafted for developers, designers & creators.
        </p>
      </div>
    </footer>
  );
}