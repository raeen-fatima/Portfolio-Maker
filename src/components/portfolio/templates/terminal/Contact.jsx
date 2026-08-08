// "use client";

// import { useState } from "react";
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
//         bg-black
//         px-6
//         py-24
//         text-zinc-100
//       "
//     >
//       <div className="mx-auto max-w-6xl">
//         <div
//           className="
//             overflow-hidden
//             rounded-3xl
//             border
//             border-zinc-800
//             bg-zinc-950
//           "
//         >
//           {/* Terminal Header */}
//           <div
//             className="
//               flex
//               items-center
//               gap-2
//               border-b
//               border-zinc-800
//               px-5
//               py-4
//             "
//           >
//             <div className="h-3 w-3 rounded-full bg-red-500" />
//             <div className="h-3 w-3 rounded-full bg-yellow-500" />
//             <div className="h-3 w-3 rounded-full bg-green-500" />

//             <span
//               className="
//                 ml-4
//                 text-sm
//                 text-zinc-500
//               "
//             >
//               send-message.sh
//             </span>
//           </div>

//           {/* Content */}
//           <div
//             className="
//               p-8
//               font-mono
//               md:p-12
//             "
//           >
//             <p className="text-green-500">
//               $ send-message
//             </p>

//             <form
//               onSubmit={handleSubmit}
//               className="mt-10 space-y-8"
//             >
//               {/* Name */}
//               <div>
//                 <label className="text-green-400">
//                   name:
//                 </label>

//                 <input
//                   type="text"
//                   name="name"
//                   required
//                   value={form.name}
//                   onChange={
//                     handleChange
//                   }
//                   className="
//                     mt-2
//                     w-full
//                     border-b
//                     border-zinc-700
//                     bg-transparent
//                     pb-3
//                     text-zinc-200
//                     outline-none
//                     focus:border-green-500
//                   "
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="text-green-400">
//                   email:
//                 </label>

//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   value={form.email}
//                   onChange={
//                     handleChange
//                   }
//                   className="
//                     mt-2
//                     w-full
//                     border-b
//                     border-zinc-700
//                     bg-transparent
//                     pb-3
//                     text-zinc-200
//                     outline-none
//                     focus:border-green-500
//                   "
//                 />
//               </div>

//               {/* Message */}
//               <div>
//                 <label className="text-green-400">
//                   message:
//                 </label>

//                 <textarea
//                   rows={5}
//                   name="message"
//                   required
//                   value={form.message}
//                   onChange={
//                     handleChange
//                   }
//                   className="
//                     mt-2
//                     w-full
//                     border-b
//                     border-zinc-700
//                     bg-transparent
//                     pb-3
//                     text-zinc-200
//                     outline-none
//                     resize-none
//                     focus:border-green-500
//                   "
//                 />
//               </div>

//               {/* Button */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="
//                   rounded-lg
//                   border
//                   border-green-500
//                   px-6
//                   py-3
//                   text-green-400
//                   transition
//                   hover:bg-green-500
//                   hover:text-black
//                 "
//               >
//                 {loading
//                   ? "executing..."
//                   : "execute"}
//               </button>
//             </form>

//             {/* Cursor */}
//             <div
//               className="
//                 mt-10
//                 flex
//                 items-center
//                 gap-2
//                 text-green-500
//               "
//             >
//               <span>$</span>

//               <span
//                 className="
//                   h-5
//                   w-3
//                   animate-pulse
//                   bg-green-500
//                 "
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState, useRef } from "react";
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
        ".contact-terminal-box",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          clearProps: "all",
        }
      ).fromTo(
        ".contact-terminal-field",
        { opacity: 0, x: -15 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "all",
        },
        "-=0.3"
      );
    },
    { scope: containerRef }
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

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
      className="bg-black px-6 py-24 text-zinc-100"
    >
      <div className="mx-auto max-w-6xl">
        <div className="contact-terminal-box overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 border-b border-zinc-800 px-5 py-4">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />

            <span className="ml-4 text-sm font-mono text-zinc-500">
              send-message.sh
            </span>
          </div>

          {/* Content */}
          <div className="p-8 font-mono md:p-12">
            <p className="text-green-500">$ send-message</p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-8">
              {/* Name */}
              <div className="contact-terminal-field">
                <label htmlFor="contact-name" className="text-green-400">
                  name:
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="
                    mt-2
                    w-full
                    border-b
                    border-zinc-700
                    bg-transparent
                    pb-3
                    text-zinc-200
                    outline-none
                    transition
                    focus:border-green-500
                  "
                />
              </div>

              {/* Email */}
              <div className="contact-terminal-field">
                <label htmlFor="contact-email" className="text-green-400">
                  email:
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="
                    mt-2
                    w-full
                    border-b
                    border-zinc-700
                    bg-transparent
                    pb-3
                    text-zinc-200
                    outline-none
                    transition
                    focus:border-green-500
                  "
                />
              </div>

              {/* Message */}
              <div className="contact-terminal-field">
                <label htmlFor="contact-message" className="text-green-400">
                  message:
                </label>

                <textarea
                  id="contact-message"
                  rows={5}
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="
                    mt-2
                    w-full
                    border-b
                    border-zinc-700
                    bg-transparent
                    pb-3
                    text-zinc-200
                    outline-none
                    resize-none
                    transition
                    focus:border-green-500
                  "
                />
              </div>

              {/* Button */}
              <div className="contact-terminal-field">
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    rounded-lg
                    border
                    border-green-500
                    px-6
                    py-3
                    text-green-400
                    transition
                    hover:bg-green-500
                    hover:text-black
                    disabled:opacity-50
                    cursor-pointer
                  "
                >
                  {loading ? "executing..." : "execute"}
                </button>
              </div>
            </form>

            {/* Cursor */}
            <div className="mt-10 flex items-center gap-2 text-green-500">
              <span>$</span>
              <span className="h-5 w-3 animate-pulse bg-green-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}