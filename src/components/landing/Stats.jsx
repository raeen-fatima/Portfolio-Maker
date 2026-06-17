import {
  Clock3,
  LayoutTemplate,
  Smartphone,
  Rocket,
} from "lucide-react";

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
  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div
          className="
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            p-8
            md:p-12
          "
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold md:text-5xl">
              Built for modern creators.
            </h2>

            <p className="mt-4 text-zinc-400">
              Everything you need to launch a
              professional portfolio.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-black/40
                    p-6
                    text-center
                  "
                >
                  <div className="flex justify-center">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-4 text-4xl font-bold">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-zinc-500">
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