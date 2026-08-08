// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// export default function CTA() {
//   return (
//     <section className="bg-black px-6 py-24 text-white">
//       <div className="mx-auto max-w-6xl">
//         <div
//           className="
//             relative
//             overflow-hidden
//             rounded-[40px]
//             border
//             border-white/10
//             bg-zinc-950
//             px-8
//             py-16
//             text-center
//             md:px-16
//             md:py-24
//           "
//         >
//           {/* Glow */}
//           <div
//             className="
//               absolute
//               left-1/2
//               top-1/2
//               h-[400px]
//               w-[400px]
//               -translate-x-1/2
//               -translate-y-1/2
//               rounded-full
//               bg-white/[0.04]
//               blur-[120px]
//             "
//           />

//           <div className="relative">
//             <h2
//               className="
//                 text-4xl
//                 font-bold
//                 tracking-tight
//                 md:text-6xl
//               "
//             >
//               Ready to build your
//               portfolio?
//             </h2>

//             <p
//               className="
//                 mx-auto
//                 mt-6
//                 max-w-2xl
//                 text-lg
//                 text-zinc-400
//               "
//             >
//               Create a beautiful personal
//               website, showcase your work
//               and publish it in minutes.
//             </p>

//             <div className="mt-10">
//               <Link
//                 href="/auth/register"
//                 className="
//                   inline-flex
//                   items-center
//                   gap-2
//                   rounded-2xl
//                   bg-white
//                   px-7
//                   py-4
//                   font-medium
//                   text-black
//                   transition
//                   hover:scale-105
//                 "
//               >
//                 Start Building

//                 <ArrowRight size={18} />
//               </Link>
//             </div>

//             <p
//               className="
//                 mt-6
//                 text-sm
//                 text-zinc-500
//               "
//             >
//               Free to start • No credit card required
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap/gsap";

export default function CTA() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (typeof window !== "undefined") {
        ScrollTrigger.refresh();
      }

      // Card Container Scale & Fade-in
      gsap.from(".cta-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        },
        y: 35,
        scale: 0.96,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        clearProps: "opacity,transform",
      });

      // Content Stagger Reveal
      gsap.from(".cta-content-item", {
        scrollTrigger: {
          trigger: ".cta-card",
          start: "top 85%",
        },
        y: 25,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        delay: 0.1,
        ease: "power3.out",
        clearProps: "opacity,transform",
      });

      // Ambient Glow Continuous Breath Pulse
      gsap.to(".cta-glow", {
        scale: 1.25,
        opacity: 0.8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="bg-black px-4 sm:px-6 py-16 sm:py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div
          className="
            cta-card
            relative
            overflow-hidden
            rounded-[28px] sm:rounded-[40px]
            border
            border-white/10
            bg-zinc-950
            px-6 sm:px-8 md:px-16
            py-12 sm:py-16 md:py-24
            text-center
          "
        >
          {/* Background Ambient Glow */}
          <div
            className="
              cta-glow
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[300px] sm:h-[400px]
              w-[300px] sm:w-[400px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white/[0.04]
              blur-[100px] sm:blur-[120px]
            "
          />

          <div className="relative z-10">
            <h2
              className="
                cta-content-item
                text-3xl sm:text-4xl md:text-6xl
                font-bold
                tracking-tight
              "
            >
              Ready to build your
              <br />
              portfolio?
            </h2>

            <p
              className="
                cta-content-item
                mx-auto
                mt-4 sm:mt-6
                max-w-2xl
                text-base sm:text-lg
                text-zinc-400
              "
            >
              Create a beautiful personal website, showcase your work
              and publish it in minutes.
            </p>

            <div className="cta-content-item mt-8 sm:mt-10">
              <Link
                href="/auth/register"
                className="
                  inline-flex
                  w-full sm:w-auto
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-white
                  px-7
                  py-3.5 sm:py-4
                  text-sm sm:text-base
                  font-medium
                  text-black
                  transition
                  hover:scale-105
                "
              >
                Start Building
                <ArrowRight size={18} />
              </Link>
            </div>

            <p
              className="
                cta-content-item
                mt-4 sm:mt-6
                text-xs sm:text-sm
                text-zinc-500
              "
            >
              Free to start • No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}