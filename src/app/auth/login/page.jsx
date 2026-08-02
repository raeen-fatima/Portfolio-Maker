"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Blocks } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/validators/auth/auth";
import { toast } from "sonner";
import { useLogin } from "@/hooks/auth/useLogin";

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const { loading, login } = useLogin();
  const onSubmit = async (data) => {
    const result = await login(data);

    if (!result.success) {
      toast.error(result.data.message);
      return;
    }

    toast.success(result.data.message);

    router.push("/dashboard");
    router.refresh();
  };

  return (
    <div
      className="
        grid lg:grid-cols-2
        min-h-screen
      "
    >
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

        {/* Logo */}
        <div className="relative z-10">
          <div className="flex items-center gap-3">
            <div
              className="
        flex items-center justify-center
        h-10 w-10
        bg-white/[0.03]
        rounded-xl
        border border-white/10
      "
            >
              <Blocks size={18} />
            </div>

            <h2 className="text-xl font-semibold tracking-tight">
              <span className="text-white">Folio</span>
              <span className="text-zinc-500">Forge</span>
            </h2>
          </div>
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
            Create a Portfolio
            <br />
            That Gets You Hired.
          </h1>

          <p
            className="
              mt-6
              text-lg text-zinc-400 leading-relaxed
            "
          >
            Design your personal brand, showcase projects, skills and
            achievements, then publish your portfolio in minutes.
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
            />

            <span
              className="
                text-sm text-zinc-400
              "
            >
              Portfolio builder trusted by developers, students and freelancers.
            </span>
          </div>
        </div>
      </div>

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
            {/* <div
              className="
                flex items-center justify-center
                h-14 w-14
                mx-auto mb-6
                bg-white/[0.03]
                rounded-2xl border border-white/10
              "
            >
      <span
        className="
          text-xl font-bold
        "
      >F</span>
    </div> */}

            <h2
              className="
                text-4xl text-white font-bold
              "
            >
              Welcome Back
            </h2>

            <p
              className="
                mt-2
                text-sm text-zinc-500
              "
            >
              Login to continue building your portfolio.
            </p>
            {/* <div
              className="
                inline-flex items-center
                mt-2 px-3 py-1
                text-xs text-zinc-400
                bg-white/[0.03]
                rounded-full border border-white/10
              "
            >
              Trusted by developers worldwide
            </div> */}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="
              mt-10 space-y-6
            "
          >
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
              />

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
                />

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

            {/* Forgot Password */}
            <div
              className="
                flex justify-end
              "
            >
              <Link
                href="/auth/forgot-password"
                className="
                  text-sm text-zinc-500 hover:text-white
                  transition
                "
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                py-3
                font-bold text-black
                bg-white/70
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
                  />
                  Signing In...
                </span>
              ) : (
                "Sign In"
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
            />

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
            />
          </div>

          {/* Footer */}
          <p
            className="
              text-center text-zinc-500
            "
          >
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/register"
              className="
                font-semibold text-white hover:text-zinc-300
                transition
              "
            >
              Create Account
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
  );
}
