
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-metal-900 shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-white font-bold text-2xl font-oswald tracking-wider">FERRO<span className="text-rust-400">&</span>FOGO</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavLink href="#home">Início</NavLink>
          <NavLink href="#services">Serviços</NavLink>
          <NavLink href="#portfolio">Projetos</NavLink>
          <NavLink href="#about">Sobre</NavLink>
          <NavLink href="#contact" isButton>Contato</NavLink>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-metal-900 px-4 py-5">
          <nav className="flex flex-col space-y-4">
            <MobileNavLink href="#home" onClick={() => setIsMenuOpen(false)}>Início</MobileNavLink>
            <MobileNavLink href="#services" onClick={() => setIsMenuOpen(false)}>Serviços</MobileNavLink>
            <MobileNavLink href="#portfolio" onClick={() => setIsMenuOpen(false)}>Projetos</MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>Sobre</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)} isButton>Contato</MobileNavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isButton?: boolean;
}

const NavLink = ({ href, children, isButton = false }: NavLinkProps) => {
  return (
    <a 
      href={href}
      className={`
        text-white font-medium transition-colors duration-200 
        ${isButton 
          ? 'bg-rust-500 hover:bg-rust-600 px-4 py-2 rounded-md' 
          : 'hover:text-rust-400'
        }
      `}
    >
      {children}
    </a>
  );
};

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink = ({ href, children, onClick, isButton = false }: MobileNavLinkProps) => {
  return (
    <a 
      href={href}
      onClick={onClick}
      className={`
        text-white text-lg font-medium w-full 
        ${isButton 
          ? 'bg-rust-500 hover:bg-rust-600 px-4 py-2 rounded-md text-center' 
          : 'hover:text-rust-400'
        }
      `}
    >
      {children}
    </a>
  );
};

export default Header;
