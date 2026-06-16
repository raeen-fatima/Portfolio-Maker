"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function TemplateCard({
  template,
}) {
  const router = useRouter();

  const handleUseTemplate =
    async () => {
      try {
        const response =
          await fetch(
            "/api/portfolio/template",
            {
              method: "PUT",
              headers: {
                "Content-Type":
                  "application/json",
              },
              body: JSON.stringify({
                selectedTemplate:
                  template.id,
              }),
            }
          );

        const result =
          await response.json();

        if (!response.ok) {
          toast.error(
            result.message
          );
          return;
        }

        toast.success(
          "Template selected successfully"
        );

        router.push(
          "/dashboard/preview"
        );
      } catch (error) {
        console.log(error);

        toast.error(
          "Something went wrong"
        );
      }
    };

  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border
        border-zinc-200
        bg-white
      "
    >
      {/* Preview Image */}
      <div className="relative h-56 bg-zinc-100">
        <Image
          src={template.image}
          alt={template.name}
          fill
          sizes="400px"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold">
          {template.name}
        </h3>

        <p className="mt-2 text-sm text-zinc-500">
          {template.description}
        </p>

        <div className="mt-6 flex gap-3">
          {/* Preview */}
          <button
            onClick={() =>
              router.push(
                "/dashboard/preview"
              )
            }
            className="
              flex-1
              rounded-xl
              border
              border-zinc-200
              py-3
              font-medium
              transition
              hover:bg-zinc-100
            "
          >
            Preview
          </button>

          {/* Use */}
          <button
            onClick={
              handleUseTemplate
            }
            className="
              flex-1
              rounded-xl
              bg-black
              py-3
              font-medium
              text-white
              transition
              hover:opacity-90
            "
          >
            Use Template
          </button>
        </div>
      </div>
    </div>
  );
}