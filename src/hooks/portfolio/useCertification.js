"use client";

import { useState } from "react";
import { toast } from "sonner";

export function useCertification() {
  const [loading, setLoading] =
    useState(false);

  const fetchCertifications =
    async () => {
      try {
        setLoading(true);

        const response =
          await fetch(
            "/api/dashboard/portfolio/certifications"
          );

        const data =
          await response.json();

        return (
          data.certifications || []
        );
      } catch (error) {
        console.log(error);

        toast.error(
          "Failed to fetch certifications"
        );

        return [];
      } finally {
        setLoading(false);
      }
    };

  const saveCertification =
    async (body) => {
      try {
        setLoading(true);

        const response =
          await fetch(
            "/api/dashboard/portfolio/certifications",
            {
              method: "POST",
              headers: {
                "Content-Type":
                  "application/json",
              },
              body: JSON.stringify(
                body
              ),
            }
          );

        const data =
          await response.json();

        if (!data.success) {
          throw new Error(
            data.message
          );
        }

        toast.success(
          data.message
        );

        return data.certification;
      } catch (error) {
        toast.error(
          error.message
        );

        return null;
      } finally {
        setLoading(false);
      }
    };

  const updateCertification =
    async (body) => {
      try {
        setLoading(true);

        const response =
          await fetch(
            "/api/dashboard/portfolio/certifications",
            {
              method: "PUT",
              headers: {
                "Content-Type":
                  "application/json",
              },
              body: JSON.stringify(
                body
              ),
            }
          );

        const data =
          await response.json();

        if (!data.success) {
          throw new Error(
            data.message
          );
        }

        toast.success(
          data.message
        );

        return data.certification;
      } catch (error) {
        toast.error(
          error.message
        );

        return null;
      } finally {
        setLoading(false);
      }
    };

  const deleteCertification =
    async (
      certificationId
    ) => {
      try {
        setLoading(true);

        const response =
          await fetch(
            "/api/dashboard/portfolio/certifications",
            {
              method: "DELETE",
              headers: {
                "Content-Type":
                  "application/json",
              },
              body: JSON.stringify({
                certificationId,
              }),
            }
          );

        const data =
          await response.json();

        if (!data.success) {
          throw new Error(
            data.message
          );
        }

        toast.success(
          data.message
        );

        return true;
      } catch (error) {
        toast.error(
          error.message
        );

        return false;
      } finally {
        setLoading(false);
      }
    };

  return {
    loading,
    fetchCertifications,
    saveCertification,
    updateCertification,
    deleteCertification,
  };
}