"use client";

import { useState, useCallback } from "react";

export default function useSkills() {
  const [loading, setLoading] = useState(false);

  const fetchSkills = useCallback(async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/dashboard/portfolio/skills");
      const result = await response.json();

      if (!response.ok) {
        return [];
      }

      return result.skills;
    } catch (error) {
      console.error("Fetch Skills Error:", error);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteSkill = useCallback(async (skillId) => {
    try {
      setLoading(true);

      const response = await fetch("/api/dashboard/portfolio/skills", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ skillId }),
      });

      const result = await response.json();

      return {
        success: response.ok,
        data: result,
      };
    } catch (error) {
      console.error("Delete Skill Error:", error);

      return {
        success: false,
        data: {
          message: "Something went wrong. Please try again.",
        },
      };
    } finally {
      setLoading(false);
    }
  }, []);

  const saveSkill = useCallback(async (skillData) => {
  try {
    setLoading(true);

    const response = await fetch("/api/dashboard/portfolio/skills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(skillData),
    });

    const result = await response.json();

    return {
      success: response.ok,
      data: result,
    };
  } catch (error) {
    console.error("Save Skill Error:", error);

    return {
      success: false,
      data: {
        message: "Something went wrong. Please try again.",
      },
    };
  } finally {
    setLoading(false);
  }
}, []);

  return {
    loading,
    fetchSkills,
     saveSkill,
    deleteSkill,
  };
}