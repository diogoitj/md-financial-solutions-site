
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5547989054421?text=Olá,%20gostaria%20de%20agendar%20uma%20consultoria%20gratuita."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-550 z-50 animate-pulse hover:animate-none"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default WhatsAppFloat;
