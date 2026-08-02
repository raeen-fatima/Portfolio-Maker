"use client";

import { useCallback, useState } from "react";

function normalizeSlug(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function useSettings() {
  const [user, setUser] = useState(null);

  const [slug, setSlug] = useState("");

  const [template, setTemplate] =
    useState("nova");

  const [isPublished, setIsPublished] =
    useState(false);

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const fetchSettings =
    useCallback(async () => {
      try {
        setLoading(true);

        const response =
          await fetch(
            "/api/dashboard/settings",
          );

        const result =
          await response.json();

        if (!response.ok) {
          return {
            success: false,
            data: result,
          };
        }

        setUser(result.user);

        setSlug(
          result.settings.slug || "",
        );

        setTemplate(
          result.settings
            .selectedTemplate ||
            "nova",
        );

        setIsPublished(
          Boolean(
            result.settings
              .isPublished,
          ),
        );

        return {
          success: true,
          data: result,
        };
      } catch (error) {
        console.log(error);

        return {
          success: false,
          data: {
            message:
              "Failed to load settings",
          },
        };
      } finally {
        setLoading(false);
      }
    }, []);

  const saveSettings =
    useCallback(async () => {
      try {
        setSaving(true);

        const response =
          await fetch(
            "/api/dashboard/settings",
            {
              method: "PUT",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                slug:
                  normalizeSlug(slug),
              }),
            },
          );

        const result =
          await response.json();

        if (!response.ok) {
          return {
            success: false,
            data: result,
          };
        }

        setSlug(
          result.settings.slug,
        );

        return {
          success: true,
          data: result,
        };
      } catch (error) {
        console.log(error);

        return {
          success: false,
          data: {
            message:
              "Something went wrong",
          },
        };
      } finally {
        setSaving(false);
      }
    }, [slug]);

  const deletePortfolio =
    useCallback(async () => {
      try {
        const response =
          await fetch(
            "/api/dashboard/settings/delete",
            {
              method: "DELETE",
            },
          );

        const result =
          await response.json();

        return {
          success: response.ok,
          data: result,
        };
      } catch (error) {
        console.log(error);

        return {
          success: false,
          data: {
            message:
              "Something went wrong",
          },
        };
      }
    }, []);

  return {
    user,
    slug,
    setSlug,
    template,
    isPublished,

    loading,
    saving,

    fetchSettings,
    saveSettings,
    deletePortfolio,
  };
}