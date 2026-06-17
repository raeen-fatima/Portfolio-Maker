import { Copy, Globe } from "lucide-react";

import SettingsCard from "./SettingsCard";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

export default function PortfolioUrlCard({
  slug,
  setSlug,
  portfolioUrl,
  handleCopy,
}) {
  return (
    <SettingsCard>
      <div className="flex items-start justify-between">
        <div>
          <h2
            className="
              text-xl
              font-semibold
              text-white
            "
          >
            Portfolio URL
          </h2>

          <p
            className="
              mt-2
              text-zinc-500
            "
          >
            Customize your public portfolio URL.
          </p>
        </div>

        <Globe size={20} className="text-zinc-500" />
      </div>

      <div className="mt-6">
        <label
          className="
            mb-2
            block
            text-sm
            text-zinc-400
          "
        >
          Slug
        </label>

        <div className="flex flex-col gap-3 md:flex-row">
          <div
            className="
              flex
              flex-1
              items-center
              overflow-hidden
              rounded-xl
              border
              border-white/10
              bg-black
            "
          >
            <span
              className="
                hidden
                border-r
                border-white/10
                px-4
                py-3
                text-zinc-500
                sm:block
              "
            >
              {APP_URL}/u/
            </span>

            <input
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="raeen-fatima"
              className="
                w-full
                bg-transparent
                px-4
                py-3
                text-white
                outline-none
              "
            />
          </div>

          <button
            onClick={handleCopy}
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-white/10
              px-5
              py-3
              text-white
              transition
              hover:bg-white/[0.05]
            "
          >
            <Copy size={16} />
            Copy
          </button>
        </div>

        <p
          className="
            mt-3
            break-all
            text-sm
            text-zinc-500
          "
        >
          {portfolioUrl || "Your portfolio URL will appear here."}
        </p>
        {portfolioUrl && (
          <a
            href={portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center rounded-2xl border border-zinc-900 px-5 py-3 font-medium transition hover:bg-zinc-900 hover:text-white"
          >
            Visit Portfolio
          </a>
        )}
      </div>
    </SettingsCard>
  );
}
