import SettingsCard from "./SettingsCard";

export default function DangerZoneCard({
  onDelete,
}) {
  return (
    <SettingsCard
      className="
        border-red-500/20
        bg-red-500/5
        
      "
    >
      <h2
        className="
          font-semibold
          text-red-400
        "
      >
        Danger Zone
      </h2>

      <p
        className="
          mt-2
          text-sm
          text-zinc-400
        "
      >
        Permanently delete your
        portfolio and all associated
        data.
      </p>

      <button
        onClick={onDelete}
        className="mt-4 w-full rounded-2xl bg-red-500/10 border-red-500/20
             px-4 py-3 font-medium text-red-400 transition hover:bg-red-500/20
        "
      >
        Delete Portfolio
      </button>
    </SettingsCard>
  );
}