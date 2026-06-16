import Nova from "@/components/templates/nova";
import Minimal from "@/components/templates/minimal";
import Terminal from "@/components/templates/terminal";

export const templateMap = {
  nova: Nova,
  minimal: Minimal,
  terminal: Terminal,
};

export const portfolioTemplates = [
  {
    id: "nova",
    name: "Nova",
    description:
      "Premium dark portfolio template.",
    image: "/nova.png",
  },

  {
    id: "minimal",
    name: "Minimal",
    description:
      "Clean and modern portfolio.",
    image: "/minimal.png",
  },

  {
    id: "terminal",
    name: "Terminal",
    description:
      "Developer inspired terminal portfolio.",
    image: "/terminal.png",
  },
];