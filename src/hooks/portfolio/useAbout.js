"use client";

import { useState, useCallback } from "react";

export default function useAbout() {
  const [loading, setLoading] = useState(false);

  const fetchAbout = useCallback(async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/dashboard/portfolio/about");
      const result = await response.json();

      if (!response.ok) {
        return null;
      }

      return result.about;
    } catch (error) {
      console.error("Fetch About Error:", error);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const saveAbout = useCallback(async (aboutData) => {
    try {
      setLoading(true);

      const response = await fetch("/api/dashboard/portfolio/about", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(aboutData),
      });

      const result = await response.json();

      return {
        success: response.ok,
        data: result,
      };
    } catch (error) {
      console.error("Save About Error:", error);

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
    fetchAbout,
    saveAbout,
  };
}