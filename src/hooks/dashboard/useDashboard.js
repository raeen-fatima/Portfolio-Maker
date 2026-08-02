import { useEffect, useState } from "react";

export function useDashboard() {
  const [dashboard, setDashboard] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function fetchDashboard() {
      try {
        const response =
          await fetch(
            "/api/dashboard/overview"
          );

        const result =
          await response.json();

        if (response.ok) {
          setDashboard(result);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboard();
  }, []);

  return {
    dashboard,
    loading,
  };
}