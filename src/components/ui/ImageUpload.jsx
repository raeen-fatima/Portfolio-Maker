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
          Upload Image
        </button>
      )}
    </CldUploadWidget>
  );
}
// "Images are uploaded directly to Cloudinary using the upload widget. Cloudinary returns a secure URL, which is stored in MongoDB and used in portfolio templates."
// Browser
//    ↓
// Cloudinary Widget
//    ↓
// Cloudinary Storage
//    ↓
// Secure URL
//    ↓
// MongoDB