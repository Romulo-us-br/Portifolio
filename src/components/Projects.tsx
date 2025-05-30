import { ExternalLink, Github, Zap, Brain, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "AI Chat Interface",
      description: "Interface moderna para chat com IA, incluindo otimização de prompts e sistema de contexto avançado.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      technologies: ["React", "TypeScript", "OpenAI API", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      icon: Brain,
      featured: true
    },
    {
      title: "E-commerce Dashboard",
      description: "Dashboard para e-commerce com analytics em tempo real e interface intuitiva.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      technologies: ["Next.js", "React", "Chart.js", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      icon: Zap
    },
    {
      title: "Mobile App Landing",
      description: "Landing page responsiva para aplicativo mobile com animações suaves e design moderno.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      liveUrl: "#",
      githubUrl: "#",
      icon: Smartphone
    }
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-blue-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 font-crimson italic">
            Projetos
          </h2>
          <div className="w-24 h-1 bg-modern-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-inter">
            Uma seleção dos meus trabalhos mais recentes e impactantes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-blue-100 backdrop-blur-sm hover:border-slate-300 transition-all duration-300 hover:shadow-lg flex flex-col h-full"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <div className="w-8 h-8 bg-modern-600 rounded-lg flex items-center justify-center">
                    <project.icon className="w-4 h-4 text-white" />
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-modern-600 text-white text-xs rounded-md font-medium font-inter">
                      Destaque
                    </span>
                  </div>
                )}
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-modern-700 transition-colors duration-300 font-crimson">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 font-inter">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="h-7 inline-flex items-center px-3 bg-slate-100 text-slate-700 text-xs rounded-md border border-slate-200 font-inter whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 mt-auto">
                  <Button
                    asChild
                    size="sm"
                    className="bg-modern-600 hover:bg-modern-700 text-white flex-1 transition-all duration-300 hover:scale-105 font-inter font-medium text-xs"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Ver
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-slate-400 text-slate-700 hover:bg-slate-100 transition-all duration-300 hover:scale-105 font-inter font-medium"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            variant="outline"
            className="border-slate-400 text-slate-700 hover:bg-slate-100 px-6 py-2 transition-all duration-300 hover:scale-105 font-inter font-medium"
          >
            <a href="https://github.com/Romulo-us-br" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Ver Mais no GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
