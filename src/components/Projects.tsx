
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
      description: "Dashboard completo para gerenciamento de e-commerce com analytics em tempo real e interface intuitiva.",
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
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Projetos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes e impactantes
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm hover:border-slate-600/50 transition-all duration-500 ${
                project.featured ? 'lg:grid-cols-2' : ''
              }`}
            >
              <div className={`grid ${project.featured ? 'lg:grid-cols-2' : 'md:grid-cols-2'} gap-0`}>
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-full font-medium">
                        Destaque
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex-1 transition-all duration-300 hover:scale-105"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Projeto
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-slate-600 text-slate-300 hover:bg-slate-700 transition-all duration-300 hover:scale-105"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 transition-all duration-300 hover:scale-105"
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              Ver Mais no GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
