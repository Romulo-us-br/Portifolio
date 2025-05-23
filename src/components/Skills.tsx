
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML/CSS", level: 95 }
      ]
    },
    {
      title: "AI & Prompt Engineering",
      skills: [
        { name: "Prompt Design", level: 92 },
        { name: "GPT Optimization", level: 88 },
        { name: "AI Integration", level: 85 },
        { name: "LangChain", level: 80 },
        { name: "AI Ethics", level: 87 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "API Design", level: 88 },
        { name: "Testing", level: 82 },
        { name: "Docker", level: 78 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Habilidades
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções excepcionais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 backdrop-blur-sm hover:border-slate-600/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-400 text-sm">{skill.level}%</span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2 bg-slate-700"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl border border-slate-700/50 backdrop-blur-sm">
            <div className="text-4xl">🚀</div>
            <div className="text-left">
              <h3 className="text-xl font-bold text-white mb-1">Sempre Aprendendo</h3>
              <p className="text-slate-400">Constantemente me atualizando com as últimas tecnologias</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
