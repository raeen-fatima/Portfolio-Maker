// import {
//   ExternalLink,
  
//   FolderOpen,
// } from "lucide-react";

//     import { FaGithub } from "react-icons/fa";

// export default function Projects({
//   projects,
// }) {
//   if (!projects?.length) return null;

//   return (
//     <section
//       id="projects"
//       className="
//         bg-black
//         px-6
//         py-24
//         text-zinc-100
//       "
//     >
//       <div className="mx-auto max-w-6xl">
//         <div
//           className="
//             overflow-hidden
//             rounded-3xl
//             border
//             border-zinc-800
//             bg-zinc-950
//           "
//         >
//           {/* Terminal Header */}
//           <div
//             className="
//               flex
//               items-center
//               gap-2
//               border-b
//               border-zinc-800
//               px-5
//               py-4
//             "
//           >
//             <div className="h-3 w-3 rounded-full bg-red-500" />
//             <div className="h-3 w-3 rounded-full bg-yellow-500" />
//             <div className="h-3 w-3 rounded-full bg-green-500" />

//             <span
//               className="
//                 ml-4
//                 text-sm
//                 text-zinc-500
//               "
//             >
//               projects/
//             </span>
//           </div>

//           <div
//             className="
//               p-8
//               font-mono
//               md:p-12
//             "
//           >
//             <p className="text-green-500">
//               $ ls projects/
//             </p>

//             <div className="mt-10 space-y-8">
//               {projects.map((project) => (
//                 <div
//                   key={project._id}
//                   className="
//                     rounded-2xl
//                     border
//                     border-zinc-800
//                     bg-black/40
//                     p-6
//                     transition-all
//                     duration-300
//                     hover:border-green-500
//                   "
//                 >
//                   {/* Folder Name */}
//                   <div className="flex items-center gap-3">
//                     <FolderOpen
//                       size={20}
//                       className="
//                         text-green-500
//                       "
//                     />

//                     <h3
//                       className="
//                         text-lg
//                         text-green-400
//                       "
//                     >
//                       {project.title
//                         .toLowerCase()
//                         .replaceAll(
//                           " ",
//                           "-"
//                         )}
//                       /
//                     </h3>
//                   </div>

//                   {/* Description */}
//                   <p
//                     className="
//                       mt-4
//                       leading-7
//                       text-zinc-400
//                     "
//                   >
//                     {project.description}
//                   </p>

//                   {/* Tech */}
//                   {project.technologies
//                     ?.length > 0 && (
//                     <div
//                       className="
//                         mt-5
//                         flex
//                         flex-wrap
//                         gap-2
//                       "
//                     >
//                       {project.technologies.map(
//                         (tech) => (
//                           <span
//                             key={tech}
//                             className="
//                               rounded-md
//                               border
//                               border-zinc-700
//                               px-3
//                               py-1
//                               text-xs
//                               text-green-400
//                             "
//                           >
//                             {tech}
//                           </span>
//                         )
//                       )}
//                     </div>
//                   )}

//                   {/* Links */}
//                   <div
//                     className="
//                       mt-6
//                       flex
//                       gap-6
//                     "
//                   >
//                     {project.githubUrl && (
//                       <a
//                         href={
//                           project.githubUrl
//                         }
//                         target="_blank"
//                         rel="noreferrer"
//                         className="
//                           flex
//                           items-center
//                           gap-2
//                           text-zinc-400
//                           hover:text-green-400
//                         "
//                       >
//                         <FaGithub size={18} />
//                         source
//                       </a>
//                     )}

//                     {project.liveUrl && (
//                       <a
//                         href={project.liveUrl}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="
//                           flex
//                           items-center
//                           gap-2
//                           text-zinc-400
//                           hover:text-green-400
//                         "
//                       >
//                         <ExternalLink
//                           size={18}
//                         />
//                         live
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Cursor */}
//             <div
//               className="
//                 mt-10
//                 flex
//                 items-center
//                 gap-2
//                 text-green-500
//               "
//             >
//               <span>$</span>

//               <span
//                 className="
//                   h-5
//                   w-3
//                   animate-pulse
//                   bg-green-500
//                 "
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useRef } from "react";
import { ExternalLink, FolderOpen } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap/gsap";

export default function Projects({ projects }) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (!projects?.length) return;

      if (typeof window !== "undefined") {
        ScrollTrigger.refresh();
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        ".proj-terminal-box",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          clearProps: "all",
        }
      ).fromTo(
        ".proj-terminal-item",
        { opacity: 0, x: -15 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "all",
        },
        "-=0.3"
      );
    },
    { scope: containerRef, dependencies: [projects] }
  );

  if (!projects?.length) return null;

  return (
    <section
      ref={containerRef}
      id="projects"
      className="bg-black px-6 py-24 text-zinc-100"
    >
      <div className="mx-auto max-w-6xl">
        <div className="proj-terminal-box overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 border-b border-zinc-800 px-5 py-4">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />

            <span className="ml-4 text-sm font-mono text-zinc-500">
              projects/
            </span>
          </div>

          <div className="p-8 font-mono md:p-12">
            <p className="text-green-500">$ ls projects/</p>

            <div className="mt-10 space-y-8">
              {projects.map((project, index) => (
                <div
                  key={project._id || index}
                  className="
                    proj-terminal-item
                    rounded-2xl
                    border
                    border-zinc-800
                    bg-black/40
                    p-6
                    transition-all
                    duration-300
                    hover:border-green-500
                    hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]
                  "
                >
                  {/* Folder Name */}
                  <div className="flex items-center gap-3">
                    <FolderOpen size={20} className="text-green-500 shrink-0" />

                    <h3 className="text-lg font-semibold text-green-400 break-all">
                      {project.title?.toLowerCase().replaceAll(" ", "-")} /
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-4 leading-7 text-zinc-400 font-sans">
                    {project.description}
                  </p>

                  {/* Tech */}
                  {project.technologies?.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="
                            rounded-md
                            border
                            border-zinc-700
                            px-3
                            py-1
                            text-xs
                            text-green-400
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Links */}
                  <div className="mt-6 flex gap-6">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          flex
                          items-center
                          gap-2
                          text-zinc-400
                          transition
                          hover:text-green-400
                        "
                      >
                        <FaGithub size={18} />
                        source
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          flex
                          items-center
                          gap-2
                          text-zinc-400
                          transition
                          hover:text-green-400
                        "
                      >
                        <ExternalLink size={18} />
                        live
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Cursor */}
            <div className="mt-10 flex items-center gap-2 text-green-500">
              <span>$</span>
              <span className="h-5 w-3 animate-pulse bg-green-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}