"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { toast } from "sonner";

export default function Contact({
  aboutData,
}) {
  const [loading, setLoading] =
    useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            ...form,
            ownerEmail:
              aboutData?.email,
          }),
        }
      );

      const result =
        await response.json();

      if (!response.ok) {
        toast.error(result.message);
        return;
      }

      toast.success(
        "Message sent successfully"
      );

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);

      toast.error(
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="
        border-b
        border-zinc-200
        bg-white
      "
    >
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          
          {/* Left */}
          <div>
            <p
              className="
                text-xs
                uppercase
                tracking-[0.35em]
                text-zinc-500
              "
            >
              Contact
            </p>

            <h2
              className="
                mt-4
                text-4xl
                font-bold
                tracking-tight
                text-black
                md:text-5xl
              "
            >
              Let's work together.
            </h2>

            <p
              className="
                mt-6
                max-w-lg
                text-lg
                leading-8
                text-zinc-500
              "
            >
              Have a project in mind or
              just want to say hello?
              Feel free to reach out.
            </p>

            <div className="mt-12 space-y-6">
              {aboutData?.email && (
                <div className="flex items-center gap-4">
                  <Mail
                    size={20}
                    className="text-lime-500"
                  />

                  <span className="text-zinc-700">
                    {aboutData.email}
                  </span>
                </div>
              )}

              {aboutData?.phone && (
                <div className="flex items-center gap-4">
                  <Phone
                    size={20}
                    className="text-lime-500"
                  />

                  <span className="text-zinc-700">
                    {aboutData.phone}
                  </span>
                </div>
              )}

              {aboutData?.location && (
                <div className="flex items-center gap-4">
                  <MapPin
                    size={20}
                    className="text-lime-500"
                  />

                  <span className="text-zinc-700">
                    {aboutData.location}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="
                w-full
                border-b
                border-zinc-300
                pb-4
                outline-none
              "
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="
                w-full
                border-b
                border-zinc-300
                pb-4
                outline-none
              "
            />

            <textarea
              rows={6}
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="
                w-full
                border-b
                border-zinc-300
                pb-4
                outline-none
                resize-none
              "
            />

            <button
              type="submit"
              disabled={loading}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-lime-300
                px-6
                py-3
                font-medium
                text-black
                transition
                hover:bg-lime-400
              "
            >
              <Send size={18} />

              {loading
                ? "Sending..."
                : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}