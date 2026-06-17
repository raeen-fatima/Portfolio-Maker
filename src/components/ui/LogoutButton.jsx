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
        flex
        items-center
        gap-2
        text-sm
        font-medium
        text-zinc-400
        transition
        hover:text-red-400
      "
    >
      <LogOut size={16} />
      Logout
    </button>
  );
}