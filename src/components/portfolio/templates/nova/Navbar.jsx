// "use client";

// import { Menu, X } from "lucide-react";
// import { useState } from "react";

// export default function Navbar({ heroData }) {
//   const [open, setOpen] = useState(false);

//   const navItems = [
//     "About",
//     "Skills",
//     "Projects",
//     "Experience",
//     "Contact",
//   ];

//   return (
//     <>
//       <header className="sticky top-2 md:top-4 z-20 px-3 md:px-4">
//         <div
//           className="
//             mx-auto
//             flex
//             h-14
//             md:h-16
//             max-w-6xl
//             items-center
//             justify-between
//             rounded-2xl
//             border
//             border-zinc-800
//             bg-zinc-950/80
//             px-4
//             md:px-6
//             backdrop-blur-xl
//             shadow-[0_8px_30px_rgb(0,0,0,0.3)]
//           "
//         >
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
//                 rounded-xl
//                 border
//                 border-violet-500/20
//                 bg-violet-500/10
//                 text-sm
//                 font-bold
//                 text-violet-400
//                 shrink-0
//               "
//             >
//               {heroData?.name
//                 ?.split(" ")
//                 .map((n) => n[0])
//                 .slice(0, 2)
//                 .join("") || "PF"}
//             </div>

//             <div className="hidden sm:block">
//               <p className="font-semibold text-white leading-none">
//                 {heroData?.name || "Portfolio"}
//               </p>

//               <p className="text-xs text-zinc-500">
//                 Portfolio
//               </p>
//             </div>
//           </a>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex items-center gap-8">
//             {navItems.map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className="
//                   relative
//                   text-sm
//                   font-medium
//                   text-zinc-400
//                   transition
//                   hover:text-white

//                   after:absolute
//                   after:left-0
//                   after:-bottom-1
//                   after:h-0.5
//                   after:w-0
//                   after:bg-violet-400
//                   after:transition-all

//                   hover:after:w-full
//                 "
//               >
//                 {item}
//               </a>
//             ))}
//           </nav>

//           {/* Desktop CTA */}
//           <a
//             href="#contact"
//             className="
//               hidden
//               md:block
//               rounded-xl
//               border
//               border-violet-500/30
//               bg-violet-500/10
//               px-4
//               py-2
//               text-sm
//               font-medium
//               text-violet-400
//               transition
//               hover:bg-violet-500/20
//             "
//           >
//             Let's Talk
//           </a>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setOpen(true)}
//             className="md:hidden text-white"
//           >
//             <Menu size={22} />
//           </button>
//         </div>
//       </header>

//       {/* Overlay */}
//       {open && (
//         <div
//           onClick={() => setOpen(false)}
//           className="
//             fixed
//             inset-0
//             bg-black/60
//             z-30
//             md:hidden
//           "
//         />
//       )}

//       {/* Mobile Drawer */}
//       <div
//         className={`
//           fixed
//           top-0
//           right-0
//           z-40
//           h-screen
//           w-72
//           bg-zinc-950
//           border-l
//           border-zinc-800
//           transition-transform
//           duration-300
//           md:hidden

//           ${
//             open
//               ? "translate-x-0"
//               : "translate-x-full"
//           }
//         `}
//       >
//         <div className="flex items-center justify-between p-6 border-b border-zinc-800">
//           <div>
//             <p className="font-semibold text-white">
//               {heroData?.name}
//             </p>

//             <p className="text-xs text-zinc-500">
//               Portfolio
//             </p>
//           </div>

//           <button
//             onClick={() => setOpen(false)}
//             className="text-white"
//           >
//             <X size={22} />
//           </button>
//         </div>

//         <nav className="flex flex-col p-6">
//           {navItems.map((item) => (
//             <a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               onClick={() => setOpen(false)}
//               className="
//                 py-4
//                 text-zinc-300
//                 font-medium
//                 border-b
//                 border-zinc-800
//                 hover:text-violet-400
//                 transition
//               "
//             >
//               {item}
//             </a>
//           ))}

//           <a
//             href="#contact"
//             onClick={() => setOpen(false)}
//             className="
//               mt-6
//               rounded-xl
//               border
//               border-violet-500/30
//               bg-violet-500/10
//               px-4
//               py-3
//               text-center
//               font-medium
//               text-violet-400
//             "
//           >
//             Let's Talk
//           </a>
//         </nav>
//       </div>
//     </>
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
      {/* Floating Header */}
      <header className="fixed top-3 left-0 right-0 z-40 px-3 md:px-4">
        <div
          className="
            mx-auto
            flex
            h-14
            md:h-16
            max-w-6xl
            items-center
            justify-between
            rounded-2xl
            border
            border-zinc-800
            bg-zinc-950/80
            px-4
            md:px-6
            backdrop-blur-xl
            shadow-[0_8px_30px_rgb(0,0,0,0.5)]
          "
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="nav-animate flex items-center gap-3 group"
          >
            <div
              className="
                flex
                h-9
                w-9
                md:h-10
                md:w-10
                items-center
                justify-center
                rounded-xl
                border
                border-violet-500/20
                bg-violet-500/10
                text-xs
                md:text-sm
                font-bold
                text-violet-400
                shrink-0
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

            <div className="hidden sm:block">
              <p className="font-semibold text-white text-sm leading-none">
                {heroData?.name || "Portfolio"}
              </p>
              <p className="text-[11px] text-zinc-500 mt-1">Portfolio</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className="
                  nav-animate
                  relative
                  text-xs
                  lg:text-sm
                  font-medium
                  text-zinc-400
                  transition-colors
                  hover:text-white
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-0.5
                  after:w-0
                  after:bg-violet-400
                  after:transition-all
                  hover:after:w-full
                "
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="
              nav-animate
              hidden
              md:block
              rounded-xl
              border
              border-violet-500/30
              bg-violet-500/10
              px-4
              py-2
              text-xs
              lg:text-sm
              font-medium
              text-violet-400
              transition-all
              hover:bg-violet-500/20
              hover:border-violet-500/50
            "
          >
            Let&apos;s Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            className="nav-animate md:hidden text-zinc-300 hover:text-white p-1"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
            fixed
            inset-0
            z-40
            bg-black/70
            backdrop-blur-xs
            md:hidden
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
          w-72
          bg-zinc-950
          border-l
          border-zinc-800
          p-6
          transition-transform
          duration-300
          ease-in-out
          md:hidden
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div>
            <p className="font-semibold text-white text-sm">
              {heroData?.name || "Portfolio"}
            </p>
            <p className="text-xs text-zinc-500 mt-0.5">Portfolio</p>
          </div>

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close Menu"
            className="text-zinc-400 hover:text-white transition p-1"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mt-6 flex flex-col">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
              className="
                py-3.5
                text-sm
                font-medium
                text-zinc-300
                border-b
                border-zinc-800/80
                hover:text-violet-400
                transition-colors
              "
            >
              {item}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="
              mt-6
              rounded-xl
              border
              border-violet-500/30
              bg-violet-500/10
              px-4
              py-3
              text-center
              text-sm
              font-medium
              text-violet-400
              transition
              hover:bg-violet-500/20
            "
          >
            Let&apos;s Talk
          </a>
        </nav>
      </aside>
    </div>
  );
}