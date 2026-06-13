export const portfolioTemplates = [
  {
    id: "template-1",
    name: "Classic",
    tagline:
      "Clean sections with a strong profile header.",
    accent: "bg-black",
    background: "bg-white",
    text: "text-zinc-950",
    border: "border-zinc-200",
    preview: {
      header: "bg-zinc-950",
      panel: "bg-zinc-100",
      accent: "bg-zinc-800",
    },
  },
  {
    id: "template-2",
    name: "Editorial",
    tagline:
      "Large typography for creators and writers.",
    accent: "bg-rose-600",
    background: "bg-rose-50",
    text: "text-zinc-950",
    border: "border-rose-200",
    preview: {
      header: "bg-rose-600",
      panel: "bg-white",
      accent: "bg-zinc-900",
    },
  },
  {
    id: "template-3",
    name: "Studio",
    tagline:
      "Portfolio-first layout for project-heavy profiles.",
    accent: "bg-emerald-600",
    background: "bg-emerald-50",
    text: "text-zinc-950",
    border: "border-emerald-200",
    preview: {
      header: "bg-emerald-600",
      panel: "bg-white",
      accent: "bg-amber-400",
    },
  },
  {
    id: "template-4",
    name: "Minimal",
    tagline:
      "Quiet, compact, and focused on credentials.",
    accent: "bg-sky-600",
    background: "bg-sky-50",
    text: "text-zinc-950",
    border: "border-sky-200",
    preview: {
      header: "bg-sky-600",
      panel: "bg-white",
      accent: "bg-zinc-800",
    },
  },
];

export function isValidTemplateId(templateId) {
  return portfolioTemplates.some(
    (template) => template.id === templateId
  );
}
