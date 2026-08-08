// "use client";

// import {
//   ChevronDown,
//   LayoutDashboard,
//   Settings,
// } from "lucide-react";

// import Link from "next/link";
// import { useState } from "react";
// import LogoutButton from "@/components/ui/LogoutButton";

// export default function UserDropdown({
//   user,
// }) {
//   const [open, setOpen] =
//     useState(false);

//   return (
//     <div className="relative">
//       <button
//         onClick={() =>
//           setOpen(!open)
//         }
//         className="
//           flex
//           items-center
//           gap-3
//         "
//       >
//         <div
//           className="
//             flex
//             h-10
//             w-10
//             items-center
//             justify-center
//             rounded-full
//             bg-white
//             font-semibold
//             text-black
//           "
//         >
//           {user.name
//             ?.charAt(0)
//             .toUpperCase()}
//         </div>

//         <ChevronDown
//           size={16}
//           className="text-zinc-400"
//         />
//       </button>

//       {open && (
//         <div
//           className="
//             absolute
//             right-0
//             mt-3
//             w-56
//             overflow-hidden
//             rounded-2xl
//             border
//             border-white/10
//             bg-zinc-950
//             shadow-2xl
//           "
//         >
//           <div className="border-b border-white/10 p-4">
//             <p className="font-medium text-white">
//               {user.name}
//             </p>

//             <p className="text-sm text-zinc-500">
//               {user.email}
//             </p>
//           </div>

//           <Link
//             href="/dashboard"
//             className="
//               flex
//               items-center
//               gap-3
//               px-4
//               py-3
//               text-zinc-300
//               hover:bg-white/5
//             "
//           >
//             <LayoutDashboard
//               size={16}
//             />
//             Dashboard
//           </Link>

//           <Link
//             href="/dashboard/settings"
//             className="
//               flex
//               items-center
//               gap-3
//               px-4
//               py-3
//               text-zinc-300
//               hover:bg-white/5
//             "
//           >
//             <Settings size={16} />
//             Settings
//           </Link>

//           <div className="border-t border-white/10 p-4">
//             <LogoutButton />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ChevronDown, LayoutDashboard, Settings } from "lucide-react";
import LogoutButton from "@/components/ui/LogoutButton";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap/gsap";

export default function UserDropdown({ user }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (open) {
        gsap.fromTo(
          ".dropdown-menu",
          { y: -10, scale: 0.95, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.25,
            ease: "power2.out",
            clearProps: "opacity,transform",
          }
        );
      }
    },
    { dependencies: [open], scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          items-center
          gap-3
          rounded-full
          p-1
          transition
          hover:opacity-90
        "
      >
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-white
            font-semibold
            text-black
            shadow-md
          "
        >
          {user?.name?.charAt(0).toUpperCase() || "U"}
        </div>

        <ChevronDown
          size={16}
          className={`
            text-zinc-400
            transition-transform
            duration-300
            ${open ? "rotate-180" : "rotate-0"}
          `}
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          className="
            dropdown-menu
            absolute
            right-0
            mt-3
            w-60
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-zinc-950/95
            backdrop-blur-xl
            shadow-[0_20px_60px_rgba(0,0,0,0.7)]
            z-50
          "
        >
          {/* User Info Header */}
          <div className="border-b border-white/10 p-4">
            <p className="font-semibold text-white truncate">
              {user?.name || "User"}
            </p>

            <p className="text-xs text-zinc-500 truncate mt-0.5">
              {user?.email || "user@example.com"}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="p-1.5 space-y-0.5">
            <Link
              href="/dashboard"
              onClick={() => setOpen(false)}
              className="
                flex
                items-center
                gap-3
                rounded-xl
                px-3.5
                py-2.5
                text-sm
                text-zinc-300
                transition
                hover:bg-white/5
                hover:text-white
              "
            >
              <LayoutDashboard size={16} />
              <span>Dashboard</span>
            </Link>

            <Link
              href="/dashboard/settings"
              onClick={() => setOpen(false)}
              className="
                flex
                items-center
                gap-3
                rounded-xl
                px-3.5
                py-2.5
                text-sm
                text-zinc-300
                transition
                hover:bg-white/5
                hover:text-white
              "
            >
              <Settings size={16} />
              <span>Settings</span>
            </Link>
          </div>

          {/* Footer / Logout */}
          <div className="border-t border-white/10 p-2">
            <LogoutButton />
          </div>
        </div>
      )}
    </div>
  );
}