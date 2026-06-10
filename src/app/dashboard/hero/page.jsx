"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { heroSchema } from "@/validators/portfolio";
import { toast } from "sonner";
import ImageUpload from "@/components/ImageUpload";
import Image from "next/image";
export default function HeroPage() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(heroSchema),
  });

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

  const onSubmit = async (data) => {
    try {
      setLoading(true);

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

      if (!response.ok) {
        toast.error(result.message);
        return;
      }

      toast.success(result.message);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Hero Section</h1>

        <p className="text-gray-500 mt-2">
          Customize the first thing visitors see when they open your portfolio.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Editor */}
        <div className="bg-white border border-zinc-200 rounded-3xl p-6 lg:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Raeen Fatima"
                {...register("name")}
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

              {errors.name && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Professional Title
              </label>

              <input
                type="text"
                placeholder="Full Stack Developer"
                {...register("title")}
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

              {errors.title && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Tagline */}
            <div>
              <label className="block text-sm font-medium mb-2">Tagline</label>

              <textarea
                rows={4}
                placeholder="Building modern web applications with Next.js and MongoDB."
                {...register("tagline")}
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

              {errors.tagline && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.tagline.message}
                </p>
              )}
            </div>

            {/* Resume URL */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Resume Link
              </label>

              <input
                type="text"
                placeholder="https://drive.google.com/..."
                {...register("resumeUrl")}
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

              {errors.resumeUrl && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.resumeUrl.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Profile Image
              </label>

              <ImageUpload onUpload={setImageUrl} />
            </div>

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
              {loading ? "Saving..." : <>Save Hero Section</>}
            </button>
          </form>
        </div>

        {/* Live Preview */}
        <div
          className="
            bg-linear-to-br from-black via-zinc-900 to-black text-white  rounded-3xl  p-8  min-h-500px  flex flex-col  justify-center"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left */}
            <div className="flex-1">
              <p className="text-zinc-400 text-lg">Hi, I&#39;m</p>

              <h1 className="text-3xl font-bold mt-3">{name || "Your Name"}</h1>

              <h2 className="text-xl text-zinc-300 mt-4">
                {title || "Professional Title"}
              </h2>

              <p className="text-zinc-400 mt-6 leading-relaxed">
                {tagline || "Your professional summary will appear here."}
              </p>

              <a
                href={resumeUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-6 items-center px-5 py-2 bg-white text-black rounded-xl font-medium"
              >
                Download Resume
              </a>
            </div>

            {/* Right */}
            <div className="shrink-0">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt="Profile"
                  width={180}
                  height={180}
                  className="rounded-xl object-cover border-4 border-zinc-700"
                />
              ) : (
                <div className="w-45 h-45 rounded-full  bg-zinc-800   border-2 border-dashed  border-zinc-600" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
