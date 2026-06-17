// export default function SettingsCard({
//   title,
//   description,
//   icon: Icon,
//   children,
// }) {
//   return (
//     <section
//       className="
//         rounded-[32px]
//         border
//         border-white/10
//         bg-white/[0.03]
//         p-8
//       "
//     >
//       <div className="flex items-center gap-3">
//         {Icon && (
//           <Icon
//             size={20}
//             className="text-white"
//           />
//         )}

//         <h2
//           className="
//             text-xl
//             font-semibold
//             text-white
//           "
//         >
//           {title}
//         </h2>
//       </div>

//       {description && (
//         <p
//           className="
//             mt-3
//             text-zinc-500
//           "
//         >
//           {description}
//         </p>
//       )}

//       <div className="mt-6">
//         {children}
//       </div>
//     </section>
//   );
// }

export default function SettingsCard({
  children,
  className = "",
}) {
  return (
    <section
      className={`
        rounded-[24px]
        border
        border-white/10
        bg-black
        p-6
        backdrop-blur-xl
        ${className}
      `}
    >
      {children}
    </section>
  );
}