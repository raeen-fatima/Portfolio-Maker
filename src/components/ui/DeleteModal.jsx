"use client";

export default function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
  title = "Delete Item",
  description = "This action cannot be undone.",
  confirmText = "Delete",
}) {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/50
        flex
        items-center
        justify-center
        z-50
      "
    >
      <div
        className="
          bg-white
          rounded-3xl
          p-6
          w-full
          max-w-md
          mx-4
        "
      >
        <h3 className="text-xl font-bold">
          {title}
        </h3>

        <p className="text-gray-500 mt-3">
          {description}
        </p>

        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="
              flex-1
              py-3
              border
              rounded-xl
              font-medium
            "
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="
              flex-1
              py-3
              bg-red-500
              text-white
              rounded-xl
              font-medium
              hover:bg-red-600
              transition
            "
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}