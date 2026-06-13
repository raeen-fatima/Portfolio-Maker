"use client";

import ExperienceCard from "@/components/experience/ExperienceCard";
import ExperienceForm from "@/components/experience/ExperienceForm";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function ExperiencePage() {
  const [experience, setExperience] =
    useState([]);
  const [
    editingExperience,
    setEditingExperience,
  ] = useState(null);

  const fetchExperience = async () => {
    try {
      const response = await fetch(
        "/api/portfolio/experience"
      );

      const result = await response.json();

      if (!result.success) return;

      setExperience(result.experience);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadExperience = async () => {
      await fetchExperience();
    };

    loadExperience();
  }, []);

  const handleDelete = async (
    experienceId
  ) => {
    try {
      const response = await fetch(
        "/api/portfolio/experience",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            experienceId,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message);
        return;
      }

      toast.success(result.message);

      await fetchExperience();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Experience
        </h1>

        <p className="text-gray-500 mt-2">
          Add your work history,
          internships, and professional roles.
        </p>
      </div>

      <ExperienceForm
        editingExperience={
          editingExperience
        }
        setEditingExperience={
          setEditingExperience
        }
        fetchExperience={fetchExperience}
      />

      <div className="bg-white border border-zinc-200 rounded-3xl p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold">
              Your Experience
            </h2>

            <p className="text-gray-500 mt-2">
              Roles you have added to your
              portfolio.
            </p>
          </div>

          <span className="px-3 py-1 bg-zinc-100 rounded-full text-sm font-medium shrink-0">
            {experience.length} Roles
          </span>
        </div>

        {experience.length === 0 ? (
          <div className="mt-8 border-2 border-dashed border-zinc-200 rounded-2xl p-10 text-center">
            <h3 className="font-semibold">
              No Experience Added
            </h3>

            <p className="text-zinc-500 mt-2">
              Add your first role to make
              your portfolio stronger.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 mt-6">
            {experience.map((item) => (
              <ExperienceCard
                key={item._id}
                experience={item}
                onDelete={handleDelete}
                onEdit={
                  setEditingExperience
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
