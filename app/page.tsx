import Hero from '@/sections/Hero';
import Features from '@/sections/Features';
import Pricing from '@/sections/Pricing';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Pricing />
    </main>
  );
}
