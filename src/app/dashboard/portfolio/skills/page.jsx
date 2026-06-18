"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import SkillForm from "@/components/skills/SkillForm";
import SkillCard from "@/components/skills/SkillCard";
import BuilderHeader from "@/components/builder/BuilderHeader";

export default function SkillsPage() {
  const [skills, setSkills] = useState([]);

  const router = useRouter();

  const fetchSkills = async () => {
    try {
      const response = await fetch(
        "/api/portfolio/skills"
      );

      const result =
        await response.json();

      if (!result.success) return;

      setSkills(result.skills);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleDelete = async (
    skillId
  ) => {
    try {
      const response = await fetch(
        "/api/portfolio/skills",
        {
          method: "DELETE",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            skillId,
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
        result.message
      );

      await fetchSkills();
    } catch (error) {
      console.log(error);

      toast.error(
        "Something went wrong"
      );
    }
  };

  return (
    <div className="space-y-8 p-6 lg:p-10">
      {/* Header */}
      <BuilderHeader
        title="Skills"
        description="Add the technologies, frameworks and tools you use."
        step={3}
        totalSteps={7}
      />

      {/* Add Skill */}
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
        <div>
          <h2
            className="
              text-xl
              font-semibold
              text-white
            "
          >
            Add Skills
          </h2>

          <p
            className="
              mt-2
              text-zinc-500
            "
          >
            Add technologies that
            showcase your expertise.
          </p>
        </div>

        <div className="mt-6">
          <SkillForm
            fetchSkills={
              fetchSkills
            }
          />
        </div>
      </div>

      {/* Skills */}
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
              Your Skills
            </h2>

            <p
              className="
                mt-2
                text-zinc-500
              "
            >
              Technologies currently
              displayed on your
              portfolio.
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
            {skills.length} Skills
          </div>
        </div>

        {skills.length === 0 ? (
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
              No skills added yet
            </h3>

            <p
              className="
                mt-3
                text-zinc-500
              "
            >
              Add your first skill to
              start building your
              portfolio.
            </p>
          </div>
        ) : (
          <div
            className="
              mt-8
              grid
              gap-3
              sm:grid-cols-2
              xl:grid-cols-3
            "
          >
            {skills.map(
              (skill) => (
                <SkillCard
                  key={skill._id}
                  skill={skill}
                  onDelete={
                    handleDelete
                  }
                />
              )
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div
        className="
          flex
          flex-col
          gap-3
          sm:flex-row
        "
      >
        <button
        onClick={() =>
            router.push(
              "/dashboard/portfolio/about"
            )
          }
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
         Back
        </button>

        <button
          onClick={() =>
            router.push(
              "/dashboard/portfolio/projects"
            )
          }
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
          Save & Continue →
        </button>
      </div>
    </div>
  );
}