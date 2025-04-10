
import { useState } from 'react';

type Category = 'todos' | 'portoes' | 'grades' | 'estruturas' | 'especiais';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('todos');

  const projects = [
    {
      id: 1,
      title: 'Portão Residencial Automático',
      category: 'portoes',
      image: 'https://images.unsplash.com/photo-1558349699-1e1c281f95c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWV0YWwlMjBnYXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 2,
      title: 'Escada Metálica Industrial',
      category: 'estruturas',
      image: 'https://images.unsplash.com/photo-1627031352078-853d39be1275?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1ldGFsJTIwc3RhaXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 3,
      title: 'Grade de Proteção Decorativa',
      category: 'grades',
      image: 'https://images.unsplash.com/photo-1617713964959-d9a36bbc7b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWV0YWwlMjBmZW5jZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 4,
      title: 'Mezanino para Loja',
      category: 'estruturas',
      image: 'https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWV0YWwlMjBzdHJ1Y3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 5,
      title: 'Portão de Correr Industrial',
      category: 'portoes',
      image: 'https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNsaWRpbmclMjBnYXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 6,
      title: 'Escada Caracol Customizada',
      category: 'especiais',
      image: 'https://images.unsplash.com/photo-1592426454466-4e51f5ee3620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpcmFsJTIwc3RhaXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    }
  ];

  const filteredProjects = activeCategory === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-metal-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center text-white">Nossos Projetos</h2>
        <p className="section-subtitle text-center text-metal-300">
          Conheça alguns de nossos trabalhos realizados com excelência e dedicação.
        </p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <CategoryButton 
            active={activeCategory === 'todos'} 
            onClick={() => setActiveCategory('todos')}
          >
            Todos
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'portoes'} 
            onClick={() => setActiveCategory('portoes')}
          >
            Portões
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'grades'} 
            onClick={() => setActiveCategory('grades')}
          >
            Grades
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'estruturas'} 
            onClick={() => setActiveCategory('estruturas')}
          >
            Estruturas
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'especiais'} 
            onClick={() => setActiveCategory('especiais')}
          >
            Especiais
          </CategoryButton>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-rust-400 mt-2">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface CategoryButtonProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

const CategoryButton = ({ children, active, onClick }: CategoryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        py-2 px-6 rounded-full transition-colors duration-300
        ${active 
          ? 'bg-rust-500 text-white' 
          : 'bg-metal-800 text-metal-300 hover:bg-metal-700'
        }
      `}
    >
      {children}
    </button>
  );
};

export default Portfolio;
