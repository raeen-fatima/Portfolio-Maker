// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import {
//   CheckCircle2,
//   Copy,
//   Globe,
//   LayoutTemplate,
//   Save,
//   User,
// } from "lucide-react";
// import { useEffect, useMemo, useState } from "react";
// import { toast } from "sonner";
// import { portfolioTemplates } from "@/lib/templates";
// import DeleteModal from "@/components/ui/DeleteModal";
// import { useRouter } from "next/navigation";
// const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

// function normalizeSlug(value) {
//   return value
//     .toLowerCase()
//     .trim()
//     .replace(/[^a-z0-9-]/g, "-")
//     .replace(/-+/g, "-")
//     .replace(/^-|-$/g, "");
// }

// export default function SettingsPage() {
//   const [user, setUser] = useState(null);
//   const router = useRouter();

//   const [deleteOpen, setDeleteOpen] = useState(false);

//   const [slug, setSlug] = useState("");

//   const [template, setTemplate] = useState("nova");

//   const [isPublished, setIsPublished] = useState(false);

//   const [loading, setLoading] = useState(true);

//   const [saving, setSaving] = useState(false);

//   const selectedTemplate = useMemo(
//     () =>
//       portfolioTemplates.find((item) => item.id === template) ||
//       portfolioTemplates[0],
//     [template],
//   );

//   const portfolioUrl = slug && APP_URL ? `${APP_URL}/u/${slug}` : "";

//   const fetchSettings = async () => {
//     try {
//       setLoading(true);

//       const response = await fetch("/api/portfolio/settings");

//       const result = await response.json();

//       if (!response.ok) {
//         toast.error(result.message);
//         return;
//       }

//       setUser(result.user);

//       setSlug(result.settings.slug || "");

//       setTemplate(result.settings.selectedTemplate || "nova");

//       setIsPublished(Boolean(result.settings.isPublished));
//     } catch (error) {
//       console.log(error);

//       toast.error("Failed to load settings");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const loadSettings = async () => {
//       await fetchSettings();
//     };
//     loadSettings();
//   }, []);

//   const handleDelete = async () => {
//     try {
//       const response = await fetch("/api/portfolio/delete", {
//         method: "DELETE",
//       });

//       const result = await response.json();

//       if (!response.ok) {
//         toast.error(result.message);
//         return;
//       }

//       toast.success("Portfolio deleted successfully");

//       setDeleteOpen(false);

//       router.refresh();

//       router.push("/dashboard");
//     } catch (error) {
//       console.log(error);

//       toast.error("Something went wrong");
//     }
//   };

//   const handleSave = async () => {
//     try {
//       setSaving(true);

//       const response = await fetch("/api/portfolio/settings", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           slug: normalizeSlug(slug),
//         }),
//       });

//       const result = await response.json();

//       if (!response.ok) {
//         toast.error(result.message);
//         return;
//       }

//       setSlug(result.settings.slug);

//       toast.success("Settings saved successfully");
//     } catch (error) {
//       console.log(error);

//       toast.error("Something went wrong");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleCopy = async () => {
//     if (!portfolioUrl) {
//       toast.error("No portfolio URL available");
//       return;
//     }

//     await navigator.clipboard.writeText(portfolioUrl);

//     toast.success("Portfolio URL copied");
//   };

//   if (loading) {
//     return (
//       <div className="p-6 lg:p-12">
//         <div className="rounded-3xl border bg-white p-10 text-center">
//           <h2 className="text-xl font-bold">Loading Settings</h2>

//           <p className="mt-2 text-zinc-500">
//             Preparing your portfolio settings...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6 p-6 lg:p-12">
//       <div>
//         <h1 className="text-3xl font-bold">Settings</h1>

//         <p className="mt-2 text-zinc-500">
//           Manage your portfolio URL, publishing status, and portfolio
//           preferences.
//         </p>
//       </div>

//       <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
//         {/* LEFT */}
//         <div className="space-y-6">
//           {/* Portfolio URL */}
//           <section className="rounded-3xl border bg-white p-6 lg:p-8">
//             <div className="flex items-start justify-between">
//               <div>
//                 <h2 className="text-2xl font-bold">Portfolio URL</h2>

//                 <p className="mt-2 text-zinc-500">
//                   Customize your public portfolio URL.
//                 </p>
//               </div>

//               <Globe />
//             </div>

//             <div className="mt-6">
//               <label className="mb-2 block text-sm font-medium">Slug</label>

//               <div className="flex flex-col gap-3 md:flex-row">
//                 <div className="flex flex-1 items-center overflow-hidden rounded-2xl border bg-zinc-50">
//                   <span className="hidden border-r px-4 py-3 text-zinc-500 sm:block">
//                     {APP_URL}/u/
//                   </span>

//                   <input
//                     value={slug}
//                     onChange={(e) => setSlug(normalizeSlug(e.target.value))}
//                     placeholder="raeen-fatima"
//                     className="w-full bg-transparent px-4 py-3 outline-none"
//                   />
//                 </div>

//                 <button
//                   type="button"
//                   onClick={handleCopy}
//                   className="inline-flex items-center justify-center gap-2 rounded-2xl border px-5 py-3 font-medium transition hover:bg-zinc-100"
//                 >
//                   <Copy size={16} />
//                   Copy
//                 </button>
//               </div>

//               <p className="mt-3 break-all text-sm text-zinc-500">
//                 {portfolioUrl || "Your portfolio URL will appear here."}
//               </p>

//               {portfolioUrl && (
//                 <a
//                   href={portfolioUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mt-4 inline-flex w-full items-center justify-center rounded-2xl border px-5 py-3 font-medium transition hover:bg-zinc-100"
//                 >
//                   Visit Portfolio
//                 </a>
//               )}
//             </div>
//           </section>

//           {/* Publish Status */}
//           <section className="rounded-3xl border bg-white p-6 lg:p-8">
//             <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//               <div>
//                 <h2 className="text-2xl font-bold">Publish Status</h2>

//                 <p className="mt-2 text-zinc-500">
//                   Current visibility of your portfolio.
//                 </p>
//               </div>

//               <div
//                 className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
//                   isPublished
//                     ? "bg-green-100 text-green-700"
//                     : "bg-yellow-100 text-yellow-700"
//                 }`}
//               >
//                 <CheckCircle2 size={16} />

//                 {isPublished ? "Published" : "Draft"}
//               </div>
//             </div>

//             <Link
//               href="/dashboard/publish"
//               className="mt-5 inline-flex rounded-2xl border px-5 py-3 font-medium transition hover:bg-zinc-100"
//             >
//               Manage Publishing
//             </Link>
//           </section>

//           {/* Save */}
//           <button
//             onClick={handleSave}
//             disabled={saving}
//             className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-black py-3.5 font-medium text-white transition hover:opacity-90 disabled:opacity-60"
//           >
//             <Save size={18} />

//             {saving ? "Saving..." : "Save Settings"}
//           </button>
//         </div>

//         {/* RIGHT */}
//         <aside className="space-y-6">
//           {/* User */}
//           <section className="rounded-3xl border bg-white p-6">
//             <div className="flex items-center gap-4">
//               <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-xl font-bold text-white">
//                 {user?.name?.charAt(0) || "U"}
//               </div>

//               <div>
//                 <h2 className="font-bold">{user?.name}</h2>

//                 <p className="text-sm text-zinc-500">{user?.email}</p>
//               </div>
//             </div>

//             <div className="mt-5 flex items-center gap-2 text-sm text-zinc-500">
//               <User size={16} />
//               Account Information
//             </div>
//           </section>

//           {/* Template */}
//           <section className="rounded-3xl border bg-white p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h2 className="font-bold">Selected Template</h2>

//                 <p className="mt-1 text-sm text-zinc-500">
//                   {selectedTemplate.name}
//                 </p>
//               </div>

//               <LayoutTemplate size={20} />
//             </div>

//             <div className="mt-5 overflow-hidden rounded-2xl border">
//               <Image
//                 src={selectedTemplate.image}
//                 alt={selectedTemplate.name}
//                 width={600}
//                 height={300}
//                 loading="eager"
//                 className="h-44 w-full object-cover"
//               />
//             </div>

//             <Link
//               href="/dashboard/templates"
//               className="mt-5 block rounded-2xl border px-4 py-3 text-center font-medium transition hover:bg-zinc-100"
//             >
//               Change Template
//             </Link>
//           </section>

//           {/* Danger Zone */}
//           <section className="rounded-3xl border border-red-200 bg-white p-6">
//             <h2 className="font-bold text-red-600">Danger Zone</h2>

//             <p className="mt-2 text-sm text-zinc-500">
//               Permanently delete your portfolio and all associated data.
//             </p>

//             <button
//               type="button"
//               onClick={() => setDeleteOpen(true)}
//               className="mt-4 w-full rounded-2xl bg-red-600 px-4 py-3 font-medium text-white transition hover:bg-red-700"
//             >
//               Delete Portfolio
//             </button>
//           </section>
//         </aside>
//         <DeleteModal
//           isOpen={deleteOpen}
//           onClose={() => setDeleteOpen(false)}
//           onConfirm={handleDelete}
//           title="Delete Portfolio"
//           description="Are you sure you want to permanently delete your portfolio? This action cannot be undone."
//           confirmText="Delete Portfolio"
//         />
//       </div>
//     </div>
//   );
// }

import {
  User,
  Link2,
  Shield,
  Trash2,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p
          className="
            text-sm
            uppercase
            tracking-[0.2em]
            text-zinc-500
          "
        >
          Settings
        </p>

        <h1
          className="
            mt-3
            text-4xl
            font-bold
            tracking-tight
            text-white
          "
        >
          Account Settings
        </h1>

        <p
          className="
            mt-3
            max-w-2xl
            text-zinc-500
          "
        >
          Manage your profile, portfolio
          settings and account preferences.
        </p>
      </div>

      {/* Profile */}
      <section
        className="
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
          p-8
        "
      >
        <div className="flex items-center gap-3">
          <User size={20} />

          <h2
            className="
              text-xl
              font-semibold
              text-white
            "
          >
            Profile
          </h2>
        </div>

        <div
          className="
            mt-8
            grid
            gap-6
            md:grid-cols-2
          "
        >
          <Input
            label="Full Name"
            placeholder="Raeen Fatima"
          />

          <Input
            label="Username"
            placeholder="raeen"
          />

          <div className="md:col-span-2">
            <Input
              label="Email Address"
              placeholder="raeen@gmail.com"
            />
          </div>
        </div>

        <button
          className="
            mt-8
            rounded-xl
            bg-white
            px-5
            py-3
            font-medium
            text-black
          "
        >
          Save Changes
        </button>
      </section>

      {/* Portfolio URL */}
      <section
        className="
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
          p-8
        "
      >
        <div className="flex items-center gap-3">
          <Link2 size={20} />

          <h2
            className="
              text-xl
              font-semibold
              text-white
            "
          >
            Portfolio URL
          </h2>
        </div>

        <p
          className="
            mt-3
            text-zinc-500
          "
        >
          Customize your public portfolio
          URL.
        </p>

        <div
          className="
            mt-6
            flex
            flex-col
            gap-4
            md:flex-row
          "
        >
          <div
            className="
              flex
              flex-1
              items-center
              rounded-xl
              border
              border-white/10
              bg-black
              px-4
            "
          >
            <span
              className="
                text-zinc-500
              "
            >
              folioforge.com/
            </span>

            <input
              placeholder="raeen"
              className="
                flex-1
                bg-transparent
                px-2
                py-4
                outline-none
              "
            />
          </div>

          <button
            className="
              rounded-xl
              bg-white
              px-5
              py-4
              font-medium
              text-black
            "
          >
            Update URL
          </button>
        </div>
      </section>

      {/* Security */}
      <section
        className="
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
          p-8
        "
      >
        <div className="flex items-center gap-3">
          <Shield size={20} />

          <h2
            className="
              text-xl
              font-semibold
              text-white
            "
          >
            Security
          </h2>
        </div>

        <p
          className="
            mt-3
            text-zinc-500
          "
        >
          Update your password and keep
          your account secure.
        </p>

        <button
          className="
            mt-6
            rounded-xl
            border
            border-white/10
            px-5
            py-3
            transition
            hover:bg-white/[0.04]
          "
        >
          Change Password
        </button>
      </section>

      {/* Danger Zone */}
      <section
        className="
          rounded-[32px]
          border
          border-red-500/20
          bg-red-500/5
          p-8
        "
      >
        <div className="flex items-center gap-3">
          <Trash2
            size={20}
            className="text-red-400"
          />

          <h2
            className="
              text-xl
              font-semibold
              text-red-400
            "
          >
            Danger Zone
          </h2>
        </div>

        <p
          className="
            mt-3
            text-zinc-400
          "
        >
          Deleting your portfolio is
          permanent and cannot be undone.
        </p>

        <button
          className="
            mt-6
            rounded-xl
            border
            border-red-500/20
            bg-red-500/10
            px-5
            py-3
            text-red-400
            transition
            hover:bg-red-500/20
          "
        >
          Delete Portfolio
        </button>
      </section>
    </div>
  );
}

function Input({
  label,
  placeholder,
}) {
  return (
    <div>
      <label
        className="
          mb-2
          block
          text-sm
          text-zinc-400
        "
      >
        {label}
      </label>

      <input
        placeholder={placeholder}
        className="
          w-full
          rounded-xl
          border
          border-white/10
          bg-black
          px-4
          py-3
          outline-none
          transition
          focus:border-white/20
        "
      />
    </div>
  );
}