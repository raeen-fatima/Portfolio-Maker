"use client";

import EducationCard from "@/components/education/EducationCard";
import EducationForm from "@/components/education/EducationForm";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import BuilderHeader from "@/components/builder/BuilderHeader";
import { useRouter } from "next/navigation";

export default function EducationPage() {
  const [education, setEducation] = useState([]);
  const router = useRouter();
  const [editingEducation, setEditingEducation] = useState(null);

  const fetchEducation = async () => {
    try {
      const response = await fetch("/api/portfolio/education");

      const result = await response.json();

      if (!result.success) return;

      setEducation(result.education);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadEducation = async () => {
      await fetchEducation();
    };

    loadEducation();
  }, []);

  const handleDelete = async (educationId) => {
    try {
      const response = await fetch("/api/portfolio/education", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          educationId,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message);
        return;
      }

      toast.success(result.message);
      await fetchEducation();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="mx-auto max-w-7xl space-y-8 p-6 lg:p-10">
      <BuilderHeader
        title="Education"
        description="Add your academic background, degrees, diplomas, and certifications."
        step={6}
        totalSteps={8}
      />

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
        <EducationForm
          editingEducation={editingEducation}
          setEditingEducation={setEditingEducation}
          fetchEducation={fetchEducation}
        />
      </div>

      {/* Education List */}
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
        <div
          className="
          flex
          flex-col
          gap-4
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
        >
          <div>
            <h2
              className="
              text-xl
              font-semibold
              text-white
            "
            >
              Your Education
            </h2>

            <p className="mt-2 text-zinc-500">
              Academic qualifications displayed on your portfolio.
            </p>
          </div>

          <div
            className="
            inline-flex
            items-center
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-4
            py-2
            text-sm
            text-zinc-400
          "
          >
            {education.length} Entries
          </div>
        </div>

        {education.length === 0 ? (
          <div
            className="
            mt-8
            rounded-3xl
            border
            border-dashed
            border-white/10
            bg-white/[0.02]
            p-12
            text-center
          "
          >
            <h3
              className="
              text-lg
              font-semibold
              text-white
            "
            >
              No education added yet
            </h3>

            <p className="mt-3 text-zinc-500">
              Add your first education record to strengthen your portfolio.
            </p>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
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
        flex
        flex-col
        gap-3
        sm:flex-row
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
