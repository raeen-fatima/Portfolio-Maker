"use client";

import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { portfolioTemplates } from "@/lib/templates/templates";

import { useSettings } from "@/hooks/settings/useSettings";

import DeleteModal from "@/components/ui/DeleteModal";
import SettingsHeader from "@/components/settings/SettingsHeader";
import LoadingState from "@/components/settings/LoadingState";
import SaveButton from "@/components/settings/SaveButton";
import PortfolioUrlCard from "@/components/settings/PortfolioUrlCard";
import PublishStatusCard from "@/components/settings/PublishStatusCard";
import AccountCard from "@/components/settings/AccountCard";
import SelectedTemplateCard from "@/components/settings/SelectedTemplateCard";
import DangerZoneCard from "@/components/settings/DangerZoneCard";

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL;

export default function SettingsPage() {
  const router = useRouter();

  const [deleteOpen, setDeleteOpen] =
    useState(false);

  const {
    user,
    slug,
    setSlug,
    template,
    isPublished,

    loading,
    saving,

    fetchSettings,
    saveSettings,
    deletePortfolio,
  } = useSettings();

  const selectedTemplate = useMemo(
    () =>
      portfolioTemplates.find(
        (item) => item.id === template,
      ) || portfolioTemplates[0],
    [template],
  );

  const portfolioUrl =
    slug && APP_URL
      ? `${APP_URL}/u/${slug}`
      : "";

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  const handleSave = async () => {
    const result =
      await saveSettings();

    if (!result.success) {
      toast.error(
        result.data?.message,
      );
      return;
    }

    toast.success(
      result.data.message,
    );
  };

  const handleDelete = async () => {
    const result =
      await deletePortfolio();

    if (!result.success) {
      toast.error(
        result.data?.message,
      );
      return;
    }

    toast.success(
      result.data.message,
    );

    setDeleteOpen(false);

    router.refresh();

    router.push("/dashboard");
  };

  const handleCopy = async () => {
    if (!portfolioUrl) {
      toast.error(
        "No portfolio URL available",
      );
      return;
    }

    await navigator.clipboard.writeText(
      portfolioUrl,
    );

    toast.success(
      "Portfolio URL copied",
    );
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
                setDeleteOpen(true)
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