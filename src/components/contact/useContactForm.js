export function useContactForm(
  ownerEmail
) {
  const [loading, setLoading] =
    useState(false);

  const submitContactForm =
    async (data) => {
      try {
        setLoading(true);

        const response =
          await fetch(
            "/api/contact",
            {
              method: "POST",
              headers: {
                "Content-Type":
                  "application/json",
              },
              body: JSON.stringify({
                ...data,
                ownerEmail,
              }),
            }
          );

        return await response.json();
      } finally {
        setLoading(false);
      }
    };

  return {
    loading,
    submitContactForm,
  };
}