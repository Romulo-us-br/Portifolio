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
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-sage-900 font-crimson italic">
            Entre em Contato Comigo
          </h2>
          <div className="w-24 h-1 bg-warm-600 mx-auto mb-6"></div>
        </div>

        {/* Contact Info Cards */}
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center p-4 bg-cream-100 rounded-lg border border-sage-200 hover:border-sage-300 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-warm-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sage-900 font-semibold mb-1 font-crimson text-base">{info.title}</h3>
                <a
                  href={info.href}
                  className="text-sage-600 font-inter hover:text-warm-600 transition-colors text-sm"
                >
                  {info.content}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-cream-100 rounded-xl border border-sage-200 p-8 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            </div>

            <div>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Conte-me sobre seu projeto..."
                rows={5}
                className="bg-white border-sage-300 text-sage-900 placeholder-sage-500 focus:border-warm-600 resize-none font-inter"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-warm-600 hover:bg-warm-700 text-white py-3 transition-all duration-300 hover:scale-105 font-inter font-medium text-lg"
            >
              <Send className="w-5 h-5 mr-2" />
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
