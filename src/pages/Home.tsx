import Hero from '../sections/Hero';
import Features from '../sections/Features';
import AppShowcase from '../sections/AppShowcase';
import Transparency from '../sections/Transparency';
import Testimonials from '../sections/Testimonials';
import CTA from '../sections/CTA';
import Footer from '../sections/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';

function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <Features />
      <AppShowcase />
      <Transparency />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;
