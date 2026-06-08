import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import LogoutButton from "@/components/LogoutButton";
export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("auth/login");
  }

  return (
    <div className="min-h-screen text-black flex flex-col items-center justify-center">
      
      <div>
      <h1 className="text-3xl font-bold">
        Dashboard Overview Welcome {user.name}
      </h1>

      <p className="text-gray-500 mt-2">
        Manage your portfolio from here.
      </p>

      <div className="grid md:grid-cols-4 gap-4 mt-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">
            Projects
          </h3>
          <p className="text-2xl mt-2">0</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">
            Skills
          </h3>
          <p className="text-2xl mt-2">0</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">
            Experience
          </h3>
          <p className="text-2xl mt-2">0</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">
            Education
          </h3>
          <p className="text-2xl mt-2">0</p>
        </div>
      </div>
    </div>
      
    </div>
  );
}