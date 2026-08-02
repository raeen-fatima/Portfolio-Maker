import { getCurrentUser } from "@/lib/auth/auth";
import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";

export default async function DashboardLayout({
  children,
}) {
  const user = await getCurrentUser();

  return (
    <div className="flex min-h-screen bg-zinc-950">
      <Sidebar />

      <div className="flex-1 lg:ml-72">
        <Topbar user={user} />

        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}