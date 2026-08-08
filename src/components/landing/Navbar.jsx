import { getCurrentUser } from "@/lib/auth/auth";
import NavbarClient from "./NavbarClient";

export default async function Navbar() {
  const user = await getCurrentUser();

  const safeUser = user
    ? {
        _id: user._id.toString(),
        name: user.name,
        email: user.email,
        username: user.username,
        image: user.image,
        role: user.role,
      }
    : null;


  const links = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Templates", href: "#templates" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return <NavbarClient user={safeUser} links={links} />;
}