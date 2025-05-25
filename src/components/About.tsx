
import { Code, Brain, Coffee, Zap } from "lucide-react";

const About = () => {
  const highlights = [
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
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              Sou um desenvolvedor frontend apaixonado por criar experiências digitais 
              que fazem a diferença. Com expertise em React, TypeScript e as mais 
              modernas tecnologias web, transformo ideias em realidade digital.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Como engenheiro de prompts, trabalho na fronteira da inovação, 
              otimizando a comunicação entre humanos e IA para alcançar resultados 
              extraordinários. Acredito que a tecnologia deve ser intuitiva, 
              eficiente e, acima de tudo, útil.
            </p>
            <div className="flex flex-wrap gap-3">
              {["React", "TypeScript", "Next.js", "AI/ML", "Node.js", "Tailwind CSS"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-300 border border-slate-700/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-slate-700/50">
              <div className="text-6xl">👨‍💻</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
