import Hero from '@/sections/Hero';
import Features from '@/sections/Features';
import Pricing from '@/sections/Pricing';
import Comparison from '@/sections/Comparison';
import Testimonials from '@/sections/Testimonials';
import FAQ from '@/sections/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Pricing />
      <Comparison />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
