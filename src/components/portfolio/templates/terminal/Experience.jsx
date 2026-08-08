// function formatMonth(dateString) {
//   if (!dateString) return "";

//   const [year, month] = dateString.split("-");

//   const months = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];

//   return `${months[Number(month) - 1]} ${year}`;
// }

// export default function Experience({
//   experience,
// }) {
//   if (!experience?.length) return null;

//   return (
//     <section
//       id="experience"
//       className="
//         bg-black
//         px-6
//         py-24
//         text-zinc-100
//       "
//     >
//       <div className="mx-auto max-w-6xl">
//         <div
//           className="
//             overflow-hidden
//             rounded-3xl
//             border
//             border-zinc-800
//             bg-zinc-950
//           "
//         >
//           {/* Terminal Header */}
//           <div
//             className="
//               flex
//               items-center
//               gap-2
//               border-b
//               border-zinc-800
//               px-5
//               py-4
//             "
//           >
//             <div className="h-3 w-3 rounded-full bg-red-500" />
//             <div className="h-3 w-3 rounded-full bg-yellow-500" />
//             <div className="h-3 w-3 rounded-full bg-green-500" />

//             <span
//               className="
//                 ml-4
//                 text-sm
//                 text-zinc-500
//               "
//             >
//               experience.log
//             </span>
//           </div>

//           <div
//             className="
//               p-8
//               font-mono
//               md:p-12
//             "
//           >
//             <p className="text-green-500">
//               $ cat experience.log
//             </p>

//             <div className="mt-10 space-y-10">
//               {experience.map((item) => (
//                 <div
//                   key={item._id}
//                   className="
//                     border-l-2
//                     border-green-500
//                     pl-6
//                   "
//                 >
//                   {/* Date */}
//                   <p
//                     className="
//                       text-sm
//                       text-green-400
//                     "
//                   >
//                     [
//                     {formatMonth(
//                       item.startDate
//                     )}

//                     {item.current
//                       ? " - Present"
//                       : ` - ${formatMonth(
//                           item.endDate
//                         )}`}
//                     ]
//                   </p>

//                   {/* Role */}
//                   <h3
//                     className="
//                       mt-3
//                       text-xl
//                       font-bold
//                       text-white
//                     "
//                   >
//                     {item.role}
//                   </h3>

//                   {/* Company */}
//                   <p
//                     className="
//                       mt-2
//                       text-zinc-400
//                     "
//                   >
//                     {item.company}
//                   </p>

//                   {/* Location */}
//                   {item.location && (
//                     <p
//                       className="
//                         mt-1
//                         text-sm
//                         text-zinc-500
//                       "
//                     >
//                       {item.location}
//                     </p>
//                   )}

//                   {/* Description */}
//                   {item.description && (
//                     <p
//                       className="
//                         mt-4
//                         leading-7
//                         text-zinc-400
//                       "
//                     >
//                       {item.description}
//                     </p>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Cursor */}
//             <div
//               className="
//                 mt-10
//                 flex
//                 items-center
//                 gap-2
//                 text-green-500
//               "
//             >
//               <span>$</span>

//               <span
//                 className="
//                   h-5
//                   w-3
//                   animate-pulse
//                   bg-green-500
//                 "
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap/gsap";

function formatMonth(dateString) {
  if (!dateString) return "";

  const [year, month] = dateString.split("-");

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${months[Number(month) - 1]} ${year}`;
}

export default function Experience({ experience }) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (!experience?.length) return;

      if (typeof window !== "undefined") {
        ScrollTrigger.refresh();
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        ".exp-terminal-box",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          clearProps: "all",
        }
      ).fromTo(
        ".exp-terminal-item",
        { opacity: 0, x: -15 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "all",
        },
        "-=0.3"
      );
    },
    { scope: containerRef, dependencies: [experience] }
  );

  if (!experience?.length) return null;

  return (
    <section
      ref={containerRef}
      id="experience"
      className="bg-black px-6 py-24 text-zinc-100"
    >
      <div className="mx-auto max-w-6xl">
        <div className="exp-terminal-box overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 border-b border-zinc-800 px-5 py-4">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />

            <span className="ml-4 text-sm font-mono text-zinc-500">
              experience.log
            </span>
          </div>

          <div className="p-8 font-mono md:p-12">
            <p className="text-green-500">$ cat experience.log</p>

            <div className="mt-10 space-y-10">
              {experience.map((item, index) => (
                <div
                  key={item._id || index}
                  className="exp-terminal-item border-l-2 border-green-500 pl-6"
                >
                  {/* Date */}
                  <p className="text-sm text-green-400">
                    [
                    {formatMonth(item.startDate)}
                    {item.current
                      ? " - Present"
                      : ` - ${formatMonth(item.endDate)}`}
                    ]
                  </p>

                  {/* Role */}
                  <h3 className="mt-3 text-xl font-bold text-white">
                    {item.role}
                  </h3>

                  {/* Company */}
                  <p className="mt-2 text-zinc-400">{item.company}</p>

                  {/* Location */}
                  {item.location && (
                    <p className="mt-1 text-sm text-zinc-500">
                      {item.location}
                    </p>
                  )}

                  {/* Description */}
                  {item.description && (
                    <p className="mt-4 leading-7 text-zinc-400">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Cursor */}
            <div className="mt-10 flex items-center gap-2 text-green-500">
              <span>$</span>
              <span className="h-5 w-3 animate-pulse bg-green-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}