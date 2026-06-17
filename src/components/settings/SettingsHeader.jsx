export default function SettingsHeader() {
  return (
    <div>
      <p
        className="
          text-sm
          uppercase
          tracking-[0.2em]
          text-zinc-500
        "
      >
        Settings
      </p>

      <h1
        className="
          mt-3
          text-4xl
          font-bold
          tracking-tight
          text-white
        "
      >
        Account Settings
      </h1>

      <p
        className="
          mt-3
          max-w-2xl
          text-zinc-500
        "
      >
        Manage your portfolio and account.
      </p>
    </div>
  );
}