
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
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 bg-cream-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <p className="text-stone-600 font-sans text-lg tracking-wider uppercase">
                I ALWAYS STRIVE FOR
              </p>
              
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-stone-900 leading-none italic">
                EXCELLENCE
              </h1>
              
              <div className="w-24 h-0.5 bg-stone-900"></div>
              
              <h2 className="font-serif text-3xl md:text-4xl text-stone-700 italic">
                {"<RomuloBrasil/>"}
              </h2>
            </div>

            {/* Three columns of attributes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-stone-900 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-cream-100 rounded-full"></div>
                </div>
                <h3 className="font-sans text-sm font-semibold text-stone-900 mb-2">Responsável</h3>
                <p className="font-sans text-xs text-stone-600 leading-relaxed">
                  Sempre disposto a assumir responsabilidades quando necessário.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-stone-900 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-cream-100 rounded-full"></div>
                </div>
                <h3 className="font-sans text-sm font-semibold text-stone-900 mb-2">Produtivo</h3>
                <p className="font-sans text-xs text-stone-600 leading-relaxed">
                  Sou um indivíduo orientado por objetivos que busca padrões e trabalha para alcançá-los.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-stone-900 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-cream-100 rounded-full"></div>
                </div>
                <h3 className="font-sans text-sm font-semibold text-stone-900 mb-2">Talentoso</h3>
                <p className="font-sans text-xs text-stone-600 leading-relaxed">
                  Sou um team player que tem orgulho em ajudar colegas e amigos.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-stone-900 hover:bg-stone-800 text-cream-50 px-8 py-3 font-sans text-sm font-medium tracking-wide"
              >
                VER PROJETOS
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                className="border-stone-900 text-stone-900 hover:bg-stone-50 px-8 py-3 font-sans text-sm font-medium tracking-wide"
              >
                CONTATO
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 bg-stone-200 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-stone-300 to-stone-400 flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border border-stone-400 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-stone-900 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-20 text-center space-y-8">
          <div className="space-y-4">
            <p className="font-sans text-stone-600 text-lg tracking-wider uppercase">
              TAKE A LOOK AT
            </p>
            <h3 className="font-serif text-4xl md:text-5xl text-stone-900 italic">
              MY PORTFOLIO
            </h3>
            <p className="font-serif text-4xl md:text-5xl text-stone-900 italic">
              PROJECTS
            </p>
            <div className="w-24 h-0.5 bg-stone-900 mx-auto"></div>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce hover:text-stone-900 transition-colors duration-300"
          >
            <ArrowDown className="w-6 h-6 text-stone-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
