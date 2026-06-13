"use client";

import { useState, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { aboutSchema } from "@/validators/portfolio";
import { toast } from "sonner";

export default function AboutPage() {
  const [loading, setLoading] = useState(false);

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

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await fetch("/api/portfolio/about", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      //  console.log("ABOUT DATA:", data);

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message);
        return;
      }

      toast.success(result.message);

      toast.success("About section saved successfully");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await fetch("/api/portfolio/about");

        const result = await response.json();

        if (!result.success) return;

        reset(result.about);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAbout();
  }, [reset]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">About Section</h1>

        <p className="text-gray-500 mt-2">
          Tell visitors more about yourself, your background, and how they can
          contact you.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Form Section */}
        <div className="bg-white border border-zinc-200 rounded-3xl p-6 lg:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Bio */}
            <div>
              <label className="block text-sm font-medium mb-2">Bio</label>

              <textarea
                rows={5}
                placeholder="Tell visitors about yourself..."
                {...register("bio")}
                className="
                  w-full
                  bg-zinc-50
                  border
                  border-zinc-200
                  rounded-2xl
                  px-4
                  py-3.5
                  outline-none
                  focus:border-black
                  focus:bg-white
                  transition
                  resize-none
                "
              />

              {errors.bio && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.bio.message}
                </p>
              )}
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium mb-2">Location</label>

              <input
                type="text"
                placeholder="New Delhi, India"
                {...register("location")}
                className="
                  w-full
                  bg-zinc-50
                  border
                  border-zinc-200
                  rounded-2xl
                  px-4
                  py-3.5
                  outline-none
                  focus:border-black
                  focus:bg-white
                  transition
                "
              />

              {errors.location && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.location.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>

              <input
                type="email"
                placeholder="raeen@example.com"
                {...register("email")}
                className="
                  w-full
                  bg-zinc-50
                  border
                  border-zinc-200
                  rounded-2xl
                  px-4
                  py-3.5
                  outline-none
                  focus:border-black
                  focus:bg-white
                  transition
                "
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Phone Number
              </label>

              <input
                type="text"
                placeholder="+91 9876543210"
                {...register("phone")}
                className="
                  w-full
                  bg-zinc-50
                  border
                  border-zinc-200
                  rounded-2xl
                  px-4
                  py-3.5
                  outline-none
                  focus:border-black
                  focus:bg-white
                  transition
                "
              />

              {errors.phone && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* GitHub */}
            <div>
              <label className="block text-sm font-medium mb-2">
                GitHub URL
              </label>

              <input
                type="text"
                placeholder="https://github.com/username"
                {...register("github")}
                className="
                  w-full
                  bg-zinc-50
                  border
                  border-zinc-200
                  rounded-2xl
                  px-4
                  py-3.5
                  outline-none
                  focus:border-black
                  focus:bg-white
                  transition
                "
              />

              {errors.github && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.github.message}
                </p>
              )}
            </div>

            {/* LinkedIn */}
            <div>
              <label className="block text-sm font-medium mb-2">
                LinkedIn URL
              </label>

              <input
                type="text"
                placeholder="https://linkedin.com/in/username"
                {...register("linkedin")}
                className="
                  w-full
                  bg-zinc-50
                  border
                  border-zinc-200
                  rounded-2xl
                  px-4
                  py-3.5
                  outline-none
                  focus:border-black
                  focus:bg-white
                  transition
                "
              />

              {errors.linkedin && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.linkedin.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                bg-black
                text-white
                py-3.5
                rounded-2xl
                font-medium
                hover:opacity-90
                transition
                disabled:opacity-50
              "
            >
              {loading ? "Saving..." : "Save About Section"}
            </button>
          </form>
        </div>

        {/* Live Preview */}
        <div
          className="
            bg-linear-to-br
            from-black
            via-zinc-900
            to-black
            text-white
            rounded-3xl
            p-8
            min-h-125
          "
        >
          <h2 className="text-3xl font-bold">About Me</h2>

          <p className="mt-6 text-zinc-300 leading-relaxed">
            {bio ||
              "Your bio will appear here. Tell visitors about yourself, your background, interests, and professional journey."}
          </p>

          <div className="mt-8 space-y-4">
            <p>📍 {location || "Your Location"}</p>

            <p>📧 {email || "Your Email"}</p>

            <p>📱 {phone || "Your Phone"}</p>
          </div>

          <div className="mt-8 border-t border-zinc-700 pt-6 space-y-3">
            <p>
              🔗 GitHub:
              <br />
              <span className="text-zinc-400 break-all">
                {github || "GitHub Profile URL"}
              </span>
            </p>

            <p>
              💼 LinkedIn:
              <br />
              <span className="text-zinc-400 break-all">
                {linkedin || "LinkedIn Profile URL"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
