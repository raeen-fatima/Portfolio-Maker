"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message);
        return;
      }

      toast.success(result.message);
      setEmail("");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        relative flex items-center justify-center overflow-hidden
        min-h-screen
        px-6
        bg-black
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute left-0 top-0
          h-96 w-96
          bg-white/5
          rounded-full
          blur-3xl
        "
        /
      >
      <div
        className="
          absolute bottom-0 right-0
          h-96 w-96
          bg-white/5
          rounded-full
          blur-3xl
        "
        /
      >

      <div
        className="
          relative z-10
          w-full max-w-md
          p-8 md:p-10
          bg-white/[0.03]
          rounded-[32px] border border-white/10
          backdrop-blur-xl
        "
      >
        {/* Header */}
        <div
          className="
            text-center
          "
        >
          <div
            className="
              inline-flex
              mx-auto mb-5 px-4 py-2
              text-xs text-zinc-400
              bg-white/[0.03]
              rounded-full border border-white/10
            "
          >
            Password Recovery
          </div>

          <h1
            className="
              text-4xl text-white font-bold
            "
          >
            Forgot Password?
          </h1>

          <p
            className="
              mt-3
              text-sm text-zinc-500
            "
          >
            Enter your email address and we'll send you a secure password reset
            link.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="
            mt-10 space-y-6
          "
        >
          <div>
            <label
              className="
                block
                mb-2
                text-xs text-zinc-500 font-medium uppercase tracking-wider
              "
            >
              Email Address
            </label>

            <input
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
              w-full
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              px-4
              py-3.5
              text-white
              placeholder:text-zinc-600
              outline-none
              transition
              focus:border-white/20
              focus:bg-white/[0.05]
            "
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              py-3.5
              font-medium text-black
              bg-white
              rounded-2xl
              transition-all duration-200 hover:opacity-95 disabled:opacity-50
              hover:scale-[1.01] active:scale-[0.99]
            "
          >
            {loading ? (
              <span
                className="
                  flex items-center justify-center
                  gap-2
                "
              >
                <span
                  className="
                    h-4 w-4
                    rounded-full border-2 border-black border-t-transparent
                    animate-spin
                  "
                  /
                >
                Sending Link...
              </span>
            ) : (
              "Send Reset Link"
            )}
          </button>
        </form>

        {/* Footer */}
        <p
          className="
            mt-8
            text-center text-xs text-zinc-600
          "
        >
          We'll only send a reset link if an account exists for this email.
        </p>
      </div>
    </div>
  );
}
