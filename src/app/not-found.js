import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="text-7xl font-bold tracking-tight text-white">
          404
        </p>

        <h1 className="mt-4 text-2xl font-semibold text-white">
          Page not found
        </h1>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Sorry, the page you're looking for doesn't exist or may have been
          moved.
        </p>

        <Link
          href="/"
          className="mt-6 inline-flex rounded-lg bg-black px-5 py-2.5 text-md font-medium  transition hover:bg-white hover:text-black"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}