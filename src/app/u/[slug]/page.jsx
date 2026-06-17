import { connectDB } from "@/lib/db";
import Portfolio from "@/models/Portfolio";
import { notFound } from "next/navigation";
import { templateMap } from "@/lib/templates";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  await connectDB();

  const portfolio = await Portfolio.findOne({
    slug,
    isPublished: true,
  }).lean();

  if (!portfolio) {
    return {
      title: "Portfolio Not Found",
    };
  }

  const title = portfolio.hero?.name || "Portfolio";

  const description =
    portfolio.hero?.tagline ||
    portfolio.about?.bio ||
    "Personal portfolio website";

  return {
    title: `${title} | Portfolio`,
    description,

    openGraph: {
      title: `${title} | Portfolio`,
      description,
      type: "website",
      url: `${process.env.NEXT_PUBLIC_APP_URL}/u/${slug}`,
    },
    keywords: [
      portfolio.hero?.name,
      "Portfolio",
      "Developer",
      "Web Developer",
      "Software Engineer",
    ],
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_URL}/u/${slug}`,
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | Portfolio`,
      description,
    },
  };
}

export default async function PortfolioPage({ params }) {
  await connectDB();
  const { slug } = await params;
  console.log("Slug:", slug);

  const portfolio = await Portfolio.findOne({
    slug,
    isPublished: true,
  }).lean();
  await Portfolio.updateOne(
    { _id: portfolio._id },
    {
      $inc: {
        views: 1,
      },
    },
  );

  if (!portfolio) {
    notFound();
  }

  const safePortfolio = JSON.parse(JSON.stringify(portfolio));

  const Template =
    templateMap[safePortfolio.selectedTemplate] || templateMap.nova;

  return (
    <Template
      heroData={safePortfolio.hero || {}}
      aboutData={safePortfolio.about || {}}
      skills={safePortfolio.skills || []}
      projects={safePortfolio.projects || []}
      experience={safePortfolio.experience || []}
      education={safePortfolio.education || []}
      certifications={safePortfolio.certifications || []}
      contact={safePortfolio.contact || {}}
    />
  );
}
