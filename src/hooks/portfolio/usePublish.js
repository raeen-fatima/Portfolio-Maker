"use client";

import { useState } from "react";
import { toast } from "sonner";

export function usePublish() {
  const [loading, setLoading] = useState(false);

  const fetchStatus = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "/api/dashboard/portfolio/publish/status",
      );

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      return {
        isPublished: data.isPublished,
        slug: data.slug,
      };
    } catch (error) {
      console.log(error);

      toast.error(error.message);

      return null;
    } finally {
      setLoading(false);
    }
  };

  const togglePublish = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "/api/dashboard/portfolio/publish",
        {
          method: "PUT",
        },
      );

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      toast.success(
        data.isPublished
          ? "Portfolio published successfully"
          : "Portfolio unpublished successfully",
      );

      return {
        isPublished: data.isPublished,
        slug: data.slug,
      };
    } catch (error) {
      console.log(error);

      toast.error(error.message);

      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    fetchStatus,
    togglePublish,
  };
}