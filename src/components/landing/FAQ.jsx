// "use client";

// import { useState } from "react";
// import {
//   Plus,
//   Minus,
// } from "lucide-react";

// const faqs = [
//   {
//     question:
//       "Do I need coding knowledge to use FolioForge?",
//     answer:
//       "No. FolioForge is designed for everyone. Simply add your information, choose a template and publish your portfolio.",
//   },
//   {
//     question:
//       "Can I change my template later?",
//     answer:
//       "Yes. You can switch between templates anytime without losing your portfolio data.",
//   },
//   {
//     question:
//       "Will my portfolio be mobile responsive?",
//     answer:
//       "Absolutely. Every template is optimized for desktop, tablet and mobile devices.",
//   },
//   {
//     question:
//       "Can I use my own custom domain?",
//     answer:
//       "Yes. Custom domains will be available with premium plans.",
//   },
//   {
//     question:
//       "How long does it take to create a portfolio?",
//     answer:
//       "Most users can create and publish their portfolio in less than 10 minutes.",
//   },
//   {
//     question:
//       "Is FolioForge free to use?",
//     answer:
//       "Yes. You can start building your portfolio for free. Additional premium features may be introduced in future plans.",
//   },
// ];

// export default function FAQ() {
//   const [active, setActive] = useState(null);

//   const toggleFAQ = (index) => {
//     setActive(
//       active === index ? null : index
//     );
//   };

//   return (
//     <section
//       id="faq"
//       className="
//         relative
//         overflow-hidden
//         bg-black
//         px-6
//         py-32
//         text-white
//       "
//     >
//       {/* Glow */}
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

//       <div className="relative mx-auto max-w-4xl">
//         {/* Heading */}
//         <div className="text-center">
//           <p
//             className="
//               text-sm
//               uppercase
//               tracking-[0.25em]
//               text-zinc-500
//             "
//           >
//             FAQ
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
//             Frequently asked
//             <br />
//             questions.
//           </h2>

//           <p
//             className="
//               mx-auto
//               mt-6
//               max-w-2xl
//               text-lg
//               text-zinc-400
//             "
//           >
//             Everything you need to know
//             about FolioForge.
//           </p>
//         </div>

//         {/* FAQ Items */}
//         <div className="mt-20 space-y-4">
//           {faqs.map((faq, index) => {
//             const isOpen =
//               active === index;

//             return (
//               <div
//                 key={faq.question}
//                 className="
//                   overflow-hidden
//                   rounded-3xl
//                   border
//                   border-white/10
//                   bg-white/[0.03]
//                 "
//               >
//                 <button
//                   onClick={() =>
//                     toggleFAQ(index)
//                   }
//                   className="
//                     flex
//                     w-full
//                     items-center
//                     justify-between
//                     p-6
//                     text-left
//                   "
//                 >
//                   <span
//                     className="
//                       text-lg
//                       font-medium
//                     "
//                   >
//                     {faq.question}
//                   </span>

//                   {isOpen ? (
//                     <Minus size={18} />
//                   ) : (
//                     <Plus size={18} />
//                   )}
//                 </button>

//                 <div
//                   className={`
//                     overflow-hidden
//                     transition-all
//                     duration-300
//                     ${
//                       isOpen
//                         ? "max-h-40"
//                         : "max-h-0"
//                     }
//                   `}
//                 >
//                   <p
//                     className="
//                       px-6
//                       pb-6
//                       text-zinc-400
//                       leading-relaxed
//                     "
//                   >
//                     {faq.answer}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom Text */}
//         <div className="mt-12 text-center">
//           <p className="text-zinc-500">
//             Still have questions?
//           </p>

//           <a
//             href="mailto:support@folioforge.com"
//             className="
//               mt-2
//               inline-block
//               text-white
//             "
//           >
//             Contact Support →
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import { useState, useRef } from "react";
import { Plus, Minus } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap/gsap";

const faqs = [
  {
    question: "Do I need coding knowledge to use FolioForge?",
    answer:
      "No. FolioForge is designed for everyone. Simply add your information, choose a template and publish your portfolio.",
  },
  {
    question: "Can I change my template later?",
    answer:
      "Yes. You can switch between templates anytime without losing your portfolio data.",
  },
  {
    question: "Will my portfolio be mobile responsive?",
    answer:
      "Absolutely. Every template is optimized for desktop, tablet and mobile devices.",
  },
  {
    question: "Can I use my own custom domain?",
    answer: "Yes. Custom domains will be available with premium plans.",
  },
  {
    question: "How long does it take to create a portfolio?",
    answer:
      "Most users can create and publish their portfolio in less than 10 minutes.",
  },
  {
    question: "Is FolioForge free to use?",
    answer:
      "Yes. You can start building your portfolio for free. Additional premium features may be introduced in future plans.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);
  const containerRef = useRef(null);
  const answerRefs = useRef([]);

  useGSAP(
    () => {
      if (typeof window !== "undefined") {
        ScrollTrigger.refresh();
      }

      // 1. Header Reveal
      gsap.from(".faq-header-item", {
        scrollTrigger: {
          trigger: ".faq-header",
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "opacity,transform",
      });

      // 2. FAQ Cards Entrance Stagger
      gsap.from(".faq-item", {
        scrollTrigger: {
          trigger: ".faq-list",
          start: "top 85%",
        },
        y: 35,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        clearProps: "opacity,transform", // Prevents cards from staying invisible
      });

      // 3. Footer Link Entrance
      gsap.from(".faq-footer", {
        scrollTrigger: {
          trigger: ".faq-footer",
          start: "top 95%",
        },
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        clearProps: "opacity,transform",
      });
    },
    { scope: containerRef }
  );

  // Dynamic GSAP Accordion Height Toggle
  const toggleFAQ = (index) => {
    const isOpening = active !== index;
    const previousIndex = active;

    setActive(isOpening ? index : null);

    // Close previous active answer smoothly
    if (previousIndex !== null && answerRefs.current[previousIndex]) {
      gsap.to(answerRefs.current[previousIndex], {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power2.inOut",
      });
    }

    // Open target answer with natural spring/smooth expansion
    if (isOpening && answerRefs.current[index]) {
      gsap.fromTo(
        answerRefs.current[index],
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        }
      );
    }
  };

  return (
    <section
      ref={containerRef}
      id="faq"
      className="
        relative
        overflow-hidden
        bg-black
        px-4 sm:px-6
        py-20 sm:py-32
        text-white
      "
    >
      {/* Glow */}
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

      <div className="relative mx-auto max-w-4xl">
        {/* Heading */}
        <div className="faq-header text-center">
          <p
            className="
              faq-header-item
              text-xs sm:text-sm
              uppercase
              tracking-[0.25em]
              text-zinc-500
            "
          >
            FAQ
          </p>

          <h2
            className="
              faq-header-item
              mt-4 sm:mt-6
              text-3xl sm:text-5xl md:text-7xl
              font-bold
              tracking-tight
            "
          >
            Frequently asked
            <br />
            questions.
          </h2>

          <p
            className="
              faq-header-item
              mx-auto
              mt-4 sm:mt-6
              max-w-2xl
              text-base sm:text-lg
              text-zinc-400
            "
          >
            Everything you need to know about FolioForge.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="faq-list mt-12 sm:mt-20 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <div
                key={faq.question}
                className={`
                  faq-item
                  overflow-hidden
                  rounded-2xl sm:rounded-3xl
                  border
                  transition-colors
                  duration-300
                  ${
                    isOpen
                      ? "border-white/20 bg-white/[0.05]"
                      : "border-white/10 bg-white/[0.03] hover:border-white/15"
                  }
                `}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    p-5 sm:p-6
                    text-left
                    transition-colors
                  "
                >
                  <span className="text-base sm:text-lg font-medium pr-4">
                    {faq.question}
                  </span>

                  <span
                    className={`
                      shrink-0
                      rounded-full
                      p-1.5
                      border
                      border-white/10
                      bg-white/5
                      transition-transform
                      duration-300
                      ${isOpen ? "rotate-180 bg-white/10" : "rotate-0"}
                    `}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                <div
                  ref={(el) => (answerRefs.current[index] = el)}
                  className="h-0 overflow-hidden opacity-0"
                >
                  <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-zinc-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Text */}
        <div className="faq-footer mt-12 sm:mt-16 text-center">
          <p className="text-xs sm:text-sm text-zinc-500">
            Still have questions?
          </p>

          <a
            href="mailto:support@folioforge.com"
            className="
              mt-2
              inline-block
              text-sm sm:text-base
              text-white
              font-medium
              transition-opacity
              hover:opacity-80
            "
          >
            Contact Support →
          </a>
        </div>
      </div>
    </section>
  );
}