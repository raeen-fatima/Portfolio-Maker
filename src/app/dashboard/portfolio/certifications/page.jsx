// "use client";

// import { useEffect, useState } from "react";
// import CertificationForm from "@/components/portfolio/certifications/CertificationForm";
// import CertificationCard from "@/components/portfolio/certifications/CertificationCard";
// import BuilderHeader from "@/components/portfolio/builder/BuilderHeader";
// import { useRouter } from "next/navigation";
// export default function CertificationsPage() {
//   const [certifications, setCertifications] = useState([]);
//   const router = useRouter();

//   const [editingCertification, setEditingCertification] = useState(null);

//   const fetchCertifications = async () => {
//     try {
//       const response = await fetch("/api/dashboard/portfolio/certifications");

//       const data = await response.json();

//       setCertifications(data.certifications || []);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     const loadCertifications = async () => {
//       await fetchCertifications();
//     };

//     loadCertifications();
//   }, []);

//   return (
//     <div
//       className="
//         max-w-7xl
//         mx-auto space-y-8 p-6 lg:p-10
//       "
//     >
//       <BuilderHeader
//         title="Certifications"
//         description="Showcase certifications, licenses, and professional credentials."
//         step={7}
//         totalSteps={8}
//       />

//       {/* Form */}
//       <div
//         className="
//           p-6 lg:p-8
//           bg-white/[0.03]
//           rounded-[28px] border border-white/10
//         "
//       >
//         <CertificationForm
//           editingCertification={editingCertification}
//           setEditingCertification={setEditingCertification}
//           fetchCertifications={fetchCertifications}
//         />
//       </div>

//       {/* Certifications List */}
//       <div
//         className="
//           p-6 lg:p-8
//           bg-white/[0.03]
//           rounded-[28px] border border-white/10
//         "
//       >
//         <div
//           className="
//             flex flex-col sm:flex-row sm:items-center sm:justify-between
//             gap-4
//           "
//         >
//           <div>
//             <h2
//               className="
//                 text-xl text-white font-semibold
//               "
//             >
//               Your Certifications
//             </h2>

//             <p
//               className="
//                 mt-2
//                 text-zinc-500
//               "
//             >
//               Certifications and credentials displayed on your portfolio.
//             </p>
//           </div>

//           <div
//             className="
//               inline-flex items-center
//               px-4 py-2
//               text-sm text-zinc-400
//               bg-white/[0.03]
//               rounded-full border border-white/10
//             "
//           >
//             {certifications.length} Certificates
//           </div>
//         </div>

//         {certifications.length === 0 ? (
//           <div
//             className="
//               mt-8 p-12
//               text-center
//               bg-white/[0.02]
//               rounded-3xl border border-dashed border-white/10
//             "
//           >
//             <h3
//               className="
//                 text-lg text-white font-semibold
//               "
//             >
//               No certifications added yet
//             </h3>

//             <p
//               className="
//                 mt-3
//                 text-zinc-500
//               "
//             >
//               Add your first certification to strengthen your credibility.
//             </p>
//           </div>
//         ) : (
//           <div
//             className="
//               grid md:grid-cols-2
//               mt-8
//               gap-5
//             "
//           >
//             {certifications.map((certification) => (
//               <CertificationCard
//                 key={certification._id}
//                 certification={certification}
//                 fetchCertifications={fetchCertifications}
//                 setEditingCertification={setEditingCertification}
//               />
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Navigation */}
//       <div
//         className="
//           flex flex-col sm:flex-row
//           gap-3
//         "
//       >
//         <button
//           type="button"
//           onClick={() => router.push("/dashboard/portfolio/education")}
//           className="
//           flex-1
//           rounded-2xl
//           border
//           border-white/10
//           py-3.5
//           font-medium
//           text-white
//           transition
//           hover:bg-white/[0.04]
//         "
//         >
//           ← Back
//         </button>

//         <button
//           type="button"
//           onClick={() => router.push("/dashboard/portfolio/templates")}
//           className="
//           flex-1
//           rounded-2xl
//           bg-white
//           py-3.5
//           font-medium
//           text-black
//           transition
//           hover:opacity-90
//         "
//         >
//           Choose Template →
//         </button>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import CertificationForm from "@/components/portfolio/certifications/CertificationForm";
// import CertificationCard from "@/components/portfolio/certifications/CertificationCard";
// import BuilderHeader from "@/components/portfolio/builder/BuilderHeader";
// import { useRouter } from "next/navigation";
// export default function CertificationsPage() {
//   const [certifications, setCertifications] = useState([]);
//   const router = useRouter();

//   const [editingCertification, setEditingCertification] = useState(null);

//   const fetchCertifications = async () => {
//     try {
//       const response = await fetch("/api/dashboard/portfolio/certifications");

//       const data = await response.json();

//       setCertifications(data.certifications || []);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     const loadCertifications = async () => {
//       await fetchCertifications();
//     };

//     loadCertifications();
//   }, []);

//   return (
//     <div
//       className="
//         max-w-7xl
//         mx-auto space-y-8 p-6 lg:p-10
//       "
//     >
//       <BuilderHeader
//         title="Certifications"
//         description="Showcase certifications, licenses, and professional credentials."
//         step={7}
//         totalSteps={8}
//       />

//       {/* Form */}
//       <div
//         className="
//           p-6 lg:p-8
//           bg-white/[0.03]
//           rounded-[28px] border border-white/10
//         "
//       >
//         <CertificationForm
//           editingCertification={editingCertification}
//           setEditingCertification={setEditingCertification}
//           fetchCertifications={fetchCertifications}
//         />
//       </div>

//       {/* Certifications List */}
//       <div
//         className="
//           p-6 lg:p-8
//           bg-white/[0.03]
//           rounded-[28px] border border-white/10
//         "
//       >
//         <div
//           className="
//             flex flex-col sm:flex-row sm:items-center sm:justify-between
//             gap-4
//           "
//         >
//           <div>
//             <h2
//               className="
//                 text-xl text-white font-semibold
//               "
//             >
//               Your Certifications
//             </h2>

//             <p
//               className="
//                 mt-2
//                 text-zinc-500
//               "
//             >
//               Certifications and credentials displayed on your portfolio.
//             </p>
//           </div>

//           <div
//             className="
//               inline-flex items-center
//               px-4 py-2
//               text-sm text-zinc-400
//               bg-white/[0.03]
//               rounded-full border border-white/10
//             "
//           >
//             {certifications.length} Certificates
//           </div>
//         </div>

//         {certifications.length === 0 ? (
//           <div
//             className="
//               mt-8 p-12
//               text-center
//               bg-white/[0.02]
//               rounded-3xl border border-dashed border-white/10
//             "
//           >
//             <h3
//               className="
//                 text-lg text-white font-semibold
//               "
//             >
//               No certifications added yet
//             </h3>

//             <p
//               className="
//                 mt-3
//                 text-zinc-500
//               "
//             >
//               Add your first certification to strengthen your credibility.
//             </p>
//           </div>
//         ) : (
//           <div
//             className="
//               grid md:grid-cols-2
//               mt-8
//               gap-5
//             "
//           >
//             {certifications.map((certification) => (
//               <CertificationCard
//                 key={certification._id}
//                 certification={certification}
//                 fetchCertifications={fetchCertifications}
//                 setEditingCertification={setEditingCertification}
//               />
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Navigation */}
//       <div
//         className="
//           flex flex-col sm:flex-row
//           gap-3
//         "
//       >
//         <button
//           type="button"
//           onClick={() => router.push("/dashboard/portfolio/education")}
//           className="
//           flex-1
//           rounded-2xl
//           border
//           border-white/10
//           py-3.5
//           font-medium
//           text-white
//           transition
//           hover:bg-white/[0.04]
//         "
//         >
//           ← Back
//         </button>

//         <button
//           type="button"
//           onClick={() => router.push("/dashboard/portfolio/templates")}
//           className="
//           flex-1
//           rounded-2xl
//           bg-white
//           py-3.5
//           font-medium
//           text-black
//           transition
//           hover:opacity-90
//         "
//         >
//           Choose Template →
//         </button>
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import CertificationForm from "@/components/portfolio/certifications/CertificationForm";
import CertificationCard from "@/components/portfolio/certifications/CertificationCard";
import BuilderHeader from "@/components/portfolio/builder/BuilderHeader";
import { useRouter } from "next/navigation";
import { useCertification } from "@/hooks/portfolio/useCertification";

export default function CertificationsPage() {
  const [certifications, setCertifications] = useState([]);
  const router = useRouter();

  const [editingCertification, setEditingCertification] = useState(null);
  const { loading, fetchCertifications } = useCertification();

  const loadCertifications = async () => {
    const data = await fetchCertifications();

    setCertifications(data);
  };

  useEffect(() => {
    loadCertifications();
  }, []);


  return (
    <div
      className="
        max-w-7xl
        mx-auto space-y-8 p-6 lg:p-10
      "
    >
      <BuilderHeader
        title="Certifications"
        description="Showcase certifications, licenses, and professional credentials."
        step={7}
        totalSteps={8}
      />

      {/* Form */}
      <div
        className="
          p-6 lg:p-8
          bg-white/[0.03]
          rounded-[28px] border border-white/10
        "
      >
        <CertificationForm
          editingCertification={editingCertification}
          setEditingCertification={setEditingCertification}
          fetchCertifications={ loadCertifications}
        />
      </div>

      {/* Certifications List */}
      <div
        className="
          p-6 lg:p-8
          bg-white/[0.03]
          rounded-[28px] border border-white/10
        "
      >
        <div
          className="
            flex flex-col sm:flex-row sm:items-center sm:justify-between
            gap-4
          "
        >
          <div>
            <h2
              className="
                text-xl text-white font-semibold
              "
            >
              Your Certifications
            </h2>

            <p
              className="
                mt-2
                text-zinc-500
              "
            >
              Certifications and credentials displayed on your portfolio.
            </p>
          </div>

          <div
            className="
              inline-flex items-center
              px-4 py-2
              text-sm text-zinc-400
              bg-white/[0.03]
              rounded-full border border-white/10
            "
          >
            {certifications.length} Certificates
          </div>
        </div>

        {certifications.length === 0 ? (
          <div
            className="
              mt-8 p-12
              text-center
              bg-white/[0.02]
              rounded-3xl border border-dashed border-white/10
            "
          >
            <h3
              className="
                text-lg text-white font-semibold
              "
            >
              No certifications added yet
            </h3>

            <p
              className="
                mt-3
                text-zinc-500
              "
            >
              Add your first certification to strengthen your credibility.
            </p>
          </div>
        ) : (
          <div
            className="
              grid md:grid-cols-2
              mt-8
              gap-5
            "
          >
            {certifications.map((certification) => (
              <CertificationCard
                key={certification._id}
                certification={certification}
                fetchCertifications={loadCertifications}
                setEditingCertification={setEditingCertification}
              />
            ))}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div
        className="
          flex flex-col sm:flex-row
          gap-3
        "
      >
        <button
          type="button"
          onClick={() => router.push("/dashboard/portfolio/education")}
          className="
          flex-1
          rounded-2xl
          border
          border-white/10
          py-3.5
          font-medium
          text-white
          transition
          hover:bg-white/[0.04]
        "
        >
          ← Back
        </button>

        <button
          type="button"
          onClick={() => router.push("/dashboard/portfolio/templates")}
          className="
          flex-1
          rounded-2xl
          bg-white
          py-3.5
          font-medium
          text-black
          transition
          hover:opacity-90
        "
        >
          Choose Template →
        </button>
      </div>
    </div>
  );
}
