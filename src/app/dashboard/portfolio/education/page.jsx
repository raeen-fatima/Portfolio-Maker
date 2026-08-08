
// "use client";

// import EducationCard from "@/components/portfolio/education/EducationCard";
// import EducationForm from "@/components/portfolio/education/EducationForm";
// import { useEffect, useState } from "react";
// // import { toast } from "sonner";
// import BuilderHeader from "@/components/portfolio/builder/BuilderHeader";
// import { useRouter } from "next/navigation";

// import { useEducation } from "@/hooks/portfolio/useEducation";

// export default function EducationPage() {
//   const [education, setEducation] = useState([]);
//   const router = useRouter();

//   const [editingEducation, setEditingEducation] = useState(null);
//   const { loading, fetchEducation, deleteEducation } = useEducation();

//   const loadEducation = async () => {
//     const data = await fetchEducation();

//     setEducation(data);
//   };

//   useEffect(() => {
//     loadEducation();
//   }, []);

//   const handleDelete = async (educationId) => {
//     const success = await deleteEducation(educationId);

//     if (success) {
//       await loadEducation();
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
//         title="Education"
//         description="Add your academic background, degrees, diplomas, and certifications."
//         step={6}
//         totalSteps={8}
//       />

//       {/* Form Section */}
//       <div
//         className="
//           p-6 lg:p-8
//           bg-white/[0.03]
//           rounded-[28px] border border-white/10
//         "
//       >
//         <EducationForm
//           editingEducation={editingEducation}
//           setEditingEducation={setEditingEducation}
//          fetchEducation={loadEducation}
//         />
//       </div>

//       {/* Education List */}
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
//               Your Education
//             </h2>

//             <p
//               className="
//                 mt-2
//                 text-zinc-500
//               "
//             >
//               Academic qualifications displayed on your portfolio.
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
//             {education.length} Entries
//           </div>
//         </div>

//         {education.length === 0 ? (
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
//               No education added yet
//             </h3>

//             <p
//               className="
//                 mt-3
//                 text-zinc-500
//               "
//             >
//               Add your first education record to strengthen your portfolio.
//             </p>
//           </div>
//         ) : (
//           <div
//             className="
//               mt-8 space-y-4
//             "
//           >
//             {education.map((item) => (
//               <EducationCard
//                 key={item._id}
//                 education={item}
//                 onDelete={handleDelete}
//                 onEdit={setEditingEducation}
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
//           onClick={() => router.push("/dashboard/portfolio/experience")}
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
//           onClick={() => router.push("/dashboard/portfolio/certifications")}
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

import EducationCard from "@/components/portfolio/education/EducationCard";
import EducationForm from "@/components/portfolio/education/EducationForm";
import { useEffect, useState, useRef } from "react";
// import { toast } from "sonner";
import BuilderHeader from "@/components/portfolio/builder/BuilderHeader";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap/gsap";

import { useEducation } from "@/hooks/portfolio/useEducation";

export default function EducationPage() {
  const containerRef = useRef(null);
  const [education, setEducation] = useState([]);
  const router = useRouter();

  const [editingEducation, setEditingEducation] = useState(null);
  const { loading, fetchEducation, deleteEducation } = useEducation();

  const loadEducation = async () => {
    const data = await fetchEducation();
    setEducation(data);
  };

  useEffect(() => {
    loadEducation();
  }, []);

  useGSAP(
    () => {
      if (!loading && containerRef.current) {
        gsap.from(".education-animate", {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          clearProps: "opacity,transform",
        });
      }
    },
    { dependencies: [loading, education.length], scope: containerRef }
  );

  const handleDelete = async (educationId) => {
    const success = await deleteEducation(educationId);

    if (success) {
      await loadEducation();
    }
  };

  return (
    <div
      ref={containerRef}
      className="
        max-w-7xl
        mx-auto space-y-8 p-6 lg:p-10
      "
    >
      <div className="education-animate">
        <BuilderHeader
          title="Education"
          description="Add your academic background, degrees, diplomas, and certifications."
          step={6}
          totalSteps={8}
        />
      </div>

      {/* Form Section */}
      <div
        className="
          education-animate
          p-6 lg:p-8
          bg-white/[0.03]
          rounded-[28px] border border-white/10
        "
      >
        <EducationForm
          editingEducation={editingEducation}
          setEditingEducation={setEditingEducation}
          fetchEducation={loadEducation}
        />
      </div>

      {/* Education List */}
      <div
        className="
          education-animate
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
              Your Education
            </h2>

            <p
              className="
                mt-2
                text-zinc-500
              "
            >
              Academic qualifications displayed on your portfolio.
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
            {education.length} Entries
          </div>
        </div>

        {education.length === 0 ? (
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
              No education added yet
            </h3>

            <p
              className="
                mt-3
                text-zinc-500
              "
            >
              Add your first education record to strengthen your portfolio.
            </p>
          </div>
        ) : (
          <div
            className="
              mt-8 space-y-4
            "
          >
            {education.map((item) => (
              <EducationCard
                key={item._id}
                education={item}
                onDelete={handleDelete}
                onEdit={setEditingEducation}
              />
            ))}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div
        className="
          education-animate
          flex flex-col sm:flex-row
          gap-3
        "
      >
        <button
          type="button"
          onClick={() => router.push("/dashboard/portfolio/experience")}
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
          onClick={() => router.push("/dashboard/portfolio/certifications")}
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