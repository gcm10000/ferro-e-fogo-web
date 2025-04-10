
import { ArrowDownCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center pt-16 bg-black overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-welding-metal-1172-large.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-oswald uppercase tracking-wider text-shadow">
          Excelência em <br/>
          <span className="text-rust-400 animate-pulse-slow">Serralheria</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Transformando metal em soluções sob medida com qualidade, 
          precisão e acabamento impecável.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contact" 
            className="bg-rust-500 hover:bg-rust-600 text-white py-3 px-8 rounded-md font-medium transition-colors duration-300 text-lg"
          >
            Solicitar Orçamento
          </a>
          <a 
            href="#services" 
            className="border border-white hover:border-rust-400 text-white hover:text-rust-400 py-3 px-8 rounded-md font-medium transition-colors duration-300 text-lg"
          >
            Nossos Serviços
          </a>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <a 
        href="#services" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-rust-400 transition-colors duration-300 animate-bounce"
      >
        <ArrowDownCircle size={36} />
      </a>
    </section>
  );
};

export default HeroSection;
