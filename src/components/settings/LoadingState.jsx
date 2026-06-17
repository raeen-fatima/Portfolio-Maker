export default function LoadingState() {
  return (
    <div
      className="
        rounded-[24px]
        border
        border-white/10
        bg-white/[0.03]
        p-10
        text-center
      "
    >
      <h2
        className="
          text-xl
          font-semibold
          text-white
        "
      >
        Loading Settings
      </h2>

      <p className="mt-2 text-zinc-500">
        Preparing your settings...
      </p>
    </div>
  );
}