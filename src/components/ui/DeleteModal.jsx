// "use client";

// import { AlertTriangle } from "lucide-react";

// export default function DeleteModal({
//   isOpen,
//   onClose,
//   onConfirm,
//   title = "Delete Item",
//   description = "This action cannot be undone.",
//   confirmText = "Delete",
// }) {
//   if (!isOpen) return null;

//   return (
//     <div
//       className="
//         fixed
//         inset-0
//         z-[100]
//         flex
//         items-center
//         justify-center
//         bg-black/80
//         backdrop-blur-md
//         p-4
//       "
//       onClick={onClose}
//     >
//       <div
//         onClick={(e) => e.stopPropagation()}
//         className="
//           w-full
//           max-w-md
//           overflow-hidden
//           rounded-[28px]
//           border
//           border-zinc-900
//           bg-zinc-950
//           shadow-[0_20px_80px_rgba(0,0,0,0.6)]
//         "
//       >
//         {/* Header */}
//         <div className="p-6">
//           <div className="flex items-center gap-4">
//             <div
//               className="
//               flex
//               h-12
//               w-12
//               items-center
//               justify-center
//               rounded-2xl
//               border
//               border-red-500/20
//               bg-red-500/10
//             "
//             >
//               <AlertTriangle size={22} className="text-red-400" />
//             </div>

//             <h3
//               className="
              
//               text-2xl
//               font-semibold
//               text-white
//             "
//             >
//               {title}
//             </h3>
//           </div>

//           <p
//             className="
//               mt-3
//               leading-relaxed
//               text-zinc-400
//             "
//           >
//             {description}
//           </p>
//         </div>

//         {/* Footer */}
//         <div
//           className="
//             flex
//             gap-3
//             border-t
//             border-white/10
//             p-6
//           "
//         >
//           <button
//             onClick={onClose}
//             className="
//               flex-1
//               rounded-xl
//               border
//               border-white/10
//               px-4
//               py-3
//               font-medium
//               text-white
//               transition
//               hover:bg-white/[0.04]
//             "
//           >
//             Cancel
//           </button>

//           <button
//             onClick={onConfirm}
//             className="
//               flex-1
//               rounded-xl
//               bg-red-500
//               px-4
//               py-3
//               font-medium
//               text-white
//               transition
//               hover:bg-red-600
//             "
//           >
//             {confirmText}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useRef } from "react";
import { AlertTriangle } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap/gsap";

export default function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
  title = "Delete Item",
  description = "This action cannot be undone.",
  confirmText = "Delete",
}) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (isOpen) {
        // Backdrop Fade In
        gsap.fromTo(
          ".modal-backdrop",
          { opacity: 0 },
          { opacity: 1, duration: 0.25, ease: "power2.out" }
        );

        // Modal Card Spring Entrance (Scale + Slide Up)
        gsap.fromTo(
          ".modal-card",
          { scale: 0.9, y: 20, opacity: 0 },
          {
            scale: 1,
            y: 0,
            opacity: 1,
            duration: 0.35,
            ease: "back.out(1.6)",
            clearProps: "opacity,transform",
          }
        );
      }
    },
    { dependencies: [isOpen], scope: containerRef }
  );

  if (!isOpen) return null;

  return (
    <div
      ref={containerRef}
      className="
        modal-backdrop
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-black/80
        backdrop-blur-md
        p-4
      "
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          modal-card
          w-full
          max-w-md
          overflow-hidden
          rounded-[28px]
          border
          border-zinc-900
          bg-zinc-950
          shadow-[0_20px_80px_rgba(0,0,0,0.6)]
        "
      >
        {/* Header */}
        <div className="p-6">
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                border
                border-red-500/20
                bg-red-500/10
                shrink-0
              "
            >
              <AlertTriangle size={22} className="text-red-400" />
            </div>

            <h3
              className="
                text-xl sm:text-2xl
                font-semibold
                text-white
              "
            >
              {title}
            </h3>
          </div>

          <p
            className="
              mt-3
              text-sm sm:text-base
              leading-relaxed
              text-zinc-400
            "
          >
            {description}
          </p>
        </div>

        {/* Footer */}
        <div
          className="
            flex
            gap-3
            border-t
            border-white/10
            p-6
          "
        >
          <button
            onClick={onClose}
            className="
              flex-1
              rounded-xl
              border
              border-white/10
              px-4
              py-3
              font-medium
              text-white
              transition
              hover:bg-white/[0.04]
            "
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="
              flex-1
              rounded-xl
              bg-red-500
              px-4
              py-3
              font-medium
              text-white
              transition
              hover:bg-red-600
            "
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}