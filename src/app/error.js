"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="mb-4 text-5xl">😵</div>

        <h1 className="text-2xl font-semibold text-gray-900">
          Something went wrong
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          We couldn't load this page. Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          Try again
        </button>
      </div>
    </div>
  );
}