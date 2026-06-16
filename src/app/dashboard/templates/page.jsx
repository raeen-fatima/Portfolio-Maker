import { portfolioTemplates } from "@/lib/templates";
import TemplateCard from "@/components/templates/TemplateCard";

export default function TemplatesPage() {
  return (
    <div className="space-y-8 p-6 lg:p-12">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Templates
        </h1>

        <p className="mt-2 text-gray-500">
          Choose a template for your
          portfolio and preview it before
          publishing.
        </p>
      </div>

      {/* Templates Grid */}
      <div
        className="
          grid
          gap-6
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {portfolioTemplates.map(
          (template) => (
            <TemplateCard
              key={template.id}
              template={template}
            />
          )
        )}
      </div>
    </div>
  );
}