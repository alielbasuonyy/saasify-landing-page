import Hero from '@/sections/Hero';
import Features from '@/sections/Features';
import Pricing from '@/sections/Pricing';
import Testimonials from '@/sections/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  );
}
