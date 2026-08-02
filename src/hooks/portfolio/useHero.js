import { useCallback, useState } from "react";

export function useHero() {
  const [loading, setLoading] = useState(false);

  const fetchHero = useCallback(async () => {
    try {
      const response = await fetch(
        "/api/dashboard/portfolio/hero",
      );

      const result = await response.json();

      if (!result.success) {
        return null;
      }

      return result.hero;
    } catch (error) {
      console.log(error);

      return null;
    }
  }, []);

  const saveHero = useCallback(
    async (heroData) => {
      try {
        setLoading(true);

        const response = await fetch(
          "/api/dashboard/portfolio/hero",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify(heroData),
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
    fetchHero,
    saveHero,
  };
}