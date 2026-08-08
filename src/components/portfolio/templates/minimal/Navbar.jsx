// "use client";

// import { Menu, X } from "lucide-react";
// import { useState } from "react";

// export default function Navbar({
//   heroData,
// }) {
//   const [open, setOpen] =
//     useState(false);

//   const navItems = [
//     "About",
//     "Projects",
//     "Education",
//     "Experience",
//     "Contact",
//   ];

//   return (
//     <header
//       className="
//         sticky
//         top-0
//         z-20
//         border-b
//         border-zinc-200
//         bg-white/90
//         backdrop-blur-md
//       "
//     >
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="flex h-20 items-center justify-between">
          
//           {/* Logo */}
//           <a
//             href="#hero"
//             className="flex items-center gap-3"
//           >
//             <div
//               className="
//                 flex
//                 h-10
//                 w-10
//                 items-center
//                 justify-center
//                 rounded-full
//                 bg-lime-300
//                 text-sm
//                 font-bold
//                 text-black
//               "
//             >
//               {heroData?.name
//                 ?.split(" ")
//                 .map((n) => n[0])
//                 .slice(0, 2)
//                 .join("") || "PF"}
//             </div>

//             <div>
//               <p
//                 className="
//                   text-sm
//                   font-bold
//                   text-black
//                 "
//               >
//                 {heroData?.name}
//               </p>

//               <p
//                 className="
//                   text-xs
//                   text-zinc-500
//                 "
//               >
//                 Portfolio
//               </p>
//             </div>
//           </a>

//           {/* Desktop Nav */}
//           <nav
//             className="
//               hidden
//               items-center
//               gap-8
//               lg:flex
//             "
//           >
//             {navItems.map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className="
//                   text-sm
//                   font-medium
//                   text-zinc-600
//                   transition
//                   hover:text-lime-500
//                 "
//               >
//                 {item}
//               </a>
//             ))}
//           </nav>

//           {/* CTA */}
//           <a
//             href="#contact"
//             className="
//               hidden
//               rounded-full
//               bg-lime-300
//               px-5
//               py-2.5
//               text-sm
//               font-bold
//               text-black
//               transition
//               hover:bg-lime-400
//               lg:block
//             "
//           >
//             Let's Talk
//           </a>

//           {/* Mobile Button */}
//           <button
//             onClick={() =>
//               setOpen(!open)
//             }
//             className="lg:hidden text-black"
//           >
//             {open ? (
//               <X size={24} />
//             ) : (
//               <Menu size={24} />
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
// {/* Overlay */}
// {open && (
//   <div
//     onClick={() => setOpen(false)}
//     className="
//       fixed
//       inset-0
//       bg-black/40
//       z-30
//       lg:hidden
//     "
//   />
// )}

// {/* Drawer */}
// <div
//   className={`
//     fixed
//     top-0
//     right-0
//     h-screen
//     w-72
//     bg-white/90
//     backdrop-blur-md
//     border-l
//     border-zinc-200
//     z-40
//     p-6
//     transition-transform
//     duration-300
//     lg:hidden

//     ${
//       open
//         ? "translate-x-0"
//         : "translate-x-full"
//     }
//   `}
// >
//   <div className="flex justify-end text-black">
//     <button
//       onClick={() => setOpen(false)}
//     >
//       <X size={24} />
//     </button>
//   </div>

//   <nav className="mt-10 flex flex-col gap-6">
//     {navItems.map((item) => (
//       <a
//         key={item}
//         href={`#${item.toLowerCase()}`}
//         onClick={() => setOpen(false)}
//         className="
//           text-lg
//           font-medium
//           text-zinc-700
//           hover:text-lime-500
//         "
//       >
//         {item}
//       </a>
//     ))}

//     <a
//       href="#contact"
//       className="
//         mt-4
//         rounded-full
//         bg-lime-300
//         px-5
//         py-3
//         text-center
//         font-semibold
//         text-black
//       "
//     >
//       Let's Talk
//     </a>
//   </nav>
// </div>
        
//       </div>
//     </header>
//   );
// }


"use client";

import { Menu, X } from "lucide-react";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap/gsap";
import { scrollToSection } from "@/hooks/animations/useScrollToSection";

export default function Navbar({ heroData }) {
  const containerRef = useRef(null);
  const [open, setOpen] = useState(false);

  const navItems = [
    "About",
    "Skills",
    "Projects",
    // "Experience",
    "Education",
    // "Certifications",
    "Contact",
  ];

  useGSAP(
    () => {
      gsap.fromTo(
        ".nav-animate",
        { opacity: 0, y: -15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "all",
        }
      );
    },
    { scope: containerRef }
  );

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setOpen(false);
    scrollToSection(`#${targetId}`);
  };

  return (
    <div ref={containerRef}>
      <header
        className="
          fixed
          top-0
          left-0
          right-0
          w-full
          z-30
          border-b
          border-zinc-200/80
          bg-white/80
          backdrop-blur-md
          transition-all
        "
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "hero")}
              className="nav-animate flex items-center gap-3 group"
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-lime-400
                  text-sm
                  font-bold
                  text-black
                  shadow-xs
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              >
                {heroData?.name
                  ?.split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("") || "PF"}
              </div>

              <div>
                <p className="text-sm font-bold text-black leading-tight">
                  {heroData?.name || "Portfolio"}
                </p>
                <p className="text-xs font-medium text-zinc-500">Portfolio</p>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className="
                    nav-animate
                    text-sm
                    font-medium
                    text-zinc-600
                    transition-colors
                    hover:text-lime-600
                  "
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="nav-animate hidden lg:block">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="
                  rounded-full
                  bg-lime-400
                  px-6
                  py-2.5
                  text-sm
                  font-bold
                  text-black
                  shadow-xs
                  transition-all
                  hover:bg-lime-500
                "
              >
                Let&apos;s Talk
              </a>
            </div>

            {/* Mobile Toggle Button */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
              className="nav-animate rounded-xl border border-zinc-200 p-2 text-black transition hover:bg-zinc-100 lg:hidden"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Spacer to prevent page content overlap from fixed header */}
      <div className="h-20" />

      {/* Mobile Backdrop Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
            fixed
            inset-0
            z-40
            bg-black/40
            backdrop-blur-xs
            lg:hidden
          "
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`
          fixed
          top-0
          right-0
          z-50
          h-screen
          w-80
          bg-white
          border-l
          border-zinc-200
          p-6
          shadow-2xl
          transition-transform
          duration-300
          ease-in-out
          lg:hidden
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime-400 font-bold text-black text-xs">
              {heroData?.name
                ?.split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("") || "PF"}
            </div>
            <span className="font-bold text-black text-sm">
              {heroData?.name || "Portfolio"}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="rounded-lg p-1.5 text-zinc-500 hover:bg-zinc-100 hover:text-black"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
              className="
                rounded-xl
                px-4
                py-3
                text-base
                font-medium
                text-zinc-700
                transition-colors
                hover:bg-lime-50
                hover:text-lime-600
              "
            >
              {item}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="
              mt-4
              rounded-full
              bg-lime-400
              px-5
              py-3.5
              text-center
              font-bold
              text-black
              shadow-xs
              transition
              hover:bg-lime-500
            "
          >
            Let&apos;s Talk
          </a>
        </nav>
      </aside>
    </div>
  );
}