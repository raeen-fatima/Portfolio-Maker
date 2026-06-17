import Link from "next/link";
import { Blocks } from "lucide-react";

import UserDropdown from "../ui/UserDropdown";
import MobileMenu from "../ui/MobileMenu";

import { getCurrentUser } from "@/lib/auth";

export default async function Navbar() {
  const user = await getCurrentUser();

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Features",
      href: "#features",
    },
    {
      name: "Templates",
      href: "#templates",
    },
    {
      name: "Pricing",
      href: "#pricing",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <header
      className="
        fixed
        inset-x-0
        top-0
        z-50
        border-b
        border-white/10
        bg-black/60
        backdrop-blur-lg
      "
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="
            flex
            h-20
            items-center
            justify-between
            transition
          "
        >
          {/* Logo */}
          <Link
            href="/"
            className="
              flex
              items-center
              gap-3
              transition
              hover:opacity-90
            "
          >
            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                text-white
                border
                border-white/10
                bg-white/[0.03]
                shadow-[0_0_25px_rgba(255,255,255,0.06)]
              "
            >
              <Blocks size={20} />
            </div>

            <div>
              <h2
                className="
                  text-lg
                  font-semibold
                  tracking-tight
                "
              >
                <span className="text-white">Folio</span>
                <span className="text-zinc-500">Forge</span>
              </h2>

              <p
                className="
                  text-xs
                  text-zinc-600
                "
              >
                Portfolio Builder
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="
              hidden
              items-center
              gap-8
              lg:flex
            "
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  text-sm
                  font-medium
                  text-zinc-400
                  transition-colors
                  hover:text-white
                "
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:block">
            {user ? (
              <UserDropdown user={user} />
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  href="/auth/login"
                  className="
                    text-sm
                    font-medium
                    text-zinc-400
                    transition-colors
                    hover:text-white
                  "
                >
                  Sign In
                </Link>

                <Link
                  href="/auth/register"
                  className="
                    rounded-full
                    bg-white
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-black
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:bg-zinc-200
                  "
                >
                  Start Building
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu */}
          <MobileMenu user={user} />
        </div>
      </div>
    </header>
  );
}