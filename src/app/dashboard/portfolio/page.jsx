// "use client";

// import Link from "next/link";
// import {
//   FolderKanban,
//   Code2,
//   Briefcase,
//   GraduationCap,
//   ArrowRight,
//   Eye,
//   Sparkles,
// } from "lucide-react";
// import { useState, useEffect } from "react";

// export default function PortfolioPage() {
//   const [views, setViews] = useState(0);

//   const [completion, setCompletion] =
//     useState(0);

//   const [stats, setStats] = useState({
//     projects: 0,
//     skills: 0,
//     experience: 0,
//     education: 0,
//   });

//   const fetchViews = async () => {
//     try {
//       const response = await fetch(
//         "/api/portfolio/stats"
//       );

//       const result =
//         await response.json();

//       if (response.ok) {
//         setViews(result.views);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const fetchDashboardData =
//     async () => {
//       try {
//         const response = await fetch(
//           "/api/portfolio/dashboard"
//         );

//         const result =
//           await response.json();

//         if (response.ok) {
//           setCompletion(
//             result.stats.completion
//           );

//           setStats({
//             projects:
//               result.stats.projects,
//             skills:
//               result.stats.skills,
//             experience:
//               result.stats.experience,
//             education:
//               result.stats.education,
//           });
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//   useEffect(() => {
//     const loadData = async () => {
//       await Promise.all([
//         fetchViews(),
//         fetchDashboardData(),
//       ]);
//     };

//     loadData();
//   }, []);

//   const statCards = [
//     {
//       title: "Projects",
//       value: stats.projects,
//       icon: FolderKanban,
//       color:
//         "bg-blue-50 text-blue-600",
//     },
//     {
//       title: "Skills",
//       value: stats.skills,
//       icon: Code2,
//       color:
//         "bg-green-50 text-green-600",
//     },
//     {
//       title: "Experience",
//       value: stats.experience,
//       icon: Briefcase,
//       color:
//         "bg-purple-50 text-purple-600",
//     },
//     {
//       title: "Education",
//       value: stats.education,
//       icon: GraduationCap,
//       color:
//         "bg-orange-50 text-orange-600",
//     },
//   ];

//   const actions = [
//     {
//       title: "Hero Section",
//       description:
//         "Introduce yourself",
//       href: "/dashboard/hero",
//     },
//     {
//       title: "About Section",
//       description:
//         "Tell your story",
//       href: "/dashboard/about",
//     },
//     {
//       title: "Projects",
//       description:
//         "Showcase your work",
//       href: "/dashboard/projects",
//     },
//     {
//       title: "Templates",
//       description:
//         "Customize design",
//       href: "/dashboard/templates",
//     },
//   ];

//   return (
//     <div className="space-y-8 p-6 lg:p-10">
//       {/* Hero Banner */}
//       <div
//         className="
//           relative
//           overflow-hidden
//           rounded-3xl
//           bg-gradient-to-r
//           from-black
//           via-zinc-900
//           to-zinc-800
//           p-8
//           text-white
//         "
//       >
//         <div className="relative z-10">
//           <div
//             className="
//               inline-flex
//               items-center
//               gap-2
//               rounded-full
//               bg-white/10
//               px-4
//               py-2
//               text-sm
//             "
//           >
//             <Sparkles size={16} />
//             Portfolio Builder
//           </div>

//           <h1 className="mt-5 text-4xl font-bold">
//             Build your professional
//             portfolio
//           </h1>

//           <p className="mt-3 max-w-2xl text-zinc-300">
//             Showcase your skills,
//             projects and experience.
//             Complete your portfolio and
//             publish it to the world.
//           </p>

//           <div className="mt-6 flex flex-wrap gap-3">
//             <Link
//               href="/dashboard/preview"
//               className="
//                 rounded-xl
//                 bg-white
//                 px-5
//                 py-3
//                 font-medium
//                 text-black
//                 transition
//                 hover:bg-zinc-100
//               "
//             >
//               Preview Portfolio
//             </Link>

//             <Link
//               href="/dashboard/publish"
//               className="
//                 rounded-xl
//                 border
//                 border-white/20
//                 px-5
//                 py-3
//                 transition
//                 hover:bg-white/10
//               "
//             >
//               Publish Portfolio
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Stats */}
//       <div
//         className="
//           grid
//           grid-cols-1
//           gap-5
//           sm:grid-cols-2
//           xl:grid-cols-4
//         "
//       >
//         {statCards.map((item) => {
//           const Icon = item.icon;

//           return (
//             <div
//               key={item.title}
//               className="
//                 rounded-3xl
//                 border
//                 bg-white
//                 p-6
//                 transition-all
//                 hover:-translate-y-1
//                 hover:shadow-lg
//               "
//             >
//               <div className="flex items-center justify-between">
//                 <div
//                   className={`${item.color} rounded-xl p-3`}
//                 >
//                   <Icon size={20} />
//                 </div>

//                 <span className="text-sm text-zinc-500">
//                   {item.title}
//                 </span>
//               </div>

//               <h2 className="mt-5 text-4xl font-bold">
//                 {item.value}
//               </h2>
//             </div>
//           );
//         })}
//       </div>

//       {/* Completion + Views */}
//       <div className="grid gap-5 lg:grid-cols-2">
//         <div className="rounded-3xl border bg-white p-8">
//           <div className="flex items-start justify-between">
//             <div>
//               <h2 className="text-xl font-bold">
//                 Portfolio Completion
//               </h2>

//               <p className="mt-2 text-zinc-500">
//                 Complete all sections to
//                 improve your profile.
//               </p>
//             </div>

//             <div className="text-4xl font-bold">
//               {completion}%
//             </div>
//           </div>

//           <div
//             className="
//               mt-6
//               h-3
//               overflow-hidden
//               rounded-full
//               bg-zinc-200
//             "
//           >
//             <div
//               className="
//                 h-full
//                 rounded-full
//                 bg-black
//                 transition-all
//               "
//               style={{
//                 width: `${completion}%`,
//               }}
//             />
//           </div>
//         </div>

//         <div
//           className="
//             rounded-3xl
//             bg-gradient-to-r
//             from-indigo-500
//             to-purple-600
//             p-8
//             text-white
//           "
//         >
//           <div className="flex items-center gap-2">
//             <Eye size={18} />

//             <span className="text-white/80">
//               Portfolio Views
//             </span>
//           </div>

//           <h2 className="mt-4 text-5xl font-bold">
//             {views}
//           </h2>

//           <p className="mt-2 text-white/80">
//             Total public visits
//           </p>
//         </div>
//       </div>

//       {/* Quick Actions */}
//       <div className="rounded-3xl border bg-white p-8">
//         <h2 className="text-xl font-bold">
//           Quick Actions
//         </h2>

//         <p className="mt-2 text-zinc-500">
//           Continue building your
//           portfolio.
//         </p>

//         <div className="mt-6 grid gap-4 md:grid-cols-2">
//           {actions.map((item) => (
//             <Link
//               key={item.title}
//               href={item.href}
//               className="
//                 flex
//                 items-center
//                 justify-between
//                 rounded-2xl
//                 border
//                 p-5
//                 transition-all
//                 hover:bg-zinc-50
//                 hover:shadow-sm
//               "
//             >
//               <div>
//                 <h3 className="font-semibold">
//                   {item.title}
//                 </h3>

//                 <p className="mt-1 text-sm text-zinc-500">
//                   {item.description}
//                 </p>
//               </div>

//               <ArrowRight size={18} />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Circle,
  Eye,
  Rocket,
} from "lucide-react";

const sections = [
  {
    title: "Hero",
    description:
      "Your portfolio introduction and call to action.",
    href: "/dashboard/portfolio/hero",
    completed: true,
  },

  {
    title: "About",
    description:
      "Tell your story and introduce yourself.",
    href: "/dashboard/portfolio/about",
    completed: true,
  },

  {
    title: "Skills",
    description:
      "Showcase your technical expertise.",
    href: "/dashboard/portfolio/skills",
    completed: true,
  },

  {
    title: "Projects",
    description:
      "Highlight your best work and achievements.",
    href: "/dashboard/portfolio/projects",
    completed: true,
  },

  {
    title: "Experience",
    description:
      "Add internships and work experience.",
    href: "/dashboard/portfolio/experience",
    completed: false,
  },

  {
    title: "Education",
    description:
      "Add your educational background.",
    href: "/dashboard/portfolio/education",
    completed: false,
  },
];

export default function PortfolioBuilderPage() {
  const completedSections =
    sections.filter(
      (section) => section.completed
    ).length;

  const completion =
    Math.round(
      (completedSections /
        sections.length) *
        100
    );

  return (
    <div className="space-y-8 ">
      {/* Hero */}
      <div>
        <p
          className="
            text-sm
            uppercase
            tracking-[0.2em]
            text-zinc-500
          "
        >
          Portfolio Builder
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
          Build your portfolio.
        </h1>

        <p
          className="
            mt-3
            max-w-2xl
            text-zinc-500
          "
        >
          Manage every section of your
          portfolio and prepare it for
          publishing.
        </p>
      </div>

      {/* Progress */}
      <div
        className="
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
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
            <h2
              className="
                text-xl
                font-semibold
                text-white
              "
            >
              Portfolio Completion
            </h2>

            <p
              className="
                mt-2
                text-zinc-500
              "
            >
              {completedSections} of{" "}
              {sections.length}
              {" "}
              sections completed
            </p>
          </div>

          <div
            className="
              text-5xl
              font-bold
              text-white
            "
          >
            {completion}%
          </div>
        </div>

        <div
          className="
            mt-8
            h-3
            overflow-hidden
            rounded-full
            bg-white/10
          "
        >
          <div
            className="
              h-full
              rounded-full
              bg-white
            "
            style={{
              width: `${completion}%`,
            }}
          />
        </div>
      </div>

      {/* Sections */}
      <div
        className="
          grid
          gap-5
          md:grid-cols-2
        "
      >
        {sections.map((section) => (
          <Link
            key={section.title}
            href={section.href}
            className="
              group
              rounded-[28px]
              border
              border-white/10
              bg-white/[0.03]
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-white/20
              hover:bg-white/[0.05]
            "
          >
            <div
              className="
                flex
                items-start
                justify-between
              "
            >
              <div>
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
                        text-green-400
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

                  <h3
                    className="
                      text-xl
                      font-semibold
                      text-white
                    "
                  >
                    {section.title}
                  </h3>
                </div>

                <p
                  className="
                    mt-4
                    max-w-sm
                    text-sm
                    leading-relaxed
                    text-zinc-500
                  "
                >
                  {section.description}
                </p>
              </div>

              <ArrowRight
                size={18}
                className="
                  text-zinc-600
                  transition
                  group-hover:translate-x-1
                  group-hover:text-white
                "
              />
            </div>
          </Link>
        ))}
      </div>

      {/* Actions */}
      <div
        className="
          rounded-[32px]
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
          Ready to go live?
        </h2>

        <p
          className="
            mt-2
            text-zinc-500
          "
        >
          Preview your portfolio before
          publishing it publicly.
        </p>

        <div
          className="
            mt-6
            flex
            flex-wrap
            gap-4
          "
        >
          <Link
            href="/preview"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-white/10
              px-5
              py-3
              text-white
              transition
              hover:bg-white/[0.04]
            "
          >
            <Eye size={18} />
            Preview Portfolio
          </Link>

          <Link
            href="/publish"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-white
              px-5
              py-3
              font-medium
              text-black
            "
          >
            <Rocket size={18} />
            Publish Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}