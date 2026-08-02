"use client";

import { useCallback, useState } from "react";

export function useResetPassword() {
  const [loading, setLoading] = useState(false);

  const resetPassword = useCallback(
    async (token, data) => {
      try {
        setLoading(true);

        const response = await fetch(
          "/api/auth/reset-password",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              token,
              password: data.password,
              confirmPassword:
                data.confirmPassword,
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
        setLoading(false);
      }
    },
    [],
  );

  return {
    loading,
    resetPassword,
  };
}