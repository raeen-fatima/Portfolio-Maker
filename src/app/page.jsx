// Using a standard <img> avoids Next.js Image src issues during dev
import BuildCustomizePublish from '@/components/landing/BuildCustomizePublish';
import ContactSection from '@/components/landing/ContactSection';
import CTA from '@/components/landing/CTA';
import FAQ from '@/components/landing/FAQ';
import Features from '@/components/landing/Features';
import Footer from '@/components/landing/Footer';
import Hero from '@/components/landing/Hero';
import Navbar from '@/components/landing/Navbar';
import PortfolioShowcase from '@/components/landing/PortfolioShowcase';
import Pricing from '@/components/landing/Pricing';
import Stats from '@/components/landing/Stats';
import Templates from '@/components/landing/Templates';
import ScrollToTop from '@/components/ui/ScrollToTop';
import Image from 'next/image';
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      <Hero />
      <Pricing />
      <Stats />
      <PortfolioShowcase />
      <BuildCustomizePublish />


      <Templates />
      <Features />
      
      <FAQ />
      <ContactSection />
      <CTA />
      <ScrollToTop />
      <Footer />
    </main>
  );
}
