// "use client";

// import { useState } from "react";
// import { Mail, Phone, MapPin } from "lucide-react";
// import { toast } from "sonner";

// export default function Contact({ aboutData }) {
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);

//       const response = await fetch("/api/portfolio/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           ...formData,
//           ownerEmail: aboutData?.email,
//         }),
//       });

//       const result = await response.json();

//       if (!response.ok) {
//         toast.error(result.message);
//         return;
//       }

//       toast.success("Message sent successfully");

//       setFormData({
//         name: "",
//         email: "",
//         message: "",
//       });
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="relative overflow-hidden border-t border-zinc-900 bg-black"
//     >
//       {/* Glow */}
//       <div className="absolute top-20 left-0 h-72 w-72 rounded-full bg-violet-600/20 blur-[140px]" />
//       <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[140px]" />

//       <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
//         {/* Header */}
//         <div className="mb-14">
//           <p className="text-xs uppercase tracking-[0.4em] text-violet-400">
//             Contact
//           </p>

//           <h2 className="mt-2 text-3xl font-bold text-white md:text-5xl">
//             Let&apos;s Work Together
//           </h2>

//           <p className="mt-4 max-w-2xl text-zinc-400">
//             Have a project in mind or want to connect? Feel free to
//             reach out.
//           </p>
//         </div>

//         <div className="grid gap-8 lg:grid-cols-2">
//           {/* Contact Info */}
//           <div className="space-y-4">
//             {aboutData?.email && (
//               <div className="flex gap-4 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-5 backdrop-blur-sm">
//                 <Mail className="text-violet-400" />

//                 <div>
//                   <p className="text-sm text-zinc-500">
//                     Email
//                   </p>

//                   <p className="text-white break-all">
//                     {aboutData.email}
//                   </p>
//                 </div>
//               </div>
//             )}

//             {aboutData?.phone && (
//               <div className="flex gap-4 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-5 backdrop-blur-sm">
//                 <Phone className="text-violet-400" />

//                 <div>
//                   <p className="text-sm text-zinc-500">
//                     Phone
//                   </p>

//                   <p className="text-white">
//                     {aboutData.phone}
//                   </p>
//                 </div>
//               </div>
//             )}

//             {aboutData?.location && (
//               <div className="flex gap-4 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-5 backdrop-blur-sm">
//                 <MapPin className="text-violet-400" />

//                 <div>
//                   <p className="text-sm text-zinc-500">
//                     Location
//                   </p>

//                   <p className="text-white">
//                     {aboutData.location}
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Contact Form */}
//           <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-sm">
//             <form
//               onSubmit={handleSubmit}
//               className="space-y-4"
//             >
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 required
//                 value={formData.name}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     name: e.target.value,
//                   })
//                 }
//                 className="
//                   w-full
//                   rounded-2xl
//                   border
//                   border-zinc-800
//                   bg-black
//                   px-4
//                   py-4
//                   text-white
//                   outline-none
//                   focus:border-violet-500
//                 "
//               />

//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 required
//                 value={formData.email}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     email: e.target.value,
//                   })
//                 }
//                 className="
//                   w-full
//                   rounded-2xl
//                   border
//                   border-zinc-800
//                   bg-black
//                   px-4
//                   py-4
//                   text-white
//                   outline-none
//                   focus:border-violet-500
//                 "
//               />

//               <textarea
//                 rows={6}
//                 placeholder="Your Message"
//                 required
//                 value={formData.message}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     message: e.target.value,
//                   })
//                 }
//                 className="
//                   w-full
//                   rounded-2xl
//                   border
//                   border-zinc-800
//                   bg-black
//                   px-4
//                   py-4
//                   text-white
//                   outline-none
//                   resize-none
//                   focus:border-violet-500
//                 "
//               />

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="
//                   w-full
//                   rounded-2xl
//                   bg-violet-600
//                   py-4
//                   font-medium
//                   text-white
//                   transition
//                   hover:bg-violet-500
//                   disabled:opacity-50
//                 "
//               >
//                 {loading
//                   ? "Sending..."
//                   : "Send Message"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState, useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap/gsap";

export default function Contact({ aboutData }) {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useGSAP(
    () => {
      if (typeof window !== "undefined") {
        ScrollTrigger.refresh();
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        ".contact-header",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          clearProps: "all",
        }
      )
        .fromTo(
          ".contact-info-card",
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: "power3.out",
            clearProps: "all",
          },
          "-=0.3"
        )
        .fromTo(
          ".contact-form-box",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            clearProps: "all",
          },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch("/api/portfolio/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          ownerEmail: aboutData?.email,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message);
        return;
      }

      toast.success("Message sent successfully");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative overflow-hidden border-t border-zinc-900 bg-black"
    >
      {/* Glow */}
      <div className="absolute top-20 left-0 h-72 w-72 rounded-full bg-violet-600/20 blur-[140px]" />
      <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
        {/* Header */}
        <div className="contact-header mb-14">
          <p className="text-xs uppercase tracking-[0.4em] text-violet-400 font-medium">
            Contact
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white md:text-5xl">
            Let&apos;s Work Together
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Have a project in mind or want to connect? Feel free to reach out.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-4">
            {aboutData?.email && (
              <div className="contact-info-card flex gap-4 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-5 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)]">
                <Mail className="text-violet-400 shrink-0" />

                <div>
                  <p className="text-sm text-zinc-500 font-medium">Email</p>
                  <p className="text-white break-all">{aboutData.email}</p>
                </div>
              </div>
            )}

            {aboutData?.phone && (
              <div className="contact-info-card flex gap-4 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-5 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)]">
                <Phone className="text-violet-400 shrink-0" />

                <div>
                  <p className="text-sm text-zinc-500 font-medium">Phone</p>
                  <p className="text-white">{aboutData.phone}</p>
                </div>
              </div>
            )}

            {aboutData?.location && (
              <div className="contact-info-card flex gap-4 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-5 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)]">
                <MapPin className="text-violet-400 shrink-0" />

                <div>
                  <p className="text-sm text-zinc-500 font-medium">
                    Location
                  </p>
                  <p className="text-white">{aboutData.location}</p>
                </div>
              </div>
            )}
          </div>

          {/* Contact Form */}
          <div className="contact-form-box rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className="
                  w-full
                  rounded-2xl
                  border
                  border-zinc-800
                  bg-black
                  px-4
                  py-4
                  text-white
                  placeholder:text-zinc-600
                  outline-none
                  transition
                  focus:border-violet-500
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="
                  w-full
                  rounded-2xl
                  border
                  border-zinc-800
                  bg-black
                  px-4
                  py-4
                  text-white
                  placeholder:text-zinc-600
                  outline-none
                  transition
                  focus:border-violet-500
                "
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                className="
                  w-full
                  rounded-2xl
                  border
                  border-zinc-800
                  bg-black
                  px-4
                  py-4
                  text-white
                  placeholder:text-zinc-600
                  outline-none
                  resize-none
                  transition
                  focus:border-violet-500
                "
              />

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  rounded-2xl
                  bg-violet-600
                  py-4
                  font-medium
                  text-white
                  transition
                  hover:bg-violet-500
                  disabled:opacity-50
                  cursor-pointer
                "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}