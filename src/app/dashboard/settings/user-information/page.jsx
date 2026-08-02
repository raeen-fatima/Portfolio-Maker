"use client";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import ImageUpload from "@/components/ui/ImageUpload";
import { User, Shield } from "lucide-react";
import Image from "next/image";
import { useProfile, usePassword } from "@/hooks/settings/user-profile/useProfile";

export default function UserInformationPage() {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const {
    profile,
    setProfile,

    loading,
    saving,

    fetchProfile,
    updateProfile,
  } = useProfile();

  const { passwordLoading, changePassword } = usePassword();

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const handleSave = async () => {
    const result = await updateProfile(profile);

    if (!result.success) {
      toast.error(result.data.message);
      return;
    }

    toast.success(result.data.message);
  };
  const handlePasswordChange = async () => {
    if (
      !passwords.currentPassword ||
      !passwords.newPassword ||
      !passwords.confirmPassword
    ) {
      toast.error("Please fill all fields");
      return;
    }

    if (passwords.newPassword !== passwords.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const result = await changePassword(
      passwords.currentPassword,
      passwords.newPassword,
    );

    if (!result.success) {
      toast.error(result.data.message);
      return;
    }

    toast.success(result.data.message);

    setPasswords({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };
  if (loading) {
    return (
      <div className="space-y-6">
        <div className="h-40 rounded-4xl bg-white/3 animate-pulse" />

        <div className="h-80 rounded-4xl bg-white/3 animate-pulse" />
      </div>
    );
  }

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
          Manage your profile, portfolio settings and account preferences.
        </p>
      </div>

      {/* Profile */}
      <section
        className="
          rounded-4xl
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

        <div className="mt-8 flex flex-col items-center gap-5">
          {profile.image ? (
            <Image
              src={profile.image}
              alt={profile.name}
              width={112}
              height={112}
              className="h-28 w-28 rounded-3xl object-cover border border-white/10"
            />
          ) : (
            <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-white/3 border border-white/10">
              <User size={38} />
            </div>
          )}

          <ImageUpload
            onUpload={(url) =>
              setProfile({
                ...profile,
                image: url,
              })
            }
          />
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
            value={profile.name}
            onChange={(e) =>
              setProfile({
                ...profile,
                name: e.target.value,
              })
            }
          />

          <Input
            label="Username"
            value={profile.username}
            onChange={(e) =>
              setProfile({
                ...profile,
                username: e.target.value,
              })
            }
          />

          <div className="md:col-span-2">
            <Input label="Email Address" value={profile.email} disabled />
          </div>
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className=" 
            mt-8
            rounded-xl
            bg-white 
            px-5
            py-3
            font-medium
            text-black
            hover:bg-zinc-900
            hover:text-white  disabled:opacity-50
          "
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </section>

      {/* Security */}
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
      max-w-xl
    "
        >
          Update your password regularly to keep your account secure.
        </p>

        <div
          className="
      mt-8
      grid
      gap-6
    "
        >
          <Input
            label="Current Password"
            type="password"
            value={passwords.currentPassword}
            onChange={(e) =>
              setPasswords({
                ...passwords,
                currentPassword: e.target.value,
              })
            }
          />

          <Input
            label="New Password"
            type="password"
            value={passwords.newPassword}
            onChange={(e) =>
              setPasswords({
                ...passwords,
                newPassword: e.target.value,
              })
            }
          />

          <Input
            label="Confirm Password"
            type="password"
            value={passwords.confirmPassword}
            onChange={(e) =>
              setPasswords({
                ...passwords,
                confirmPassword: e.target.value,
              })
            }
          />
        </div>

        <button
          onClick={handlePasswordChange}
          disabled={passwordLoading}
          className="
      mt-8
      rounded-xl
      bg-white
      px-6
      py-3
      font-medium
      text-black
      transition
      hover:bg-zinc-200
      disabled:opacity-50
    "
        >
          {passwordLoading ? "Updating..." : "Update Password"}
        </button>
      </section>
    </div>
  );
}

function Input({ label, type = "text", value, onChange, disabled = false }) {
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
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
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
          disabled:opacity-60
        "
      />
    </div>
  );
}
