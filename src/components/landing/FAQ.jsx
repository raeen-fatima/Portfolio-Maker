"use client";

import { useState } from "react";
import {
  Plus,
  Minus,
} from "lucide-react";

const faqs = [
  {
    question:
      "Do I need coding knowledge to use FolioForge?",
    answer:
      "No. FolioForge is designed for everyone. Simply add your information, choose a template and publish your portfolio.",
  },
  {
    question:
      "Can I change my template later?",
    answer:
      "Yes. You can switch between templates anytime without losing your portfolio data.",
  },
  {
    question:
      "Will my portfolio be mobile responsive?",
    answer:
      "Absolutely. Every template is optimized for desktop, tablet and mobile devices.",
  },
  {
    question:
      "Can I use my own custom domain?",
    answer:
      "Yes. Custom domains will be available with premium plans.",
  },
  {
    question:
      "How long does it take to create a portfolio?",
    answer:
      "Most users can create and publish their portfolio in less than 10 minutes.",
  },
  {
    question:
      "Is FolioForge free to use?",
    answer:
      "Yes. You can start building your portfolio for free. Additional premium features may be introduced in future plans.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(
      active === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      className="
        relative
        overflow-hidden
        bg-black
        px-6
        py-32
        text-white
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-white/[0.03]
          blur-[180px]
        "
      />

      <div className="relative mx-auto max-w-4xl">
        {/* Heading */}
        <div className="text-center">
          <p
            className="
              text-sm
              uppercase
              tracking-[0.25em]
              text-zinc-500
            "
          >
            FAQ
          </p>

          <h2
            className="
              mt-6
              text-5xl
              font-bold
              tracking-tight
              md:text-7xl
            "
          >
            Frequently asked
            <br />
            questions.
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              text-zinc-400
            "
          >
            Everything you need to know
            about FolioForge.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="mt-20 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen =
              active === index;

            return (
              <div
                key={faq.question}
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                "
              >
                <button
                  onClick={() =>
                    toggleFAQ(index)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    p-6
                    text-left
                  "
                >
                  <span
                    className="
                      text-lg
                      font-medium
                    "
                  >
                    {faq.question}
                  </span>

                  {isOpen ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </button>

                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "max-h-40"
                        : "max-h-0"
                    }
                  `}
                >
                  <p
                    className="
                      px-6
                      pb-6
                      text-zinc-400
                      leading-relaxed
                    "
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-center">
          <p className="text-zinc-500">
            Still have questions?
          </p>

          <a
            href="mailto:support@folioforge.com"
            className="
              mt-2
              inline-block
              text-white
            "
          >
            Contact Support →
          </a>
        </div>
      </div>
    </section>
  );
}