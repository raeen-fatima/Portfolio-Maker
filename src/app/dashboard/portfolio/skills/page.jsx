

// "use client";

// import { useEffect, useState } from "react";
// import useSkills from "@/hooks/portfolio/useSkills";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";

// import SkillForm from "@/components/portfolio/skills/SkillForm";
// import SkillCard from "@/components/portfolio/skills/SkillCard";
// import BuilderHeader from "@/components/portfolio/builder/BuilderHeader";

// export default function SkillsPage() {
//   const [skills, setSkills] = useState([]);

//   const router = useRouter();
//   const {
//   loading,
//   fetchSkills,
//   deleteSkill,
// } = useSkills();

 
//   useEffect(() => {
//   async function loadSkills() {
//     const data = await fetchSkills();
//     setSkills(data);
//   }

//   loadSkills();
// }, [fetchSkills]);

//   const handleDelete = async (skillId) => {
//   const result = await deleteSkill(skillId);

//   if (!result.success) {
//     toast.error(result.data.message);
//     return;
//   }

//   toast.success(result.data.message);

//   const updatedSkills = await fetchSkills();
//   setSkills(updatedSkills);
// };




//   return (
//     <div className="space-y-8 p-6 lg:p-10">
//       {/* Header */}
//       <BuilderHeader
//         title="Skills"
//         description="Add the technologies, frameworks and tools you use."
//         step={3}
//         totalSteps={8}
//       />

//       {/* Add Skill */}
//       <div
//         className="
//           rounded-[28px]
//           border
//           border-white/10
//           bg-white/[0.03]
//           p-6
//           lg:p-8
//         "
//       >
//         <div>
//           <h2
//             className="
//               text-xl
//               font-semibold
//               text-white
//             "
//           >
//             Add Skills
//           </h2>

//           <p
//             className="
//               mt-2
//               text-zinc-500
//             "
//           >
//             Add technologies that
//             showcase your expertise.
//           </p>
//         </div>

//         <div className="mt-6">
//           <SkillForm
//             fetchSkills={
//               fetchSkills
//             }
//           />
//         </div>
//       </div>

//       {/* Skills */}
//       <div
//         className="
//           rounded-[28px]
//           border
//           border-white/10
//           bg-white/[0.03]
//           p-6
//           lg:p-8
//         "
//       >
//         <div
//           className="
//             flex
//             flex-col
//             gap-4
//             sm:flex-row
//             sm:items-center
//             sm:justify-between
//           "
//         >
//           <div>
//             <h2
//               className="
//                 text-xl
//                 font-semibold
//                 text-white
//               "
//             >
//               Your Skills
//             </h2>

//             <p
//               className="
//                 mt-2
//                 text-zinc-500
//               "
//             >
//               Technologies currently
//               displayed on your
//               portfolio.
//             </p>
//           </div>

//           <div
//             className="
//               inline-flex
//               items-center
//               rounded-full
//               border
//               border-white/10
//               bg-white/[0.03]
//               px-4
//               py-2
//               text-sm
//               text-zinc-400
//             "
//           >
//             {skills.length} Skills
//           </div>
//         </div>

//         {skills.length === 0 ? (
//           <div
//             className="
//               mt-8
//               rounded-3xl
//               border
//               border-dashed
//               border-white/10
//               bg-white/[0.02]
//               p-12
//               text-center
//             "
//           >
//             <h3
//               className="
//                 text-lg
//                 font-semibold
//                 text-white
//               "
//             >
//               No skills added yet
//             </h3>

//             <p
//               className="
//                 mt-3
//                 text-zinc-500
//               "
//             >
//               Add your first skill to
//               start building your
//               portfolio.
//             </p>
//           </div>
//         ) : (
//           <div
//             className="
//               mt-8
//               grid
//               gap-3
//               sm:grid-cols-2
//               xl:grid-cols-3
//             "
//           >
//             {skills.map(
//               (skill) => (
//                 <SkillCard
//                   key={skill._id}
//                   skill={skill}
//                   onDelete={
//                     handleDelete
//                   }
//                 />
//               )
//             )}
//           </div>
//         )}
//       </div>

//       {/* Footer */}
//       <div
//         className="
//           flex
//           flex-col
//           gap-3
//           sm:flex-row
//         "
//       >
//         <button
//         onClick={() =>
//             router.push(
//               "/dashboard/portfolio/about"
//             )
//           }
//           className="
//             flex-1
//             rounded-2xl
//             border
//             border-white/10
//             py-3.5
//             font-medium
//             text-white
//             transition
//             hover:bg-white/[0.04]
//           "
//         >
//          Back
//         </button>

//         <button
//           onClick={() =>
//             router.push(
//               "/dashboard/portfolio/projects"
//             )
//           }
//           className="
//             flex-1
//             rounded-2xl
//             bg-white
//             py-3.5
//             font-medium
//             text-black
//             transition
//             hover:opacity-90
//           "
//         >
//           Save & Continue →
//         </button>
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState, useRef } from "react";
import useSkills from "@/hooks/portfolio/useSkills";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap/gsap";

import SkillForm from "@/components/portfolio/skills/SkillForm";
import SkillCard from "@/components/portfolio/skills/SkillCard";
import BuilderHeader from "@/components/portfolio/builder/BuilderHeader";

export default function SkillsPage() {
  const containerRef = useRef(null);
  const [skills, setSkills] = useState([]);

  const router = useRouter();
  const { loading, fetchSkills, deleteSkill } = useSkills();

  useEffect(() => {
    async function loadSkills() {
      const data = await fetchSkills();
      setSkills(data);
    }

    loadSkills();
  }, [fetchSkills]);

  useGSAP(
    () => {
      if (!loading && containerRef.current) {
        gsap.from(".skills-animate", {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          clearProps: "opacity,transform",
        });
         gsap.from(".template-animate", {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          clearProps: "opacity,transform",
        });
      }
    },
    { dependencies: [loading, skills.length], scope: containerRef }
  );

  const handleDelete = async (skillId) => {
    const result = await deleteSkill(skillId);

    if (!result.success) {
      toast.error(result.data.message);
      return;
    }

    toast.success(result.data.message);

    const updatedSkills = await fetchSkills();
    setSkills(updatedSkills);
  };

  return (
    <div
      ref={containerRef}
      className="space-y-8 p-6 lg:p-10"
    >
      {/* Header */}
      <div className="skills-animate">
        <BuilderHeader
          title="Skills"
          description="Add the technologies, frameworks and tools you use."
          step={3}
          totalSteps={8}
        />
      </div>

      {/* Add Skill */}
      <div
        className="
          skills-animate
          rounded-[28px]
          border
          border-white/10
          bg-white/[0.03]
          p-6
          lg:p-8
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
            Add Skills
          </h2>

          <p
            className="
              mt-2
              text-zinc-500
            "
          >
            Add technologies that showcase your expertise.
          </p>
        </div>

        <div className="mt-6">
          <SkillForm fetchSkills={fetchSkills} />
        </div>
      </div>

      {/* Skills List */}
      <div
        className="
          skills-animate
          rounded-[28px]
          border
          border-white/10
          bg-white/[0.03]
          p-6
          lg:p-8
        "
      >
        <div
          className="
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-center
            sm:justify-between
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
              Your Skills
            </h2>

            <p
              className="
                mt-2
                text-zinc-500
              "
            >
              Technologies currently displayed on your portfolio.
            </p>
          </div>

          <div
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-4
              py-2
              text-sm
              text-zinc-400
            "
          >
            {skills.length} Skills
          </div>
        </div>

        {skills.length === 0 ? (
          <div
            className="
              mt-8
              rounded-3xl
              border
              border-dashed
              border-white/10
              bg-white/[0.02]
              p-12
              text-center
            "
          >
            <h3
              className="
                text-lg
                font-semibold
                text-white
              "
            >
              No skills added yet
            </h3>

            <p
              className="
                mt-3
                text-zinc-500
              "
            >
              Add your first skill to start building your portfolio.
            </p>
          </div>
        ) : (
          <div
            className="
              mt-8
              grid
              gap-3
              sm:grid-cols-2
              xl:grid-cols-3
            "
          >
            {skills.map((skill) => (
              <SkillCard
                key={skill._id}
                skill={skill}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>

      {/* Footer Navigation */}
      <div
        className="
          skills-animate
          flex
          flex-col
          gap-3
          sm:flex-row
        "
      >
        <button
          onClick={() => router.push("/dashboard/portfolio/about")}
          className="
            flex-1
            rounded-2xl
            border
            border-white/10
            py-3.5
            font-medium
            text-white
            transition
            hover:bg-white/[0.04]
          "
        >
          Back
        </button>

        <button
          onClick={() => router.push("/dashboard/portfolio/projects")}
          className="
            flex-1
            rounded-2xl
            bg-white
            py-3.5
            font-medium
            text-black
            transition
            hover:opacity-90
          "
        >
          Save & Continue →
        </button>
      </div>
    </div>
  );
}