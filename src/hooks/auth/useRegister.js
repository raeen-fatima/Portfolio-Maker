"use client";

import { useCallback, useState } from "react";

export function useRegister() {
  const [loading, setLoading] = useState(false);

  const registerUser = useCallback(async (userData) => {
    try {
      setLoading(true);

      const response = await fetch("/api/auth/register", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(userData),
      });

      const result = await response.json();

      return {
        success: response.ok,
        data: result,
      };
    } catch (error) {
      console.log(error);

      return {
        success: false,

        data: {
          message: "Something went wrong",
        },
      };
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    registerUser,
  };
}