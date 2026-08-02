"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { aboutSchema } from "@/validators/portfolio/portfolio";
import { toast } from "sonner";
import ImageUpload from "@/components/ui/ImageUpload";
import BuilderHeader from "@/components/portfolio/builder/BuilderHeader";
import { useRouter } from "next/navigation";
import useAbout from "@/hooks/portfolio/useAbout";
import usePortfolioNavigation from "@/hooks/portfolio/usePortfolioNavigation";

export default function AboutPage() {
  // const [loading, setLoading] = useState(false);
  const { loading, fetchAbout, saveAbout } = useAbout();
  const [imageUrl, setImageUrl] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(aboutSchema),
  });

  // Live Preview Values
  const bio = useWatch({
    control,
    name: "bio",
  });

  const location = useWatch({
    control,
    name: "location",
  });

  const email = useWatch({
    control,
    name: "email",
  });

  const phone = useWatch({
    control,
    name: "phone",
  });

  const github = useWatch({
    control,
    name: "github",
  });

  const linkedin = useWatch({
    control,
    name: "linkedin",
  });
  const instagram = useWatch({
    control,
    name: "instagram",
  });

  const { saveDraft, saveAndContinue, goBack } = usePortfolioNavigation();

  const onSubmit = async (data) => {
    try {
      const result = await saveAbout({
        ...data,
        image: imageUrl,
      });

      console.log("SAVE RESULT:", result);

      if (!result.success) {
        toast.error(result.data?.message || "Save failed");
        return;
      }

      toast.success(result.data.message);
      router.push("/dashboard/portfolio/skills");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    const loadAbout = async () => {
      const about = await fetchAbout();

      console.log("ABOUT:", about);

      if (!about) return;

      reset(about);

      if (about.image) {
        setImageUrl(about.image);
      }
    };

    loadAbout();
  }, [fetchAbout, reset]);

  return (
    <div className="space-y-6 p-6 lg:p-12">
      {/* Header */}

      <BuilderHeader
        title="About Section"
        description="Tell visitors more about yourself, your background, and how they can contact you."
        step={2}
        totalSteps={8}
      />

      {/* Main Layout */}
      {/* Main Layout */}
      <div
        className="
    grid
    gap-6
    xl:grid-cols-[1fr_420px]
  "
      >
        {/* Form Section */}
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
            {/* Bio */}
            <div>
              <label className="mb-2 block text-sm font-medium">Bio</label>

              <textarea
                rows={5}
                placeholder="Tell visitors about yourself..."
                {...register("bio")}
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
            resize-none
          "
              />
            </div>

            {/* Location + Email */}
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Location
                </label>

                <input
                  {...register("location")}
                  placeholder="New Delhi, India"
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
              placeholder:text-zinc-600
              focus:border-white/20
            "
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Email</label>

                <input
                  {...register("email")}
                  placeholder="john@example.com"
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
              placeholder:text-zinc-600
              focus:border-white/20
            "
                />
              </div>
            </div>

            {/* Phone + Github */}
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">Phone</label>

                <input
                  {...register("phone")}
                  placeholder="+91 9876543210"
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
              placeholder:text-zinc-600
              focus:border-white/20
            "
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">GitHub</label>

                <input
                  {...register("github")}
                  placeholder="https://github.com/username"
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
              placeholder:text-zinc-600
              focus:border-white/20
            "
                />
              </div>
            </div>

            {/* Linkedin + Instagram */}
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  LinkedIn
                </label>

                <input
                  {...register("linkedin")}
                  placeholder="https://linkedin.com/in/username"
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
              placeholder:text-zinc-600
              focus:border-white/20
            "
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Instagram
                </label>

                <input
                  {...register("instagram")}
                  placeholder="https://instagram.com/username"
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
              placeholder:text-zinc-600
              focus:border-white/20
            "
                />
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                About Image
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
                onClick={() => router.push("/dashboard/portfolio/hero")}
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

              {/* <button
                type="button"
                onClick={handleSubmit((data) =>
                  saveDraft(saveAbout, {
                    ...data,
                    image: imageUrl,
                  }),
                )}
                disabled={loading}
                className="flex-1 rounded-2xl border border-white/10 py-3.5 font-medium text-white hover:bg-white/5 disabled:opacity-50"
              >
                {loading ? "Saving..." : "Save Draft"}
              </button> */}

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

        {/* Live Preview */}
        <div
          className="
            sticky
      top-24
      h-fit
      rounded-[28px]
      border
      border-white/10
      bg-white/[0.03]
      p-8
          "
        >
          <h2 className="text-3xl font-bold">About Me</h2>

          <p className="mt-6 text-zinc-300 leading-relaxed">
            {bio ||
              "Your bio will appear here. Tell visitors about yourself, your background, interests, and professional journey."}
          </p>

          <div className="mt-8 space-y-4">
            <p> {location || "Your Location"}</p>

            <p> {email || "Your Email"}</p>

            <p> {phone || "Your Phone"}</p>
          </div>

          <div className="mt-8 border-t border-zinc-700 pt-6 space-y-3">
            <p>
              GitHub:
              <br />
              <span className="text-zinc-400 break-all">
                {github || "GitHub Profile URL"}
              </span>
            </p>

            <p>
              LinkedIn:
              <br />
              <span className="text-zinc-400 break-all">
                {linkedin || "LinkedIn Profile URL"}
              </span>
            </p>
          </div>
          {/* Preview Image Section */}
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

            <h2 className="mt-6 text-2xl font-bold">About Me</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
