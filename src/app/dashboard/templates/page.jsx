// import { portfolioTemplates } from "@/lib/templates";
// import TemplateCard from "@/components/templates/TemplateCard";

// export default function TemplatesPage() {
//   return (
//     <div className="space-y-8 p-6 lg:p-12">
//       {/* Header */}
//       <div>
//         <h1 className="text-3xl font-bold">
//           Templates
//         </h1>

//         <p className="mt-2 text-gray-500">
//           Choose a template for your
//           portfolio and preview it before
//           publishing.
//         </p>
//       </div>

//       {/* Templates Grid */}
//       <div
//         className="
//           grid
//           gap-6
//           md:grid-cols-2
//           xl:grid-cols-3
//         "
//       >
//         {portfolioTemplates.map(
//           (template) => (
//             <TemplateCard
//               key={template.id}
//               template={template}
//             />
//           )
//         )}
//       </div>
//     </div>
//   );
// }

import Image from "next/image";

import { connectDB } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";

import Portfolio from "@/models/Portfolio";

import { portfolioTemplates } from "@/lib/templates";

import TemplateCard from "@/components/templates/TemplateCard";

export default async function TemplatesPage({}) {
  await connectDB();

  const user = await getCurrentUser();

  const portfolio =
    await Portfolio.findOne({
      user: user.id,
    });

  const currentTemplate =
    portfolioTemplates.find(
      (template) =>
        template.id ===
        portfolio?.selectedTemplate
    );

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <p
          className="
            text-sm
            uppercase
            tracking-[0.2em]
            text-zinc-500
          "
        >
          Templates
        </p>

        <h1
          className="
            mt-3
            text-4xl
            font-bold
            tracking-tight
            text-white
          "
        >
          Choose your style.
        </h1>

        <p
          className="
            mt-3
            max-w-2xl
            text-zinc-500
          "
        >
          Pick a template that reflects
          your personality and make it
          uniquely yours.
        </p>
      </div>

      {/* Current Template */}
      {currentTemplate && (
        <div
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
                h-60
                lg:h-auto
                lg:w-[420px]
              "
            >
              <Image
                src={
                  currentTemplate.image
                }
                alt={
                  currentTemplate.name
                }
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
                  text-white
                  backdrop-blur-xl
                "
              >
                Active Template
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-8">
              <p className="text-zinc-500">
                Current Template
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-bold
                  text-white
                "
              >
                {
                  currentTemplate.name
                }
              </h2>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-zinc-500
                "
              >
                {
                  currentTemplate.description
                }
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Templates */}
      <div
        className="
          grid
          gap-8
          xl:grid-cols-2
        "
      >
        {portfolioTemplates.map(
          (template) => (
            <TemplateCard
              key={template.id}
              template={template}
              active={
                template.id ===
                portfolio?.selectedTemplate
              }
            />
          )
        )}
      </div>

      {/* Bottom CTA */}
      <div
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
        <h3
          className="
            text-2xl
            font-semibold
            text-white
          "
        >
          More templates are coming.
        </h3>

        <p
          className="
            mt-3
            max-w-2xl
            text-zinc-500
          "
        >
          We are working on premium
          templates for developers,
          designers, creators and
          freelancers.
        </p>
      </div>
    </div>
  );
}