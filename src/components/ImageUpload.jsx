"use client";

import { CldUploadWidget } from "next-cloudinary";

export default function ImageUpload({
  onUpload,
}) {
  return (
    <CldUploadWidget
      uploadPreset="folioforge"
      onSuccess={(result) => {
        onUpload(result.info.secure_url);
      }}
    >
      {({ open }) => (
        <button
          type="button"
          onClick={() => open()}
          className="w-full border-2 border-dashed rounded-2xl p-6 hover:bg-gray-50 transition"
        >
          Upload Profile Image
        </button>
      )}
    </CldUploadWidget>
  );
}