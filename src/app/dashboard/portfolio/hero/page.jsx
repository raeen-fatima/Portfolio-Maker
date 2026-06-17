"use client";
// React Hooks
import { useEffect, useState } from "react";
// React Hook Form
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// Validation Schema
import { heroSchema } from "@/validators/portfolio";
// UI & Notifications
import { toast } from "sonner";
import ImageUpload from "@/components/ui/ImageUpload";
import Image from "next/image";
import BuilderHeader from "@/components/builder/BuilderHeader";
import { useRouter } from "next/navigation";
export default function HeroPage() {
  // Loading state for form submission
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const router = useRouter();

  // Initialize form with Zod schema validation
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(heroSchema),
  });

  // Watch form fields for real-time preview updates
  const name = useWatch({
    control,
    name: "name",
  });

  const title = useWatch({
    control,
    name: "title",
  });

  const tagline = useWatch({
    control,
    name: "tagline",
  });

  const resumeUrl = useWatch({
    control,
    name: "resumeUrl",
  });
  // Fetch existing hero data on component mount
  useEffect(() => {
    const fetchHero = async () => {
      try {
        const response = await fetch("/api/portfolio/hero");

        const result = await response.json();

        if (!result.success) return;

        // Populate form with existing hero data
        reset(result.hero);

        // Set profile image if it exists
        if (result.hero.image) {
          setImageUrl(result.hero.image);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchHero();
  }, [reset]);

  // Handle form submission - save hero section to database
  const onSubmit = async (data) => {
    try {
      setLoading(true);

      // Send form data along with profile image URL to API
      const response = await fetch("/api/portfolio/hero", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          image: imageUrl,
        }),
      });
      console.log("FORM DATA:", data);

      const result = await response.json();

      // Show error toast if submission failed
      if (!response.ok) {
        toast.error(result.message);
        return;
      }

      // Show success message
      toast.success(result.message);
      router.push("/dashboard/portfolio/about");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 p-6 lg:p-12">
      {/* Page Header */}

      <BuilderHeader
        title="Hero Section"
        description="Customize the first thing visitors see when they open your portfolio."
        step={1}
        totalSteps={7}
      />

      {/* Main Layout - Two column grid: Editor on left, Preview on right */}
      <div
        className="
    grid
    gap-6
    xl:grid-cols-[1fr_420px]
  "
      >
        {/* Form Card */}
        <div
          className="
      rounded-[28px]
      border
      border-white/10
      bg-white/[0.03]
      p-6
      lg:p-8
    "
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name + Title */}
            <div className="grid gap-5 md:grid-cols-2">
              {/* Full Name Input */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  {...register("name")}
                  className="
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
            "
                />

                {errors.name && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Professional Title */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Professional Title
                </label>

                <input
                  type="text"
                  placeholder="Full Stack Developer"
                  {...register("title")}
                  className="
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
            "
                />

                {errors.title && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.title.message}
                  </p>
                )}
              </div>
            </div>

            {/* Tagline */}
            <div>
              <label className="mb-2 block text-sm font-medium">Tagline</label>

              <textarea
                rows={4}
                placeholder="Building modern web applications with Next.js and MongoDB."
                {...register("tagline")}
                className="
            w-full
            resize-none
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
          "
              />

              {errors.tagline && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.tagline.message}
                </p>
              )}
            </div>

            {/* Resume URL */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Resume URL
              </label>

              <input
                type="text"
                placeholder="https://drive.google.com/..."
                {...register("resumeUrl")}
                className="
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
          "
              />

              {errors.resumeUrl && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.resumeUrl.message}
                </p>
              )}
            </div>

            {/* Upload */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Profile Image
              </label>

              <ImageUpload onUpload={setImageUrl} />
            </div>

            {/* Footer */}
            <div
              className="
          flex
          flex-col
          gap-3
          pt-4
          sm:flex-row
        "
            >
              <button
                type="button"
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
                Save Draft
              </button>

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
                {loading ? "Saving..." : "Save & Continue →"}
              </button>
            </div>
          </form>
        </div>

        {/* Preview Card */}
        <div
          className="
      h-fit
      rounded-[28px]
      border
      border-white/10
      bg-white/[0.03]
      p-8

      xl:sticky
      xl:top-24
    "
        >
          <div className="flex flex-col items-center text-center">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt="Profile"
                width={120}
                height={120}
                className="
            h-32
            w-32
            rounded-full
            object-cover
          "
              />
            ) : (
              <div
                className="
            h-32
            w-32
            rounded-full
            border
            border-dashed
            border-white/10
            bg-white/[0.03]
          "
              />
            )}

            <p className="mt-6 text-zinc-500">Hi, I'm</p>

            <h1 className="mt-2 text-3xl font-bold">{name || "Your Name"}</h1>

            <h2 className="mt-3 text-zinc-400">
              {title || "Professional Title"}
            </h2>

            <p
              className="
          mt-6
          max-w-sm
          leading-relaxed
          text-zinc-400
        "
            >
              {tagline || "Your professional summary will appear here."}
            </p>

            <a
              href={resumeUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="
          mt-8
          inline-flex
          items-center
          rounded-2xl
          bg-white
          px-5
          py-3
          font-medium
          text-black
          transition
          hover:opacity-90
        "
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
