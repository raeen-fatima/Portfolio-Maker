// "use client";

// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import Sidebar from "./Sidebar";

// export default function MobileSidebar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* Menu Button */}
//       <button
//         onClick={() => setOpen(true)}
//         className="
//           rounded-lg
//           p-2
//           transition
//           hover:bg-zinc-100
//           lg:hidden
//         "
//       >
//         <Menu size={22} />
//       </button>

//       {/* Overlay */}
//       <div
//         onClick={() => setOpen(false)}
//         className={`
//           fixed
//           inset-0
//           z-40
//           bg-black/50
//           backdrop-blur-sm
//           transition-opacity
//           duration-300
//           lg:hidden

//           ${
//             open
//               ? "opacity-100 pointer-events-auto"
//               : "opacity-0 pointer-events-none"
//           }
//         `}
//       />

//       {/* Drawer */}
//       <div
//         className={`
//           fixed
//           top-0
//           left-0
//           z-50
//           h-screen
//           w-72
//           bg-white
//           shadow-2xl
//           transition-transform
//           duration-300
//           lg:hidden

//           ${
//             open
//               ? "translate-x-0"
//               : "-translate-x-full"
//           }
//         `}
//       >
//         {/* Header */}
//         <div
//           className="
//             flex
//             items-center
//             justify-between
//             border-b
//             px-5
//             py-4
//           "
//         >
//           <div>
//             <h2 className="font-bold text-lg">
//               FolioForge
//             </h2>

//             <p className="text-xs text-zinc-500">
//               Portfolio Builder
//             </p>
//           </div>

//           <button
//             onClick={() => setOpen(false)}
//             className="
//               rounded-lg
//               p-2
//               transition
//               hover:bg-zinc-100
//             "
//           >
//             <X size={20} />
//           </button>
//         </div>

//         {/* Sidebar Content */}
//         <div className="h-[calc(100vh-73px)]">
//           <Sidebar />
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  Menu,
  X,
  LayoutDashboard,
  FolderKanban,
  Palette,
  BarChart3,
  Settings,
  Blocks,
} from "lucide-react";

const navigation = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    title: "Portfolio Builder",
    href: "/dashboard/portfolio",
    icon: FolderKanban,
  },

  {
    title: "Templates",
    href: "/dashboard/templates",
    icon: Palette,
  },

  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },

  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function MobileSidebar() {
  const [open, setOpen] =
    useState(false);

  const pathname = usePathname();

  return (
    <>
      {/* Trigger */}
      <button
        onClick={() => setOpen(true)}
        className="
          rounded-xl
          border
          border-white/10
          p-2.5
          text-white
          transition
          hover:bg-white/[0.05]
          lg:hidden
        "
      >
        <Menu size={20} />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed
          inset-0
          z-40
          bg-black/70
          backdrop-blur-sm
          transition-all
          duration-300
          lg:hidden

          ${
            open
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* Drawer */}
      <aside
        className={`
          fixed
          left-0
          top-0
          z-50
          flex
          h-screen
          w-[300px]
          flex-col
          border-r
          border-white/10
          bg-black
          transition-transform
          duration-300
          lg:hidden

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* Header */}
        <div
          className="
            flex
            h-20
            items-center
            justify-between
            border-b
            border-white/10
            px-5
          "
        >
          <Link
            href="/dashboard"
            className="
              flex
              items-center
              gap-3
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]
              "
            >
              <Blocks size={18} />
            </div>

            <div>
              <h2
                className="
                  font-semibold
                  tracking-tight
                "
              >
                <span className="text-white">
                  Folio
                </span>

                <span className="text-zinc-500">
                  Forge
                </span>
              </h2>

              <p
                className="
                  text-xs
                  text-zinc-600
                "
              >
                Portfolio Builder
              </p>
            </div>
          </Link>

          <button
            onClick={() =>
              setOpen(false)
            }
            className="
              rounded-xl
              p-2
              text-zinc-500
              transition
              hover:bg-white/[0.05]
              hover:text-white
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav */}
        <div className="flex-1 p-4">
          <p
            className="
              mb-3
              px-3
              text-xs
              font-semibold
              tracking-[0.15em]
              text-zinc-600
            "
          >
            MENU
          </p>

          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;

              const active =
                pathname === item.href;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() =>
                    setOpen(false)
                  }
                  className={`
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    transition

                    ${
                      active
                        ? `
                          bg-white
                          text-black
                        `
                        : `
                          text-zinc-500
                          hover:bg-white/[0.04]
                          hover:text-white
                        `
                    }
                  `}
                >
                  <Icon size={18} />

                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            border-t
            border-white/10
            p-4
          "
        >
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-4
            "
          >
            <div className="flex items-center justify-between">
              <span className="text-sm">
                Progress
              </span>

              <span className="text-xs text-zinc-500">
                65%
              </span>
            </div>

            <div
              className="
                mt-3
                h-2
                overflow-hidden
                rounded-full
                bg-white/10
              "
            >
              <div
                className="
                  h-full
                  w-[65%]
                  bg-white
                "
              />
            </div>

            <p
              className="
                mt-3
                text-xs
                text-zinc-500
              "
            >
              Complete your portfolio.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}