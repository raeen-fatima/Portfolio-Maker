
export default function SettingsCard({
  children,
  className = "",
}) {
  return (
    <section
      className={`
        rounded-[24px]
        border
        border-white/10
        bg-black
        p-6
        backdrop-blur-xl
        ${className}
      `}
    >
      {children}
    </section>
  );
}