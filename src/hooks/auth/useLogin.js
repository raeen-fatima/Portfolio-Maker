"use client";

import { useCallback, useState } from "react";

export function useLogin() {
  const [loading, setLoading] = useState(false);

  const login = useCallback(async (credentials) => {
    try {
      setLoading(true);

      const response = await fetch("/api/auth/login", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(credentials),
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
    login,
  };
}