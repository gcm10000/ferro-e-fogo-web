
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission, like sending an email
    console.log('Form data submitted:', formData);
    alert('Obrigado por entrar em contato! Retornaremos em breve.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-metal-100">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center text-metal-900">Entre em Contato</h2>
        <p className="section-subtitle text-center">
          Estamos prontos para transformar suas ideias em realidade. Entre em contato para um orçamento gratuito.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-metal-800">Envie uma mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-metal-700 mb-2">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-metal-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rust-500"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-metal-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-metal-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rust-500"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-metal-700 mb-2">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-metal-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rust-500"
                    placeholder="(00) 00000-0000"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-metal-700 mb-2">Serviço Desejado</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-metal-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rust-500 bg-white"
                    required
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="Portões">Portões</option>
                    <option value="Grades">Grades</option>
                    <option value="Estruturas Metálicas">Estruturas Metálicas</option>
                    <option value="Escadas">Escadas</option>
                    <option value="Manutenção">Manutenção</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-metal-700 mb-2">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-metal-200 rounded-md focus:outline-none focus:ring-2 focus:ring-rust-500"
                  placeholder="Descreva seu projeto ou necessidade"
                  required
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="bg-rust-500 hover:bg-rust-600 text-white py-3 px-8 rounded-md font-medium transition-colors duration-300"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
          
          <div className="bg-metal-800 text-white rounded-lg shadow-lg p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-rust-400 mt-1" />
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <p className="text-metal-300">(11) 9999-9999</p>
                    <p className="text-metal-300">(11) 8888-8888</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-rust-400 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-metal-300">contato@ferroefogo.com</p>
                    <p className="text-metal-300">orcamento@ferroefogo.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-rust-400 mt-1" />
                  <div>
                    <p className="font-semibold">Endereço</p>
                    <p className="text-metal-300">
                      Av. das Indústrias, 1500<br />
                      Bairro Industrial, São Paulo - SP<br />
                      CEP 00000-000
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-rust-400 mt-1" />
                  <div>
                    <p className="font-semibold">Horário de Funcionamento</p>
                    <p className="text-metal-300">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-metal-700 p-4 rounded-lg">
              <p className="text-center text-metal-300 text-sm">
                Atendemos em toda a região metropolitana de São Paulo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
