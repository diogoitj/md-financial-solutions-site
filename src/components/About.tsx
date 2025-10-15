
import { Award, Users, Target, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Mais de 10 anos de experiência',
      description: 'Sólida trajetória no mercado de BPO'
    },
    {
      icon: Users,
      title: 'Equipe especializada',
      description: 'Profissionais certificados e experientes'
    },
    {
      icon: Target,
      title: 'Soluções personalizadas',
      description: 'Adaptamos nossos serviços às suas necessidades'
    },
    {
      icon: Zap,
      title: 'Tecnologia de ponta',
      description: 'Ferramentas modernas para máxima eficiência'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-3xl font-bold text-gray-900 mb-6">
                Sobre a
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                  {" "}MD Gestão Financeira
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                A MD Gestão Financeira é especializada em BPO (Business Process Outsourcing) 
                Financeiro e Fiscal, oferecendo soluções completas para otimizar a gestão 
                financeira da sua empresa.
              </p>
              <p className="text-lg text-gray-600">
                Com uma equipe de profissionais experientes, ajudamos empresas de diversos 
                segmentos a reduzir custos, aumentar a eficiência e garantir conformidade fiscal.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-3xl transform -rotate-6"></div>
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Equipe MD Gestão Financeira"
              className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
