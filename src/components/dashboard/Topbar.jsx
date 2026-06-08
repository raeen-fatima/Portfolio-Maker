import MobileSidebar from "./MobileSidebar";

export default function Topbar() {
  return (
    <header className="h-16 bg-white border-b px-4 lg:px-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <MobileSidebar />

        <h2 className="font-semibold text-lg">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-semibold">
          R
        </div>
        
      </div>
    </header>
  );
}