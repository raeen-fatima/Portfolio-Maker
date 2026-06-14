"use client";

import { useEffect, useState } from "react";
import CertificationForm from "@/components/certifications/CertificationForm";
import CertificationCard from "@/components/certifications/CertificationCard";

export default function CertificationsPage() {
  const [certifications, setCertifications] =
    useState([]);

  const [
    editingCertification,
    setEditingCertification,
  ] = useState(null);

  const fetchCertifications =
    async () => {
      try {
        const response =
          await fetch(
            "/api/portfolio/certifications"
          );

        const data =
          await response.json();

        setCertifications(
          data.certifications || []
        );
      } catch (error) {
        console.log(error);
      }
    };

  
  useEffect(() => {
  const loadCertifications = async () => {
    await fetchCertifications();
  };

  loadCertifications();
}, []);

  return (
    <div className="space-y-8">
      <CertificationForm
        editingCertification={
          editingCertification
        }
        setEditingCertification={
          setEditingCertification
        }
        fetchCertifications={
          fetchCertifications
        }
      />

      <div>
        <h2 className="text-2xl font-bold">
          Certifications
        </h2>

        <p className="mt-2 text-zinc-500">
          Manage your certifications and
          credentials.
        </p>

        {certifications.length === 0 ? (
          <div
            className="
              mt-6
              rounded-3xl
              border
              border-dashed
              border-zinc-300
              p-10
              text-center
            "
          >
            <p className="text-zinc-500">
              No certifications added yet.
            </p>
          </div>
        ) : (
          <div
            className="
              mt-6
              grid
              gap-5
              md:grid-cols-2
            "
          >
            {certifications.map(
              (certification) => (
                <CertificationCard
                  key={
                    certification._id
                  }
                  certification={
                    certification
                  }
                  fetchCertifications={
                    fetchCertifications
                  }
                  setEditingCertification={
                    setEditingCertification
                  }
                />
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}