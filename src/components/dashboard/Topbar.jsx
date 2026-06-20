
import MobileSidebar from "./MobileSidebar";
import {
  Bell,
  UserCircle2,
} from "lucide-react";

export default function Topbar({ user }) {
  const currentHour =
    new Date().getHours();

  let greeting = "Good Evening";

  if (currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon";
  }

  return (
    <header
      className="
        sticky top-0 z-30
        bg-black/80
        border-b border-white/10
        backdrop-blur-xl
      "
    >
      <div
        className="
          flex items-center justify-between
          h-20
          px-4 sm:px-6 lg:px-8
        "
      >
        {/* Left */}
        <div
          className="
            flex items-center
            gap-4
          "
        >
          <MobileSidebar />

          <div>
            <h1
              className="
                text-lg text-white sm:text-xl font-semibold
              "
            >
              {greeting} 👋
            </h1>

            <p
              className="
                hidden sm:block
                text-sm text-zinc-500
              "
            >
              Welcome back to FolioForge
            </p>
          </div>
        </div>

        {/* Right */}
        <div
          className="
            flex items-center
            gap-3
          "
        >
          {/* Notification */}
          <button
            className="
              relative flex items-center justify-center
              h-11 w-11
              text-zinc-400 hover:text-white
              bg-white/[0.03] hover:bg-white/[0.05]
              rounded-xl border border-white/10
              transition
            "
          >
            <Bell size={18} />

            <span
              className="
                absolute right-3 top-3
                h-2 w-2
                bg-white
                rounded-full
              "
              
            />
          </button>

          {/* User */}
          <button
            className="
              flex items-center
              px-3 py-2
              bg-white/[0.03] hover:bg-white/[0.05]
              rounded-xl border border-white/10
              transition
              gap-3
            "
          >
            <UserCircle2
              size={28}
              className="
                text-zinc-300
              "
              
            />

            <div
              className="
                hidden md:block
              "
            >
              <p
                className="
                  text-sm text-white font-medium
                "
              >
                 {user?.name || "Portfolio Owner"}
              </p>

              <p
                className="
                  text-xs text-zinc-500
                "
              >
                {user?.email}
              </p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}