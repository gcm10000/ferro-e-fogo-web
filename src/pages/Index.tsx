
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import Portfolio from '@/components/Portfolio';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <HeroSection />
      <ServicesSection />
      <Portfolio />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
