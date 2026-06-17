import Link from "next/link";

import {
  CheckCircle2,
} from "lucide-react";

import SettingsCard from "./SettingsCard";

export default function PublishStatusCard({
  isPublished,
}) {
  return (
    <SettingsCard>
      <div
        className="
          flex
          flex-col
          gap-4
          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        <div>
          <h2
            className="
              text-xl
              font-semibold
              text-white
            "
          >
            Publish Status
          </h2>

          <p
            className="
              mt-2
              text-zinc-500
            "
          >
            Current visibility of your
            portfolio.
          </p>
        </div>

        <div
          className={`
            inline-flex
            items-center
            gap-2
            rounded-full
            px-4
            py-2
            text-sm
            font-medium

            ${
              isPublished
                ? "bg-green-500/10 text-green-400"
                : "bg-yellow-500/10 text-yellow-400"
            }
          `}
        >
          <CheckCircle2 size={16} />

          {isPublished
            ? "Published"
            : "Draft"}
        </div>
      </div>

      <Link
        href="/dashboard/publish"
        className="
          mt-5
          inline-flex
          rounded-xl
          border
          border-white/10
          px-5
          py-3
          text-white
          transition
          hover:bg-white/[0.05]
        "
      >
        Manage Publishing
      </Link>
    </SettingsCard>
  );
}