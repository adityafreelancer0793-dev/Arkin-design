import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Statistics from '@/components/sections/Statistics';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import CTABanner from '@/components/sections/CTABanner';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import Chatbot from '@/components/Chatbot';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Statistics />
      <Portfolio />
      <Process />
      <Testimonials />
      <CTABanner />
      <Contact />
      <Footer />
      <Chatbot />
    </main>
  );
}
