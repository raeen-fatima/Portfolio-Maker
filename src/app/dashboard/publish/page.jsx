"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function PublishPage() {
  const [isPublished, setIsPublished] = useState(false);
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(true);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_APP_URL}/u/${slug}`,
    );

    toast.success("Link copied");
  };

  const handlePublish = async () => {
    try {
      const response = await fetch("/api/portfolio/publish", {
        method: "PUT",
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message);
        return;
      }

      setIsPublished(result.isPublished);
      setSlug(result.slug);

      toast.success(
        result.isPublished
          ? "Portfolio published successfully"
          : "Portfolio unpublished successfully",
      );
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong");
    }
  };

  const fetchStatus = async () => {
    try {
      const response = await fetch("/api/portfolio/status");

      const result = await response.json();

      if (response.ok) {
        setIsPublished(result.isPublished);
        setSlug(result.slug);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadPublishPage = async () => {
      await fetchStatus();
    };

    loadPublishPage();
  }, []);

  return (
    <div className="space-y-8 p-6 lg:p-12">
      <div>
        <h1 className="text-3xl font-bold">Publish Portfolio</h1>

        <p className="mt-2 text-zinc-500">
          Make your portfolio live and share it with the world.
        </p>
      </div>

      <div className="rounded-3xl border bg-white p-8">
        <h2 className="text-xl font-semibold">Portfolio Status</h2>

        <div
          className={`mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
            isPublished
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          ● {isPublished ? "Published" : "Draft"}
        </div>

        <p className="mt-4 text-zinc-500">
          {isPublished
            ? "Your portfolio is live and publicly accessible."
            : "Your portfolio is currently not public."}
        </p>

        {slug && (
          <div className="mt-6">
            <p className="text-sm font-medium">Portfolio URL</p>

            <div className="mt-2 rounded-xl border bg-zinc-50 p-3">
              {process.env.NEXT_PUBLIC_APP_URL}/u/{slug}
            </div>
            <button
              onClick={handleCopy}
              className="
    mt-3
    rounded-lg
    border
    px-4
    py-2
    text-sm
  "
            >
              Copy Link
            </button>
          </div>
        )}

        <button
          onClick={handlePublish}
          className="
            mt-6
            rounded-xl
            bg-black
            px-6
            py-3
            text-white
            transition
            hover:opacity-90
          "
        >
          {isPublished ? "Unpublish Portfolio" : "Publish Portfolio"}
        </button>
      </div>
    </div>
  );
}
