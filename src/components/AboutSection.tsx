
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const features = [
    'Mais de 15 anos de experiência no mercado',
    'Equipe qualificada e especializada',
    'Materiais de alta qualidade',
    'Projetos personalizados',
    'Compromisso com prazos',
    'Garantia em todos os serviços'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-oswald uppercase tracking-wider text-metal-900">
              Sobre a Ferro & Fogo
            </h2>
            
            <p className="text-metal-700 mb-6">
              Fundada em 2008, a Ferro & Fogo Serralheria se consolidou como referência em soluções
              metálicas de qualidade. Nossa missão é transformar o metal em soluções que atendam às
              necessidades dos nossos clientes, sempre com foco na qualidade, segurança e satisfação.
            </p>
            
            <p className="text-metal-700 mb-8">
              Contamos com uma equipe de profissionais experientes e qualificados, que utilizam 
              equipamentos modernos e materiais de primeira linha para garantir a excelência em 
              cada projeto que realizamos.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="flex-shrink-0 w-5 h-5 text-rust-500" />
                  <span className="text-metal-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className="inline-block bg-metal-800 hover:bg-metal-900 text-white py-3 px-8 rounded-md font-medium transition-colors duration-300"
            >
              Contate-nos
            </a>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" 
                alt="Soldador trabalhando" 
                className="rounded-lg shadow-xl w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 p-6 bg-rust-500 rounded-lg shadow-lg max-w-[200px]">
                <p className="text-4xl font-bold text-white">15+</p>
                <p className="text-white mt-1 font-medium">Anos de experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
