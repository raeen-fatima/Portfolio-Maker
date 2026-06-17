import Link from "next/link";
import UserDropdown from "../ui/UserDropdown";
import MobileMenu from "../ui/MobileMenu";
import { getCurrentUser } from "@/lib/auth";

export default async function Navbar() {
  const user = await getCurrentUser();

  const links = [
    {
      name: "Home",
      href: "#/",
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
    <header className="fixed bg-black/60 backdrop:blur-lg inset-x-0 top-0 z-50 ">
      <div className="mx-auto max-w-7xl px-6 ">
        <div
          className="
            flex
            h-24
            items-center
            justify-between rounded-2xl
            border-b  px-5  py- transition
            border-white/10 hover:border-white/10  hover:bg-white/[0.03]
           
          "
        >
          <Link
            href="/"
            className="
              text-xl
              font-semibold
              text-white
            "
          >
            <span className="text-white">Folio</span>

            <span className="text-zinc-500">Forge</span>
          </Link>

          <nav
            className="
              hidden
              items-center
              gap-10
              lg:flex
            "
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  text-sm
                  text-zinc-400
                  hover:text-white
                "
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            {user ? (
              <UserDropdown user={user} />
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  href="/auth/login"
                  className="
                    text-sm
                    text-zinc-400
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
                  "
                >
                  Start Building
                </Link>
              </div>
            )}
          </div>

          <MobileMenu user={user} />
        </div>
      </div>
    </header>
  );
}
