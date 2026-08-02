// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { toast } from "sonner";
// import { educationSchema } from "@/validators/portfolio/portfolio";

// export default function EducationForm({
//   editingEducation,
//   setEditingEducation,
//   fetchEducation,
// }) {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(educationSchema),
//     defaultValues: {
//       institution: "",
//       degree: "",
//       startYear: "",
//       endYear: "",
//     },
//   });
//   const inputStyles = `
//   w-full
//   rounded-2xl
//   border
//   border-white/10
//   bg-black
//   px-4
//   py-3.5
//   text-white
//   outline-none
//   transition
//   placeholder:text-zinc-600
//   focus:border-white/20
// `;

//   useEffect(() => {
//     if (!editingEducation) return;

//     reset({
//       institution: editingEducation.institution || "",
//       degree: editingEducation.degree || "",
//       startYear: editingEducation.startYear || "",
//       endYear: editingEducation.endYear || "",
//     });
//   }, [editingEducation, reset]);

//   const onSubmit = async (data) => {
//     try {
//       const method = editingEducation ? "PUT" : "POST";

//       const body = { ...data };

//       if (editingEducation) {
//         body.educationId = editingEducation._id;
//       }

//       const response = await fetch("/api/dashboard/portfolio/education", {
//         method,
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(body),
//       });

//       const result = await response.json();

//       if (!response.ok) {
//         toast.error(result.message);
//         return;
//       }

//       toast.success(result.message);

//       reset({
//         institution: "",
//         degree: "",
//         startYear: "",
//         endYear: "",
//       });

//       setEditingEducation?.(null);
//       await fetchEducation?.();
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <>
//       <div className="mb-8">
//         <div
//           className="
//           mb-4
//           inline-flex
//           items-center
//           rounded-full
//           border
//           border-white/10
//           bg-white/[0.03]
//           px-3
//           py-1.5
//           text-xs
//           uppercase
//           tracking-[0.15em]
//           text-zinc-500
//         "
//         >
//           Education Builder
//         </div>

//         <h2
//           className="
//           text-xl
//           font-semibold
//           tracking-tight
//           text-white
//         "
//         >
//           {editingEducation ? "Edit Education" : "Add Education"}
//         </h2>

//         <p className="mt-2 text-zinc-500">
//           Add your degrees, diplomas, certifications, and academic history.
//         </p>
//       </div>

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//         {/* Institution */}
//         <div>
//           <label className="mb-2 block text-sm font-medium">Institution</label>

//           <input
//             type="text"
//             placeholder="University of Mumbai"
//             {...register("institution")}
//             className={inputStyles}
//           />

//           {errors.institution && (
//             <p className="mt-2 text-sm text-red-500">
//               {errors.institution.message}
//             </p>
//           )}
//         </div>

//         {/* Degree */}
//         <div>
//           <label className="mb-2 block text-sm font-medium">Degree</label>

//           <input
//             type="text"
//             placeholder="Bachelor of Computer Applications"
//             {...register("degree")}
//             className={inputStyles}
//           />

//           {errors.degree && (
//             <p className="mt-2 text-sm text-red-500">{errors.degree.message}</p>
//           )}
//         </div>

//         {/* Years */}
//         <div className="grid gap-5 md:grid-cols-2">
//           <div>
//             <label className="mb-2 block text-sm font-medium">Start Year</label>

//             <input
//               type="number"
//               min="1950"
//               max="2100"
//               placeholder="2022"
//               {...register("startYear")}
//               className={inputStyles}
//             />

//             {errors.startYear && (
//               <p className="mt-2 text-sm text-red-500">
//                 {errors.startYear.message}
//               </p>
//             )}
//           </div>

//           <div>
//             <label className="mb-2 block text-sm font-medium">End Year</label>

//             <input
//               type="number"
//               min="1950"
//               max="2100"
//               placeholder="2026"
//               {...register("endYear")}
//               className={inputStyles}
//             />

//             {errors.endYear && (
//               <p className="mt-2 text-sm text-red-500">
//                 {errors.endYear.message}
//               </p>
//             )}
//           </div>
//         </div>

//         {/* Footer */}
//         <div
//           className="
//           flex
//           flex-col-reverse
//           gap-3
//           pt-2
//           sm:flex-row
//         "
//         >
//           {editingEducation && (
//             <button
//               type="button"
//               onClick={() => {
//                 setEditingEducation(null);
//                 reset();
//               }}
//               className="
//               rounded-2xl
//               border
//               border-white/10
//               px-6
//               py-3.5
//               text-white
//               transition
//               hover:bg-white/[0.04]
//             "
//             >
//               Cancel
//             </button>
//           )}

//           <button
//             type="submit"
//             className="
//             flex-1
//             rounded-2xl
//             bg-white
//             py-3.5
//             font-medium
//             text-black
//             transition
//             hover:opacity-90
//           "
//           >
//             {editingEducation ? "Update Education" : "Save Education"}
//           </button>
//         </div>
//       </form>
//     </>
//   );
// }


"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
// import { toast } from "sonner";
import { educationSchema } from "@/validators/portfolio/portfolio";
import { useEducation } from "@/hooks/portfolio/useEducation";

export default function EducationForm({
  editingEducation,
  setEditingEducation,
  fetchEducation,
}) {
  const { loading, saveEducation, updateEducation } = useEducation();

  const inputStyles = `
  w-full
  rounded-2xl
  border
  border-white/10
  bg-black
  px-4
  py-3.5
  text-white
  outline-none
  transition
  placeholder:text-zinc-600
  focus:border-white/20
`;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(educationSchema),
  });

  // Populate Form When Editing
  useEffect(() => {
    if (!editingEducation) {
      reset({
        institution: "",
        degree: "",
        startYear: "",
        endYear: "",
      });

      return;
    }

    reset({
      institution: editingEducation.institution || "",
      degree: editingEducation.degree || "",
      startYear: editingEducation.startYear || "",
      endYear: editingEducation.endYear || "",
    });
  }, [editingEducation, reset]);

  // Create / Update Education
  const onSubmit = async (data) => {
    try {
      let result;

      if (editingEducation) {
        result = await updateEducation({
          ...data,
          educationId: editingEducation._id,
        });
      } else {
        result = await saveEducation(data);
      }

      if (!result) return;

      reset();

      setEditingEducation?.(null);

      reset({
        institution: "",
        degree: "",
        startYear: "",
        endYear: "",
      });

      await fetchEducation?.();
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <>
      <div className="mb-8">
        <div
          className="
          mb-4
          inline-flex
          items-center
          rounded-full
          border
          border-white/10
          bg-white/[0.03]
          px-3
          py-1.5
          text-xs
          uppercase
          tracking-[0.15em]
          text-zinc-500
        "
        >
          Education Builder
        </div>

        <h2
          className="
          text-xl
          font-semibold
          tracking-tight
          text-white
        "
        >
          {editingEducation ? "Edit Education" : "Add Education"}
        </h2>

        <p className="mt-2 text-zinc-500">
          Add your degrees, diplomas, certifications, and academic history.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Institution */}
        <div>
          <label className="mb-2 block text-sm font-medium">Institution</label>

          <input
            type="text"
            placeholder="University of Mumbai"
            {...register("institution")}
            className={inputStyles}
          />

          {errors.institution && (
            <p className="mt-2 text-sm text-red-500">
              {errors.institution.message}
            </p>
          )}
        </div>

        {/* Degree */}
        <div>
          <label className="mb-2 block text-sm font-medium">Degree</label>

          <input
            type="text"
            placeholder="Bachelor of Computer Applications"
            {...register("degree")}
            className={inputStyles}
          />

          {errors.degree && (
            <p className="mt-2 text-sm text-red-500">{errors.degree.message}</p>
          )}
        </div>

        {/* Years */}
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">Start Year</label>

            <input
              type="number"
              min="1950"
              max="2100"
              placeholder="2022"
              {...register("startYear")}
              className={inputStyles}
            />

            {errors.startYear && (
              <p className="mt-2 text-sm text-red-500">
                {errors.startYear.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">End Year</label>

            <input
              type="number"
              min="1950"
              max="2100"
              placeholder="2026"
              {...register("endYear")}
              className={inputStyles}
            />

            {errors.endYear && (
              <p className="mt-2 text-sm text-red-500">
                {errors.endYear.message}
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div
          className="
          flex
          flex-col-reverse
          gap-3
          pt-2
          sm:flex-row
        "
        >
          {editingEducation && (
            <button
              type="button"
              onClick={() => {
                setEditingEducation(null);
                reset();
              }}
              className="
              rounded-2xl
              border
              border-white/10
              px-6
              py-3.5
              text-white
              transition
              hover:bg-white/[0.04]
            "
            >
              Cancel
            </button>
          )}

          <button
            type="submit"
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
            {editingEducation ? "Update Education" : "Save Education"}
          </button>
        </div>
      </form>
    </>
  );
}
