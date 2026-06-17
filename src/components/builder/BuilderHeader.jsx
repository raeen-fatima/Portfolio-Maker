export default function BuilderHeader({
  title,
  description,
  step,
  totalSteps,
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span
          className="
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-3
            py-1
            text-xs
            text-zinc-400
          "
        >
          Step {step} of {totalSteps}
        </span>

        <span className="text-sm text-zinc-500">
          Portfolio Builder
        </span>
      </div>

      <h1
        className="
          mt-4
          text-4xl
          font-bold
          tracking-tight
          text-white
        "
      >
        {title}
      </h1>

      <p
        className="
          mt-3
          max-w-2xl
          text-zinc-500
        "
      >
        {description}
      </p>
    </div>
  );
}