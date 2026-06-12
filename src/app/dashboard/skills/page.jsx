"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import SkillForm from "@/components/skills/SkillForm";
import SkillCard from "@/components/skills/SkillCard";

export default function SkillsPage() {
  // Skills State
  const [skills, setSkills] = useState([]);

  // Fetch Skills
  const fetchSkills = async () => {
    try {
      const response = await fetch("/api/portfolio/skills");

      const result = await response.json();

      if (!result.success) return;

      setSkills(result.skills);
    } catch (error) {
      console.log(error);
    }
  };

  // Load Skills
  useEffect(() => {
    const loadSkills = async () => {
      await fetchSkills();
    };

    loadSkills();
  }, []);

  // Delete Skill
  const handleDelete = async (skillId) => {
    try {
      const response = await fetch("/api/portfolio/skills", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          skillId,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message);
        return;
      }

      toast.success(result.message);

      await fetchSkills();
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Skills</h1>

        <p className="text-gray-500 mt-2">
          Manage your skills and technologies.
        </p>
      </div>

      {/* Skill Form */}
      <SkillForm fetchSkills={fetchSkills} />

      {/* Skills Grid */}
      <div className="bg-white border border-zinc-200 rounded-3xl p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Your Skills</h2>

          <span className="px-3 py-1 bg-zinc-100 rounded-full text-sm font-medium">
            {skills.length} Skills
          </span>
        </div>

        <p className="text-gray-500 mt-2">Technologies you&apos;ve added.</p>

        {skills.length === 0 ? (
          <div
            className="mt-8 border-2  border-dashed  border-zinc-200  rounded-2xl   p-10  text-center"
          >
            <h3 className="font-semibold">No Skills Added</h3>

            <p className="text-zinc-500 mt-2">
              Add your first skill to start building your portfolio.
            </p>
          </div>
        ) : (
          <div
            className="
              grid
              sm:grid-cols-2
              lg:grid-cols-3
              gap-3
              mt-6
            "
          >
            {skills.map((skill) => (
              <SkillCard
                key={skill._id}
                skill={skill}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
