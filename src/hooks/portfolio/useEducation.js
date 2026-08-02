import { useState } from "react";
import { toast } from "sonner";

export function useEducation() {
  const [loading, setLoading] = useState(false);

  const fetchEducation = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/dashboard/portfolio/education");

      const data = await response.json();

      return data.education;
    } catch (error) {
      console.log(error);

      toast.error("Failed to fetch education");

      return [];
    } finally {
      setLoading(false);
    }
  };

  const saveEducation = async (body) => {
    try {
      setLoading(true);

      const response = await fetch("/api/dashboard/portfolio/education", {
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

      return data.education;
    } catch (error) {
      toast.error(error.message);

      return null;
    } finally {
      setLoading(false);
    }
  };

  const updateEducation = async (body) => {
    try {
      setLoading(true);

      const response = await fetch("/api/dashboard/portfolio/education", {
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

      return data.education;
    } catch (error) {
      toast.error(error.message);

      return null;
    } finally {
      setLoading(false);
    }
  };

  const deleteEducation = async (educationId) => {
    try {
      setLoading(true);

      const response = await fetch("/api/dashboard/portfolio/education", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          educationId,
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
    fetchEducation,
    saveEducation,
    updateEducation,
    deleteEducation,
  };
}
