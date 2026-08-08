// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import {
//   Menu,
//   X,
//   LayoutDashboard,
//   Settings,
//   LogOut,
//   ArrowRight,
// } from "lucide-react";
// import LogoutButton from "@/components/ui/LogoutButton";

// export default function MobileMenu({ user }) {
//   const [open, setOpen] = useState(false);

//   const links = [
//     { name: "Home", href: "/" },
//     { name: "Features", href: "#features" },
//     { name: "Templates", href: "#templates" },
//     { name: "Pricing", href: "#pricing" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <>
//       {/* Trigger */}
//       <button
//         onClick={() => setOpen(true)}
//         className="
//           lg:hidden
//           flex items-center justify-center
//           h-11 w-11 text-white/70
//           rounded-xl
//           border border-white/10
//           bg-white/[0.03]
//         "
//       >
//         <Menu size={20} />
//       </button>

//       {/* Overlay */}
//       <div
//         onClick={() => setOpen(false)}
//         className={`
//           fixed inset-0 z-[998]
//           bg-black/60 backdrop-blur-sm
//           transition-all duration-300
//           ${open ? "opacity-100 visible" : "opacity-0 invisible"}
//         `}
//       />

//       {/* Menu */}
//       <div
//         className={`
//           fixed
//           top-14
//           left-4
//           right-4
//           z-[999]

//           rounded-[28px]
//           border border-white/10
//           bg-zinc-950

//           p-5

//           transition-all duration-300

//           ${
//             open
//               ? "translate-y-0 opacity-100"
//               : "-translate-y-6 opacity-0 pointer-events-none"
//           }
//         `}
//       >
//         {/* Header */}
//         <div
//           className="
//             flex items-center justify-between
//           "
//         >
//           <h3
//             className="
//               font-semibold text-white
//             "
//           >
//             FolioForge
//           </h3>

//           <button
//             onClick={() => setOpen(false)}
//             className="
//               flex h-10 w-10
//               items-center justify-center
//               rounded-xl text-white/70
//               border border-white/10
//             "
//           >
//             <X size={18} />
//           </button>
//         </div>

//         {/* Links */}
//         <div
//           className="
//             mt-6 space-y-1
//           "
//         >
//           {links.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               onClick={() => setOpen(false)}
//               className="
//                 flex items-center justify-between
//                 rounded-xl
//                 px-4 py-3

//                 text-zinc-400
//                 hover:text-white
//                 hover:bg-white/[0.04]

//                 transition
//               "
//             >
//               {link.name}
//               <ArrowRight size={16} />
//             </a>
//           ))}
//         </div>

//         <div
//           className="
//             my-5
//             border-t border-white/10
//           "
//           />

//         {user ? (
//           <div
//             className="
//               space-y-2
//             "
//           >
//             <Link
//               href="/dashboard"
//               className="
//                 flex items-center
//                 px-4 py-3
//                 text-md text-white/60
//                 hover:bg-white/[0.04]
//                 rounded-xl border border-white/10
//                 gap-3
//               "
//             >
//               <LayoutDashboard size={18} />
//               Dashboard
//             </Link>

//             <div
//               className="
//                 flex items-center
//                 w-full
//                 px-4 py-3
//                 text-red-400
//                 bg-red-500/10
//                 rounded-xl border border-red-500/20
//                 gap-3
//               "
//             >
              
//               <LogoutButton size={18} />
//             </div>
//           </div>
//         ) : (
//           <div
//             className="
//               space-y-3
//             "
//           >
//             <Link
//               href="/auth/login"
//               className="
//                 block
//                 py-3
//                 text-center
//                 rounded-xl border border-white/10
//               "
//             >
//               Sign In
//             </Link>

//             <Link
//               href="/auth/register"
//               className="
//                 block
//                 py-3
//                 text-center text-black font-medium
//                 bg-white
//                 rounded-xl
//               "
//             >
//               Start Building
//             </Link>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }


"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import {
  Menu,
  X,
  LayoutDashboard,
  ArrowRight,
} from "lucide-react";
import LogoutButton from "@/components/ui/LogoutButton";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap/gsap";

export default function MobileMenu({ user }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const links = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "Templates", href: "#templates" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  useGSAP(
    () => {
      if (open) {
        // Overlay Fade In
        gsap.fromTo(
          ".mobile-menu-overlay",
          { opacity: 0, autoAlpha: 0 },
          { opacity: 1, autoAlpha: 1, duration: 0.3, ease: "power2.out" }
        );

        // Drawer Drop-down Animation
        gsap.fromTo(
          ".mobile-menu-drawer",
          { y: -20, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.35,
            ease: "power3.out",
            clearProps: "opacity,transform",
          }
        );

        // Nav Links Stagger Effect
        gsap.fromTo(
          ".mobile-menu-item",
          { y: 12, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.05,
            delay: 0.08,
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
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="
          lg:hidden
          flex items-center justify-center
          h-11 w-11 text-white/70
          rounded-xl
          border border-white/10
          bg-white/[0.03]
          transition
          hover:text-white
          hover:bg-white/10
        "
        aria-label="Open Navigation Menu"
      >
        <Menu size={20} />
      </button>

      {/* Backdrop Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
            mobile-menu-overlay
            fixed inset-0 z-[998]
            bg-black/70 backdrop-blur-md
          "
        />
      )}

      {/* Menu Drawer */}
      {open && (
        <div
          className="
            mobile-menu-drawer
            fixed
            top-16
            left-4
            right-4
            z-[999]

            rounded-[28px]
            border border-white/10
            bg-zinc-950/95
            backdrop-blur-2xl

            p-5
            shadow-[0_20px_80px_rgba(0,0,0,0.8)]
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-white text-lg">
              FolioForge
            </h3>

            <button
              onClick={() => setOpen(false)}
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-xl text-white/70
                border border-white/10
                hover:text-white
                hover:bg-white/10
                transition
              "
              aria-label="Close Navigation Menu"
            >
              <X size={18} />
            </button>
          </div>

          {/* Nav Links */}
          <div className="mt-6 space-y-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="
                  mobile-menu-item
                  flex items-center justify-between
                  rounded-xl
                  px-4 py-3

                  text-zinc-400
                  hover:text-white
                  hover:bg-white/[0.04]

                  transition-colors
                "
              >
                <span>{link.name}</span>
                <ArrowRight size={16} className="text-zinc-600" />
              </a>
            ))}
          </div>

          <div className="my-5 border-t border-white/10" />

          {/* User Dashboard / Auth Actions */}
          <div className="mobile-menu-item">
            {user ? (
              <div className="space-y-2">
                <Link
                  href="/dashboard"
                  onClick={() => setOpen(false)}
                  className="
                    flex items-center
                    px-4 py-3
                    text-base text-white/80
                    hover:text-white
                    hover:bg-white/[0.04]
                    rounded-xl border border-white/10
                    gap-3
                    transition
                  "
                >
                  <LayoutDashboard size={18} />
                  <span>Dashboard</span>
                </Link>

                <div
                  className="
                    flex items-center
                    w-full
                    px-4 py-3
                    text-red-400
                    bg-red-500/10
                    rounded-xl border border-red-500/20
                    gap-3
                  "
                >
                  <LogoutButton size={18} />
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <Link
                  href="/auth/login"
                  onClick={() => setOpen(false)}
                  className="
                    block
                    py-3
                    text-center text-zinc-300 hover:text-white
                    rounded-xl border border-white/10
                    bg-white/[0.02] hover:bg-white/5
                    transition
                  "
                >
                  Sign In
                </Link>

                <Link
                  href="/auth/register"
                  onClick={() => setOpen(false)}
                  className="
                    block
                    py-3
                    text-center text-black font-medium
                    bg-white hover:bg-zinc-100
                    rounded-xl
                    transition
                  "
                >
                  Start Building
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}