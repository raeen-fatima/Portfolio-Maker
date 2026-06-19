"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message);
        return;
      }

      toast.success(result.message);

      router.push("/auth/login");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="
        flex items-center
        text-md text-zinc-400 hover:text-red-400 font-bold
        transition
        gap-2
      "
    >
      <LogOut size={16} />
      Logout
    </button>
  );
}