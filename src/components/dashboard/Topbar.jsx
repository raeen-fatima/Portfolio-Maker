// "use client";

// import {
//   Bell,
//   ChevronDown,
//   Settings,
// } from "lucide-react";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import Link from "next/link";
// import MobileSidebar from "./MobileSidebar";

// export default function Topbar() {
//   const pathname = usePathname();

//   const [open, setOpen] =
//     useState(false);

//   const pageTitle =
//     pathname === "/dashboard"
//       ? "Dashboard"
//       : pathname
//           .split("/")
//           .pop()
//           ?.replace("-", " ")
//           ?.replace(
//             /\b\w/g,
//             (l) =>
//               l.toUpperCase()
//           );

//   return (
//     <header
//       className="
//         sticky
//         top-0
//         z-30
//         border-b
//         bg-white/80
//         backdrop-blur-xl
//       "
//     >
//       <div className="flex h-16 items-center justify-between px-4 lg:px-8">
//         {/* Left */}
//         <div className="flex items-center gap-4">
//           <MobileSidebar />

//           <div>
//             <h1 className="font-bold text-xl">
//               {pageTitle}
//             </h1>

//             <p className="text-xs text-zinc-500">
//               Portfolio Builder
//             </p>
//           </div>
//         </div>

//         {/* Right */}
//         <div className="flex items-center gap-3">
          
//           {/* Profile Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() =>
//                 setOpen(!open)
//               }
//               className="
//                 flex
//                 items-center
//                 gap-3
//                 rounded-xl
//                 border
//                 px-3
//                 py-2
//                 hover:bg-zinc-50
//               "
//             >
//               <div
//                 className="
//                   flex
//                   h-9
//                   w-9
//                   items-center
//                   justify-center
//                   rounded-full
//                   bg-black
//                   text-sm
//                   font-semibold
//                   text-white
//                 "
//               >
//                 R
//               </div>

//               <div className="hidden md:block text-left">
//                 <p className="text-sm font-medium">
//                   Raeen
//                 </p>

//                 <p className="text-xs text-zinc-500">
//                   Portfolio Owner
//                 </p>
//               </div>

//               <ChevronDown
//                 size={16}
//               />
//             </button>

//             {open && (
//               <div
//                 className="
//                   absolute
//                   right-0
//                   mt-2
//                   w-60
//                   rounded-2xl
//                   border
//                   bg-white
//                   p-2
//                   shadow-xl
//                 "
//               >
//                 <div className="border-b p-3">
//                   <p className="font-medium">
//                     Raeen Fatima
//                   </p>

//                   <p className="text-sm text-zinc-500">
//                     raeen@email.com
//                   </p>
//                 </div>

//                 <div className="py-2">
//                   <Link
//                     href="/dashboard/portfolio"
//                     className="
//                       block
//                       rounded-xl
//                       px-3
//                       py-2
//                       hover:bg-zinc-100
//                     "
//                   >
//                     My Portfolio
//                   </Link>

//                   <Link
//                     href="/dashboard/settings"
//                     className="
//                       block
//                       rounded-xl
//                       px-3
//                       py-2
//                       hover:bg-zinc-100
//                     "
//                   >
//                     Settings
//                   </Link>

//                   <Link
//                     href="/dashboard/publish"
//                     className="
//                       block
//                       rounded-xl
//                       px-3
//                       py-2
//                       hover:bg-zinc-100
//                     "
//                   >
//                     Publish
//                   </Link>
//                 </div>

//                 <div className="border-t pt-2">
//                   <button
//                     className="
//                       w-full
//                       rounded-xl
//                       px-3
//                       py-2
//                       text-left
//                       text-red-500
//                       hover:bg-red-50
//                     "
//                   >
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
import MobileSidebar from "./MobileSidebar";
import {
  Bell,
  UserCircle2,
} from "lucide-react";

export default function Topbar() {
  const currentHour =
    new Date().getHours();

  let greeting = "Good Evening";

  if (currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon";
  }

  return (
    <header
      className="
        sticky
        top-0
        z-30
        border-b
        border-white/10
        bg-black/80
        backdrop-blur-xl
      "
    >
      <div
        className="
          flex
          h-20
          items-center
          justify-between
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Left */}
        <div
          className="
            flex
            items-center
            gap-4
          "
        >
          <MobileSidebar />

          <div>
            <h1
              className="
                text-lg
                font-semibold
                text-white
                sm:text-xl
              "
            >
              {greeting} 👋
            </h1>

            <p
              className="
                hidden
                text-sm
                text-zinc-500
                sm:block
              "
            >
              Welcome back to FolioForge
            </p>
          </div>
        </div>

        {/* Right */}
        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          {/* Notification */}
          <button
            className="
              relative
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/[0.03]
              text-zinc-400
              transition
              hover:bg-white/[0.05]
              hover:text-white
            "
          >
            <Bell size={18} />

            <span
              className="
                absolute
                right-3
                top-3
                h-2
                w-2
                rounded-full
                bg-white
              "
            />
          </button>

          {/* User */}
          <button
            className="
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-white/10
              bg-white/[0.03]
              px-3
              py-2
              transition
              hover:bg-white/[0.05]
            "
          >
            <UserCircle2
              size={28}
              className="text-zinc-300"
            />

            <div className="hidden md:block">
              <p
                className="
                  text-sm
                  font-medium
                  text-white
                "
              >
                Raeen
              </p>

              <p
                className="
                  text-xs
                  text-zinc-500
                "
              >
                Portfolio Owner
              </p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}