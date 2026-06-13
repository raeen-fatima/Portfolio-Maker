"use client";

import PortfolioPreview from "@/components/preview/PortfolioPreview";
import { portfolioTemplates } from "@/lib/templates";
import {
  Eye,
  LayoutTemplate,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function PreviewPage() {
  const [portfolio, setPortfolio] =
    useState(null);
  const [loading, setLoading] =
    useState(true);

  const fetchPreview = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "/api/portfolio/preview"
      );

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message);
        return;
      }

      setPortfolio(result.portfolio);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadPreview = async () => {
      await fetchPreview();
    };

    loadPreview();
  }, []);

  const selectedTemplate =
    portfolioTemplates.find(
      (template) =>
        template.id === portfolio?.template
    ) || portfolioTemplates[0];

  return (
    <div className="space-y-6">
      <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">
            Preview
          </h1>

          <p className="text-gray-500 mt-2">
            See how your portfolio will look
            before publishing it.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="inline-flex items-center gap-3 bg-white border border-zinc-200 rounded-2xl px-4 py-3">
            <LayoutTemplate size={18} />
            <span className="text-sm font-medium">
              {selectedTemplate.name}
            </span>
          </div>

          <Link
            href="/dashboard/templates"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 border border-zinc-200 bg-white rounded-2xl font-medium hover:bg-zinc-100 transition"
          >
            <Eye size={17} />
            Change Template
          </Link>

          <button
            type="button"
            onClick={fetchPreview}
            className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-black text-white rounded-2xl font-medium hover:opacity-90 transition"
          >
            <RefreshCw size={17} />
            Refresh
          </button>
        </div>
      </div>

      {loading ? (
        <div className="bg-white border border-zinc-200 rounded-3xl p-10 text-center">
          <h2 className="text-xl font-bold">
            Loading Preview
          </h2>

          <p className="text-gray-500 mt-2">
            Preparing your portfolio draft.
          </p>
        </div>
      ) : (
        <div className="bg-zinc-100 border border-zinc-200 rounded-3xl p-3 md:p-5">
          <PortfolioPreview
            portfolio={portfolio}
          />
        </div>
      )}
    </div>
  );
}
