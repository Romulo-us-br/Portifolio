import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 bg-blue-100">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
            <TypeAnimation
           sequence={["<RomuloBrasil/>"]} 
           wrapper="h1"
           speed={20}
           cursor={false}
           className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 font-crimson italic"
            />
          <div className="text-xl md:text-2xl text-slate-700 mb-8 font-inter">
          <span className="text-modern-700 font-semibold">
              Frontend Developer
            </span>
            <span className="mx-4 text-slate-400">•</span>
            <span className="text-modern-700 font-semibold">
              Prompt Engineer
            </span>
          </div>
        </div>

        <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in font-inter">
          Criando experiências digitais excepcionais através de código elegante e 
          otimizando o potencial da inteligência artificial com engenharia de prompts avançada.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
          <Button 
            onClick={() => scrollToSection('projects')}
            className="bg-modern-600 hover:bg-modern-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 font-inter font-medium"
          >
            Ver Projetos
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            variant="outline" 
            className="border-slate-400 text-slate-700 hover:bg-slate-100 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 font-inter font-medium"
          >
            Entre em Contato
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          {[
            { icon: Github, href: "https://github.com/Romulo-us-br", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/romulo-brasil-a2121534b/", label: "LinkedIn" },
            { icon: Mail, href: "romulop.brasil25@gmail.com", label: "Email" }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="p-3 bg-slate-100 rounded-full hover:bg-slate-200 transition-all duration-300 hover:scale-110 group"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6 text-slate-600 group-hover:text-slate-800 transition-colors duration-300" />
            </a>
          ))}
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce"
        >
          <ArrowDown className="w-8 h-8 text-slate-500 hover:text-slate-700 transition-colors duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
