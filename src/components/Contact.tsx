
import { useState } from 'react';
import { Phone, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Olá! Meu nome é ${formData.nome}.

Email: ${formData.email}
Telefone: ${formData.telefone}
Serviço de interesse: ${formData.servico}

Mensagem: ${formData.mensagem}`;

    const whatsappUrl = `https://wa.me/5547989054421?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success('Redirecionando para WhatsApp...');
    
    // Reset form
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      servico: '',
      mensagem: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-blue-600 to-green-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Estamos prontos para ajudar sua empresa a crescer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Telefone / WhatsApp</div>
                    <div className="text-blue-100">(47) 98905-4421</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Horário de Atendimento</div>
                    <div className="text-blue-100">Segunda a Sexta: 8h às 18h</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h4 className="text-xl font-bold text-white mb-4">Por que nos escolher?</h4>
              <ul className="space-y-3 text-blue-100">
                <li>✓ Resposta rápida em até 2 horas</li>
                <li>✓ Consultoria inicial gratuita</li>
                <li>✓ Soluções personalizadas</li>
                <li>✓ Suporte dedicado</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie sua Mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Seu email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="Seu telefone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
              
              <div>
                <select
                  name="servico"
                  value={formData.servico}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                >
                  <option value="" disabled>Selecione um serviço</option>
                  <option value="BPO Financeiro">BPO Financeiro</option>
                  <option value="BPO Fiscal">BPO Fiscal</option>
                  <option value="Consultoria Financeira">Consultoria Financeira</option>
                  <option value="Recuperação de Créditos">Recuperação de Créditos</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              
              <div>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Sua mensagem"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200 flex items-center justify-center"
              >
                <Send className="mr-2" size={20} />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
