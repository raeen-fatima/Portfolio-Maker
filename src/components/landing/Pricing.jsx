import Link from "next/link";
import {
  Check,
  Sparkles,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹0",
    description:
      "Perfect for getting started.",
    features: [
      "1 Portfolio",
      "Basic Templates",
      "Custom URL",
      "Responsive Design",
      "Portfolio Publishing",
    ],
    button: "Start Free",
  },

  {
    name: "Creator",
    price: "₹199",
    badge: "Most Popular",
    description:
      "Everything you need to stand out.",
    features: [
      "Everything in Starter",
      "Premium Templates",
      "Portfolio Analytics",
      "Priority Support",
      "Unlimited Updates",
      "Custom Domain",
    ],
    button: "Get Creator",
    featured: true,
  },

  {
    name: "Agency",
    price: "₹499",
    description:
      "For teams and agencies.",
    features: [
      "Everything in Creator",
      "10 Portfolios",
      "Team Access",
      "Agency Branding",
      "Custom Domains",
      "Priority Assistance",
    ],
    button: "Contact Sales",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
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
          top-20
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-white/[0.03]
          blur-[200px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
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
            Pricing
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
            Start free.
            <br />
            Upgrade when you're ready.
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
            No credit card required.
            Build your portfolio today and
            scale when you need more power.
          </p>
        </div>

        {/* Plans */}
        <div
          className="
            mt-24
            grid
            gap-8
            lg:grid-cols-3
          "
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                relative
                rounded-[36px]
                border
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                ${
                  plan.featured
                    ? `
                      scale-100
                      border-white/20
                      bg-gradient-to-b
                      from-white/[0.08]
                      to-white/[0.03]
                      lg:scale-105
                    `
                    : `
                      border-white/10
                      bg-white/[0.03]
                    `
                }
              `}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className="
                    absolute
                    right-6
                    top-6
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-3
                    py-1
                    text-xs
                  "
                >
                  <Sparkles size={12} />
                  {plan.badge}
                </div>
              )}

              {/* Plan */}
              <h3 className="text-2xl font-bold">
                {plan.name}
              </h3>

              <p className="mt-3 text-zinc-400">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mt-8">
                <span
                  className="
                    text-6xl
                    font-bold
                    tracking-tight
                  "
                >
                  {plan.price}
                </span>

                {plan.price !== "₹0" && (
                  <span className="ml-2 text-zinc-500">
                    /month
                  </span>
                )}
              </div>

              <div
                className="
                  my-8
                  border-t
                  border-white/10
                "
              />

              {/* Features */}
              <div className="space-y-4">
                {plan.features.map(
                  (feature) => (
                    <div
                      key={feature}
                      className="
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <Check
                        size={18}
                        className="
                          text-green-400
                          shrink-0
                        "
                      />

                      <span className="text-zinc-300">
                        {feature}
                      </span>
                    </div>
                  )
                )}
              </div>

              {/* CTA */}
              <Link
                href="/auth/register"
                className={`
                  mt-10
                  flex
                  justify-center
                  rounded-2xl
                  px-5
                  py-4
                  font-medium
                  transition
                  ${
                    plan.featured
                      ? `
                        bg-white
                        text-black
                        hover:opacity-90
                      `
                      : `
                        border
                        border-white/10
                        hover:bg-white/5
                      `
                  }
                `}
              >
                {plan.button}
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Trust Text */}
        <div className="mt-16 text-center">
          <p className="text-zinc-500">
            Trusted by developers, students,
            freelancers and creators worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}