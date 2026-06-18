import Image from "next/image";
import { connectDB } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";
import Portfolio from "@/models/Portfolio";
import BuilderHeader from "@/components/builder/BuilderHeader";
import Link from "next/link";
import { ArrowLeft, Rocket } from "lucide-react";
import { portfolioTemplates } from "@/lib/templates";
import TemplateCard from "@/components/templates/TemplateCard";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";
export default async function TemplatesPage() {
  await connectDB();

  const user = await getCurrentUser();
  // console.log("USER:", user);

  if (!user) {
    redirect("/login");
  }

  const portfolio = await Portfolio.findOne({
    userId: user.id,
  });

  const currentTemplate = portfolioTemplates.find(
    (template) => template.id === portfolio?.selectedTemplate,
  );

  return(
    <div className="mx-auto max-w-7xl space-y-10">
      {/* Header */}
      <div>
        <BuilderHeader
          title="Choose Template"
          description="Select a template that matches your personality and professional brand."
          step={8}
          totalSteps={8}
        />

        {/* Progress */}
        <div className="mt-8">
          <div className="flex items-center justify-between text-sm">
            <span className="text-zinc-500">Portfolio Completion</span>

            <span className="font-medium text-white">100%</span>
          </div>

          <div className="mt-3 h-2 rounded-full bg-white/5">
            <div className="h-full w-full rounded-full bg-white" />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 flex flex-wrap gap-3">
          <div
            className="
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-4
            py-2
            text-sm
            text-zinc-400
          "
          >
            {portfolioTemplates.length} Templates
          </div>

          <div
            className="
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-4
            py-2
            text-sm
            text-zinc-400
          "
          >
            Responsive Design
          </div>

          <div
            className="
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-4
            py-2
            text-sm
            text-zinc-400
          "
          >
            Modern Portfolio
          </div>
        </div>
      </div>

      {/* Templates */}
      <section>
        <div className="mb-8">
          <h2
            className="
            text-2xl
            font-semibold
            text-white
          "
          >
            Available Templates
          </h2>

          <p className="mt-2 text-zinc-500">
            Pick a template and customize your portfolio experience.
          </p>
        </div>

        <div
          className="
          grid
          gap-8
          lg:grid-cols-2
        "
        >
          {portfolioTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              active={template.id === portfolio?.selectedTemplate}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-gradient-to-r
        from-white/[0.04]
        to-white/[0.02]
        p-8
      "
      >
        <div
          className="
          flex
          flex-col
          gap-6
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
        >
          <div>
            <h3
              className="
              text-2xl
              font-semibold
              text-white
            "
            >
              Everything looks good.
            </h3>

            <p
              className="
              mt-3
              max-w-xl
              text-zinc-500
            "
            >
              Your portfolio is ready for review. Continue to preview and make
              final adjustments before publishing.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              href="/dashboard/portfolio/certifications"
              className="
              inline-flex
              items-center
              gap-2
              rounded-2xl
              border
              border-white/10
              px-5
              py-3
              font-medium
              text-white
              transition
              hover:bg-white/[0.04]
            "
            >
              <ArrowLeft size={18} />
              Back
            </Link>

            <Link
              href="/dashboard/portfolio/preview"
              className="
              inline-flex
              items-center
              gap-2
              rounded-2xl
              bg-white
              px-5
              py-3
              font-medium
              text-black
              transition
              hover:opacity-90
            "
            >
              Continue to Preview
              <Rocket size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>,
  );
}
