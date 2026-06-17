// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   LayoutDashboard,
//   User,
//   FolderKanban,
//   Code2,
//   Briefcase,
//   GraduationCap,
//   LayoutTemplate,
//   Eye,
//   Globe ,
//   Settings,
//   ShieldCheck,
// } from "lucide-react";

// const links = [
//   {
//     name: "Dashboard",
//     href: "/dashboard",
//     icon: LayoutDashboard,
//   },
//   {
//     name: "Hero",
//     href: "/dashboard/hero",
//     icon: User,
//   },
//   {
//     name: "About",
//     href: "/dashboard/about",
//     icon: User,
//   },
//   {
//     name: "Projects",
//     href: "/dashboard/projects",
//     icon: FolderKanban,
//   },
//   {
//     name: "Skills",
//     href: "/dashboard/skills",
//     icon: Code2,
//   },
//   {
//     name: "Experience",
//     href: "/dashboard/experience",
//     icon: Briefcase,
//   },
//   {
//     name: "Education",
//     href: "/dashboard/education",
//     icon: GraduationCap,
//   },
//   {
//     name: "Certifications",
//     href: "/dashboard/certifications",
//     icon: ShieldCheck,
//   },
//   {
//     name: "Contact",
//     href: "/dashboard/contact",
//     icon: User,
//   },
//   {
//     name: "Templates",
//     href: "/dashboard/templates",
//     icon: LayoutTemplate,
//   },
//   {
//     name: "Preview",
//     href: "/dashboard/preview",
//     icon: Eye,
//   },
//   {
//     name: "Publish",
//     href: "/dashboard/publish",
//     icon: Globe,
//   },
//   {
//     name: "Settings",
//     href: "/dashboard/settings",
//     icon: Settings,
//   },
// ];

// export default function Sidebar() {
//   const pathname = usePathname();

//   return (
//     <div className="flex h-full flex-col bg-white">
//       {/* Logo */}
//       <div className="hidden lg:block border-b px-6 py-6">
//         <h1 className="text-2xl font-bold tracking-tight">FolioForge</h1>

//         <p className="mt-1 text-sm text-zinc-500">Build. Preview. Publish.</p>
//       </div>

//       {/* Navigation */}
//       <nav
//         className="
//           flex-1
//           overflow-y-auto
//           p-4
//           space-y-2
//         "
//       >
//         {links.map((link) => {
//           const Icon = link.icon;

//           const active = pathname === link.href;

//           return (
//             <Link
//               key={link.href}
//               href={link.href}
//               className={`
//                 group
//                 flex
//                 items-center
//                 gap-3
//                 rounded-xl
//                 px-4
//                 py-3
//                 text-sm
//                 font-medium
//                 transition-all

//                 ${
//                   active
//                     ? "bg-black text-white shadow-md"
//                     : "text-zinc-700 hover:bg-zinc-100"
//                 }
//               `}
//             >
//               <Icon
//                 size={18}
//                 className={`
//                   transition

//                   ${
//                     active
//                       ? "text-white"
//                       : "text-zinc-500 group-hover:text-black"
//                   }
//                 `}
//               />

//               <span>{link.name}</span>
//             </Link>
//           );
//         })}
//       </nav>

//       {/* Footer */}
//       <div className="border-t p-4">
//         <div
//           className="
//             rounded-xl
//             bg-zinc-100
//             px-4
//             py-3
//           "
//         >
//           <p className="text-sm font-medium">FolioForge</p>

//           <p className="mt-1 text-xs text-zinc-500">Portfolio Builder v1.0</p>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import LogoutButton from "../ui/LogoutButton";

import {
  LayoutDashboard,
  FolderKanban,
  Palette,
  BarChart3,
  Settings,
  Blocks,
} from "lucide-react";

const navigation = [
  {
    section: "MAIN",
    items: [
      {
        title: "Overview",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },

  {
    section: "BUILD",
    items: [
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
    ],
  },

  {
    section: "INSIGHTS",
    items: [
      {
        title: "Analytics",
        href: "/dashboard/analytics",
        icon: BarChart3,
      },
    ],
  },

  {
    section: "ACCOUNT",
    items: [
      {
        title: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
      },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
        hidden
        h-full
        w-72
        shrink-0
        border-r
        border-white/10
        bg-black
        lg:flex
        lg:flex-col
      "
    >
      {/* Logo */}
      <div
        className="
          flex
          h-20
          items-center
          border-b
          border-white/10
          px-6
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
            <Blocks size={20} />
          </div>

          <div>
            <h2
              className="
                text-lg
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
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-4">
        {navigation.map((group) => (
          <div
            key={group.section}
            className="mb-8"
          >
            <p
              className="
                mb-3
                px-3
                text-xs
                font-semibold
                uppercase
                tracking-[0.15em]
                text-zinc-600
              "
            >
              {group.section}
            </p>

            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;

                const active =
                  pathname === item.href;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      px-4
                      py-3
                      text-sm
                      font-medium
                      transition-all
                      duration-200
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
        ))}
      </div>

      {/* Bottom */}
      <div
        className="
          border-t
          border-white/10
          p-4
        "
      >
        {/* Progress Card */}
        <div
          className="
            mb-4
            rounded-2xl
            border
            border-white/10
            bg-white/[0.03]
            p-4
          "
        >
          <div className="flex items-center justify-between">
            <span
              className="
                text-sm
                font-medium
              "
            >
              Progress
            </span>

            <span
              className="
                text-xs
                text-zinc-500
              "
            >
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
                rounded-full
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
            Complete your portfolio to
            publish it publicly.
          </p>
        </div>

        <LogoutButton />
      </div>
    </aside>
  );
}