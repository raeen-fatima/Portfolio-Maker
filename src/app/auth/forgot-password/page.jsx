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

      const response = await fetch(
        "/api/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const result =
        await response.json();

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
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] px-6">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-black">
            Forgot Password
          </h1>

          <p className="text-gray-500 mt-2">
            Enter your email to receive a
            password reset link.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div>
            <label className="block text-xs uppercase tracking-wide text-gray-500 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full bg-transparent text-black border-b border-gray-400 py-2 text-sm outline-none focus:border-black transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 text-sm font-medium hover:opacity-90 transition disabled:opacity-50"
          >
            {loading
              ? "Sending..."
              : "Send Reset Link"}
          </button>
        </form>
      </div>
    </div>
  );
}