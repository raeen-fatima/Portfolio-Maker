import Link from "next/link";
import {
  FolderKanban,
  Code2,
  Briefcase,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

export default function DashboardPage() {
  const completion = 15;

  const stats = [
    {
      title: "Projects",
      value: 0,
      icon: FolderKanban,
    },
    {
      title: "Skills",
      value: 0,
      icon: Code2,
    },
    {
      title: "Experience",
      value: 0,
      icon: Briefcase,
    },
    {
      title: "Education",
      value: 0,
      icon: GraduationCap,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border">
        <h1 className="text-3xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Continue building your portfolio and
          showcase your work to the world.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="bg-white p-6 rounded-2xl border shadow-sm"
            >
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-sm">
                  {item.title}
                </p>

                <Icon size={18} />
              </div>

              <h2 className="text-3xl font-bold mt-4">
                {item.value}
              </h2>
            </div>
          );
        })}
      </div>

      {/* Progress */}
      <div className="bg-white rounded-2xl p-6 border shadow-sm">
        <div className="flex justify-between mb-4">
          <h2 className="font-semibold">
            Portfolio Completion
          </h2>

          <span className="font-medium">
            {completion}%
          </span>
        </div>

        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-black rounded-full"
            style={{
              width: `${completion}%`,
            }}
          />
        </div>

        <p className="text-sm text-gray-500 mt-3">
          Complete your Hero, About and Projects
          sections to improve your portfolio.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 border shadow-sm">
        <h2 className="font-semibold mb-5">
          Quick Actions
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <Link
            href="/dashboard/hero"
            className="flex items-center justify-between p-4 border rounded-xl hover:bg-gray-50 transition"
          >
            <span>Complete Hero Section</span>
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/dashboard/about"
            className="flex items-center justify-between p-4 border rounded-xl hover:bg-gray-50 transition"
          >
            <span>Add About Information</span>
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/dashboard/projects"
            className="flex items-center justify-between p-4 border rounded-xl hover:bg-gray-50 transition"
          >
            <span>Add First Project</span>
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/dashboard/templates"
            className="flex items-center justify-between p-4 border rounded-xl hover:bg-gray-50 transition"
          >
            <span>Choose Template</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}