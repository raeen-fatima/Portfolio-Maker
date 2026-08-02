// "use client";

// import ExperienceCard from "@/components/portfolio/experience/ExperienceCard";
// import ExperienceForm from "@/components/portfolio/experience/ExperienceForm";
// import { useEffect, useState } from "react";
// import { toast } from "sonner";
// import BuilderHeader from "@/components/portfolio/builder/BuilderHeader";
// import { useRouter } from "next/navigation";

// export default function ExperiencePage() {
//   const router = useRouter();
//   const [experience, setExperience] = useState([]);
//   const [editingExperience, setEditingExperience] = useState(null);

//   const fetchExperience = async () => {
//     try {
//       const response = await fetch("/api/dashboard/portfolio/experience");

//       const result = await response.json();

//       if (!result.success) return;

//       setExperience(result.experience);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     const loadExperience = async () => {
//       await fetchExperience();
//     };

//     loadExperience();
//   }, []);

//   const handleDelete = async (experienceId) => {
//     try {
//       const response = await fetch("/api/dashboard/portfolio/experience", {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           experienceId,
//         }),
//       });

//       const result = await response.json();

//       if (!response.ok) {
//         toast.error(result.message);
//         return;
//       }

//       toast.success(result.message);

//       await fetchExperience();
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <div
//       className="
//         max-w-7xl
//         mx-auto space-y-8 p-6 lg:p-10
//       "
//     >
//       <BuilderHeader
//         title="Experience"
//         description="Add your work experience, internships, freelance work, and professional roles."
//         step={5}
//         totalSteps={8}
//       />

//       {/* Form */}
//       <div
//         className="
//           p-6 lg:p-8
//           bg-white/[0.03]
//           rounded-[28px] border border-white/10
//         "
//       >
//         <div>
//           <h2
//             className="
//               text-xl text-white font-semibold
//             "
//           >
//             {editingExperience ? "Edit Experience" : "Add Experience"}
//           </h2>

//           <p
//             className="
//               mt-2
//               text-zinc-500
//             "
//           >
//             Highlight your professional journey and achievements.
//           </p>
//         </div>

//         <div
//           className="
//             mt-6
//           "
//         >
//           <ExperienceForm
//             editingExperience={editingExperience}
//             setEditingExperience={setEditingExperience}
//             fetchExperience={fetchExperience}
//           />
//         </div>
//       </div>

//       {/* Experience List */}
//       <div
//         className="
//           p-6 lg:p-8
//           bg-white/[0.03]
//           rounded-[28px] border border-white/10
//         "
//       >
//         <div
//           className="
//             flex flex-col sm:flex-row sm:items-center sm:justify-between
//             gap-4
//           "
//         >
//           <div>
//             <h2
//               className="
//                 text-xl text-white font-semibold
//               "
//             >
//               Your Experience
//             </h2>

//             <p
//               className="
//                 mt-2
//                 text-zinc-500
//               "
//             >
//               Experience currently displayed on your portfolio.
//             </p>
//           </div>

//           <div
//             className="
//               inline-flex items-center
//               px-4 py-2
//               text-sm text-zinc-400
//               bg-white/[0.03]
//               rounded-full border border-white/10
//             "
//           >
//             {experience.length} Roles
//           </div>
//         </div>

//         {experience.length === 0 ? (
//           <div
//             className="
//               mt-8 p-12
//               text-center
//               bg-white/[0.02]
//               rounded-3xl border border-dashed border-white/10
//             "
//           >
//             <h3
//               className="
//                 text-lg text-white font-semibold
//               "
//             >
//               No experience added yet
//             </h3>

//             <p
//               className="
//                 mt-3
//                 text-zinc-500
//               "
//             >
//               Add your first role, internship, or freelance project.
//             </p>
//           </div>
//         ) : (
//           <div
//             className="
//               mt-8 space-y-4
//             "
//           >
//             {experience.map((item) => (
//               <ExperienceCard
//                 key={item._id}
//                 experience={item}
//                 onDelete={handleDelete}
//                 onEdit={setEditingExperience}
//               />
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Navigation */}
//       <div
//         className="
//           flex flex-col sm:flex-row
//           gap-3
//         "
//       >
//         <button
//           type="button"
//           onClick={() => router.push("/dashboard/portfolio/projects")}
//           className="
//           flex-1
//           rounded-2xl
//           border
//           border-white/10
//           py-3.5
//           font-medium
//           text-white
//           transition
//           hover:bg-white/[0.04]
//         "
//         >
//           ← Back
//         </button>

//         <button
//           type="button"
//           onClick={() => router.push("/dashboard/portfolio/education")}
//           className="
//           flex-1
//           rounded-2xl
//           bg-white
//           py-3.5
//           font-medium
//           text-black
//           transition
//           hover:opacity-90
//         "
//         >
//           Continue →
//         </button>
//       </div>
//     </div>
//   );
// }


"use client";

import ExperienceCard from "@/components/portfolio/experience/ExperienceCard";
import ExperienceForm from "@/components/portfolio/experience/ExperienceForm";
import { useEffect, useState } from "react";
// import { toast } from "sonner";
import BuilderHeader from "@/components/portfolio/builder/BuilderHeader";
import { useRouter } from "next/navigation";
import { useExperience } from "@/hooks/portfolio/useExperience";

export default function ExperiencePage() {
  const router = useRouter();
  const [experience, setExperience] = useState([]);
  const [editingExperience, setEditingExperience] = useState(null);
  const { loading, fetchExperience, deleteExperience } = useExperience();

  const loadExperience = async () => {
    const data = await fetchExperience();

    setExperience(data);
  };

  useEffect(() => {
    loadExperience();
  }, []);

  const handleDelete = async (experienceId) => {
    const success = await deleteExperience(experienceId);

    if (success) {
      await loadExperience();
    }
  };

  return (
    <div
      className="
        max-w-7xl
        mx-auto space-y-8 p-6 lg:p-10
      "
    >
      <BuilderHeader
        title="Experience"
        description="Add your work experience, internships, freelance work, and professional roles."
        step={5}
        totalSteps={8}
      />

      {/* Form */}
      <div
        className="
          p-6 lg:p-8
          bg-white/[0.03]
          rounded-[28px] border border-white/10
        "
      >
        <div>
          <h2
            className="
              text-xl text-white font-semibold
            "
          >
            {editingExperience ? "Edit Experience" : "Add Experience"}
          </h2>

          <p
            className="
              mt-2
              text-zinc-500
            "
          >
            Highlight your professional journey and achievements.
          </p>
        </div>

        <div
          className="
            mt-6
          "
        >
          <ExperienceForm
            editingExperience={editingExperience}
            setEditingExperience={setEditingExperience}
            fetchExperience={loadExperience}
          />
        </div>
      </div>

      {/* Experience List */}
      <div
        className="
          p-6 lg:p-8
          bg-white/[0.03]
          rounded-[28px] border border-white/10
        "
      >
        <div
          className="
            flex flex-col sm:flex-row sm:items-center sm:justify-between
            gap-4
          "
        >
          <div>
            <h2
              className="
                text-xl text-white font-semibold
              "
            >
              Your Experience
            </h2>

            <p
              className="
                mt-2
                text-zinc-500
              "
            >
              Experience currently displayed on your portfolio.
            </p>
          </div>

          <div
            className="
              inline-flex items-center
              px-4 py-2
              text-sm text-zinc-400
              bg-white/[0.03]
              rounded-full border border-white/10
            "
          >
            {experience.length} Roles
          </div>
        </div>

        {experience.length === 0 ? (
          <div
            className="
              mt-8 p-12
              text-center
              bg-white/[0.02]
              rounded-3xl border border-dashed border-white/10
            "
          >
            <h3
              className="
                text-lg text-white font-semibold
              "
            >
              No experience added yet
            </h3>

            <p
              className="
                mt-3
                text-zinc-500
              "
            >
              Add your first role, internship, or freelance project.
            </p>
          </div>
        ) : (
          <div
            className="
              mt-8 space-y-4
            "
          >
            {experience.map((item) => (
              <ExperienceCard
                key={item._id}
                experience={item}
                onDelete={handleDelete}
                onEdit={setEditingExperience}
              />
            ))}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div
        className="
          flex flex-col sm:flex-row
          gap-3
        "
      >
        <button
          type="button"
          onClick={() => router.push("/dashboard/portfolio/projects")}
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
          ← Back
        </button>

        <button
          type="button"
          onClick={() => router.push("/dashboard/portfolio/education")}
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
          Continue →
        </button>
      </div>
    </div>
  );
}
