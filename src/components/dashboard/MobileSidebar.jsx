// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import LogoutButton from "../ui/LogoutButton";

// import {
//   Menu,
//   X,
//   LayoutDashboard,
//   FolderKanban,
//   Palette,
//   BarChart3,
//   Settings,
//   Blocks,
// } from "lucide-react";

// const navigation = [
//   {
//     title: "Overview",
//     href: "/dashboard",
//     icon: LayoutDashboard,
//   },

//   {
//     title: "Portfolio Builder",
//     href: "/dashboard/portfolio",
//     icon: FolderKanban,
//   },

//   {
//     title: "Templates",
//     href: "/dashboard/portfolio/templates",
//     icon: Palette,
//   },

//   {
//     title: "Analytics",
//     href: "/dashboard/analytics",
//     icon: BarChart3,
//   },

//   {
//     title: "Settings",
//     href: "/dashboard/settings",
//     icon: Settings,
//   },
// ];

// export default function MobileSidebar() {
//   const [open, setOpen] = useState(false);

//   const pathname = usePathname();

//   return (
//     <>
//       {/* Trigger */}
//       <button
//         onClick={() => setOpen(true)}
//         className="
//           rounded-xl
//           border
//           border-white/10
//           p-2.5
//           text-white
//           transition
//           hover:bg-white/[0.05]
//           lg:hidden
//         "
//       >
//         <Menu size={20} />
//       </button>

//       {/* Overlay */}
//       <div
//         onClick={() => setOpen(false)}
//         className={`
//           fixed
//           inset-0
//           z-40
//           bg-black/70
//           backdrop-blur-sm
//           transition-all
//           duration-300
//           lg:hidden

//           ${open ? "opacity-100" : "pointer-events-none opacity-0"}
//         `}
//       />

//       {/* Drawer */}
//       <aside
//         className={`
//           fixed
//           left-0
//           top-0
//           z-50
//           flex
//           h-screen
//           w-[300px]
//           flex-col
//           border-r
//           border-white/10
//           bg-black
//           transition-transform
//           duration-300
//           lg:hidden

//           ${open ? "translate-x-0" : "-translate-x-full"}
//         `}
//       >
//         {/* Header */}
//         <div
//           className="
//             flex items-center justify-between
//             h-20
//             px-5
//             border-b border-white/10
//           "
//         >
//           <Link
//             href="/"
//             className="
//               flex items-center
//               gap-3
//             "
//           >
//             <div
//               className="
//                 flex items-center justify-center
//                 h-10 w-10
//                 bg-white/[0.03]
//                 rounded-xl border border-white/10
//               "
//             >
//               <Blocks size={18} />
//             </div>

//             <div>
//               <h2
//                 className="
//                   font-semibold tracking-tight
//                 "
//               >
//                 <span
//                   className="
//                     text-white
//                   "
//                 >
//                   Folio
//                 </span>

//                 <span
//                   className="
//                     text-zinc-500
//                   "
//                 >
//                   Forge
//                 </span>
//               </h2>

//               <p
//                 className="
//                   text-xs text-zinc-600
//                 "
//               >
//                 Portfolio Builder
//               </p>
//             </div>
//           </Link>

//           <button
//             onClick={() => setOpen(false)}
//             className="
//               rounded-xl
//               p-2
//               text-zinc-500
//               transition
//               hover:bg-white/[0.05]
//               hover:text-white
//             "
//           >
//             <X size={20} />
//           </button>
//         </div>

//         {/* Nav */}
//         <div
//           className="
//             flex-1
//             p-4
//           "
//         >
//           <p
//             className="
//               mb-3 px-3
//               text-xs text-zinc-600 font-semibold tracking-[0.15em]
//             "
//           >
//             MENU
//           </p>

//           <div
//             className="
//               space-y-1
//             "
//           >
//             {navigation.map((item) => {
//               const Icon = item.icon;

//               const active = pathname === item.href;

//               return (
//                 <Link
//                   key={item.title}
//                   href={item.href}
//                   onClick={() => setOpen(false)}
//                   className={`
//                     flex
//                     items-center
//                     gap-3
//                     rounded-xl
//                     px-4
//                     py-3
//                     text-sm
//                     font-medium
//                     transition

//                     ${
//                       active
//                         ? `
//                           bg-white
//                           text-black
//                         `
//                         : `
//                           text-zinc-500
//                           hover:bg-white/[0.04]
//                           hover:text-white
//                         `
//                     }
//                   `}
//                 >
//                   <Icon size={18} />

//                   {item.title}
//                 </Link>
//               );
//             })}
//           </div>
//         </div>

//         <div
//           className="p-6">        
//           <LogoutButton />
//         </div>
//       </aside>
//     </>
//   );
// }


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import LogoutButton from "../ui/LogoutButton";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap/gsap";

import {
  Menu,
  X,
  LayoutDashboard,
  FolderKanban,
  BarChart3,
  Settings,
  Blocks,
  ChevronDown,
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
        children: [
          { title: "Builder", href: "/dashboard/portfolio" },
          { title: "Hero", href: "/dashboard/portfolio/hero" },
          { title: "About", href: "/dashboard/portfolio/about" },
          { title: "Skills", href: "/dashboard/portfolio/skills" },
          { title: "Projects", href: "/dashboard/portfolio/projects" },
          { title: "Experience", href: "/dashboard/portfolio/experience" },
          { title: "Education", href: "/dashboard/portfolio/education" },
          { title: "Certifications", href: "/dashboard/portfolio/certifications" },
          { title: "Templates", href: "/dashboard/portfolio/templates" },
          { title: "Preview", href: "/dashboard/portfolio/preview" },
          { title: "Publish", href: "/dashboard/portfolio/publish" },
        ],
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

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const [builderOpen, setBuilderOpen] = useState(true);
  const pathname = usePathname();
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (open) {
        // Overlay Fade In
        gsap.fromTo(
          ".sidebar-overlay",
          { opacity: 0, autoAlpha: 0 },
          { opacity: 1, autoAlpha: 1, duration: 0.3, ease: "power2.out" }
        );

        // Sidebar Slide In
        gsap.fromTo(
          ".sidebar-drawer",
          { xPercent: -100 },
          {
            xPercent: 0,
            duration: 0.35,
            ease: "power3.out",
            clearProps: "transform",
          }
        );

        // Items Stagger Reveal
        gsap.fromTo(
          ".sidebar-nav-item",
          { x: -15, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.04,
            delay: 0.1,
            ease: "power2.out",
            clearProps: "opacity,transform",
          }
        );
      }
    },
    { dependencies: [open], scope: containerRef }
  );

  return (
    <div ref={containerRef}>
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
        aria-label="Open Mobile Sidebar"
      >
        <Menu size={20} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
            sidebar-overlay
            fixed
            inset-0
            z-40
            bg-black/70
            backdrop-blur-sm
            lg:hidden
          "
        />
      )}

      {/* Drawer */}
      {open && (
        <aside
          className="
            sidebar-drawer
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
            lg:hidden
          "
        >
          {/* Header */}
          <div
            className="
              flex items-center justify-between
              h-20
              px-5
              border-b border-white/10
            "
          >
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3"
            >
              <div
                className="
                  flex items-center justify-center
                  h-10 w-10
                  bg-white/[0.03]
                  rounded-xl border border-white/10
                "
              >
                <Blocks size={18} className="text-white" />
              </div>

              <div>
                <h2 className="font-semibold tracking-tight text-base">
                  <span className="text-white">Folio</span>
                  <span className="text-zinc-500">Forge</span>
                </h2>

                <p className="text-xs text-zinc-600">Portfolio Builder</p>
              </div>
            </Link>

            <button
              onClick={() => setOpen(false)}
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
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {navigation.map((group) => (
              <div key={group.section} className="sidebar-nav-item">
                <p className="mb-3 px-3 text-xs text-zinc-600 font-semibold uppercase tracking-[0.15em]">
                  {group.section}
                </p>

                <div className="space-y-1">
                  {group.items.map((item) => {
                    const Icon = item.icon;

                    if (item.children) {
                      return (
                        <div key={item.title}>
                          <button
                            onClick={() => setBuilderOpen(!builderOpen)}
                            className="
                              flex w-full items-center justify-between
                              rounded-xl px-4 py-3
                              text-sm font-medium text-zinc-400
                              transition hover:bg-white/[0.04] hover:text-white
                            "
                          >
                            <div className="flex items-center gap-3">
                              <Icon size={18} />
                              <span>{item.title}</span>
                            </div>

                            <ChevronDown
                              size={16}
                              className={`transition-transform duration-200 ${
                                builderOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {/* Accordion Children Links */}
                          {builderOpen && (
                            <div className="mt-1 pl-3 space-y-1 border-l border-white/5 ml-4">
                              {item.children.map((child) => {
                                const active = pathname === child.href;

                                return (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={() => setOpen(false)}
                                    className={`
                                      flex items-center gap-3
                                      rounded-xl px-3 py-2
                                      text-sm transition-all duration-200
                                      ${
                                        active
                                          ? "bg-white text-black font-semibold"
                                          : "text-zinc-500 hover:text-white hover:bg-white/[0.04]"
                                      }
                                    `}
                                  >
                                    <div
                                      className={`
                                        h-1.5 w-1.5 rounded-full shrink-0
                                        ${active ? "bg-black" : "bg-zinc-700"}
                                      `}
                                    />
                                    <span>{child.title}</span>
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    }

                    const active = pathname === item.href;

                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`
                          flex items-center gap-3
                          rounded-xl px-4 py-3
                          text-sm font-medium
                          transition-all duration-200
                          ${
                            active
                              ? "bg-white text-black font-semibold"
                              : "text-zinc-500 hover:bg-white/[0.04] hover:text-white"
                          }
                        `}
                      >
                        <Icon size={18} />
                        <span>{item.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-white/10">
            <div className="px-2">
              <LogoutButton />
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}