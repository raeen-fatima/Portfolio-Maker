// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Blocks } from "lucide-react";

// import UserDropdown from "../ui/UserDropdown";
// import MobileMenu from "../ui/MobileMenu";

// import { scrollToSection } from "@/hooks/animations/useScrollToSection";

// export default function NavbarClient({ user, links }) {
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("");

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 30);

//       const sections = links
//         .filter((link) => link.href.startsWith("#"))
//         .map((link) => document.querySelector(link.href));

//       let current = "";

//       sections.forEach((section) => {
//         if (!section) return;

//         const top = section.offsetTop - 140;
//         const bottom = top + section.offsetHeight;

//         if (window.scrollY >= top && window.scrollY < bottom) {
//           current = `#${section.id}`;
//         }
//       });

//       setActiveSection(current);
//     };

//     handleScroll();

//     window.addEventListener("scroll", handleScroll);

//     return () =>
//       window.removeEventListener("scroll", handleScroll);
//   }, [links]);

//   const handleClick = (e, href) => {
//     if (href.startsWith("#")) {
//       e.preventDefault();
//       scrollToSection(href);
//     }
//   };

//   return (
//     <motion.header
//       initial={{
//         y: -80,
//         opacity: 0,
//       }}
//       animate={{
//         y: 0,
//         opacity: 1,
//       }}
//       transition={{
//         duration: 0.8,
//         ease: "easeOut",
//       }}
//       className="
//         fixed
//         inset-x-0
//         top-0
//         z-[100]
//         px-4
//         pt-4
//       "
//     >
//       <motion.div
//         animate={{
//           scale: scrolled ? 0.98 : 1,
//           y: scrolled ? -2 : 0,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 260,
//           damping: 25,
//         }}
//         className={`
//           max-w-7xl
//           mx-auto
//           rounded-2xl
//           border
//           border-white/10
//           backdrop-blur-3xl
//           transition-all
//           duration-500

//           ${
//             scrolled
//               ? "bg-black/90 shadow-[0_10px_50px_rgba(0,0,0,.55)]"
//               : "bg-black/70 shadow-[0_10px_40px_rgba(0,0,0,.4)]"
//           }
//         `}
//       >
//         <div
//           className="
//             flex
//             items-center
//             justify-between
//             h-[72px]
//             px-6
//           "
//         >
//           {/* Logo */}

//           <Link
//             href="/"
//             className="
//               relative
//               z-50
//               flex
//               items-center
//               gap-3
//             "
//           >
//             <motion.div
//               whileHover={{
//                 rotate: 12,
//                 scale: 1.08,
//               }}
//               whileTap={{
//                 scale: .95,
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: 300,
//               }}
//               className="
//                 flex
//                 h-11
//                 w-11
//                 items-center
//                 justify-center

//                 rounded-xl

//                 border
//                 border-white/10

//                 bg-white/[0.05]
//               "
//             >
//               <Blocks
//                 size={20}
//                 className="text-white"
//               />
//             </motion.div>

//             <div>

//               <h2
//                 className="
//                   text-lg
//                   font-semibold
//                   tracking-tight
//                 "
//               >
//                 <span className="text-white">
//                   Folio
//                 </span>

//                 <span className="text-zinc-500">
//                   Forge
//                 </span>
//               </h2>

//               <p
//                 className="
//                   text-xs
//                   text-zinc-600
//                 "
//               >
//                 Portfolio Builder
//               </p>

//             </div>

//           </Link>

//           {/* Desktop Navigation */}

//           <nav
//             className="
//               hidden
//               lg:flex
//               items-center
//               gap-8
//             "
//           >
//             {links.map((link) => {
//               const active =
//                 activeSection === link.href;

//               return (
//                 <motion.a
//                   key={link.name}
//                   href={link.href}
//                   onClick={(e) =>
//                     handleClick(e, link.href)
//                   }
//                   whileHover={{
//                     y: -2,
//                   }}
//                   whileTap={{
//                     scale: .96,
//                   }}
//                   className={`
//                     relative
//                     text-sm
//                     font-medium
//                     transition-all
//                     duration-300

//                     ${
//                       active
//                         ? "text-white"
//                         : "text-zinc-400 hover:text-white"
//                     }
//                   `}
//                 >
//                   {link.name}

//                   <span
//                     className={`
//                       absolute
//                       left-0
//                       -bottom-2

//                       h-px

//                       bg-white

//                       transition-all
//                       duration-300

//                       ${
//                         active
//                           ? "w-full"
//                           : "w-0 group-hover:w-full"
//                       }
//                     `}
//                   />
//                 </motion.a>
//               );
//             })}
//           </nav>
//                     {/* Right Side */}

//           <div className="hidden lg:block">
//             {user ? (
//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{
//                   delay: 0.25,
//                   duration: 0.5,
//                 }}
//               >
//                 <UserDropdown user={user} />
//               </motion.div>
//             ) : (
//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{
//                   delay: 0.25,
//                   duration: 0.5,
//                 }}
//                 className="flex items-center gap-4"
//               >
//                 <Link
//                   href="/auth/login"
//                   className="
//                     text-sm
//                     font-medium
//                     text-zinc-400
//                     transition-colors
//                     hover:text-white
//                   "
//                 >
//                   Sign In
//                 </Link>

//                 <motion.div
//                   whileHover={{
//                     scale: 1.05,
//                     y: -1,
//                   }}
//                   whileTap={{
//                     scale: 0.96,
//                   }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 350,
//                   }}
//                 >
//                   <Link
//                     href="/auth/register"
//                     className="
//                       relative
//                       overflow-hidden

//                       rounded-xl

//                       bg-white

//                       px-5
//                       py-2.5

//                       text-sm
//                       font-semibold
//                       text-black

//                       transition-all

//                       hover:shadow-[0_0_35px_rgba(255,255,255,.22)]
//                     "
//                   >
//                     <span className="relative z-10">
//                       Start Building
//                     </span>

//                     <span
//                       className="
//                         absolute
//                         inset-0

//                         bg-gradient-to-r
//                         from-white
//                         via-zinc-200
//                         to-white

//                         opacity-0

//                         transition-opacity
//                         duration-300

//                         hover:opacity-100
//                       "
//                     />
//                   </Link>
//                 </motion.div>
//               </motion.div>
//             )}
//           </div>

//           {/* Mobile */}

//           <MobileMenu user={user} />
//         </div>

//         {/* Bottom Border Glow */}

//         <motion.div
//           animate={{
//             opacity: scrolled ? 1 : 0.6,
//             scaleX: scrolled ? 1 : 0.92,
//           }}
//           transition={{
//             duration: 0.4,
//           }}
//           className="
//             pointer-events-none

//             h-px
//             w-full

//             bg-gradient-to-r
//             from-transparent
//             via-white/20
//             to-transparent
//           "
//         />
//       </motion.div>
//     </motion.header>
//   );
// }


"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Blocks } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap/gsap";

import UserDropdown from "../ui/UserDropdown";
import MobileMenu from "../ui/MobileMenu";

import { scrollToSection } from "@/hooks/animations/useScrollToSection";

export default function NavbarClient({ user, links }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const headerRef = useRef(null);

  // Initial Entrance Animation
  useGSAP(
    () => {
      gsap.fromTo(
        headerRef.current,
        { y: -80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "opacity,transform",
        }
      );
    },
    { scope: headerRef }
  );

  // Scroll Detection & Active Section Spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = links
        .filter((link) => link.href.startsWith("#"))
        .map((link) => document.querySelector(link.href));

      let current = "";

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 140;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          current = `#${section.id}`;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  const handleClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      scrollToSection(href);
    }
  };

  return (
    <header
      ref={headerRef}
      className="
        fixed
        inset-x-0
        top-0
        z-[100]
        px-4
        pt-4
      "
    >
      <div
        className={`
          max-w-7xl
          mx-auto
          rounded-2xl
          border
          border-white/10
          backdrop-blur-3xl
          transition-all
          duration-500
          ${
            scrolled
              ? "bg-black/90 scale-[0.98] -translate-y-0.5 shadow-[0_10px_50px_rgba(0,0,0,.55)]"
              : "bg-black/70 scale-100 translate-y-0 shadow-[0_10px_40px_rgba(0,0,0,.4)]"
          }
        `}
      >
        <div
          className="
            flex
            items-center
            justify-between
            lg:grid
            lg:grid-cols-3
            h-[72px]
            px-6
          "
        >
          {/* Left Column: Logo */}
          <div className="flex items-center justify-start">
            <Link
              href="/"
              className="
                group
                relative
                z-50
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
                  bg-white/[0.05]
                  transition-transform
                  duration-300
                  group-hover:rotate-12
                  group-hover:scale-105
                "
              >
                <Blocks size={20} className="text-white" />
              </div>

              <div>
                <h2
                  className="
                    text-lg
                    font-semibold
                    tracking-tight
                    leading-tight
                  "
                >
                  <span className="text-white">Folio</span>
                  <span className="text-zinc-500">Forge</span>
                </h2>

                <p
                  className="
                    text-[11px]
                    text-zinc-600
                  "
                >
                  Portfolio Builder
                </p>
              </div>
            </Link>
          </div>

          {/* Center Column: Desktop Navigation Links */}
          <nav
            className="
              hidden
              lg:flex
              items-center
              justify-center
              gap-8
            "
          >
            {links.map((link) => {
              const active = activeSection === link.href;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`
                    group
                    relative
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    ${
                      active
                        ? "text-white"
                        : "text-zinc-400 hover:text-white"
                    }
                  `}
                >
                  {link.name}

                  <span
                    className={`
                      absolute
                      left-0
                      -bottom-2
                      h-px
                      bg-white
                      transition-all
                      duration-300
                      ${
                        active
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right Column: Action Buttons */}
          <div className="hidden lg:flex items-center justify-end">
            {user ? (
              <UserDropdown user={user} />
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/auth/login"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    px-4
                    py-2.5
                    text-sm
                    font-medium
                    text-zinc-300
                    rounded-xl
                    transition-colors
                    duration-200
                    hover:text-white
                    hover:bg-white/5
                  "
                >
                  Sign In
                </Link>

                <Link
                  href="/auth/register"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-black
                    bg-white
                    rounded-xl
                    transition-all
                    duration-300
                    hover:bg-zinc-200
                    hover:scale-[1.02]
                    active:scale-[0.98]
                    shadow-[0_0_20px_rgba(255,255,255,0.1)]
                  "
                >
                  Start Building
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="flex lg:hidden items-center">
            <MobileMenu user={user} />
          </div>
        </div>

        {/* Bottom Border Glow Line */}
        <div
          className={`
            pointer-events-none
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent
            transition-all
            duration-500
            ${scrolled ? "opacity-100 scale-x-100" : "opacity-60 scale-x-95"}
          `}
        />
      </div>
    </header>
  );
}