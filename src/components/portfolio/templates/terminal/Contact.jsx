"use client";

import { useState } from "react";
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
        bg-black
        px-6
        py-24
        text-zinc-100
      "
    >
      <div className="mx-auto max-w-6xl">
        <div
          className="
            overflow-hidden
            rounded-3xl
            border
            border-zinc-800
            bg-zinc-950
          "
        >
          {/* Terminal Header */}
          <div
            className="
              flex
              items-center
              gap-2
              border-b
              border-zinc-800
              px-5
              py-4
            "
          >
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />

            <span
              className="
                ml-4
                text-sm
                text-zinc-500
              "
            >
              send-message.sh
            </span>
          </div>

          {/* Content */}
          <div
            className="
              p-8
              font-mono
              md:p-12
            "
          >
            <p className="text-green-500">
              $ send-message
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-8"
            >
              {/* Name */}
              <div>
                <label className="text-green-400">
                  name:
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={
                    handleChange
                  }
                  className="
                    mt-2
                    w-full
                    border-b
                    border-zinc-700
                    bg-transparent
                    pb-3
                    text-zinc-200
                    outline-none
                    focus:border-green-500
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-green-400">
                  email:
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={
                    handleChange
                  }
                  className="
                    mt-2
                    w-full
                    border-b
                    border-zinc-700
                    bg-transparent
                    pb-3
                    text-zinc-200
                    outline-none
                    focus:border-green-500
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-green-400">
                  message:
                </label>

                <textarea
                  rows={5}
                  name="message"
                  required
                  value={form.message}
                  onChange={
                    handleChange
                  }
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
                    focus:border-green-500
                  "
                />
              </div>

              {/* Button */}
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
                "
              >
                {loading
                  ? "executing..."
                  : "execute"}
              </button>
            </form>

            {/* Cursor */}
            <div
              className="
                mt-10
                flex
                items-center
                gap-2
                text-green-500
              "
            >
              <span>$</span>

              <span
                className="
                  h-5
                  w-3
                  animate-pulse
                  bg-green-500
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}