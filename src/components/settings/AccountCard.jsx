import { User } from "lucide-react";
import SettingsCard from "./SettingsCard";
import Link from "next/link";
export default function AccountCard({ user }) {
  return (
    <SettingsCard>
      <div className="flex items-center gap-4">
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-white
            text-xl
            font-bold
            text-black
          "
        >
          {user?.name?.charAt(0) || "U"}
        </div>

        <div>
          <h2
            className="
              font-semibold
              text-white
            "
          >
            {user?.name}
          </h2>

          <p
            className="
              text-sm
              text-zinc-500
            "
          >
            {user?.email}
          </p>
        </div>
      </div>

      <Link
        href="/dashboard/settings/user-information"
        className="
          mt-5
          flex
          items-center
          gap-2
          text-sm
          text-zinc-500  transition hover:text-white
        "
      >
        <User size={16} />
        Account Information
      </Link>
    </SettingsCard>
  );
}
