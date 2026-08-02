"use client";

import { useState } from "react";
import { toast } from "sonner";

export function useTemplate() {
  const [loading, setLoading] = useState(false);

  const selectTemplate = async (selectedTemplate) => {
    try {
      setLoading(true);

      const response = await fetch(
        "/api/dashboard/portfolio/template",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            selectedTemplate,
          }),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      toast.success("Template selected successfully");

      return true;
    } catch (error) {
      console.log(error);

      toast.error(error.message);

      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    selectTemplate,
  };
}