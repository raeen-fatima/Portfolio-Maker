// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { toast } from "sonner";
// import { certificationSchema } from "@/validators/portfolio/portfolio";

// export default function CertificationForm({
//   editingCertification,
//   setEditingCertification,
//   fetchCertifications,
// }) {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(certificationSchema),
//     defaultValues: {
//       title: "",
//       issuer: "",
//       issueDate: "",
//       credentialUrl: "",
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
//     if (!editingCertification) return;

//     reset({
//       title: editingCertification.title || "",
//       issuer: editingCertification.issuer || "",
//       issueDate: editingCertification.issueDate || "",
//       credentialUrl: editingCertification.credentialUrl || "",
//     });
//   }, [editingCertification, reset]);

//   const onSubmit = async (data) => {
//     try {
//       const method = editingCertification ? "PUT" : "POST";

//       const body = { ...data };

//       if (editingCertification) {
//         body.certificationId = editingCertification._id;
//       }

//       const response = await fetch("/api/dashboard/portfolio/certifications", {
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
//         title: "",
//         issuer: "",
//         issueDate: "",
//         credentialUrl: "",
//       });

//       setEditingCertification?.(null);

//       await fetchCertifications?.();
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
//           Certification Builder
//         </div>

//         <h2
//           className="
//           text-xl
//           font-semibold
//           tracking-tight
//           text-white
//         "
//         >
//           {editingCertification ? "Edit Certification" : "Add Certification"}
//         </h2>

//         <p className="mt-2 text-zinc-500">
//           Showcase certifications, licenses, and professional credentials.
//         </p>
//       </div>

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//         {/* Title */}
//         <div>
//           <label className="mb-2 block text-sm font-medium">
//             Certification Title
//           </label>

//           <input
//             type="text"
//             placeholder="Google Cybersecurity Professional Certificate"
//             {...register("title")}
//             className={inputStyles}
//           />

//           {errors.title && (
//             <p className="mt-2 text-sm text-red-500">{errors.title.message}</p>
//           )}
//         </div>

//         {/* Issuer + Date */}
//         <div className="grid gap-5 md:grid-cols-2">
//           <div>
//             <label className="mb-2 block text-sm font-medium">Issuer</label>

//             <input
//               type="text"
//               placeholder="Google"
//               {...register("issuer")}
//               className={inputStyles}
//             />

//             {errors.issuer && (
//               <p className="mt-2 text-sm text-red-500">
//                 {errors.issuer.message}
//               </p>
//             )}
//           </div>

//           <div>
//             <label className="mb-2 block  text-sm font-medium">Issue Date</label>

//             <input
//               type="month"
//               {...register("issueDate")}
//               className={inputStyles}
//             />

//             {errors.issueDate && (
//               <p className="mt-2 text-sm text-red-500">
//                 {errors.issueDate.message}
//               </p>
//             )}
//           </div>
//         </div>

//         {/* Credential URL */}
//         <div>
//           <label className="mb-2 block text-sm font-medium">
//             Credential URL
//           </label>

//           <input
//             type="text"
//             placeholder="https://coursera.org/verify/..."
//             {...register("credentialUrl")}
//             className={inputStyles}
//           />

//           <p className="mt-2 text-xs text-zinc-500">
//             Optional. Add a verification or credential link.
//           </p>

//           {errors.credentialUrl && (
//             <p className="mt-2 text-sm text-red-500">
//               {errors.credentialUrl.message}
//             </p>
//           )}
//         </div>

//         {/* Preview */}
//         <div
//           className="
//           rounded-2xl
//           border
//           border-white/10
//           bg-white/[0.02]
//           p-5
//         "
//         >
//           <p
//             className="
//             text-xs
//             uppercase
//             tracking-[0.2em]
//             text-zinc-600
//           "
//           >
//             Preview
//           </p>

//           <h3
//             className="
//             mt-3
//             text-lg
//             font-semibold
//             text-white
//           "
//           >
//             Certification Card
//           </h3>

//           <p className="mt-2 text-zinc-500">
//             Your certification will appear in the portfolio exactly like the
//             certification cards shown below.
//           </p>
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
//           {editingCertification && (
//             <button
//               type="button"
//               onClick={() => {
//                 setEditingCertification(null);
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
//             {editingCertification
//               ? "Update Certification"
//               : "Save Certification"}
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
import { certificationSchema } from "@/validators/portfolio/portfolio";
import { useCertification } from "@/hooks/portfolio/useCertification";

export default function CertificationForm({
  editingCertification,
  setEditingCertification,
  fetchCertifications,
}) {
  const {
    loading,
    saveCertification,
    updateCertification,
  } = useCertification();

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
    resolver: zodResolver(certificationSchema),
  });

  // Populate Form When Editing
  useEffect(() => {
    if (!editingCertification) {
      reset({
        title: "",
        issuer: "",
        issueDate: "",
        credentialUrl: "",
      });

      return;
    }

    reset({
      title: editingCertification.title || "",
      issuer: editingCertification.issuer || "",
      issueDate: editingCertification.issueDate || "",
      credentialUrl: editingCertification.credentialUrl || "",
    });
  }, [editingCertification, reset]);

  // Create / Update Certification
  const onSubmit = async (data) => {
    try {
      let result;

      if (editingCertification) {
        result = await updateCertification({
          ...data,
          certificationId: editingCertification._id,
        });
      } else {
        result = await saveCertification(data);
      }

      if (!result) return;

      reset();

      setEditingCertification?.(null);

      reset({
        title: "",
        issuer: "",
        issueDate: "",
        credentialUrl: "",
      });

      await fetchCertifications?.();
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
          Certification Builder
        </div>

        <h2
          className="
          text-xl
          font-semibold
          tracking-tight
          text-white
        "
        >
          {editingCertification ? "Edit Certification" : "Add Certification"}
        </h2>

        <p className="mt-2 text-zinc-500">
          Showcase certifications, licenses, and professional credentials.
           {editingCertification?.title}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Certification Title
          </label>

          <input
            type="text"
            placeholder="Google Cybersecurity Professional Certificate"
            {...register("title")}
            className={inputStyles}
          />

          {errors.title && (
            <p className="mt-2 text-sm text-red-500">{errors.title.message}</p>
          )}
        </div>

        {/* Issuer + Date */}
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">Issuer</label>

            <input
              type="text"
              placeholder="Google"
              {...register("issuer")}
              className={inputStyles}
            />

            {errors.issuer && (
              <p className="mt-2 text-sm text-red-500">
                {errors.issuer.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block  text-sm font-medium">
              Issue Date
            </label>

            <input
              type="month"
              {...register("issueDate")}
              className={inputStyles}
            />

            {errors.issueDate && (
              <p className="mt-2 text-sm text-red-500">
                {errors.issueDate.message}
              </p>
            )}
          </div>
        </div>

        {/* Credential URL */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Credential URL
          </label>

          <input
            type="text"
            placeholder="https://coursera.org/verify/..."
            {...register("credentialUrl")}
            className={inputStyles}
          />

          <p className="mt-2 text-xs text-zinc-500">
            Optional. Add a verification or credential link.
          </p>

          {errors.credentialUrl && (
            <p className="mt-2 text-sm text-red-500">
              {errors.credentialUrl.message}
            </p>
          )}
        </div>

        {/* Preview */}
        <div
          className="
          rounded-2xl
          border
          border-white/10
          bg-white/[0.02]
          p-5
        "
        >
          <p
            className="
            text-xs
            uppercase
            tracking-[0.2em]
            text-zinc-600
          "
          >
            Preview
          </p>

          <h3
            className="
            mt-3
            text-lg
            font-semibold
            text-white
          "
          >
            Certification Card
          </h3>

          <p className="mt-2 text-zinc-500">
            Your certification will appear in the portfolio exactly like the
            certification cards shown below.
          </p>
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
          {editingCertification && (
            <button
              type="button"
              onClick={() => {
                setEditingCertification(null);
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
            disabled={loading}
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
            {loading
              ? "Saving..."
              : editingCertification
                ? "Update Certification"
                : "Save Certification"}
          </button>
        </div>
      </form>
    </>
  );
}
