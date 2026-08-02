export default function StatCard({
  title,
  value,
}) {
  return (
    <div
      className="
        rounded-[28px]
        border border-white/10
        bg-white/[0.03]
        p-6
      "
    >
      <p className="text-zinc-500">
        {title}
      </p>

      <h2
        className="
          mt-3
          text-4xl
          font-bold
        "
      >
        {value}
      </h2>
    </div>
  );
}