import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function DashboardLayout({
  children,
}) {
  return (
    <div className="min-h-screen text-black bg-gray-50">
      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-72 h-screen  border-r bg-white sticky top-0">
          <Sidebar />
        </aside>

        {/* Content */}
        <div className="flex-1">
          <Topbar />

          <main className="p-4 lg:p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}