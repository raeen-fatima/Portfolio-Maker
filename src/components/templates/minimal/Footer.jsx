import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Footer({
  heroData,
  aboutData,
}) {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-6
            
            pt-8
            md:flex-row
          "
        >
          {/* Left */}
          <div>
            <h3
              className="
                text-lg
                font-bold
                text-black
              "
            >
              {heroData?.name}
            </h3>

            <p
              className="
                mt-1
                text-sm
                text-zinc-500
              "
            >
              {heroData?.title}
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-5">
            {aboutData?.github && (
              <a
                href={aboutData.github}
                target="_blank"
                rel="noreferrer"
                className="
                  text-zinc-500
                  transition
                  hover:text-lime-500
                "
              >
                <FaGithub size={18} />
              </a>
            )}

            {aboutData?.linkedin && (
              <a
                href={aboutData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="
                  text-zinc-500
                  transition
                  hover:text-lime-500
                "
              >
                <FaLinkedin size={18} />
              </a>
            )}

            {aboutData?.instagram && (
              <a
                href={aboutData.instagram}
                target="_blank"
                rel="noreferrer"
                className="
                  text-zinc-500
                  transition
                  hover:text-lime-500
                "
              >
                <FaInstagram size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-6
            flex
            flex-col
            items-center
            justify-between
            gap-3
            text-sm
            text-zinc-500
            md:flex-row
          "
        >
          <p>
            © {new Date().getFullYear()}{" "}
            {heroData?.name}. All rights
            reserved.
          </p>

          <p>
            Built with{" "}
            <span className="font-medium text-lime-500">
              FolioForge
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}