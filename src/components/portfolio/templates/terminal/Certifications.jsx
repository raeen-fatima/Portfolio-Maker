import {
  ExternalLink,
  FileText,
} from "lucide-react";

function formatMonth(dateString) {
  if (!dateString) return "";

  const [year, month] = dateString.split("-");

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${months[Number(month) - 1]} ${year}`;
}

export default function Certifications({
  certifications,
}) {
  if (!certifications?.length) return null;

  return (
    <section
      id="certifications"
      className="
        bg-black
        px-6
        py-24
        text-zinc-100
      "
    >
      <div className="mx-auto max-w-6xl">
        <div
          className="
            overflow-hidden
            rounded-3xl
            border
            border-zinc-800
            bg-zinc-950
          "
        >
          {/* Header */}
          <div
            className="
              flex
              items-center
              gap-2
              border-b
              border-zinc-800
              px-5
              py-4
            "
          >
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />

            <span
              className="
                ml-4
                text-sm
                text-zinc-500
              "
            >
              certificates/
            </span>
          </div>

          {/* Content */}
          <div
            className="
              p-8
              font-mono
              md:p-12
            "
          >
            <p className="text-green-500">
              $ ls certificates/
            </p>

            <div className="mt-8 space-y-4">
              {certifications.map(
                (certificate) => (
                  <div
                    key={certificate._id}
                    className="
                      flex
                      flex-col
                      gap-4
                      rounded-xl
                      border
                      border-zinc-800
                      bg-black/40
                      p-5
                      transition-all
                      duration-300
                      hover:border-green-500
                    "
                  >
                    <div className="flex items-center gap-3">
                      <FileText
                        size={18}
                        className="
                          text-green-500
                        "
                      />

                      <h3
                        className="
                          text-green-400
                          break-all
                        "
                      >
                        {certificate.title
                          .toLowerCase()
                          .replaceAll(
                            " ",
                            "-"
                          )}
                        .pdf
                      </h3>
                    </div>

                    <div
                      className="
                        text-sm
                        text-zinc-400
                      "
                    >
                      issuer:
                      <span className="ml-2 text-zinc-300">
                        {certificate.issuer}
                      </span>
                    </div>

                    <div
                      className="
                        text-sm
                        text-zinc-400
                      "
                    >
                      issued:
                      <span className="ml-2 text-zinc-300">
                        {formatMonth(
                          certificate.issueDate
                        )}
                      </span>
                    </div>

                    {certificate.credentialUrl && (
                      <a
                        href={
                          certificate.credentialUrl
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          text-green-400
                          hover:text-green-300
                        "
                      >
                        open-file

                        <ExternalLink
                          size={16}
                        />
                      </a>
                    )}
                  </div>
                )
              )}
            </div>

            {/* Cursor */}
            <div
              className="
                mt-10
                flex
                items-center
                gap-2
                text-green-500
              "
            >
              <span>$</span>

              <span
                className="
                  h-5
                  w-3
                  animate-pulse
                  bg-green-500
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}