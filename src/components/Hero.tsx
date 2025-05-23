
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
            Rômulo Brasil
          </h1>
          <div className="text-xl md:text-2xl text-slate-300 mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold">
              Frontend Developer
            </span>
            <span className="mx-4 text-slate-500">•</span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold">
              Prompt Engineer
            </span>
          </div>
        </div>

        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Criando experiências digitais excepcionais através de código elegante e 
          otimizando o potencial da inteligência artificial com engenharia de prompts avançada.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
          <Button 
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Ver Projetos
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            variant="outline" 
            className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Entre em Contato
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "mailto:romulo@example.com", label: "Email" }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 group"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors duration-300" />
            </a>
          ))}
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce"
        >
          <ArrowDown className="w-8 h-8 text-slate-500 hover:text-white transition-colors duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
