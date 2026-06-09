"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { heroSchema } from "@/validators/portfolio";
import { toast } from "sonner";

export default function HeroPage() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(heroSchema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await fetch(
        "/api/portfolio/hero",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result =
        await response.json();

      if (!response.ok) {
        toast.error(result.message);
        return;
      }

      toast.success(result.message);
    } catch (error) {
      toast.error(
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="
w-full
bg-zinc-50
border
border-zinc-200
rounded-2xl
px-4
py-3.5
text-sm
outline-none
focus:border-black
focus:bg-white
transition
">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Hero Section
        </h1>

        <p className="text-gray-500 mt-2">
          This information will be shown
          at the top of your portfolio.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm">
        <form
          onSubmit={handleSubmit(
            onSubmit
          )}
          className="space-y-6"
        >
          {/* Heading */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Heading
            </label>

            <input
              type="text"
              placeholder="Raeen Fatima"
              {...register("heading")}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:border-black transition"
            />

            {errors.heading && (
              <p className="text-red-500 text-sm mt-2">
                {
                  errors.heading
                    .message
                }
              </p>
            )}
          </div>

          {/* Sub Heading */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Sub Heading
            </label>

            <input
              type="text"
              placeholder="Full Stack Developer"
              {...register(
                "subHeading"
              )}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:border-black transition"
            />

            {errors.subHeading && (
              <p className="text-red-500 text-sm mt-2">
                {
                  errors
                    .subHeading
                    .message
                }
              </p>
            )}
          </div>

          {/* Resume URL */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Resume URL
            </label>

            <input
              type="text"
              placeholder="https://drive.google.com/..."
              {...register(
                "resumeUrl"
              )}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:border-black transition"
            />

            {errors.resumeUrl && (
              <p className="text-red-500 text-sm mt-2">
                {
                  errors
                    .resumeUrl
                    .message
                }
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition disabled:opacity-50"
          >
            {loading
              ? "Saving..."
              : "Save Hero Section"}
          </button>
        </form>
      </div>
    </div>
  );
}