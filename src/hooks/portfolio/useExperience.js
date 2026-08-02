import { useState } from "react";
import { toast } from "sonner";

export function useExperience() {
  const [loading, setLoading] = useState(false);

  const fetchExperience = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/dashboard/portfolio/experience");

      const data = await response.json();

      return data.experience;
    } catch (error) {
      console.log(error);

      toast.error("Failed to fetch experience");

      return [];
    } finally {
      setLoading(false);
    }
  };

  const saveExperience = async (body) => {
    try {
      setLoading(true);

      const response = await fetch("/api/dashboard/portfolio/experience", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      toast.success(data.message);

      return data.experience;
    } catch (error) {
      toast.error(error.message);

      return null;
    } finally {
      setLoading(false);
    }
  };

  const updateExperience = async (body) => {
    try {
      setLoading(true);

      const response = await fetch("/api/dashboard/portfolio/experience", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      toast.success(data.message);

      return data.experience;
    } catch (error) {
      toast.error(error.message);

      return null;
    } finally {
      setLoading(false);
    }
  };

  const deleteExperience = async (experienceId) => {
    try {
      setLoading(true);

      const response = await fetch("/api/dashboard/portfolio/experience", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          experienceId,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      toast.success(data.message);

      return true;
    } catch (error) {
      toast.error(error.message);

      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    fetchExperience,
    saveExperience,
    updateExperience,
    deleteExperience,
  };
}
