export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <p className="text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} FolioForge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}