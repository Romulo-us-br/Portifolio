
import { Code, Brain, Coffee, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-cream-100">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="font-sans text-stone-600 text-lg tracking-wider uppercase mb-4">
            HI, I'M A FRONTEND
          </p>
          <h2 className="font-serif text-5xl md:text-6xl text-stone-900 italic mb-2">
            DEVELOPER
          </h2>
          <h3 className="font-serif text-4xl md:text-5xl text-stone-700 italic mb-8">
            FROM BRAZIL
          </h3>
          <div className="w-24 h-0.5 bg-stone-900 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left - Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-96 h-96 bg-stone-200 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-stone-300 to-stone-400 flex items-center justify-center">
                  <span className="text-8xl">👨‍💻</span>
                </div>
              </div>
              
              {/* Decorative badge */}
              <div className="absolute bottom-8 right-8 w-20 h-20 bg-cream-50 rounded-full border border-stone-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-6 h-6 mx-auto mb-1 bg-stone-900 rounded-full"></div>
                  <p className="font-sans text-xs text-stone-600">RB</p>
                </div>
              </div>
              
              {/* Side text */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 transform -rotate-90">
                <p className="font-sans text-xs text-stone-500 tracking-wider">ROMULO BRASIL</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h4 className="font-serif text-2xl text-stone-900 italic">Romulo Brasil</h4>
              
              <p className="font-sans text-stone-700 leading-relaxed text-lg">
                Faço pesquisas profundas de mercado antes de iniciar qualquer projeto, 
                o que me dá uma vantagem injusta para entregar o melhor resultado para o cliente.
              </p>
              
              <p className="font-sans text-stone-600 leading-relaxed">
                Sou um desenvolvedor frontend apaixonado por criar experiências digitais 
                que fazem a diferença. Com expertise em React, TypeScript e as mais 
                modernas tecnologias web, transformo ideias em realidade digital.
              </p>
              
              <p className="font-sans text-stone-600 leading-relaxed">
                Como engenheiro de prompts, trabalho na fronteira da inovação, 
                otimizando a comunicação entre humanos e IA para alcançar resultados 
                extraordinários.
              </p>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-3">
              {["React", "TypeScript", "Next.js", "AI/ML", "Node.js", "Tailwind CSS"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-cream-50 rounded-full text-sm text-stone-700 border border-stone-200 font-sans"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="text-center mb-16">
          <h3 className="font-serif text-4xl md:text-5xl text-stone-900 italic mb-2">
            OVER EIGHT
          </h3>
          <h4 className="font-serif text-3xl md:text-4xl text-stone-700 italic mb-8">
            YEARS OF EXPERIENCE
          </h4>
          <div className="w-24 h-0.5 bg-stone-900 mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Code,
              title: "Frontend Expert",
              description: "Especialista em React, TypeScript e tecnologias modernas"
            },
            {
              icon: Brain,
              title: "AI Prompt Engineer", 
              description: "Otimização de prompts para máxima eficiência em IA"
            },
            {
              icon: Zap,
              title: "Performance Focus",
              description: "Obsessão por código limpo e alta performance"
            },
            {
              icon: Coffee,
              title: "Problem Solver",
              description: "Transformo desafios complexos em soluções elegantes"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-cream-50 rounded-lg border border-stone-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-cream-50" />
              </div>
              <h5 className="font-sans text-sm font-semibold text-stone-900 mb-2 tracking-wide">
                {item.title.toUpperCase()}
              </h5>
              <p className="font-sans text-xs text-stone-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="mt-20 text-center">
          <p className="font-sans text-stone-600 text-lg tracking-wider uppercase">
            I ALWAYS STRIVE FOR
          </p>
          <h5 className="font-serif text-4xl md:text-5xl text-stone-900 italic mt-4">
            EXCELLENCE
          </h5>
          <div className="w-24 h-0.5 bg-stone-900 mx-auto mt-8"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
