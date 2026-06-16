import { cookies } from "next/headers";
import { connectDB } from "@/lib/db";
import { verifyToken } from "@/lib/jwt";
import Portfolio from "@/models/Portfolio";

import { templateMap } from "@/lib/templates";

export default async function PreviewPage() {
  await connectDB();

  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  if (!token) {
    return <div className="p-10">Unauthorized</div>;
  }

  const decoded = verifyToken(token);

  const portfolio = await Portfolio.findOne({
    userId: decoded.id,
  }).lean();
  
  const safePortfolio = JSON.parse(JSON.stringify(portfolio));

  if (!portfolio) {
    return <div className="p-10">Portfolio not found</div>;
  }

  const Template = templateMap[portfolio.selectedTemplate] || templateMap.nova;

  return (
    <div className="w-full  max-w-full bg-white overflow-x-hidden">
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
    </div>
  );
}
