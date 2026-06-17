"use client";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { portfolioTemplates } from "@/lib/templates";
import DeleteModal from "@/components/ui/DeleteModal";
import { useRouter } from "next/navigation";
const APP_URL = process.env.NEXT_PUBLIC_APP_URL;
import SettingsHeader from "@/components/settings/SettingsHeader";
import LoadingState from "@/components/settings/LoadingState";
import SaveButton from "@/components/settings/SaveButton";
import PortfolioUrlCard from "@/components/settings/PortfolioUrlCard";
import PublishStatusCard from "@/components/settings/PublishStatusCard";
import AccountCard from "@/components/settings/AccountCard";
import SelectedTemplateCard from "@/components/settings/SelectedTemplateCard";
import DangerZoneCard from "@/components/settings/DangerZoneCard";

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
  const router = useRouter();

  const [deleteOpen, setDeleteOpen] = useState(false);

  const [slug, setSlug] = useState("");

  const [template, setTemplate] = useState("nova");

  const [isPublished, setIsPublished] = useState(false);

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  const selectedTemplate = useMemo(
    () =>
      portfolioTemplates.find((item) => item.id === template) ||
      portfolioTemplates[0],
    [template],
  );

  const portfolioUrl = slug && APP_URL ? `${APP_URL}/u/${slug}` : "";

  const fetchSettings = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/portfolio/settings");

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message);
        return;
      }

      setUser(result.user);

      setSlug(result.settings.slug || "");

      setTemplate(result.settings.selectedTemplate || "nova");

      setIsPublished(Boolean(result.settings.isPublished));
    } catch (error) {
      console.log(error);

      toast.error("Failed to load settings");
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

  const handleDelete = async () => {
    try {
      const response = await fetch("/api/portfolio/delete", {
        method: "DELETE",
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message);
        return;
      }

      toast.success("Portfolio deleted successfully");

      setDeleteOpen(false);

      router.refresh();

      router.push("/dashboard");
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong");
    }
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      const response = await fetch("/api/portfolio/settings", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug: normalizeSlug(slug),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message);
        return;
      }

      setSlug(result.settings.slug);

      toast.success("Settings saved successfully");
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong");
    } finally {
      setSaving(false);
    }
  };

  const handleCopy = async () => {
    if (!portfolioUrl) {
      toast.error("No portfolio URL available");
      return;
    }

    await navigator.clipboard.writeText(portfolioUrl);

    toast.success("Portfolio URL copied");
  };
  if (loading) {
    return <LoadingState />;
  }

  return (
    <>
      <div className="space-y-8">
        <SettingsHeader />

        <div
          className="
            grid
            gap-6
            xl:grid-cols-[1fr_340px]
          "
        >
          {/* LEFT */}
          <div className="space-y-6">
            <PortfolioUrlCard
              slug={slug}
              setSlug={setSlug}
              portfolioUrl={
                portfolioUrl
              }
              handleCopy={
                handleCopy
              }
            />

            <PublishStatusCard
              isPublished={
                isPublished
              }
            />

            <SaveButton
              saving={saving}
              onSave={
                handleSave
              }
            />
          </div>

          {/* RIGHT */}
          <aside className="space-y-6">
            <AccountCard
              user={user}
            />

            <SelectedTemplateCard
              template={
                selectedTemplate
              }
            />

            <DangerZoneCard
              onDelete={() =>
                setDeleteOpen(
                  true
                )
              }
            />
          </aside>
        </div>
      </div>

      <DeleteModal
        isOpen={deleteOpen}
        onClose={() =>
          setDeleteOpen(false)
        }
        onConfirm={handleDelete}
        title="Delete Portfolio"
        description="Are you sure you want to permanently delete your portfolio? This action cannot be undone."
        confirmText="Delete Portfolio"
      />
    </>
  );
}