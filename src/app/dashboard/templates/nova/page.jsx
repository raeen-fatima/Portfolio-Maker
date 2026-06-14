import Nova from "@/components/templates/nova";
import { cookies } from "next/headers";
import { connectDB } from "@/lib/db";
import { verifyToken } from "@/lib/jwt";
import Portfolio from "@/models/Portfolio";

export default async function NovaPreviewPage() {
  await connectDB();

  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  if (!token) {
    return <div>Unauthorized</div>;
  }

  const decoded = verifyToken(token);

  const portfolio = await Portfolio.findOne({
    userId: decoded.id,
  }).lean();

  return (
    <Nova
      heroData={portfolio?.hero || {}}
      socialLinks={portfolio?.contact || {}}
      aboutData={portfolio?.about || {}}
      skills={portfolio?.skills || []}
      projects={portfolio?.projects || []}
      experience={portfolio?.experience || []}
      education={portfolio?.education || []}
      certifications={portfolio?.certifications || []}
      contact={portfolio?.contact || {}}
    />
  );
}