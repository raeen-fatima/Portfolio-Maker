// "use client";
// // React Hooks
// import { useEffect, useState } from "react";
// // React Hook Form
// import { useForm, useWatch } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// // Validation Schema
// import { heroSchema } from "@/validators/portfolio/portfolio";
// // UI & Notifications
// import { toast } from "sonner";
// import ImageUpload from "@/components/ui/ImageUpload";
// import Image from "next/image";
// import BuilderHeader from "@/components/portfolio/builder/BuilderHeader";
// import { useRouter } from "next/navigation";

// import { useHero } from "@/hooks/portfolio/useHero";

// export default function HeroPage() {
//   // Loading state for form submission
//   const { loading, fetchHero, saveHero } = useHero();
//   const [imageUrl, setImageUrl] = useState("");
//   const router = useRouter();

//   // Initialize form with Zod schema validation
//   const {
//     register,
//     handleSubmit,
//     control,
//     reset,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(heroSchema),

    
//   });

//   // Watch form fields for real-time preview updates
//   const name = useWatch({
//     control,
//     name: "name",
//   });

//   const title = useWatch({
//     control,
//     name: "title",
//   });

//   const tagline = useWatch({
//     control,
//     name: "tagline",
//   });

//   const resumeUrl = useWatch({
//     control,
//     name: "resumeUrl",
//   });
//   // Fetch existing hero data on component mount
//   useEffect(() => {
//     const loadHero = async () => {
//       const hero = await fetchHero();

//       if (!hero) return;

//       reset(hero);

//       if (hero.image) {
//         setImageUrl(hero.image);
//       }
//     };

//     loadHero();
//   }, [fetchHero, reset]);

// const onSubmit = async (data) => {
//   try {
//     const result = await saveHero({
//       ...data,
//       image: imageUrl,
//     });

//     if (!result.success) {
//       toast.error(
//         result.data?.message || "Save failed",
//       );
//       return;
//     }

//     toast.success(result.data.message);

//     router.push(
//       "/dashboard/portfolio/about",
//     );
//   } catch (error) {
//     console.error(error);

//     toast.error("Something went wrong");
//   }
// };

//   // Handle form submission - save hero section to database
//   // const onSubmit = async (data) => {
//   //   try {
//   //     setLoading(true);

//   //     // Send form data along with profile image URL to API
//   //     const response = await fetch("/api/dashboard/portfolio/hero", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify({
//   //         ...data,
//   //         image: imageUrl,
//   //       }),
//   //     });
//   //     console.log("FORM DATA:", data);

//   //     const result = await response.json();

//   //     // Show error toast if submission failed
//   //     if (!response.ok) {
//   //       toast.error(result.message);
//   //       return;
//   //     }

//   //     // Show success message
//   //     toast.success(result.message);
//   //     router.push("/dashboard/portfolio/about");
//   //   } catch (error) {
//   //     toast.error("Something went wrong");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   return (
//     <div
//       className="
//         space-y-6 p-6 lg:p-12
//       "
//     >
//       {/* Page Header */}

//       <BuilderHeader
//         title="Hero Section"
//         description="Customize the first thing visitors see when they open your portfolio."
//         step={1}
//         totalSteps={8}
//       />

//       {/* Main Layout - Two column grid: Editor on left, Preview on right */}
//       <div
//         className="
//           grid xl:grid-cols-[1fr_420px]
//           gap-6
//         "
//       >
//         {/* Form Card */}
//         <div
//           className="
//             p-6 lg:p-8
//             bg-white/[0.03]
//             rounded-[28px] border border-white/10
//           "
//         >
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className="
//               space-y-6
//             "
//           >
//             {/* Name + Title */}
//             <div
//               className="
//                 grid md:grid-cols-2
//                 gap-5
//               "
//             >
//               {/* Full Name Input */}
//               <div>
//                 <label
//                   className="
//                     block
//                     mb-2
//                     text-sm font-medium
//                   "
//                 >
//                   Full Name
//                 </label>

//                 <input
//                   type="text"
//                   placeholder="John Doe"
//                   {...register("name")}
//                   className="
//                     w-full
//                     px-4 py-3.5
//                     text-white placeholder:text-zinc-600
//                     bg-black
//                     rounded-2xl border border-white/10 focus:border-white/20
//                     outline-none
//                     transition
//                   "
//                 />

//                 {errors.name && (
//                   <p
//                     className="
//                       mt-2
//                       text-sm text-red-500
//                     "
//                   >
//                     {errors.name.message}
//                   </p>
//                 )}
//               </div>

//               {/* Professional Title */}
//               <div>
//                 <label
//                   className="
//                     block
//                     mb-2
//                     text-sm font-medium
//                   "
//                 >
//                   Professional Title
//                 </label>

//                 <input
//                   type="text"
//                   placeholder="Full Stack Developer"
//                   {...register("title")}
//                   className="
//                     w-full
//                     px-4 py-3.5
//                     text-white placeholder:text-zinc-600
//                     bg-black
//                     rounded-2xl border border-white/10 focus:border-white/20
//                     outline-none
//                     transition
//                   "
//                 />

//                 {errors.title && (
//                   <p
//                     className="
//                       mt-2
//                       text-sm text-red-500
//                     "
//                   >
//                     {errors.title.message}
//                   </p>
//                 )}
//               </div>
//             </div>

//             {/* Tagline */}
//             <div>
//               <label
//                 className="
//                   block
//                   mb-2
//                   text-sm font-medium
//                 "
//               >
//                 Tagline
//               </label>

//               <textarea
//                 rows={4}
//                 placeholder="Building modern web applications with Next.js and MongoDB."
//                 {...register("tagline")}
//                 className="
//                   w-full
//                   px-4 py-3.5
//                   text-white placeholder:text-zinc-600
//                   bg-black
//                   rounded-2xl border border-white/10 focus:border-white/20
//                   outline-none
//                   transition
//                   resize-none
//                 "
//               />

//               {errors.tagline && (
//                 <p
//                   className="
//                     mt-2
//                     text-sm text-red-500
//                   "
//                 >
//                   {errors.tagline.message}
//                 </p>
//               )}
//             </div>

//             {/* Resume URL */}
//             <div>
//               <label
//                 className="
//                   block
//                   mb-2
//                   text-sm font-medium
//                 "
//               >
//                 Resume URL
//               </label>

//               <input
//                 type="text"
//                 placeholder="https://drive.google.com/..."
//                 {...register("resumeUrl")}
//                 className="
//                   w-full
//                   px-4 py-3.5
//                   text-white placeholder:text-zinc-600
//                   bg-black
//                   rounded-2xl border border-white/10 focus:border-white/20
//                   outline-none
//                   transition
//                 "
//               />

//               {errors.resumeUrl && (
//                 <p
//                   className="
//                     mt-2
//                     text-sm text-red-500
//                   "
//                 >
//                   {errors.resumeUrl.message}
//                 </p>
//               )}
//             </div>

//             {/* Upload */}
//             <div>
//               <label
//                 className="
//                   block
//                   mb-2
//                   text-sm font-medium
//                 "
//               >
//                 Profile Image
//               </label>

//               <ImageUpload onUpload={setImageUrl} />
//             </div>

//             {/* Footer */}
//             <div
//               className="
//                 flex flex-col sm:flex-row
//                 pt-4
//                 gap-3
//               "
//             >
//               <button
//                 type="button"
//                 className="
//                   flex-1
//                   py-3.5
//                   font-medium text-white
//                   hover:bg-white/[0.04]
//                   rounded-2xl border border-white/10
//                   transition
//                 "
//               >
//                 Save Draft
//               </button>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="
//                   flex-1
//                   py-3.5
//                   font-medium text-black
//                   bg-white
//                   rounded-2xl
//                   transition hover:opacity-90
//                 "
//               >
//                 {loading ? "Saving..." : "Save & Continue →"}
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Preview Card */}
//         <div
//           className="
//             xl:sticky xl:top-24
//             h-fit
//             p-8
//             bg-white/[0.03]
//             rounded-[28px] border border-white/10
//           "
//         >
//           <div
//             className="
//               flex flex-col items-center
//               text-center
//             "
//           >
//             {imageUrl ? (
//               <Image
//                 src={imageUrl}
//                 loading="eager"
//                 alt="Profile"
//                 width={120}
//                 height={120}
//                 className="
//                   object-cover
//                   h-32 w-32
//                   rounded-full
//                 "
//               />
//             ) : (
//               <div
//                 className="
//                   h-32 w-32
//                   bg-white/[0.03]
//                   rounded-full border border-dashed border-white/10
//                 "
//               />
//             )}

//             <p
//               className="
//                 mt-6
//                 text-zinc-500
//               "
//             >
//               Hi, I'm
//             </p>

//             <h1
//               className="
//                 mt-2
//                 text-3xl font-bold
//               "
//             >
//               {name || "Your Name"}
//             </h1>

//             <h2
//               className="
//                 mt-3
//                 text-zinc-400
//               "
//             >
//               {title || "Professional Title"}
//             </h2>

//             <p
//               className="
//                 max-w-sm
//                 mt-6
//                 leading-relaxed text-zinc-400
//               "
//             >
//               {tagline || "Your professional summary will appear here."}
//             </p>

//             <a
//               href={resumeUrl || "#"}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="
//                 inline-flex items-center
//                 mt-8 px-5 py-3
//                 font-medium text-black
//                 bg-white
//                 rounded-2xl
//                 transition hover:opacity-90
//               "
//             >
//               Download Resume
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

// React Hooks
import { useEffect, useState, useRef } from "react";
// React Hook Form
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// Validation Schema
import { heroSchema } from "@/validators/portfolio/portfolio";
// UI & Notifications
import { toast } from "sonner";
import ImageUpload from "@/components/ui/ImageUpload";
import Image from "next/image";
import BuilderHeader from "@/components/portfolio/builder/BuilderHeader";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap/gsap";

import { useHero } from "@/hooks/portfolio/useHero";

export default function HeroPage() {
  const containerRef = useRef(null);

  // Loading state for form submission
  const { loading, fetchHero, saveHero } = useHero();
  const [imageUrl, setImageUrl] = useState("");
  const router = useRouter();

  // Initialize form with Zod schema validation
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(heroSchema),
  });

  // Watch form fields for real-time preview updates
  const name = useWatch({
    control,
    name: "name",
  });

  const title = useWatch({
    control,
    name: "title",
  });

  const tagline = useWatch({
    control,
    name: "tagline",
  });

  const resumeUrl = useWatch({
    control,
    name: "resumeUrl",
  });

  // Fetch existing hero data on component mount
  useEffect(() => {
    const loadHero = async () => {
      const hero = await fetchHero();

      if (!hero) return;

      reset(hero);

      if (hero.image) {
        setImageUrl(hero.image);
      }
    };

    loadHero();
  }, [fetchHero, reset]);

  useGSAP(
    () => {
      if (containerRef.current) {
        gsap.from(".hero-builder-animate", {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          clearProps: "opacity,transform",
        });
      }
    },
    { scope: containerRef }
  );

  const onSubmit = async (data) => {
    try {
      const result = await saveHero({
        ...data,
        image: imageUrl,
      });

      if (!result.success) {
        toast.error(result.data?.message || "Save failed");
        return;
      }

      toast.success(result.data.message);

      router.push("/dashboard/portfolio/about");
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong");
    }
  };

  return (
    <div
      ref={containerRef}
      className="
        space-y-6 p-6 lg:p-12
      "
    >
      {/* Page Header */}
      <div className="hero-builder-animate">
        <BuilderHeader
          title="Hero Section"
          description="Customize the first thing visitors see when they open your portfolio."
          step={1}
          totalSteps={8}
        />
      </div>

      {/* Main Layout - Two column grid: Editor on left, Preview on right */}
      <div
        className="
          grid xl:grid-cols-[1fr_420px]
          gap-6
        "
      >
        {/* Form Card */}
        <div
          className="
            hero-builder-animate
            p-6 lg:p-8
            bg-white/[0.03]
            rounded-[28px] border border-white/10
          "
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="
              space-y-6
            "
          >
            {/* Name + Title */}
            <div
              className="
                grid md:grid-cols-2
                gap-5
              "
            >
              {/* Full Name Input */}
              <div>
                <label
                  className="
                    block
                    mb-2
                    text-sm font-medium
                  "
                >
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  {...register("name")}
                  className="
                    w-full
                    px-4 py-3.5
                    text-white placeholder:text-zinc-600
                    bg-black
                    rounded-2xl border border-white/10 focus:border-white/20
                    outline-none
                    transition
                  "
                />

                {errors.name && (
                  <p
                    className="
                      mt-2
                      text-sm text-red-500
                    "
                  >
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Professional Title */}
              <div>
                <label
                  className="
                    block
                    mb-2
                    text-sm font-medium
                  "
                >
                  Professional Title
                </label>

                <input
                  type="text"
                  placeholder="Full Stack Developer"
                  {...register("title")}
                  className="
                    w-full
                    px-4 py-3.5
                    text-white placeholder:text-zinc-600
                    bg-black
                    rounded-2xl border border-white/10 focus:border-white/20
                    outline-none
                    transition
                  "
                />

                {errors.title && (
                  <p
                    className="
                      mt-2
                      text-sm text-red-500
                    "
                  >
                    {errors.title.message}
                  </p>
                )}
              </div>
            </div>

            {/* Tagline */}
            <div>
              <label
                className="
                  block
                  mb-2
                  text-sm font-medium
                "
              >
                Tagline
              </label>

              <textarea
                rows={4}
                placeholder="Building modern web applications with Next.js and MongoDB."
                {...register("tagline")}
                className="
                  w-full
                  px-4 py-3.5
                  text-white placeholder:text-zinc-600
                  bg-black
                  rounded-2xl border border-white/10 focus:border-white/20
                  outline-none
                  transition
                  resize-none
                "
              />

              {errors.tagline && (
                <p
                  className="
                    mt-2
                    text-sm text-red-500
                  "
                >
                  {errors.tagline.message}
                </p>
              )}
            </div>

            {/* Resume URL */}
            <div>
              <label
                className="
                  block
                  mb-2
                  text-sm font-medium
                "
              >
                Resume URL
              </label>

              <input
                type="text"
                placeholder="https://drive.google.com/..."
                {...register("resumeUrl")}
                className="
                  w-full
                  px-4 py-3.5
                  text-white placeholder:text-zinc-600
                  bg-black
                  rounded-2xl border border-white/10 focus:border-white/20
                  outline-none
                  transition
                "
              />

              {errors.resumeUrl && (
                <p
                  className="
                    mt-2
                    text-sm text-red-500
                  "
                >
                  {errors.resumeUrl.message}
                </p>
              )}
            </div>

            {/* Upload */}
            <div>
              <label
                className="
                  block
                  mb-2
                  text-sm font-medium
                "
              >
                Profile Image
              </label>

              <ImageUpload onUpload={setImageUrl} />
            </div>

            {/* Footer */}
            <div
              className="
                flex flex-col sm:flex-row
                pt-4
                gap-3
              "
            >
              <button
                type="button"
                className="
                  flex-1
                  py-3.5
                  font-medium text-white
                  hover:bg-white/[0.04]
                  rounded-2xl border border-white/10
                  transition
                "
              >
                Save Draft
              </button>

              <button
                type="submit"
                disabled={loading}
                className="
                  flex-1
                  py-3.5
                  font-medium text-black
                  bg-white
                  rounded-2xl
                  transition hover:opacity-90
                  disabled:opacity-50
                "
              >
                {loading ? "Saving..." : "Save & Continue →"}
              </button>
            </div>
          </form>
        </div>

        {/* Preview Card */}
        <div
          className="
            hero-builder-animate
            xl:sticky xl:top-24
            h-fit
            p-8
            bg-white/[0.03]
            rounded-[28px] border border-white/10
          "
        >
          <div
            className="
              flex flex-col items-center
              text-center
            "
          >
            {imageUrl ? (
              <Image
                src={imageUrl}
                loading="eager"
                alt="Profile"
                width={120}
                height={120}
                className="
                  object-cover
                  h-32 w-32
                  rounded-full
                "
              />
            ) : (
              <div
                className="
                  h-32 w-32
                  bg-white/[0.03]
                  rounded-full border border-dashed border-white/10
                "
              />
            )}

            <p
              className="
                mt-6
                text-zinc-500
              "
            >
              Hi, I'm
            </p>

            <h1
              className="
                mt-2
                text-3xl font-bold
              "
            >
              {name || "Your Name"}
            </h1>

            <h2
              className="
                mt-3
                text-zinc-400
              "
            >
              {title || "Professional Title"}
            </h2>

            <p
              className="
                max-w-sm
                mt-6
                leading-relaxed text-zinc-400
              "
            >
              {tagline || "Your professional summary will appear here."}
            </p>

            <a
              href={resumeUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center
                mt-8 px-5 py-3
                font-medium text-black
                bg-white
                rounded-2xl
                transition hover:opacity-90
              "
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}