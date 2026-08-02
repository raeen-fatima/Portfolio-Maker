"use client";

import { useState, useCallback } from "react";

export default function useProjects() {
  const [loading, setLoading] = useState(false);

  const fetchProjects = useCallback(async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/dashboard/portfolio/projects");
      const result = await response.json();

      if (!response.ok) {
        return [];
      }

      return result.projects;
    } catch (error) {
      console.error("Fetch Projects Error:", error);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  const saveProject = useCallback(async (projectData) => {
    try {
      setLoading(true);

      const response = await fetch("/api/dashboard/portfolio/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      const result = await response.json();

      return {
        success: response.ok,
        data: result,
      };
    } catch (error) {
      console.error("Save Project Error:", error);

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

  const updateProject = useCallback(async (projectData) => {
    try {
      setLoading(true);

      const response = await fetch("/api/dashboard/portfolio/projects", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      const result = await response.json();

      return {
        success: response.ok,
        data: result,
      };
    } catch (error) {
      console.error("Update Project Error:", error);

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

  const deleteProject = useCallback(async (projectId) => {
    try {
      setLoading(true);

      const response = await fetch("/api/dashboard/portfolio/projects", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ projectId }),
      });

      const result = await response.json();

      return {
        success: response.ok,
        data: result,
      };
    } catch (error) {
      console.error("Delete Project Error:", error);

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
    fetchProjects,
    saveProject,
    updateProject,
    deleteProject,
  };
}