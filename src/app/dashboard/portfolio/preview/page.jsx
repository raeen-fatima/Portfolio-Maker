import { cookies } from "next/headers";
import { connectDB } from "@/lib/db";
import { verifyToken } from "@/lib/jwt";
import Portfolio from "@/models/Portfolio";
import Link from "next/link";
import { Eye, Rocket, LayoutTemplate } from "lucide-react";
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
    <div className="min-h-screen bg-black">
      {/* Preview Header */}
      <div
        className="
        sticky
        top-0
        z-50
        border-b
        border-white/10
        bg-black/80
        backdrop-blur-xl
      "
      >
        <div
          className="
          mx-auto
          flex
          h-16
          max-w-7xl
          items-center
          justify-between
          px-4
          lg:px-8
        "
        >
          {/* Left */}
          <div className="flex items-center gap-3">
            <div
              className="
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-3
              py-1.5
              text-xs
              text-zinc-400
            "
            >
              Preview Mode
            </div>

            <span className="text-sm text-zinc-500">
              {portfolio.selectedTemplate}
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard/templates"
              className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-white/10
              px-4
              py-2
              text-sm
              text-white
              transition
              hover:bg-white/[0.04]
            "
            >
              <LayoutTemplate size={16} />
              Templates
            </Link>

            <Link
              href="/dashboard/portfolio/publish"
              className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-white
              px-4
              py-2
              text-sm
              font-medium
              text-black
              transition
              hover:opacity-90
            "
            >
              <Rocket size={16} />
              Publish
            </Link>
          </div>
        </div>
      </div>

      {/* Portfolio Preview */}
      <div className="w-full overflow-x-hidden">
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
    </div>
  );
}
