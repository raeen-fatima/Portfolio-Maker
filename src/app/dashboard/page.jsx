import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import LogoutButton from "@/components/LogoutButton";
export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">
        Welcome {user.name} 🚀
      </h1>

      <p className="mt-4 text-gray-500">
        {user.email}
      </p>
       <LogoutButton />
    </div>
  );
}