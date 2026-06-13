"use client";

import {
  CheckCircle2,
  Copy,
  Globe,
  LayoutTemplate,
  Save,
  User,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { portfolioTemplates } from "@/lib/templates";

function normalizeSlug(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function SettingsPage() {
  const [user, setUser] = useState(null);
  const [slug, setSlug] = useState("");
  const [template, setTemplate] =
    useState("template-1");
  const [isPublished, setIsPublished] =
    useState(false);
  const [loading, setLoading] =
    useState(true);
  const [saving, setSaving] =
    useState(false);

  const selectedTemplate = useMemo(
    () =>
      portfolioTemplates.find(
        (item) => item.id === template
      ) || portfolioTemplates[0],
    [template]
  );

  const portfolioPath = slug
    ? `/${slug}`
    : "";

  const fetchSettings = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "/api/portfolio/settings"
      );

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message);
        return;
      }

      setUser(result.user);
      setSlug(result.settings.slug || "");
      setTemplate(
        result.settings.template ||
          "template-1"
      );
      setIsPublished(
        Boolean(result.settings.isPublished)
      );
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadSettings = async () => {
      await fetchSettings();
    };

    loadSettings();
  }, []);

  const handleSave = async () => {
    try {
      setSaving(true);

      const response = await fetch(
        "/api/portfolio/settings",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            slug: normalizeSlug(slug),
            isPublished,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message);
        return;
      }

      setSlug(result.settings.slug);
      setTemplate(
        result.settings.template
      );
      setIsPublished(
        result.settings.isPublished
      );

      toast.success(result.message);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setSaving(false);
    }
  };

  const handleCopy = async () => {
    if (!portfolioPath) {
      toast.error(
        "Save a portfolio URL first"
      );
      return;
    }

    await navigator.clipboard.writeText(
      `${window.location.origin}${portfolioPath}`
    );
    toast.success("Portfolio URL copied");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your portfolio URL,
          publishing status, and account
          details.
        </p>
      </div>

      {loading ? (
        <div className="bg-white border border-zinc-200 rounded-3xl p-10 text-center">
          <h2 className="text-xl font-bold">
            Loading Settings
          </h2>

          <p className="text-gray-500 mt-2">
            Getting your portfolio controls
            ready.
          </p>
        </div>
      ) : (
        <div className="grid xl:grid-cols-[1fr_360px] gap-6">
          <div className="space-y-6">
            <section className="bg-white border border-zinc-200 rounded-3xl p-6 lg:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold">
                    Portfolio URL
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Choose a clean public link
                    for your portfolio.
                  </p>
                </div>

                <Globe className="shrink-0" />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium mb-2">
                  Slug
                </label>

                <div className="flex flex-col md:flex-row gap-3">
                  <div className="flex-1 flex items-center bg-zinc-50 border border-zinc-200 rounded-2xl overflow-hidden focus-within:border-black focus-within:bg-white transition">
                    <span className="px-4 py-3.5 text-zinc-500 border-r border-zinc-200 hidden sm:block">
                      your-site.com/
                    </span>

                    <input
                      value={slug}
                      onChange={(event) =>
                        setSlug(
                          normalizeSlug(
                            event.target.value
                          )
                        )
                      }
                      placeholder="raeen-fatima"
                      className="w-full bg-transparent px-4 py-3.5 outline-none"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-zinc-200 rounded-2xl font-medium hover:bg-zinc-100 transition"
                  >
                    <Copy size={17} />
                    Copy
                  </button>
                </div>

                <p className="text-sm text-zinc-500 mt-3 break-all">
                  {portfolioPath ||
                    "Your portfolio URL will appear here."}
                </p>
              </div>
            </section>

            <section className="bg-white border border-zinc-200 rounded-3xl p-6 lg:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <div>
                  <h2 className="text-2xl font-bold">
                    Publish Status
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Control whether your
                    portfolio is visible once
                    the public route is active.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setIsPublished(
                      (value) => !value
                    )
                  }
                  className={`relative h-9 w-16 rounded-full transition ${
                    isPublished
                      ? "bg-black"
                      : "bg-zinc-300"
                  }`}
                  aria-label="Toggle publish status"
                >
                  <span
                    className={`absolute top-1 h-7 w-7 rounded-full bg-white transition ${
                      isPublished
                        ? "left-8"
                        : "left-1"
                    }`}
                  />
                </button>
              </div>

              <div className="mt-5 inline-flex items-center gap-2 bg-zinc-100 px-4 py-2 rounded-full text-sm font-medium">
                <CheckCircle2 size={17} />
                {isPublished
                  ? "Published"
                  : "Draft"}
              </div>
            </section>

            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="w-full inline-flex items-center justify-center gap-2 bg-black text-white py-3.5 rounded-2xl font-medium hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Save size={18} />
              {saving
                ? "Saving..."
                : "Save Settings"}
            </button>
          </div>

          <aside className="space-y-6">
            <section className="bg-white border border-zinc-200 rounded-3xl p-6">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-black text-white flex items-center justify-center text-xl font-bold">
                  {user?.name?.charAt(0) ||
                    "U"}
                </div>

                <div className="min-w-0">
                  <h2 className="font-bold truncate">
                    {user?.name ||
                      "Portfolio User"}
                  </h2>

                  <p className="text-sm text-zinc-500 truncate">
                    {user?.email}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 text-sm text-zinc-500">
                <User size={17} />
                Account information
              </div>
            </section>

            <section className="bg-white border border-zinc-200 rounded-3xl p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="font-bold">
                    Selected Template
                  </h2>

                  <p className="text-sm text-zinc-500 mt-1">
                    {selectedTemplate.name}
                  </p>
                </div>

                <LayoutTemplate size={22} />
              </div>

              <div
                className={`${selectedTemplate.background} border ${selectedTemplate.border} rounded-2xl p-4 mt-5`}
              >
                <div
                  className={`${selectedTemplate.preview.header} h-14 rounded-xl`}
                />

                <div className="grid grid-cols-3 gap-2 mt-3">
                  <div
                    className={`${selectedTemplate.preview.panel} h-10 rounded-lg`}
                  />
                  <div
                    className={`${selectedTemplate.preview.accent} h-10 rounded-lg`}
                  />
                  <div
                    className={`${selectedTemplate.preview.panel} h-10 rounded-lg`}
                  />
                </div>
              </div>

              <Link
                href="/dashboard/templates"
                className="block text-center mt-5 px-4 py-3 border border-zinc-200 rounded-2xl font-medium hover:bg-zinc-100 transition"
              >
                Change Template
              </Link>
            </section>
          </aside>
        </div>
      )}
    </div>
  );
}
