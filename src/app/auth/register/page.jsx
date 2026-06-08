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
    <div className="min-h-screen grid lg:grid-cols-2 ">
      {/* LEFT SECTION */}
      <div className="hidden lg:flex bg-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-72 h-72 border border-white rotate-45 top-20 left-10"></div>
          <div className="absolute w-64 h-64 border border-white rotate-45 top-40 left-40"></div>
          <div className="absolute w-80 h-80 border border-white rotate-45 bottom-10 left-20"></div>
          <div className="absolute w-60 h-60 border border-white rotate-45 bottom-20 right-20"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center px-16">
          <p className="text-sm uppercase tracking-[0.35em] text-gray-400 mb-5">
            FolioForge
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Build Your Portfolio.
            <br />
            Launch Your Career.
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed max-w-lg mb-10">
            Create stunning portfolios that showcase your projects, skills,
            achievements and experience — all from one place.
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center justify-center bg-[#f5f5f5] px-6 py-10">
        <div className="w-full max-w-md">
          {/* Mobile Brand */}
          <div className="lg:hidden mb-10 text-center">
            <h1 className="text-3xl font-bold">FolioForge</h1>

            <p className="text-gray-500 mt-2">
              Build your professional portfolio
            </p>
          </div>

          <div className="mb-8 tracking-tight">
            <h2 className="text-3xl  font-bold text-center text-gray-900">
              Create Account
            </h2>

            <p className="text-gray-500 text-center mt-2">
              Start building your portfolio today.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Full Name */}
            <div>
              <label className="block text-xs uppercase tracking-wide text-gray-500 mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                {...register("name")}
                className="w-full bg-transparent  text-black border-b border-gray-400 py-2 text-sm outline-none focus:border-black transition-colors"
              />

              {errors.name && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs uppercase tracking-wide text-gray-500 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                {...register("email")}
                className="w-full bg-transparent   text-black border-b border-gray-400 py-2 text-sm outline-none focus:border-black transition-colors"
              />

              {errors.email && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Passwords */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wide text-gray-500 mb-2">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    className="w-full bg-transparent  text-black border-b border-gray-400 py-2 pr-8 text-sm outline-none focus:border-black transition-colors"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-2 text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                {errors.password && (
                  <p className="text-red-500 text-xs mt-2">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wide text-gray-500 mb-2">
                  Confirm Password
                </label>

                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    {...register("confirmPassword")}
                    className="w-full bg-transparent text-black border-b border-gray-400 py-2 pr-8 text-sm outline-none focus:border-black transition-colors"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-0 top-2 text-gray-500"
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-2">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            {/* Submit */}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3 text-sm font-medium hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Creating Account...
                </span>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="flex items-center gap-4 my-8">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="text-xs text-gray-400 uppercase">or</span>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          <p className="text-sm text-gray-500 text-center">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-black  font-bold hover:underline"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
