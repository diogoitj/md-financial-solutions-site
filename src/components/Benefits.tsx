
import { 
  DollarSign, 
  Clock, 
  Shield, 
  Users, 
  TrendingUp, 
  Target,
  CheckCircle,
  BarChart3
} from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Redução de Custos',
      description: 'Economize até 40% nos custos operacionais financeiros',
      details: ['Eliminação de custos fixos', 'Redução de folha de pagamento', 'Menor investimento em tecnologia']
    },
    {
      icon: Clock,
      title: 'Ganho de Tempo',
      description: 'Foque no core business enquanto cuidamos das finanças',
      details: ['Processos automatizados', 'Relatórios em tempo real', 'Menos tempo em tarefas burocráticas']
    },
    {
      icon: Shield,
      title: 'Segurança e Conformidade',
      description: 'Tenha certeza de que sua empresa está em conformidade com as normas fiscais',
      details: ['Atualização constante da legislação', 'Redução de riscos', 'Auditoria especializada']
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Acesso a profissionais experientes sem custos de contratação',
      details: ['Consultores certificados', 'Conhecimento especializado', 'Suporte dedicado']
    },
    {
      icon: TrendingUp,
      title: 'Escalabilidade',
      description: 'Cresça sem se preocupar com limitações operacionais',
      details: ['Crescimento sem barreiras', 'Adaptação rápida', 'Flexibilidade total']
    },
    {
      icon: Target,
      title: 'Foco Estratégico',
      description: 'Dedique-se ao que realmente importa: o crescimento do negócio',
      details: ['Mais tempo para estratégia', 'Decisões baseadas em dados', 'Crescimento acelerado']
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Por que escolher nosso
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              {" "}BPO Financeiro?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como nossos serviços de BPO podem transformar a gestão financeira 
            da sua empresa e impulsionar o crescimento do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="text-blue-600 group-hover:text-green-600 transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              <ul className="space-y-2">
                {benefit.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 lg:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <BarChart3 className="mx-auto mb-6" size={48} />
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Pronto para transformar suas finanças?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Agende uma consultoria gratuita e descubra como podemos ajudar 
              sua empresa a crescer de forma sustentável.
            </p>
            <a
              href="https://wa.me/5547989054421?text=Olá,%20gostaria%20de%20agendar%20uma%20consultoria%20gratuita"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Agendar Consultoria Gratuita
              <TrendingUp className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
