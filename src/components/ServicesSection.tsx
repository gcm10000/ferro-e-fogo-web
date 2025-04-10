
import { Shield, Home, Cog, Store, Construction, Factory } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Home className="w-12 h-12 text-rust-500 mb-4" />,
      title: 'Portões Residenciais',
      description: 'Portões automáticos e manuais personalizados para sua residência, combinando segurança e estética.'
    },
    {
      icon: <Store className="w-12 h-12 text-rust-500 mb-4" />,
      title: 'Estruturas Comerciais',
      description: 'Fachadas, escadas e estruturas metálicas para estabelecimentos comerciais com qualidade e durabilidade.'
    },
    {
      icon: <Shield className="w-12 h-12 text-rust-500 mb-4" />,
      title: 'Grades e Proteções',
      description: 'Sistemas de segurança com grades, portões de enrolar e proteções para janelas.'
    },
    {
      icon: <Cog className="w-12 h-12 text-rust-500 mb-4" />,
      title: 'Manutenção',
      description: 'Serviços de manutenção e reparos em estruturas metálicas, portões e equipamentos.'
    },
    {
      icon: <Factory className="w-12 h-12 text-rust-500 mb-4" />,
      title: 'Estruturas Industriais',
      description: 'Projetos industriais, mezaninos, escadas e estruturas de grande porte com certificação.'
    },
    {
      icon: <Construction className="w-12 h-12 text-rust-500 mb-4" />,
      title: 'Projetos Especiais',
      description: 'Desenvolvimento de projetos customizados de acordo com suas necessidades específicas.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-metal-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center text-metal-900">Nossos Serviços</h2>
        <p className="section-subtitle text-center">
          Oferecemos uma ampla gama de serviços em serralheria e metalurgia para atender suas necessidades.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-metal-800 group-hover:text-rust-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-metal-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="bg-rust-500 hover:bg-rust-600 text-white py-3 px-8 rounded-md font-medium transition-colors duration-300 inline-block"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
