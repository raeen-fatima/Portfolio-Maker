"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";

export default function ResetPasswordPage() {
  const { token } = useParams();
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "/api/auth/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            token,
            password,
          }),
        }
      );

      const result =
        await response.json();

      if (!response.ok) {
        toast.error(result.message);
        return;
      }

      toast.success(result.message);

      setTimeout(() => {
        router.push("/auth/login");
      }, 1500);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] px-6">
      <div className="w-full text-black  max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2">
          Reset Password
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Enter your new password.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border-b border-gray-400 bg-transparent py-2 outline-none"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(
                e.target.value
              )
            }
            className="w-full border-b border-gray-400 bg-transparent py-2 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3"
          >
            {loading
              ? "Updating..."
              : "Update Password"}
          </button>
        </form>
      </div>
    </div>
  );
}