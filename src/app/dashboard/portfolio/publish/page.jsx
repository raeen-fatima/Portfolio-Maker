"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { usePublish } from "@/hooks/portfolio/usePublish";

export default function PublishPage() {
  const [isPublished, setIsPublished] = useState(false);
  const [slug, setSlug] = useState("");
  const { loading, fetchStatus, togglePublish } = usePublish();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_APP_URL}/u/${slug}`,
    );

    toast.success("Link copied");
  };

  const handlePublish = async () => {
  const result = await togglePublish();

  if (!result) return;

  setIsPublished(result.isPublished);
  setSlug(result.slug);
};

 

 useEffect(() => {
  const loadPublishPage = async () => {
    const result = await fetchStatus();

    if (!result) return;

    setIsPublished(result.isPublished);
    setSlug(result.slug);
  };

  loadPublishPage();
}, []);

  return (
    <div className="mx-auto max-w-6xl space-y-8 p-6 lg:p-10">
      {/* Header */}
      <div>
        <div
          className="
          mb-4
          inline-flex
          items-center
          rounded-full
          border
          border-white/10
          bg-white/[0.03]
          px-3
          py-1.5
          text-xs
          uppercase
          tracking-[0.15em]
          text-zinc-500
        "
        >
          Final Step
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white">
          Publish Portfolio
        </h1>

        <p className="mt-3 max-w-2xl text-zinc-500">
          Make your portfolio live and share it with recruiters, clients and the
          world.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid gap-6 xl:grid-cols-[1fr_340px]">
        {/* Left */}
        <div
          className="
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
          p-6
          lg:p-8
        "
        >
          <h2 className="text-xl font-semibold text-white">Portfolio Status</h2>

          <div
            className={`
            mt-5
            inline-flex
            items-center
            gap-2
            rounded-full
            px-4
            py-2
            text-sm
            font-medium
            ${
              isPublished
                ? "bg-green-500/10 text-green-400 border border-green-500/20"
                : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
            }
          `}
          >
            <span className="h-2 w-2 rounded-full bg-current" />

            {isPublished ? "Published" : "Draft"}
          </div>

          <p className="mt-4 text-zinc-500">
            {isPublished
              ? "Your portfolio is currently live and accessible to everyone."
              : "Your portfolio is currently private and not visible publicly."}
          </p>

          {/* URL */}
          {isPublished && slug && (
            <div
              className="
              mt-8
              rounded-2xl
              border
              border-white/10
              bg-black
              p-5
            "
            >
              <p className="text-sm text-zinc-500">Portfolio URL</p>

              <div
                className="
                mt-2
                break-all
                font-medium
                text-white
              "
              >
                {process.env.NEXT_PUBLIC_APP_URL}
                /u/{slug}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  onClick={handleCopy}
                  className="
                  rounded-xl
                  border
                  border-white/10
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  text-white
                  transition
                  hover:bg-white/[0.04]
                "
                >
                  Copy Link
                </button>

                <a
                  href={`${process.env.NEXT_PUBLIC_APP_URL}/u/${slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  rounded-xl
                  bg-white
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  text-black
                  transition
                  hover:opacity-90
                "
                >
                  Visit Portfolio
                </a>
              </div>
            </div>
          )}

          {/* Publish Button */}
          <button
            onClick={handlePublish}
            disabled={loading}
            className={`
            mt-8
            w-full
            rounded-2xl
            py-3.5
            font-medium
            transition
            ${
              isPublished
                ? "border border-red-500/20 bg-red-500/10 text-red-400 hover:bg-red-500/20"
                : "bg-white text-black hover:opacity-90"
            }
          `}
          >
            {isPublished ? "Stop Sharing" : "Publish Portfolio"}
          </button>
        </div>

        {/* Right */}
        <aside className="space-y-6">
          <div
            className="
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
            p-6
          "
          >
            <h3 className="font-semibold text-white">Publishing Checklist</h3>

            <div className="mt-5 space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                Hero Section Added
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                About Section Added
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                Skills Added
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                Projects Added
              </div>
            </div>
          </div>

          <div
            className="
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
            p-6
          "
          >
            <p className="text-sm text-zinc-500">Portfolio Visibility</p>

            <h3 className="mt-2 text-xl font-semibold">
              {isPublished ? "Public" : "Private"}
            </h3>

            <p className="mt-3 text-sm text-zinc-500">
              Anyone with your portfolio link can view it once published.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
