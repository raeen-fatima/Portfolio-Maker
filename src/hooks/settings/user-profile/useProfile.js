"use client";

import { useCallback, useState } from "react";

export function useProfile() {
  const [profile, setProfile] =
    useState({
      name: "",
      username: "",
      email: "",
      image: "",
    });

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const fetchProfile =
    useCallback(async () => {
      try {
        setLoading(true);

        const response =
          await fetch(
            "/api/dashboard/settings/user/profile",
          );

        const result =
          await response.json();

        if (!response.ok) {
          return {
            success: false,
            data: result,
          };
        }

        setProfile(result.user);

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
              "Failed to load profile",
          },
        };
      } finally {
        setLoading(false);
      }
    }, []);

  const updateProfile =
    useCallback(async (profile) => {
      try {
        setSaving(true);

        const response =
          await fetch(
            "/api/dashboard/settings/user/profile",
            {
              method: "PUT",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                name: profile.name,
                username:
                  profile.username,
                image: profile.image,
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

        setProfile(result.user);

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
    }, []);

  return {
    profile,
    setProfile,

    loading,
    saving,

    fetchProfile,
    updateProfile,
  };
}


export function usePassword() {
  const [
    passwordLoading,
    setPasswordLoading,
  ] = useState(false);

  const changePassword =
    useCallback(
      async (
        currentPassword,
        newPassword,
      ) => {
        try {
          setPasswordLoading(true);

          const response =
            await fetch(
              "/api/dashboard/settings/user/change-password",
              {
                method: "PUT",

                headers: {
                  "Content-Type":
                    "application/json",
                },

                body: JSON.stringify({
                  currentPassword,
                  newPassword,
                }),
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
        } finally {
          setPasswordLoading(
            false,
          );
        }
      },
      [],
    );

  return {
    passwordLoading,
    changePassword,
  };
}