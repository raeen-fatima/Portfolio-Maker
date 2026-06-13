"use client";

import { Check, Eye } from "lucide-react";
import Link from "next/link";

export default function TemplateCard({
  template,
  isSelected,
  isSaving,
  onSelect,
}) {
  return (
    <div
      className={`bg-white border rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
        isSelected
          ? "border-black ring-2 ring-black"
          : "border-zinc-200 hover:border-zinc-300"
      }`}
    >
      <div
        className={`${template.background} p-5 border-b ${template.border}`}
      >
        <div className="bg-white rounded-2xl border border-black/10 shadow-sm overflow-hidden">
          <div
            className={`${template.preview.header} h-16 p-4`}
          >
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-white/90" />
              <div className="space-y-1">
                <div className="h-2 w-20 rounded-full bg-white/90" />
                <div className="h-2 w-12 rounded-full bg-white/60" />
              </div>
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="space-y-2">
              <div className="h-3 w-3/4 rounded-full bg-zinc-900" />
              <div className="h-2 w-full rounded-full bg-zinc-200" />
              <div className="h-2 w-2/3 rounded-full bg-zinc-200" />
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div
                className={`${template.preview.panel} h-14 rounded-xl border border-black/5`}
              />
              <div
                className={`${template.preview.accent} h-14 rounded-xl`}
              />
              <div
                className={`${template.preview.panel} h-14 rounded-xl border border-black/5`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3
              className={`text-xl font-bold ${template.text}`}
            >
              {template.name}
            </h3>

            <p className="text-gray-500 mt-2 text-sm leading-relaxed">
              {template.tagline}
            </p>
          </div>

          {isSelected && (
            <span className="h-9 w-9 rounded-full bg-black text-white flex items-center justify-center shrink-0">
              <Check size={18} />
            </span>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button
            type="button"
            disabled={isSaving || isSelected}
            onClick={() => onSelect(template.id)}
            className={`flex-1 py-3 rounded-2xl font-medium transition ${
              isSelected
                ? "bg-zinc-100 text-zinc-500"
                : "bg-black text-white hover:opacity-90"
            } disabled:cursor-not-allowed`}
          >
            {isSelected
              ? "Selected"
              : isSaving
                ? "Saving..."
                : "Use Template"}
          </button>

          <Link
            href="/dashboard/preview"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 border border-zinc-200 rounded-2xl font-medium hover:bg-zinc-100 transition"
          >
            <Eye size={17} />
            Preview
          </Link>
        </div>
      </div>
    </div>
  );
}
