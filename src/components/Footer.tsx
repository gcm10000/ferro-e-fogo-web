
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-metal-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-rust-400 font-oswald">FERRO & FOGO</h3>
            <p className="text-metal-300 mb-4">
              Excelência em serralheria e metalurgia. 
              Transformando metal em soluções desde 2008, com qualidade e compromisso.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook size={18} />} />
              <SocialLink href="#" icon={<Instagram size={18} />} />
              <SocialLink href="#" icon={<Linkedin size={18} />} />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <FooterLink href="#home">Início</FooterLink>
              <FooterLink href="#services">Serviços</FooterLink>
              <FooterLink href="#portfolio">Projetos</FooterLink>
              <FooterLink href="#about">Sobre</FooterLink>
              <FooterLink href="#contact">Contato</FooterLink>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <FooterLink href="#services">Portões</FooterLink>
              <FooterLink href="#services">Grades</FooterLink>
              <FooterLink href="#services">Estruturas Metálicas</FooterLink>
              <FooterLink href="#services">Escadas</FooterLink>
              <FooterLink href="#services">Manutenção</FooterLink>
              <FooterLink href="#services">Projetos Especiais</FooterLink>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-rust-400 flex-shrink-0 mt-1" />
                <span className="text-metal-300">(11) 9999-9999</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-rust-400 flex-shrink-0 mt-1" />
                <span className="text-metal-300">contato@ferroefogo.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-rust-400 flex-shrink-0 mt-1" />
                <span className="text-metal-300">
                  Av. das Indústrias, 1500, Bairro Industrial, São Paulo - SP
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-metal-800" />
        
        <div className="mt-8 text-center">
          <p className="text-metal-400">
            &copy; {currentYear} Ferro & Fogo Serralheria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <li>
      <a 
        href={href} 
        className="text-metal-300 hover:text-rust-400 transition-colors duration-200"
      >
        {children}
      </a>
    </li>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink = ({ href, icon }: SocialLinkProps) => {
  return (
    <a 
      href={href} 
      className="w-8 h-8 flex items-center justify-center rounded-full bg-metal-800 hover:bg-rust-500 transition-colors duration-200"
    >
      {icon}
    </a>
  );
};

export default Footer;
