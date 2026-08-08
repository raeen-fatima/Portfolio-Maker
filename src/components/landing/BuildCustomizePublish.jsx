// import {
//   PenSquare,
//   Palette,
//   Rocket,
//   ArrowRight,
// } from "lucide-react";

// const steps = [
//   {
//     icon: PenSquare,
//     title: "Build",
//     description:
//       "Add your projects, skills and experience through a simple dashboard.",
//     preview: "Dashboard",
//   },
//   {
//     icon: Palette,
//     title: "Customize",
//     description:
//       "Choose a template and personalize every detail of your portfolio.",
//     preview: "Templates",
//   },
//   {
//     icon: Rocket,
//     title: "Publish",
//     description:
//       "Launch your portfolio with a unique URL and share it instantly.",
//     preview: "Live Site",
//   },
// ];

// export default function BuildCustomizePublish() {
//   return (
//     <section
//       className="
//         relative
//         overflow-hidden
//         bg-black
//         px-6
//         py-32
//         text-white
//       "
//     >
//       {/* Background Glow */}
//       <div
//         className="
//           absolute
//           left-1/2
//           top-0
//           h-[500px]
//           w-[500px]
//           -translate-x-1/2
//           rounded-full
//           bg-white/[0.03]
//           blur-[180px]
//         "
//       />

//       {/* Watermark */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           left-1/2
//           top-10
//           -translate-x-1/2
//           select-none
//           text-[140px]
//           font-black
//           tracking-tight
//           text-white/[0.02]
//           md:text-[220px]
//         "
//       >
//         BUILD
//       </div>

//       <div className="relative mx-auto max-w-7xl">
//         {/* Heading */}
//         <div className="mx-auto max-w-4xl text-center">
//           <p
//             className="
//               text-sm
//               uppercase
//               tracking-[0.25em]
//               text-zinc-500
//             "
//           >
//             How It Works
//           </p>

//           <h2
//             className="
//               mt-6
//               text-5xl
//               font-bold
//               tracking-tight
//               md:text-7xl
//             "
//           >
//             From idea to
//             <br />
//             portfolio.
//           </h2>

//           <p
//             className="
//               mx-auto
//               mt-8
//               max-w-2xl
//               text-lg
//               leading-relaxed
//               text-zinc-400
//             "
//           >
//             Create, customize and publish
//             your portfolio in just a few
//             minutes.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="mt-24 grid gap-6 lg:grid-cols-3">
//           {steps.map((step) => {
//             const Icon = step.icon;

//             return (
//               <div
//                 key={step.title}
//                 className="
//                   group
//                   overflow-hidden
//                   rounded-[32px]
//                   border
//                   border-white/10
//                   bg-white/[0.03]
//                   p-8
//                   transition-all
//                   duration-300
//                   hover:-translate-y-2
//                   hover:border-white/20
//                   hover:bg-white/[0.05]
//                 "
//               >
//                 {/* Icon */}
//                 <div
//                   className="
//                     flex
//                     h-14
//                     w-14
//                     items-center
//                     justify-center
//                     rounded-2xl
//                     border
//                     border-white/10
//                     bg-white/[0.03]
//                   "
//                 >
//                   <Icon size={24} />
//                 </div>

//                 <h3
//                   className="
//                     mt-8
//                     text-3xl
//                     font-bold
//                   "
//                 >
//                   {step.title}
//                 </h3>

//                 <p
//                   className="
//                     mt-4
//                     leading-relaxed
//                     text-zinc-400
//                   "
//                 >
//                   {step.description}
//                 </p>

//                 {/* Preview */}
//                 <div
//                   className="
//                     mt-8
//                     rounded-2xl
//                     border
//                     border-white/10
//                     bg-black/40
//                     p-4
//                   "
//                 >
//                   <div className="mb-4 flex gap-2">
//                     <div className="h-2 w-2 rounded-full bg-zinc-600" />
//                     <div className="h-2 w-2 rounded-full bg-zinc-600" />
//                     <div className="h-2 w-2 rounded-full bg-zinc-600" />
//                   </div>

//                   <div
//                     className="
//                       flex
//                       h-28
//                       items-center
//                       justify-center
//                       rounded-xl
//                       border
//                       border-white/10
//                       bg-gradient-to-b
//                       from-white/[0.04]
//                       to-transparent
//                       text-sm
//                       text-zinc-500
//                     "
//                   >
//                     {step.preview}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Process Flow */}
//         {/* Process Flow */}
//         <div
//           className="
//             mt-20
//             hidden
//             items-center
//             justify-center
//             gap-8
//             lg:flex
//           "
//         >
//           <div
//             className="
//               rounded-full
//               border
//               border-white/10
//               px-6
//               py-3
//               text-zinc-400
//             "
//           >
//             Add Content
//           </div>

//           <ArrowRight
//             className="text-zinc-600"
//             size={20}
//           />

//           <div
//             className="
//               rounded-full
//               border
//               border-white/10
//               px-6
//               py-3
//               text-zinc-400
//             "
//           >
//             Choose Template
//           </div>

//           <ArrowRight
//             className="text-zinc-600"
//             size={20}
//           />

//           <div
//             className="
//               rounded-full
//               border
//               border-white/10
//               px-6
//               py-3
//               text-zinc-400
//             "
//           >
//             Publish Portfolio
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { useRef } from "react";
import {
  PenSquare,
  Palette,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap/gsap";

const steps = [
  {
    icon: PenSquare,
    title: "Build",
    description:
      "Add your projects, skills and experience through a simple dashboard.",
    preview: "Dashboard",
  },
  {
    icon: Palette,
    title: "Customize",
    description:
      "Choose a template and personalize every detail of your portfolio.",
    preview: "Templates",
  },
  {
    icon: Rocket,
    title: "Publish",
    description:
      "Launch your portfolio with a unique URL and share it instantly.",
    preview: "Live Site",
  },
];

export default function BuildCustomizePublish() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (typeof window !== "undefined") {
        ScrollTrigger.refresh();
      }

      // Watermark entrance
      gsap.from(".process-watermark", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        },
        y: -30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        clearProps: "opacity,transform",
      });

      // Header Animation
      gsap.from(".process-header-item", {
        scrollTrigger: {
          trigger: ".process-header",
          start: "top 90%",
        },
        y: 35,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "opacity,transform",
      });

      // Step Cards Stagger Reveal
      gsap.from(".step-card", {
        scrollTrigger: {
          trigger: ".steps-grid",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        clearProps: "opacity,transform", // Cards hamesha visible rahenge
      });

      // Bottom Flow Pills
      gsap.from(".flow-item", {
        scrollTrigger: {
          trigger: ".process-flow",
          start: "top 90%",
        },
        x: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "opacity,transform",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="
        relative
        overflow-hidden
        bg-black
        px-4 sm:px-6
        py-20 sm:py-32
        text-white
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[400px] sm:h-[500px]
          w-[400px] sm:w-[500px]
          -translate-x-1/2
          rounded-full
          bg-white/[0.03]
          blur-[140px] sm:blur-[180px]
        "
      />

      {/* Watermark */}
      <div
        className="
          process-watermark
          pointer-events-none
          absolute
          left-1/2
          top-10
          -translate-x-1/2
          select-none
          text-[100px] sm:text-[140px] md:text-[220px]
          font-black
          tracking-tight
          text-white/[0.02]
        "
      >
        BUILD
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="process-header mx-auto max-w-4xl text-center">
          <p
            className="
              process-header-item
              text-xs sm:text-sm
              uppercase
              tracking-[0.25em]
              text-zinc-500
            "
          >
            How It Works
          </p>

          <h2
            className="
              process-header-item
              mt-4 sm:mt-6
              text-3xl sm:text-5xl md:text-7xl
              font-bold
              tracking-tight
            "
          >
            From idea to
            <br />
            portfolio.
          </h2>

          <p
            className="
              process-header-item
              mx-auto
              mt-6 sm:mt-8
              max-w-2xl
              text-base sm:text-lg
              leading-relaxed
              text-zinc-400
            "
          >
            Create, customize and publish your portfolio in just a few minutes.
          </p>
        </div>

        {/* Cards */}
        <div className="steps-grid mt-16 sm:mt-24 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="
                  step-card
                  group
                  flex
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-[28px] sm:rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-6 sm:p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-white/20
                  hover:bg-white/[0.05]
                "
              >
                <div>
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-12 sm:h-14
                      w-12 sm:w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                    "
                  >
                    <Icon size={24} />
                  </div>

                  <h3
                    className="
                      mt-6 sm:mt-8
                      text-2xl sm:text-3xl
                      font-bold
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mt-3 sm:mt-4
                      text-sm sm:text-base
                      leading-relaxed
                      text-zinc-400
                    "
                  >
                    {step.description}
                  </p>
                </div>

                {/* Preview Box */}
                <div
                  className="
                    mt-8
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/40
                    p-4
                  "
                >
                  <div className="mb-4 flex gap-2">
                    <div className="h-2 w-2 rounded-full bg-zinc-600" />
                    <div className="h-2 w-2 rounded-full bg-zinc-600" />
                    <div className="h-2 w-2 rounded-full bg-zinc-600" />
                  </div>

                  <div
                    className="
                      flex
                      h-28
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-gradient-to-b
                      from-white/[0.04]
                      to-transparent
                      text-sm
                      text-zinc-500
                    "
                  >
                    {step.preview}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Flow */}
        <div
          className="
            process-flow
            mt-16 sm:mt-20
            hidden
            items-center
            justify-center
            gap-6 sm:gap-8
            lg:flex
          "
        >
          <div
            className="
              flow-item
              rounded-full
              border
              border-white/10
              px-6
              py-3
              text-sm
              text-zinc-400
            "
          >
            Add Content
          </div>

          <ArrowRight
            className="flow-item text-zinc-600"
            size={20}
          />

          <div
            className="
              flow-item
              rounded-full
              border
              border-white/10
              px-6
              py-3
              text-sm
              text-zinc-400
            "
          >
            Choose Template
          </div>

          <ArrowRight
            className="flow-item text-zinc-600"
            size={20}
          />

          <div
            className="
              flow-item
              rounded-full
              border
              border-white/10
              px-6
              py-3
              text-sm
              text-zinc-400
            "
          >
            Publish Portfolio
          </div>
        </div>
      </div>
    </section>
  );
}