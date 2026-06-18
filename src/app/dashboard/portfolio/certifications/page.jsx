"use client";

import { useEffect, useState } from "react";
import CertificationForm from "@/components/certifications/CertificationForm";
import CertificationCard from "@/components/certifications/CertificationCard";
import BuilderHeader from "@/components/builder/BuilderHeader";
import { useRouter } from "next/navigation";
export default function CertificationsPage() {
  const [certifications, setCertifications] = useState([]);
  const router = useRouter();

  const [editingCertification, setEditingCertification] = useState(null);

  const fetchCertifications = async () => {
    try {
      const response = await fetch("/api/portfolio/certifications");

      const data = await response.json();

      setCertifications(data.certifications || []);
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
    <div className="mx-auto max-w-7xl space-y-8 p-6 lg:p-10">
      <BuilderHeader
        title="Certifications"
        description="Showcase certifications, licenses, and professional credentials."
        step={7}
        totalSteps={8}
      />

      {/* Form */}
      <div
        className="
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.03]
        p-6
        lg:p-8
      "
      >
        <CertificationForm
          editingCertification={editingCertification}
          setEditingCertification={setEditingCertification}
          fetchCertifications={fetchCertifications}
        />
      </div>

      {/* Certifications List */}
      <div
        className="
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.03]
        p-6
        lg:p-8
      "
      >
        <div
          className="
          flex
          flex-col
          gap-4
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
        >
          <div>
            <h2
              className="
              text-xl
              font-semibold
              text-white
            "
            >
              Your Certifications
            </h2>

            <p className="mt-2 text-zinc-500">
              Certifications and credentials displayed on your portfolio.
            </p>
          </div>

          <div
            className="
            inline-flex
            items-center
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-4
            py-2
            text-sm
            text-zinc-400
          "
          >
            {certifications.length} Certificates
          </div>
        </div>

        {certifications.length === 0 ? (
          <div
            className="
            mt-8
            rounded-3xl
            border
            border-dashed
            border-white/10
            bg-white/[0.02]
            p-12
            text-center
          "
          >
            <h3
              className="
              text-lg
              font-semibold
              text-white
            "
            >
              No certifications added yet
            </h3>

            <p className="mt-3 text-zinc-500">
              Add your first certification to strengthen your credibility.
            </p>
          </div>
        ) : (
          <div
            className="
            mt-8
            grid
            gap-5
            md:grid-cols-2
          "
          >
            {certifications.map((certification) => (
              <CertificationCard
                key={certification._id}
                certification={certification}
                fetchCertifications={fetchCertifications}
                setEditingCertification={setEditingCertification}
              />
            ))}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div
        className="
        flex
        flex-col
        gap-3
        sm:flex-row
      "
      >
        <button
          type="button"
          onClick={() => router.push("/dashboard/portfolio/education")}
          className="
          flex-1
          rounded-2xl
          border
          border-white/10
          py-3.5
          font-medium
          text-white
          transition
          hover:bg-white/[0.04]
        "
        >
          ← Back
        </button>

        <button
          type="button"
          onClick={() => router.push("/dashboard/templates")}
          className="
          flex-1
          rounded-2xl
          bg-white
          py-3.5
          font-medium
          text-black
          transition
          hover:opacity-90
        "
        >
          Choose Template →
        </button>
      </div>
    </div>
  );
}
