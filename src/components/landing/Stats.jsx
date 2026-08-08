// import {
//   Clock3,
//   LayoutTemplate,
//   Smartphone,
//   Rocket,
// } from "lucide-react";

// const stats = [
//   {
//     icon: Clock3,
//     value: "10 min",
//     label: "Average Setup",
//   },
//   {
//     icon: LayoutTemplate,
//     value: "3+",
//     label: "Templates",
//   },
//   {
//     icon: Smartphone,
//     value: "100%",
//     label: "Responsive",
//   },
//   {
//     icon: Rocket,
//     value: "1 Click",
//     label: "Publishing",
//   },
// ];

// export default function Stats() {
//   return (
//     <section className="bg-black px-6 py-24 text-white">
//       <div className="mx-auto max-w-7xl">
//         <div
//           className="
//             rounded-[40px]
//             border
//             border-white/10
//             bg-white/[0.03]
//             p-8
//             md:p-12
//           "
//         >
//           <div className="text-center">
//             <h2 className="text-4xl font-bold md:text-5xl">
//               Built for modern creators.
//             </h2>

//             <p className="mt-4 text-zinc-400">
//               Everything you need to launch a
//               professional portfolio.
//             </p>
//           </div>

//           <div className="mt-12 grid gap-6 md:grid-cols-4">
//             {stats.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={item.label}
//                   className="
//                     rounded-3xl
//                     border
//                     border-white/10
//                     bg-black/40
//                     p-6
//                     text-center
//                   "
//                 >
//                   <div className="flex justify-center">
//                     <Icon size={24} />
//                   </div>

//                   <h3 className="mt-4 text-4xl font-bold">
//                     {item.value}
//                   </h3>

//                   <p className="mt-2 text-zinc-500">
//                     {item.label}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import { useRef } from "react";
import {
  Clock3,
  LayoutTemplate,
  Smartphone,
  Rocket,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap/gsap";

const stats = [
  {
    icon: Clock3,
    value: "10 min",
    label: "Average Setup",
  },
  {
    icon: LayoutTemplate,
    value: "3+",
    label: "Templates",
  },
  {
    icon: Smartphone,
    value: "100%",
    label: "Responsive",
  },
  {
    icon: Rocket,
    value: "1 Click",
    label: "Publishing",
  },
];

export default function Stats() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (typeof window !== "undefined") {
        ScrollTrigger.refresh();
      }

      // Outer Card Box Animation
      gsap.from(".stats-box", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        clearProps: "opacity,transform",
      });

      // Individual Stat Cards Stagger Entrance
      gsap.from(".stat-card-item", {
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 85%",
        },
        y: 35,
        scale: 0.95,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.5)",
        clearProps: "opacity,transform", // Animation ke baad cards HAMESHA 100% visible rahenge
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="bg-black px-4 sm:px-6 py-20 sm:py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div
          className="
            stats-box
            rounded-[28px] sm:rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            p-6 sm:p-8 md:p-12
          "
        >
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Built for modern creators.
            </h2>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-400">
              Everything you need to launch a professional portfolio.
            </p>
          </div>

          <div className="stats-grid mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="
                    stat-card-item
                    rounded-2xl sm:rounded-3xl
                    border
                    border-white/10
                    bg-black/40
                    p-6
                    text-center
                    transition-all
                    duration-300
                    hover:border-white/20
                    hover:bg-white/[0.05]
                  "
                >
                  <div className="flex justify-center text-zinc-300">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-4 text-3xl sm:text-4xl font-bold">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-zinc-500">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}