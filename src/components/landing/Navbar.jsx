import Link from "next/link";
import { Blocks } from "lucide-react";

import UserDropdown from "../ui/UserDropdown";
import MobileMenu from "../ui/MobileMenu";

import { getCurrentUser } from "@/lib/auth/auth";

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
        fixed inset-x-0 top-0 z-[100]
        px-4 pt-4
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          bg-black/70
          rounded-2xl border border-white/10
          backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.4)]
        "
      >
        <div
          className="
            flex items-center justify-between
            h-18
            px-6
          "
        >
          {/* Logo */}
          <Link
            href="/"
            className="
              relative z-50 flex items-center
              group gap-3
            "
          >
            <div
              className="
                flex items-center justify-center
                h-11 w-11
                bg-white/[0.04]
                rounded-xl border border-white/10
                transition-all duration-300
                group-hover:scale-105 group-hover:bg-white/[0.08]
              "
            >
              <Blocks
                size={20}
                className="
                  text-white
                "
                /
              >
            </div>

            <div>
              <h2
                className="
                  text-lg font-semibold tracking-tight
                "
              >
                <span
                  className="
                    text-white
                  "
                >
                  Folio
                </span>

                <span
                  className="
                    text-zinc-500
                  "
                >
                  Forge
                </span>
              </h2>

              <p
                className="
                  text-xs text-zinc-600
                "
              >
                Portfolio Builder
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="
              hidden lg:flex items-center
              gap-8
            "
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  relative after:absolute after:left-0
                  after:h-px after:w-0 hover:after:w-full
                  text-sm text-zinc-400 hover:text-white font-medium
                  after:bg-white
                  transition after:transition-all
                  after:-bottom-2
                "
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div
            className="
              hidden lg:block
            "
          >
            {user ? (
              <UserDropdown user={user} />
            ) : (
              <div
                className="
                  flex items-center
                  gap-4
                "
              >
                <Link
                  href="/auth/login"
                  className="
                    text-sm text-zinc-400 hover:text-white font-medium
                    transition
                  "
                >
                  Sign In
                </Link>

                <Link
                  href="/auth/register"
                  className="
                    px-5 py-2.5
                    text-sm text-black font-medium
                    bg-white
                    rounded-xl
                    transition-all duration-300
                    hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]
                    hover:scale-105
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