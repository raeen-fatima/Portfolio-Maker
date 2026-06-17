// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";

// export default function TemplateCard({
//   template,
// }) {
//   const router = useRouter();

//   const handleUseTemplate =
//     async () => {
//       try {
//         const response =
//           await fetch(
//             "/api/portfolio/template",
//             {
//               method: "PUT",
//               headers: {
//                 "Content-Type":
//                   "application/json",
//               },
//               body: JSON.stringify({
//                 selectedTemplate:
//                   template.id,
//               }),
//             }
//           );

//         const result =
//           await response.json();

//         if (!response.ok) {
//           toast.error(
//             result.message
//           );
//           return;
//         }

//         toast.success(
//           "Template selected successfully"
//         );

//         router.push(
//           "/dashboard/preview"
//         );
//       } catch (error) {
//         console.log(error);

//         toast.error(
//           "Something went wrong"
//         );
//       }
//     };

//   return (
//     <div
//       className="
//         overflow-hidden
//         rounded-3xl
//         border
//         border-zinc-200
//         bg-white
//       "
//     >
//       {/* Preview Image */}
//       <div className="relative h-56 bg-zinc-100">
//         <Image
//           src={template.image}
//           alt={template.name}
//           fill
//           sizes="400px"
//           className="object-cover"
//         />
//       </div>

//       {/* Content */}
//       <div className="p-6">
//         <h3 className="text-xl font-bold">
//           {template.name}
//         </h3>

//         <p className="mt-2 text-sm text-zinc-500">
//           {template.description}
//         </p>

//         <div className="mt-6 flex gap-3">
//           {/* Preview */}
//           <button
//             onClick={() =>
//               router.push(
//                 "/dashboard/preview"
//               )
//             }
//             className="
//               flex-1
//               rounded-xl
//               border
//               border-zinc-200
//               py-3
//               font-medium
//               transition
//               hover:bg-zinc-100
//             "
//           >
//             Preview
//           </button>

//           {/* Use */}
//           <button
//             onClick={
//               handleUseTemplate
//             }
//             className="
//               flex-1
//               rounded-xl
//               bg-black
//               py-3
//               font-medium
//               text-white
//               transition
//               hover:opacity-90
//             "
//           >
//             Use Template
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function TemplateCard({ template }) {
  const router = useRouter();

  const handleUseTemplate = async () => {
    try {
      const response = await fetch("/api/portfolio/template", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          selectedTemplate: template.id,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message);
        return;
      }

      toast.success("Template selected");

      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      className="
        group
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-black
        transition-all
        duration-300
        hover:border-white/20
      "
    >
      {/* Preview */}
      <div
        className="
          relative
          aspect-[16/10]
          overflow-hidden
        "
      >
        <Image
          src={template.image}
          alt={template.name}
          fill
          sizes="800px"
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-[1.02]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/10
            to-transparent
          "
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <div
          className="
            flex
            items-start
            justify-between
            gap-4
          "
        >
          <div>
            <h3
              className="
                text-2xl
                font-semibold
                text-white
              "
            >
              {template.name}
            </h3>

            <p
              className="
                mt-3
                max-w-md
                text-zinc-500
                leading-relaxed
              "
            >
              {template.description}
            </p>
          </div>

          {template.active && (
            <span
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-3
                py-1
                text-xs
                text-white
              "
            >
              Active
            </span>
          )}
        </div>

        <div
          className="
    mt-8
    flex
    items-center
    justify-between
    gap-4
  "
        >
          <button
            onClick={() =>
              router.push(`/dashboard/preview?template=${template.id}`)
            }
            className="
      text-sm
      text-zinc-500
      transition
      hover:text-white
    "
          >
            Preview
          </button>

          <button
            onClick={handleUseTemplate}
            className="
      inline-flex
      items-center
      gap-2
      rounded-xl
      border
      border-white/10
      px-4
      py-2.5
      text-sm
      text-white
      transition
      hover:bg-white/[0.05]
      hover:border-white/20
    "
          >
            Use Template
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
