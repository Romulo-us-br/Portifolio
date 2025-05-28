
import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
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
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      nome: formData.name,
      email: formData.email,
      texto: formData.message,
    };
    
    console.log("Enviando dados para o backend:", data);

    try {
      const response = await fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("Resposta do backend:", response);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || "Erro ao enviar mensagem");
      }

      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Retornarei em breve!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erro completo:", error);
      toast({
        title: "Erro!",
        description: "Não foi possível enviar sua mensagem. Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 px-6 bg-modern-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 font-crimson italic">
            Entre em Contato Comigo
          </h2>
          <div className="w-24 h-1 bg-modern-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-inter">
            Vamos conversar sobre seu próximo projeto
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-blue-100 rounded-xl border border-slate-200 p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 font-crimson">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-modern-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 font-inter">Telefone</p>
                    <p className="text-slate-600 font-inter">+55 (11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-modern-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 font-inter">Email</p>
                    <p className="text-slate-600 font-inter">romulop.brasil25@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-modern-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 font-inter">Localização</p>
                    <p className="text-slate-600 font-inter">São Paulo, Brasil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-blue-100 rounded-xl border border-slate-200 p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    className="bg-white border-slate-300 text-slate-900 placeholder-slate-500 focus:border-modern-600 font-inter"
                    required
                    disabled={isLoading}
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
                    className="bg-white border-slate-300 text-slate-900 placeholder-slate-500 focus:border-modern-600 font-inter"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Conte-me sobre seu projeto..."
                rows={5}
                className="bg-white border-slate-300 text-slate-900 placeholder-slate-500 focus:border-modern-600 resize-none font-inter"
                required
                disabled={isLoading}
              />

              <Button
                type="submit"
                className="w-full bg-modern-600 hover:bg-modern-700 text-white py-3 transition-all duration-300 hover:scale-105 font-inter font-medium text-lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

