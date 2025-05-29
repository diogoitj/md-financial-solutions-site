
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  return (
    <div className="min-h-screen">
      <WhatsAppFloat />
      <Header />
      <Hero />
      <Benefits />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
