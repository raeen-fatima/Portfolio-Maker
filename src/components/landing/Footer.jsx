// import Link from "next/link";
// import { FaGithub } from "react-icons/fa6";
// import { FaLinkedin, FaTwitter } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-black text-white">
//       <div
//         className="
//           mx-auto
//           max-w-7xl
//           px-6
//           py-10
//         "
//       >
//         {/* Top */}
//         <div
//           className="
//             grid
//             gap-12
//             border-t
//             border-white/10
//             pt-10
//             md:grid-cols-2
//             lg:grid-cols-5
//           "
//         >
//           {/* Brand */}
//           <div className="lg:col-span-2">
//             <Link
//               href="/"
//               className="
//                 text-2xl
//                 font-bold
//               "
//             >
//               FolioForge
//             </Link>

//             <p
//               className="
//                 mt-5
//                 max-w-md
//                 text-zinc-400
//                 leading-relaxed
//               "
//             >
//               Create beautiful portfolio
//               websites, showcase your work,
//               and publish your personal
//               brand online.
//             </p>

//             <div className="mt-6 flex gap-4">
//               <a
//                 href="#"
//                 className="
//                   rounded-xl
//                   border
//                   border-white/10
//                   p-3
//                   text-zinc-400
//                   transition
//                   hover:text-white
//                 "
//               >
//                 <FaGithub size={18} />
//               </a>

//               <a
//                 href="#"
//                 className="
//                   rounded-xl
//                   border
//                   border-white/10
//                   p-3
//                   text-zinc-400
//                   transition
//                   hover:text-white
//                 "
//               >
//                 <FaLinkedin size={18} />
//               </a>

//               <a
//                 href="#"
//                 className="
//                   rounded-xl
//                   border
//                   border-white/10
//                   p-3
//                   text-zinc-400
//                   transition
//                   hover:text-white
//                 "
//               >
//                 <FaTwitter size={18} />
//               </a>
//             </div>
//           </div>

//           {/* Product */}
//           <div>
//             <h3
//               className="
//                 mb-5
//                 text-sm
//                 font-semibold
//                 uppercase
//                 tracking-wider
//                 text-zinc-500
//               "
//             >
//               Product
//             </h3>

//             <div className="space-y-3">
//               <Link
//                 href="#features"
//                 className="block text-zinc-400 hover:text-white"
//               >
//                 Features
//               </Link>

//               <Link
//                 href="#templates"
//                 className="block text-zinc-400 hover:text-white"
//               >
//                 Templates
//               </Link>

//               <Link
//                 href="/auth/register"
//                 className="block text-zinc-400 hover:text-white"
//               >
//                 Get Started
//               </Link>
//             </div>
//           </div>

//           {/* Resources */}
//           <div>
//             <h3
//               className="
//                 mb-5
//                 text-sm
//                 font-semibold
//                 uppercase
//                 tracking-wider
//                 text-zinc-500
//               "
//             >
//               Resources
//             </h3>

//             <div className="space-y-3">
//               <Link
//                 href="#"
//                 className="block text-zinc-400 hover:text-white"
//               >
//                 Documentation
//               </Link>

//               <Link
//                 href="#"
//                 className="block text-zinc-400 hover:text-white"
//               >
//                 Support
//               </Link>

//               <Link
//                 href="#"
//                 className="block text-zinc-400 hover:text-white"
//               >
//                 FAQs
//               </Link>
//             </div>
//           </div>

//           {/* Company */}
//           <div>
//             <h3
//               className="
//                 mb-5
//                 text-sm
//                 font-semibold
//                 uppercase
//                 tracking-wider
//                 text-zinc-500
//               "
//             >
//               Company
//             </h3>

//             <div className="space-y-3">
//               <Link
//                 href="#"
//                 className="block text-zinc-400 hover:text-white"
//               >
//                 About
//               </Link>

//               <Link
//                 href="#"
//                 className="block text-zinc-400 hover:text-white"
//               >
//                 Contact
//               </Link>

//               <Link
//                 href="#"
//                 className="block text-zinc-400 hover:text-white"
//               >
//                 Privacy Policy
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div
//           className="
//             mt-16
//             flex
//             flex-col
//             items-center
//             justify-between
//             gap-4
//             border-t
//             border-white/10
//             pt-8
//             text-sm
//             text-zinc-500
//             md:flex-row
//           "
//         >
//           <p>
//             © {new Date().getFullYear()} FolioForge.
//             All rights reserved.
//           </p>

//           <p>
//             Built with Next.js, Tailwind CSS &
//             MongoDB.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }


"use client";

import { useRef } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap/gsap";

export default function Footer() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // 1. Footer Top Grid Columns Stagger Reveal
      gsap.from(".footer-col", {
        scrollTrigger: {
          trigger: ".footer-top-grid",
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      // 2. Footer Bottom Copyright Bar Fade In
      gsap.from(".footer-bottom", {
        scrollTrigger: {
          trigger: ".footer-bottom",        },
        y: 15,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <footer ref={containerRef} className="bg-black text-white">
      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          py-10
        "
      >
        {/* Top Grid */}
        <div
          className="
            footer-top-grid
            grid
            gap-12
            border-t
            border-white/10
            pt-10
            md:grid-cols-2
            lg:grid-cols-5
          "
        >
          {/* Brand */}
          <div className="footer-col lg:col-span-2">
            <Link
              href="/"
              className="
                text-2xl
                font-bold
              "
            >
              FolioForge
            </Link>

            <p
              className="
                mt-5
                max-w-md
                text-zinc-400
                leading-relaxed
              "
            >
              Create beautiful portfolio websites, showcase your work, and
              publish your personal brand online.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="
                  rounded-xl
                  border
                  border-white/10
                  p-3
                  text-zinc-400
                  transition
                  hover:text-white
                "
              >
                <FaGithub size={18} />
              </a>

              <a
                href="#"
                className="
                  rounded-xl
                  border
                  border-white/10
                  p-3
                  text-zinc-400
                  transition
                  hover:text-white
                "
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="#"
                className="
                  rounded-xl
                  border
                  border-white/10
                  p-3
                  text-zinc-400
                  transition
                  hover:text-white
                "
              >
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="footer-col">
            <h3
              className="
                mb-5
                text-sm
                font-semibold
                uppercase
                tracking-wider
                text-zinc-500
              "
            >
              Product
            </h3>

            <div className="space-y-3">
              <Link
                href="#features"
                className="block text-zinc-400 hover:text-white"
              >
                Features
              </Link>

              <Link
                href="#templates"
                className="block text-zinc-400 hover:text-white"
              >
                Templates
              </Link>

              <Link
                href="/auth/register"
                className="block text-zinc-400 hover:text-white"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="footer-col">
            <h3
              className="
                mb-5
                text-sm
                font-semibold
                uppercase
                tracking-wider
                text-zinc-500
              "
            >
              Resources
            </h3>

            <div className="space-y-3">
              <Link
                href="#"
                className="block text-zinc-400 hover:text-white"
              >
                Documentation
              </Link>

              <Link
                href="#"
                className="block text-zinc-400 hover:text-white"
              >
                Support
              </Link>

              <Link
                href="#"
                className="block text-zinc-400 hover:text-white"
              >
                FAQs
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h3
              className="
                mb-5
                text-sm
                font-semibold
                uppercase
                tracking-wider
                text-zinc-500
              "
            >
              Company
            </h3>

            <div className="space-y-3">
              <Link
                href="#"
                className="block text-zinc-400 hover:text-white"
              >
                About
              </Link>

              <Link
                href="#"
                className="block text-zinc-400 hover:text-white"
              >
                Contact
              </Link>

              <Link
                href="#"
                className="block text-zinc-400 hover:text-white"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="
            footer-bottom
            mt-16
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-white/10
            pt-8
            text-sm
            text-zinc-500
            md:flex-row
          "
        >
          <p>
            © {new Date().getFullYear()} FolioForge. All rights reserved.
          </p>

          <p>
            Built with Next.js, Tailwind CSS & MongoDB.
          </p>
        </div>
      </div>
    </footer>
  );
}