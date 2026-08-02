// import { useEffect, useState } from "react";

// export function useAnalytics() {
//   const [analytics, setAnalytics] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const refresh = async () => {
//     try {
//       setLoading(true);

//       const response = await fetch("/api/portfolio/analytics");

//       const result = await response.json();

//       if (!response.ok) {
//         throw new Error(result.message);
//       }

//       setAnalytics(result);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     refresh();
//   }, []);

//   return {
//     analytics,
//     loading,
//     error,
//     refresh,
//   };
// }

import { useCallback, useState } from "react";

export function useAnalytics() {
  const [analytics, setAnalytics] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const loadAnalytics =
    useCallback(async () => {
      try {
        setLoading(true);
        setError("");

        const response =
          await fetch(
            "/api/dashboard/analytics",
            {
              cache: "no-store",
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

        setAnalytics(result);

        return {
          success: true,
          data: result,
        };
      } catch (error) {
        console.log(error);

        const message =
          "Unable to load analytics";

        setError(message);

        return {
          success: false,
          data: {
            message,
          },
        };
      } finally {
        setLoading(false);
      }
    }, []);

  return {
    analytics,
    loading,
    error,
    loadAnalytics,
  };
}