import { connectDB } from "@/lib/db";
import Portfolio from "@/models/Portfolio";
import { notFound } from "next/navigation";
import { templateMap } from "@/lib/templates";

export default async function PortfolioPage({
  params,
}) {

  await connectDB();
  const { slug } = await params;
     console.log("Slug:", slug);


  const portfolio =
    await Portfolio.findOne({
      slug,
      isPublished: true,
    }).lean();

  if (!portfolio) {
    notFound();
  }

  const safePortfolio = JSON.parse(
    JSON.stringify(portfolio)
  );

  const Template =
    templateMap[
      safePortfolio.selectedTemplate
    ] || templateMap.nova;

  return (
    <Template
      heroData={safePortfolio.hero || {}}
      aboutData={safePortfolio.about || {}}
      skills={safePortfolio.skills || []}
      projects={safePortfolio.projects || []}
      experience={
        safePortfolio.experience || []
      }
      education={
        safePortfolio.education || []
      }
      certifications={
        safePortfolio.certifications || []
      }
      contact={
        safePortfolio.contact || {}
      }
    />
  );
}