
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
    <section id="contact" className="py-12 px-6 bg-warm-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-sage-900 font-crimson italic">
            Vamos Conversar
          </h2>
          <div className="w-24 h-1 bg-warm-600 mx-auto mb-6"></div>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto font-inter">
            Tem um projeto em mente? Vamos transformar suas ideias em realidade digital.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <div className="grid gap-4 mb-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center p-3 bg-cream-100 rounded-lg border border-sage-200 hover:border-sage-300 transition-all duration-300 hover:scale-105 backdrop-blur-sm group"
                >
                  <div className="w-10 h-10 bg-warm-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sage-900 font-semibold mb-1 font-crimson text-sm">{info.title}</h4>
                    <p className="text-sage-600 font-inter text-sm">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-cream-100 rounded-xl border border-sage-200 p-6 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Seu nome completo"
                  className="bg-white border-sage-300 text-sage-900 placeholder-sage-500 focus:border-warm-600 font-inter"
                  required
                />
              </div>

              <div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  className="bg-white border-sage-300 text-sage-900 placeholder-sage-500 focus:border-warm-600 font-inter"
                  required
                />
              </div>

              <div>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Conte-me sobre seu projeto..."
                  rows={4}
                  className="bg-white border-sage-300 text-sage-900 placeholder-sage-500 focus:border-warm-600 resize-none font-inter"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-warm-600 hover:bg-warm-700 text-white py-2 transition-all duration-300 hover:scale-105 font-inter font-medium"
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-sage-200 text-center">
          <p className="text-sage-500 font-inter">
            © 2025 Romulo Brasil. Desenvolvido usando React e Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
