

import {
  User,
  Shield,
} from "lucide-react";

export default function UserInformationPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p
          className="
            text-sm
            uppercase
            tracking-[0.2em]
            text-zinc-500
          "
        >
          Settings
        </p>

        <h1
          className="
            mt-3
            text-4xl
            font-bold
            tracking-tight
            text-white
          "
        >
          Account Settings
        </h1>

        <p
          className="
            mt-3
            max-w-2xl
            text-zinc-500
          "
        >
          Manage your profile, portfolio
          settings and account preferences.
        </p>
      </div>

      {/* Profile */}
      <section
        className="
          rounded-[32px]
          border
          border-white/10
          bg-black
          p-8
        "
      >
        <div className="flex items-center gap-3">
          <User size={20} />

          <h2
            className="
              text-xl
              font-semibold
              text-white
            "
          >
            Profile
          </h2>
        </div>

        <div
          className="
            mt-8
            grid
            gap-6
            md:grid-cols-2
          "
        >
          <Input
            label="Full Name"
            placeholder="Raeen Fatima"
          />

          <Input
            label="Username"
            placeholder="raeen"
          />

          <div className="md:col-span-2">
            <Input
              label="Email Address"
              placeholder="raeen@gmail.com"
            />
          </div>
        </div>

        <button
          className="
            mt-8
            rounded-xl
            bg-white 
            px-5
            py-3
            font-medium
            text-black
            hover:bg-zinc-900
            hover:text-white
          "
        >
          Save Changes
        </button>
      </section>

     
      {/* Security */}
      <section
        className="
          rounded-[32px]
          border
          border-white/10
          bg-black
          p-8
        "
      >
        <div className="flex items-center gap-3">
          <Shield size={20} />

          <h2
            className="
              text-xl
              font-semibold
              text-white
            "
          >
            Security
          </h2>
        </div>

        <p
          className="
            mt-3
            text-zinc-500
          "
        >
          Update your password and keep
          your account secure.
        </p>

        <button
          className="
            mt-6
            rounded-xl
            border
            border-white/10
            px-5
            py-3
            transition
            hover:bg-white/[0.04]
          "
        >
          Change Password
        </button>
      </section>

     
    </div>
  );
}

function Input({
  label,
  placeholder,
}) {
  return (
    <div>
      <label
        className="
          mb-2
          block
          text-sm
          text-zinc-400
        "
      >
        {label}
      </label>

      <input
        placeholder={placeholder}
        className="
          w-full
          rounded-xl
          border
          border-white/10
          bg-black
          px-4
          py-3
          outline-none
          transition
          focus:border-white/20
        "
      />
    </div>
  );
}