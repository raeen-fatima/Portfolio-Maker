// "use client";

// import Link from "next/link";
// import {
//   Eye,
//   CheckCircle2,
//   Palette,
//   Globe,
//   ArrowRight,
// } from "lucide-react";
// import { useEffect, useState } from "react";

// export default function DashboardPage() {
//   const [views, setViews] = useState(0);

//   const [dashboard, setDashboard] =
//     useState({
//       completion: 0,
//       template: "Nova",
//       isPublished: false,
//       slug: "",
//     });

//   useEffect(() => {
//     const loadDashboard =
//       async () => {
//         try {
//           const [
//             statsResponse,
//             dashboardResponse,
//           ] = await Promise.all([
//             fetch(
//               "/api/portfolio/stats"
//             ),
//             fetch(
//               "/api/portfolio/dashboard"
//             ),
//           ]);

//           const statsResult =
//             await statsResponse.json();

//           const dashboardResult =
//             await dashboardResponse.json();

//           if (
//             statsResponse.ok
//           ) {
//             setViews(
//               statsResult.views
//             );
//           }

//           if (
//             dashboardResponse.ok
//           ) {
//             setDashboard({
//               completion:
//                 dashboardResult
//                   .stats
//                   .completion,
//               template:
//                 dashboardResult
//                   .stats
//                   .template ||
//                 "Nova",
//               isPublished:
//                 dashboardResult
//                   .stats
//                   .isPublished ||
//                 false,
//               slug:
//                 dashboardResult
//                   .stats.slug ||
//                 "",
//             });
//           }
//         } catch (error) {
//           console.log(error);
//         }
//       };

//     loadDashboard();
//   }, []);

//   const cards = [
//     {
//       title:
//         "Portfolio Views",
//       value: views,
//       icon: Eye,
//       color:
//         "from-blue-500 to-cyan-500",
//     },
//     {
//       title: "Completion",
//       value: `${dashboard.completion}%`,
//       icon: CheckCircle2,
//       color:
//         "from-green-500 to-emerald-500",
//     },
//     {
//       title: "Template",
//       value:
//         dashboard.template,
//       icon: Palette,
//       color:
//         "from-purple-500 to-pink-500",
//     },
//     {
//       title: "Status",
//       value:
//         dashboard.isPublished
//           ? "Published"
//           : "Draft",
//       icon: Globe,
//       color:
//         "from-orange-500 to-red-500",
//     },
//   ];

//   return (
//     <div className="space-y-8 p-6 lg:p-10">
//       {/* Header */}
//       <div>
//         <h1 className="text-4xl font-bold">
//           Dashboard
//         </h1>

//         <p className="mt-2 text-zinc-500">
//           Overview of your
//           portfolio performance
//           and progress.
//         </p>
//       </div>

//       {/* Stats */}
//       <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
//         {cards.map((card) => {
//           const Icon =
//             card.icon;

//           return (
//             <div
//               key={card.title}
//               className="
//                 overflow-hidden
//                 rounded-3xl
//                 border
//                 bg-white
//                 shadow-sm
//               "
//             >
//               <div
//                 className={`h-2 bg-gradient-to-r ${card.color}`}
//               />

//               <div className="p-6">
//                 <div className="flex items-center justify-between">
//                   <p className="text-sm text-zinc-500">
//                     {card.title}
//                   </p>

//                   <Icon
//                     size={18}
//                   />
//                 </div>

//                 <h2 className="mt-4 text-3xl font-bold">
//                   {card.value}
//                 </h2>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* URL Card */}
//       <div className="rounded-3xl border bg-white p-8">
//         <h2 className="text-xl font-bold">
//           Portfolio URL
//         </h2>

//         <p className="mt-2 text-zinc-500">
//           Share your portfolio
//           with recruiters and
//           clients.
//         </p>

//         <div className="mt-5 rounded-2xl border bg-zinc-50 p-4">
//           {dashboard.slug
//             ? `${process.env.NEXT_PUBLIC_APP_URL}/u/${dashboard.slug}`
//             : "Slug not configured"}
//         </div>

//         <div className="mt-5 flex flex-wrap gap-3">
//           <Link
//             href="/dashboard/settings"
//             className="
//               rounded-xl
//               bg-black
//               px-5
//               py-3
//               text-white
//             "
//           >
//             Manage Settings
//           </Link>

//           {dashboard.slug && (
//             <a
//               href={`/u/${dashboard.slug}`}
//               target="_blank"
//               className="
//                 rounded-xl
//                 border
//                 px-5
//                 py-3
//               "
//             >
//               Visit Portfolio
//             </a>
//           )}
//         </div>
//       </div>

//       {/* Quick Actions */}
//       <div className="rounded-3xl border bg-white p-8">
//         <h2 className="text-xl font-bold">
//           Quick Actions
//         </h2>

//         <div className="mt-6 grid gap-4 md:grid-cols-2">
//           <Link
//             href="/dashboard/portfolio"
//             className="
//               flex
//               items-center
//               justify-between
//               rounded-2xl
//               border
//               p-5
//               hover:bg-zinc-50
//             "
//           >
//             <span>
//               Continue Building
//             </span>

//             <ArrowRight
//               size={18}
//             />
//           </Link>

//           <Link
//             href="/dashboard/templates"
//             className="
//               flex
//               items-center
//               justify-between
//               rounded-2xl
//               border
//               p-5
//               hover:bg-zinc-50
//             "
//           >
//             <span>
//               Change Template
//             </span>

//             <ArrowRight
//               size={18}
//             />
//           </Link>

//           <Link
//             href="/dashboard/preview"
//             className="
//               flex
//               items-center
//               justify-between
//               rounded-2xl
//               border
//               p-5
//               hover:bg-zinc-50
//             "
//           >
//             <span>
//               Preview Portfolio
//             </span>

//             <ArrowRight
//               size={18}
//             />
//           </Link>

//           <Link
//             href="/dashboard/publish"
//             className="
//               flex
//               items-center
//               justify-between
//               rounded-2xl
//               border
//               p-5
//               hover:bg-zinc-50
//             "
//           >
//             <span>
//               Publish Portfolio
//             </span>

//             <ArrowRight
//               size={18}
//             />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

import Link from "next/link";
import {
  Eye,
  FolderKanban,
  Code2,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Circle,
} from "lucide-react";

const sections = [
  {
    name: "Hero",
    completed: true,
  },
  {
    name: "About",
    completed: true,
  },
  {
    name: "Skills",
    completed: true,
  },
  {
    name: "Projects",
    completed: true,
  },
  {
    name: "Experience",
    completed: false,
  },
  {
    name: "Education",
    completed: false,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1
          className="
            text-3xl
            font-bold
            text-white
          "
        >
          Welcome back 👋
        </h1>

        <p
          className="
            mt-2
            text-zinc-500
          "
        >
          Manage your portfolio and
          track your growth.
        </p>
      </div>

      {/* Stats */}
      <div
        className="
          grid
          gap-5
          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        <StatCard
          icon={Eye}
          title="Portfolio Views"
          value="124"
        />

        <StatCard
          icon={FolderKanban}
          title="Projects"
          value="8"
        />

        <StatCard
          icon={Code2}
          title="Skills"
          value="15"
        />

        <StatCard
          icon={TrendingUp}
          title="Completion"
          value="65%"
        />
      </div>

      {/* Progress + Actions */}
      <div
        className="
          grid
          gap-6
          lg:grid-cols-2
        "
      >
        {/* Progress */}
        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-6
          "
        >
          <h2
            className="
              text-lg
              font-semibold
              text-white
            "
          >
            Portfolio Completion
          </h2>

          <p
            className="
              mt-2
              text-sm
              text-zinc-500
            "
          >
            Complete remaining sections
            before publishing.
          </p>

          <div
            className="
              mt-6
              h-3
              overflow-hidden
              rounded-full
              bg-white/10
            "
          >
            <div
              className="
                h-full
                w-[65%]
                rounded-full
                bg-white
              "
            />
          </div>

          <p
            className="
              mt-3
              text-sm
              text-zinc-500
            "
          >
            65% Completed
          </p>
        </div>

        {/* Quick Actions */}
        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-6
          "
        >
          <h2
            className="
              text-lg
              font-semibold
              text-white
            "
          >
            Quick Actions
          </h2>

          <div className="mt-5 space-y-3">
            <QuickLink
              href="/dashboard/portfolio"
              title="Continue Building"
            />

            <QuickLink
              href="/preview"
              title="Preview Portfolio"
            />

            <QuickLink
              href="/publish"
              title="Publish Portfolio"
            />
          </div>
        </div>
      </div>

      {/* Sections */}
      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          p-6
        "
      >
        <h2
          className="
            text-lg
            font-semibold
            text-white
          "
        >
          Portfolio Sections
        </h2>

        <div className="mt-6 space-y-4">
          {sections.map((section) => (
            <div
              key={section.name}
              className="
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-white/10
                px-4
                py-4
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                {section.completed ? (
                  <CheckCircle2
                    size={18}
                    className="
                      text-green-500
                    "
                  />
                ) : (
                  <Circle
                    size={18}
                    className="
                      text-zinc-600
                    "
                  />
                )}

                <span className="text-white">
                  {section.name}
                </span>
              </div>

              <Link
                href="/dashboard/portfolio"
                className="
                  text-sm
                  text-zinc-400
                  hover:text-white
                "
              >
                Edit
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon: Icon,
  title,
  value,
}) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-6
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        <p className="text-zinc-500">
          {title}
        </p>

        <Icon
          size={18}
          className="text-zinc-500"
        />
      </div>

      <h3
        className="
          mt-4
          text-3xl
          font-bold
          text-white
        "
      >
        {value}
      </h3>
    </div>
  );
}

function QuickLink({
  href,
  title,
}) {
  return (
    <Link
      href={href}
      className="
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-white/10
        px-4
        py-4
        text-white
        transition
        hover:bg-white/[0.04]
      "
    >
      {title}

      <ArrowRight size={16} />
    </Link>
  );
}