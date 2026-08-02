import Image from "next/image";
import Link from "next/link";

import {
  LayoutTemplate,
} from "lucide-react";

import SettingsCard from "./SettingsCard";

export default function SelectedTemplateCard({
  template,
}) {
  return (
    <SettingsCard>
      <div className="flex items-center justify-between">
        <div>
          <h2
            className="
              font-semibold
              text-white
            "
          >
            Selected Template
          </h2>

          <p
            className="
              mt-1
              text-sm
              text-zinc-500
            "
          >
            {template.name}
          </p>
        </div>

        <LayoutTemplate
          size={20}
          className="text-zinc-500"
        />
      </div>

      <div
        className="
          mt-5
          overflow-hidden
          rounded-2xl
          border
          border-white/10
        "
      >
        <Image
          src={template.image}
          alt={template.name}
          width={600}
          height={300}
          className="
            h-44
            w-full
            object-cover
          "
        />
      </div>

      <Link
        href="/dashboard/portfolio/templates"
        className="
          mt-5
          block
          rounded-xl
          border
          border-white/10
          px-4
          py-3
          text-center
          text-white
          transition
          hover:bg-white/[0.05]
        "
      >
        Change Template
      </Link>
    </SettingsCard>
  );
}