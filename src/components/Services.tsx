
import { Calculator, FileText, TrendingUp, CreditCard } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: 'BPO Financeiro',
      description: 'Terceirização completa da gestão financeira da sua empresa, incluindo contas a pagar e receber, emissão de boletos, fluxo de caixa e relatórios gerenciais.',
      features: ['Contas a pagar e receber', 'Emissão de boletos', 'Fluxo de caixa', 'Relatórios gerenciais'],
      whatsappText: 'Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20BPO%20Financeiro'
    },
    {
      icon: FileText,
      title: 'BPO Fiscal',
      description: 'Análise dos processos fiscais e emissão de notas fiscais com total conformidade legal.',
      features: ['Análise de processos fiscais', 'Emissão de notas fiscais', 'Conformidade legal', 'Gestão tributária'],
      whatsappText: 'Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20BPO%20Fiscal'
    },
    {
      icon: TrendingUp,
      title: 'Consultoria Financeira',
      description: 'Análise e recomendações para melhorar a saúde financeira do seu negócio, com planos de ação personalizados.',
      features: ['Análise financeira', 'Planos de ação', 'Otimização de processos', 'Estratégias de crescimento'],
      whatsappText: 'Olá,%20gostaria%20de%20saber%20mais%20sobre%20Consultoria%20Financeira'
    },
    {
      icon: CreditCard,
      title: 'Recuperação de Créditos',
      description: 'Gestão eficiente da cobrança e recuperação de valores em atraso, preservando o relacionamento com seus clientes.',
      features: ['Cobrança eficiente', 'Recuperação de valores', 'Preservação de relacionamentos', 'Negociação especializada'],
      whatsappText: 'Olá,%20gostaria%20de%20saber%20mais%20sobre%20Recuperação%20de%20Créditos'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nossos
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              {" "}Serviços
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas para transformar a gestão financeira da sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-blue-600 group-hover:text-green-600 transition-colors duration-300" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href={`https://wa.me/5547989054421?text=${service.whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200"
              >
                Saiba mais
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
