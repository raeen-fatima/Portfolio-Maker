"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { resetPasswordSchema } from "@/validators/auth";
import { useResetPassword } from "@/hooks/auth/useResetPassword";

export default function ResetPasswordPage() {
  const { token } = useParams();
  const router = useRouter();

  const { loading, resetPassword } = useResetPassword();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (data) => {
    const result = await resetPassword(token, data);

    if (!result.success) {
      toast.error(result.data.message || "Something went wrong");
      return;
    }

    toast.success(result.data.message);

    reset();

    setTimeout(() => {
      router.push("/auth/login");
    }, 1500);
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
      />

      <div
        className="
          absolute bottom-0 right-0
          h-96 w-96
          bg-white/5
          rounded-full
          blur-3xl
        "
      />

      <div
        className="
          relative z-10
          w-full max-w-md
          p-8 md:p-10
          bg-white/[0.03]
          rounded-[32px]
          border border-white/10
          backdrop-blur-xl
        "
      >
        {/* Header */}
        <div className="text-center">
          <h1
            className="
              text-4xl text-white font-bold
            "
          >
            Reset Password
          </h1>

          <p
            className="
              mt-3
              text-sm text-zinc-500
            "
          >
            Create a new password for your account.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="
            mt-10 space-y-6
          "
        >
          {/* Password */}
          <div>
            <label
              className="
                block
                mb-2
                text-xs text-zinc-500 font-medium uppercase tracking-wider
              "
            >
              New Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              {...register("password")}
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

            {errors.password && (
              <p className="mt-2 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label
              className="
                block
                mb-2
                text-xs text-zinc-500 font-medium uppercase tracking-wider
              "
            >
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              {...register("confirmPassword")}
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

            {errors.confirmPassword && (
              <p className="mt-2 text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              py-3.5
              font-medium text-black
              bg-white
              rounded-2xl
              transition-all duration-200
              hover:opacity-95
              disabled:opacity-50
              hover:scale-[1.01]
              active:scale-[0.99]
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
                    rounded-full
                    border-2
                    border-black
                    border-t-transparent
                    animate-spin
                  "
                />
                Updating Password...
              </span>
            ) : (
              "Update Password"
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
          Secure your account with a strong password.
        </p>
      </div>
    </div>
  );
}
