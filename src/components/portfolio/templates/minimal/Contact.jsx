// "use client";

// import { useState } from "react";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Send,
// } from "lucide-react";
// import { toast } from "sonner";

// export default function Contact({
//   aboutData,
// }) {
//   const [loading, setLoading] =
//     useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]:
//         e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);

//       const response = await fetch(
//         "/api/contact",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type":
//               "application/json",
//           },
//           body: JSON.stringify({
//             ...form,
//             ownerEmail:
//               aboutData?.email,
//           }),
//         }
//       );

//       const result =
//         await response.json();

//       if (!response.ok) {
//         toast.error(result.message);
//         return;
//       }

//       toast.success(
//         "Message sent successfully"
//       );

//       setForm({
//         name: "",
//         email: "",
//         message: "",
//       });
//     } catch (error) {
//       console.log(error);

//       toast.error(
//         "Something went wrong"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="
//         border-b
//         border-zinc-200
//         bg-white
//       "
//     >
//       <div className="mx-auto max-w-7xl px-6 py-24">
//         <div className="grid gap-16 lg:grid-cols-2">
          
//           {/* Left */}
//           <div>
//             <p
//               className="
//                 text-xs
//                 uppercase
//                 tracking-[0.35em]
//                 text-zinc-500
//               "
//             >
//               Contact
//             </p>

//             <h2
//               className="
//                 mt-4
//                 text-4xl
//                 font-bold
//                 tracking-tight
//                 text-black
//                 md:text-5xl
//               "
//             >
//               Let's work together.
//             </h2>

//             <p
//               className="
//                 mt-6
//                 max-w-lg
//                 text-lg
//                 leading-8
//                 text-zinc-500
//               "
//             >
//               Have a project in mind or
//               just want to say hello?
//               Feel free to reach out.
//             </p>

//             <div className="mt-12 space-y-6">
//               {aboutData?.email && (
//                 <div className="flex items-center gap-4">
//                   <Mail
//                     size={20}
//                     className="text-lime-500"
//                   />

//                   <span className="text-zinc-700">
//                     {aboutData.email}
//                   </span>
//                 </div>
//               )}

//               {aboutData?.phone && (
//                 <div className="flex items-center gap-4">
//                   <Phone
//                     size={20}
//                     className="text-lime-500"
//                   />

//                   <span className="text-zinc-700">
//                     {aboutData.phone}
//                   </span>
//                 </div>
//               )}

//               {aboutData?.location && (
//                 <div className="flex items-center gap-4">
//                   <MapPin
//                     size={20}
//                     className="text-lime-500"
//                   />

//                   <span className="text-zinc-700">
//                     {aboutData.location}
//                   </span>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="space-y-5"
//           >
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={form.name}
//               onChange={handleChange}
//               required
//               className="
//                 w-full
//                 border-b
//                 border-zinc-300
//                 pb-4
//                 outline-none
//               "
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="
//                 w-full
//                 border-b
//                 border-zinc-300
//                 pb-4
//                 outline-none
//               "
//             />

//             <textarea
//               rows={6}
//               name="message"
//               placeholder="Your Message"
//               value={form.message}
//               onChange={handleChange}
//               required
//               className="
//                 w-full
//                 border-b
//                 border-zinc-300
//                 pb-4
//                 outline-none
//                 resize-none
//               "
//             />

//             <button
//               type="submit"
//               disabled={loading}
//               className="
//                 inline-flex
//                 items-center
//                 gap-2
//                 rounded-full
//                 bg-lime-300
//                 px-6
//                 py-3
//                 font-medium
//                 text-black
//                 transition
//                 hover:bg-lime-400
//               "
//             >
//               <Send size={18} />

//               {loading
//                 ? "Sending..."
//                 : "Send Message"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap/gsap";

export default function Contact({ aboutData }) {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

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
        ".contact-info",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          clearProps: "all",
        }
      ).fromTo(
        ".contact-form",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          clearProps: "all",
        },
        "-=0.3"
      );
    },
    { scope: containerRef }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          ownerEmail: aboutData?.email,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message);
        return;
      }

      toast.success("Message sent successfully");

      setForm({
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
      className="border-b border-zinc-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Info */}
          <div className="contact-info">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500 font-semibold">
              Contact
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-black md:text-5xl">
              Let&apos;s work together.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-600">
              Have a project in mind or just want to say hello? Feel free to reach out.
            </p>

            <div className="mt-12 space-y-6">
              {aboutData?.email && (
                <div className="flex items-center gap-4 text-zinc-800 font-medium">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-50 text-lime-600">
                    <Mail size={20} />
                  </div>
                  <span>{aboutData.email}</span>
                </div>
              )}

              {aboutData?.phone && (
                <div className="flex items-center gap-4 text-zinc-800 font-medium">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-50 text-lime-600">
                    <Phone size={20} />
                  </div>
                  <span>{aboutData.phone}</span>
                </div>
              )}

              {aboutData?.location && (
                <div className="flex items-center gap-4 text-zinc-800 font-medium">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-50 text-lime-600">
                    <MapPin size={20} />
                  </div>
                  <span>{aboutData.location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Form */}
          <div className="contact-form">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-3xl border border-zinc-200 bg-zinc-50/50 p-8 sm:p-10 shadow-sm"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-zinc-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3.5 text-black placeholder:text-zinc-400 outline-none transition focus:border-black focus:ring-1 focus:ring-black"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-zinc-700 mb-2"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3.5 text-black placeholder:text-zinc-400 outline-none transition focus:border-black focus:ring-1 focus:ring-black"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-zinc-700 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  name="message"
                  placeholder="How can I help you?"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3.5 text-black placeholder:text-zinc-400 outline-none transition focus:border-black focus:ring-1 focus:ring-black resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-8 py-3.5 font-semibold text-black transition hover:bg-lime-500 disabled:opacity-50"
              >
                <Send size={18} />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}