"use client";

import EducationCard from "@/components/education/EducationCard";
import EducationForm from "@/components/education/EducationForm";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function EducationPage() {
  const [education, setEducation] =
    useState([]);
  const [
    editingEducation,
    setEditingEducation,
  ] = useState(null);

  const fetchEducation = async () => {
    try {
      const response = await fetch(
        "/api/portfolio/education"
      );

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

  const handleDelete = async (
    educationId
  ) => {
    try {
      const response = await fetch(
        "/api/portfolio/education",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            educationId,
          }),
        }
      );

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
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Education
        </h1>

        <p className="text-gray-500 mt-2">
          Add your academic background,
          degrees, and certifications.
        </p>
      </div>

      <EducationForm
        editingEducation={
          editingEducation
        }
        setEditingEducation={
          setEditingEducation
        }
        fetchEducation={fetchEducation}
      />

      <div className="bg-white border border-zinc-200 rounded-3xl p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold">
              Your Education
            </h2>

            <p className="text-gray-500 mt-2">
              Education entries you have
              added to your portfolio.
            </p>
          </div>

          <span className="px-3 py-1 bg-zinc-100 rounded-full text-sm font-medium shrink-0">
            {education.length} Entries
          </span>
        </div>

        {education.length === 0 ? (
          <div className="mt-8 border-2 border-dashed border-zinc-200 rounded-2xl p-10 text-center">
            <h3 className="font-semibold">
              No Education Added
            </h3>

            <p className="text-zinc-500 mt-2">
              Add your first education entry
              to complete your portfolio.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 mt-6">
            {education.map((item) => (
              <EducationCard
                key={item._id}
                education={item}
                onDelete={handleDelete}
                onEdit={
                  setEditingEducation
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
