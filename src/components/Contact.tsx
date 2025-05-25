import { useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Retornarei em breve!",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "romulop.brasil25@gmail.com",
      href: "mailto:romulop.brasil25@gmail.com"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 (11) 99999-9999",
      href: "tel:+5511999999999"
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "São Paulo, Brasil",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Vamos Conversar
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Tem um projeto em mente? Vamos transformar suas ideias em realidade digital.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Entre em Contato</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Estou sempre aberto a discutir novos projetos, oportunidades criativas 
                ou parcerias interessantes. Vamos criar algo incrível juntos!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                    <p className="text-slate-400">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl border border-slate-700/50 backdrop-blur-sm">
              <h4 className="text-white font-bold mb-2">💡 Dica</h4>
              <p className="text-slate-400">
                Descreva seu projeto com detalhes para que eu possa entender melhor 
                suas necessidades e oferecer a melhor solução.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/30 rounded-2xl border border-slate-700/50 p-8 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Nome
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Seu nome completo"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Conte-me sobre seu projeto..."
                  rows={5}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 transition-all duration-300 hover:scale-105"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-700/50 text-center">
          <p className="text-slate-400">
            © 2025 Romulo Brasil.  Desenvolvido usando React e Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
