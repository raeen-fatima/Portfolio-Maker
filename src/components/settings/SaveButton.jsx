import { Save } from "lucide-react";

export default function SaveButton({
  saving,
  onSave,
}) {
  return (
    <button
      onClick={onSave}
      disabled={saving}
      className="
        inline-flex
        w-full
        items-center
        justify-center
        gap-2
        rounded-2xl
        bg-white
        py-3.5
        font-medium
        text-black
        transition
        hover:opacity-90
        disabled:opacity-60
      "
    >
      <Save size={18} />

      {saving
        ? "Saving..."
        : "Save Settings"}
    </button>
  );
}