// Using a standard <img> avoids Next.js Image src issues during dev
import Image from 'next/image';
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Portfolio Maker</h2>
        <div className="flex items-center space-x-6">
          <nav className="hidden sm:flex space-x-4">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
          <a href="/auth/login" className="px-4 py-2 bg-black text-white rounded-md shadow hover:bg-gray-700">Login</a>
        </div>
      </header>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Build a beautiful portfolio — quickly.
            </h1>
            <p className="mt-6 text-gray-600">
              Create a professional portfolio with prebuilt sections, easy customization, and responsive layouts.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#get-started" className="px-6 py-3 bg-black text-white rounded-md shadow hover:bg-gray-700">Get started</a>
              <a href="#features" className="px-6 py-3 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-100">Learn more</a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg">
              <Image src="/LandingImage.jpg" width={500} height={300} alt="Portfolio preview" className="object-cover w-full h-auto" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold">Features</h3>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h4 className="font-semibold">Responsive</h4>
            <p className="mt-2 text-sm text-gray-600">Looks great on phones, tablets, and desktops.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h4 className="font-semibold">Customizable</h4>
            <p className="mt-2 text-sm text-gray-600">Easily change colors, fonts, and layout.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h4 className="font-semibold">Fast</h4>
            <p className="mt-2 text-sm text-gray-600">Optimized for performance and SEO.</p>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Portfolio Maker</p>
          <div className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
