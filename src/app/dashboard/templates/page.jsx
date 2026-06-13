"use client";

import TemplateCard from "@/components/templates/TemplateCard";
import { portfolioTemplates } from "@/lib/templates";
import { LayoutTemplate } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function TemplatesPage() {
  const [selectedTemplate, setSelectedTemplate] =
    useState("template-1");
  const [savingTemplate, setSavingTemplate] =
    useState("");
  const [loading, setLoading] =
    useState(true);

  const fetchTemplate = async () => {
    try {
      const response = await fetch(
        "/api/portfolio/template"
      );

      const result = await response.json();

      if (!result.success) return;

      setSelectedTemplate(result.template);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadTemplate = async () => {
      await fetchTemplate();
    };

    loadTemplate();
  }, []);

  const handleSelect = async (template) => {
    try {
      setSavingTemplate(template);

      const response = await fetch(
        "/api/portfolio/template",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            template,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message);
        return;
      }

      setSelectedTemplate(result.template);
      toast.success(result.message);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setSavingTemplate("");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">
            Templates
          </h1>

          <p className="text-gray-500 mt-2">
            Choose the look and structure for
            your published portfolio.
          </p>
        </div>

        <div className="inline-flex items-center gap-3 bg-white border border-zinc-200 rounded-2xl px-4 py-3 w-fit">
          <LayoutTemplate size={18} />
          <span className="text-sm font-medium">
            {loading
              ? "Loading selection"
              : `Selected: ${
                  portfolioTemplates.find(
                    (template) =>
                      template.id ===
                      selectedTemplate
                  )?.name || "Classic"
                }`}
          </span>
        </div>
      </div>

      <div className="bg-white border border-zinc-200 rounded-3xl p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold">
              Template Library
            </h2>

            <p className="text-gray-500 mt-2">
              Start with one of these layouts.
              You can switch anytime.
            </p>
          </div>

          <span className="px-3 py-1 bg-zinc-100 rounded-full text-sm font-medium shrink-0">
            {portfolioTemplates.length} Templates
          </span>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mt-6">
          {portfolioTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              isSelected={
                selectedTemplate ===
                template.id
              }
              isSaving={
                savingTemplate === template.id
              }
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
