"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { useTemplate } from "@/hooks/portfolio/useTemplate";

export default function TemplateCard({ template, active = false }) {
  const router = useRouter();

  const { loading, selectTemplate } = useTemplate();

  const handleUseTemplate = async () => {
    const success = await selectTemplate(template.id);

    if (success) {
      router.push("/dashboard/portfolio/preview");
    }
  };

  return (
    <div
      className={`
        group
        overflow-hidden
        rounded-[32px]
        border
        transition-all
        duration-300
        hover:-translate-y-1

        ${
          active
            ? `
              border-white/20
              bg-white/[0.04]
              ring-1
              ring-white/10
            `
            : `
              border-white/10
              bg-white/[0.02]
              hover:border-white/20
            `
        }
      `}
    >
      {/* Browser Frame */}
      <div
        className="
          border-b
          border-white/10
          bg-white/[0.03]
          px-4
          py-3
        "
      >
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          <div className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          <div className="h-2.5 w-2.5 rounded-full bg-zinc-600" />

          <div
            className="
              ml-3
              rounded-full
              bg-black/40
              px-3
              py-1
              text-xs
              text-zinc-500
            "
          >
            folioforge.app
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="relative">
        <div
          className="
            relative
            h-[240px]
            overflow-hidden
          "
        >
          <Image
            src={template.image}
            alt={template.name}
            fill
            sizes="800px"
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black
              via-black/20
              to-transparent
            "
          />
        </div>

        {active && (
          <div
            className="
              absolute
              left-5
              top-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-emerald-500/20
              bg-emerald-500/10
              px-3
              py-1.5
              text-xs
              font-medium
              text-emerald-400
              backdrop-blur-xl
            "
          >
            <Check size={12} />
            Active Template
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3
              className="
                text-2xl
                font-semibold
                text-white
              "
            >
              {template.name}
            </h3>

            <p
              className="
                mt-3
                leading-relaxed
                text-zinc-500
              "
            >
              {template.description}
            </p>
          </div>

          <Sparkles
            size={18}
            className="
              text-zinc-600
            "
          />
        </div>

        {/* Footer */}
        <div
          className="
            mt-8
            flex
            items-center
            justify-between
            border-t
            border-white/10
            pt-5
          "
        >
          <span
            className="
              text-sm
              text-zinc-500
            "
          >
            Modern Portfolio
          </span>

          <button
            onClick={handleUseTemplate}
            disabled={active || loading}
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-white
              px-4
              py-2.5
              text-sm
              font-medium
              text-black
              transition
              hover:opacity-90
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {active ? (
              <>
                <Check size={15} />
                Selected
              </>
            ) : (
              <>
                Use Template
                <ArrowRight size={15} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
