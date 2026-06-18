"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/validators/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "sonner";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message);
        return;
      }

      toast.success(result.message);
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);

      reset();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  return (
    <div
      className="
        grid lg:grid-cols-2
        min-h-screen
      "
    >
      {/* LEFT SECTION */}
      {/* LEFT SECTION */}
      <div
        className="
          relative hidden flex-col lg:flex justify-between overflow-hidden
          px-16 py-14
          text-white
          bg-black
        "
      >
        {/* Glow */}
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

        {/* Logo */}
        <div
          className="
            relative z-10
          "
        >
          <h2
            className="
              text-xl font-semibold tracking-tight
            "
          >
            <span
              className="
                text-white
              "
            >
              Folio
            </span>

            <span
              className="
                text-zinc-500
              "
            >
              Forge
            </span>
          </h2>
        </div>

        {/* Main Content */}
        <div
          className="
            relative z-10 flex flex-1 flex-col justify-center
          "
        >
          <div
            className="
              justify-center inline-flex
              w-60
              mb-6 px-4 py-2
              text-sm text-zinc-400
              bg-white/[0.03]
              rounded-full border border-white/10
            "
          >
            Build • Customize • Publish
          </div>

          <h1
            className="
              text-6xl font-bold leading-tight tracking-tight
            "
          >
            Create Your
            <br />
            Portfolio.
          </h1>

          <p
            className="
              mt-6
              text-lg text-zinc-400 leading-relaxed
            "
          >
            Showcase your projects, skills, experience and achievements with a
            portfolio that helps you stand out.
          </p>
        </div>

        {/* Bottom Card */}
        <div
          className="
            relative z-10
            max-w-md
            p-5
            bg-white/[0.03]
            rounded-3xl border border-white/10
            backdrop-blur-xl
          "
        >
          <div
            className="
              flex items-center
              gap-3
            "
          >
            <div
              className="
                h-2 w-2
                bg-green-500
                rounded-full
              "
              /
            >

            <span
              className="
                text-sm text-zinc-400
              "
            >
              Create, customize and publish your portfolio from a single
              dashboard.
            </span>
          </div>
        </div>
      </div>
      {/* </div> */}

      {/* RIGHT SECTION */}
      <div
        className="
          flex items-center justify-center
          px-6 py-10
          bg-black
        "
      >
        <div
          className="
            w-full max-w-lg
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
            <h2
              className="
                text-4xl text-white font-bold
              "
            >
              Create Account
            </h2>

            <p
              className="
                mt-2
                text-sm text-zinc-500
              "
            >
              Start building your portfolio today.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="
              mt-10 space-y-6
            "
          >
            {/* Name */}
            <div>
              <label
                className="
                  block
                  mb-2
                  text-xs text-zinc-500 font-medium uppercase tracking-wider
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
                  bg-white/[0.03] focus:bg-white/[0.05]
                  rounded-2xl border border-white/10 focus:border-white/20
                  outline-none
                  transition
                "
                /
              >

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

            {/* Email */}
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
                {...register("email")}
                className="
                  w-full
                  px-4 py-3.5
                  text-white placeholder:text-zinc-600
                  bg-white/[0.03] focus:bg-white/[0.05]
                  rounded-2xl border border-white/10 focus:border-white/20
                  outline-none
                  transition
                "
                /
              >

              {errors.email && (
                <p
                  className="
                    mt-2
                    text-sm text-red-500
                  "
                >
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Passwords */}
            <div
              className="
                grid md:grid-cols-2
                gap-5
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
                  Password
                </label>

                <div
                  className="
                    relative
                  "
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    {...register("password")}
                    className="
                      w-full
                      px-4 py-3.5 pr-12
                      text-white placeholder:text-zinc-600
                      bg-white/[0.03] focus:bg-white/[0.05]
                      rounded-2xl border border-white/10 focus:border-white/20
                      outline-none
                      transition
                    "
                    /
                  >

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-zinc-500
                hover:text-white
              "
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                {errors.password && (
                  <p
                    className="
                      mt-2
                      text-sm text-red-500
                    "
                  >
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

                <div
                  className="
                    relative
                  "
                >
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    {...register("confirmPassword")}
                    className="
                      w-full
                      px-4 py-3.5 pr-12
                      text-white placeholder:text-zinc-600
                      bg-white/[0.03] focus:bg-white/[0.05]
                      rounded-2xl border border-white/10 focus:border-white/20
                      outline-none
                      transition
                    "
                    /
                  >

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-zinc-500
                hover:text-white
              "
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                {errors.confirmPassword && (
                  <p
                    className="
                      mt-2
                      text-sm text-red-500
                    "
                  >
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
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
                  Creating Account...
                </span>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Divider */}
          <div
            className="
              flex items-center
              my-8
              gap-4
            "
          >
            <div
              className="
                flex-1
                h-px
                bg-white/10
              "
              /
            >

            <span
              className="
                text-xs text-zinc-500
              "
            >
              OR
            </span>

            <div
              className="
                flex-1
                h-px
                bg-white/10
              "
              /
            >
          </div>

          {/* Footer */}
          <p
            className="
              text-center text-zinc-500
            "
          >
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="
                font-semibold text-white hover:text-zinc-300
                transition
              "
            >
              Sign In
            </Link>
          </p>

          <p
            className="
              mt-8
              text-center text-xs text-zinc-600
            "
          >
            © 2026 FolioForge. All rights reserved.
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
}
