import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import BentoGrid from '@/components/BentoGrid';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <BentoGrid />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}
