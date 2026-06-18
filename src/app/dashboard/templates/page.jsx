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
    user: user.id,
  });

  const currentTemplate = portfolioTemplates.find(
    (template) => template.id === portfolio?.selectedTemplate,
  );

  return (
    <div className="mx-auto max-w-7xl space-y-10">
      {/* Header */}
      <div>
        <BuilderHeader
          title="Choose Template"
          description="Select a template that matches your
        personality and professional brand.
        You can change it anytime."
          step={8}
          totalSteps={8}
        />

        <div
          className="
          mt-6
          inline-flex
          items-center
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
          {portfolioTemplates.length} Templates Available
        </div>
      </div>

      {/* Active Template */}
      {currentTemplate && (
        <section
          className="
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
        "
        >
          <div
            className="
            flex
            flex-col
            lg:flex-row
          "
          >
            {/* Preview */}
            <div
              className="
              relative
              h-72
              lg:h-auto
              lg:w-[450px]
            "
            >
              <Image
                src={currentTemplate.image}
                alt={currentTemplate.name}
                fill
                className="object-cover"
              />

              <div
                className="
                absolute
                left-4
                top-4
                rounded-full
                border
                border-white/10
                bg-black/70
                px-3
                py-1
                text-xs
                font-medium
                text-white
                backdrop-blur-xl
              "
              >
                Active Template
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-center p-8 lg:p-10">
              <p className="text-sm text-zinc-500">Current Template</p>

              <h2
                className="
                mt-3
                text-3xl
                font-bold
                tracking-tight
                text-white
              "
              >
                {currentTemplate.name}
              </h2>

              <p
                className="
                mt-4
                max-w-xl
                text-zinc-500
              "
              >
                {currentTemplate.description}
              </p>

              {/* Features */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-sm text-zinc-400">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  Responsive Design
                </div>

                <div className="flex items-center gap-3 text-sm text-zinc-400">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  SEO Friendly
                </div>

                <div className="flex items-center gap-3 text-sm text-zinc-400">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  Portfolio Ready
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Templates Grid */}
      <section>
        <div className="mb-6">
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
            Preview and switch between templates instantly.
          </p>
        </div>

        <div
          className="
          grid
          gap-8
          md:grid-cols-2
          2xl:grid-cols-3
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

      {/* Bottom CTA */}
      <section
        className="
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
      gap-4
      md:flex-row
      md:items-center
      md:justify-between
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
              Ready to launch?
            </h3>

            <p
              className="
          mt-2
          max-w-xl
          text-zinc-500
        "
            >
              Your portfolio is configured and ready for publishing.
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
              Preview
              <Rocket size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
