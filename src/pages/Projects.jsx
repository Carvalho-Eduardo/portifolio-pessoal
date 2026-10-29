import { useEffect } from "react";
import { FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";
import SectionTitle from "../components/ui/SectionTitle";
import ProjectCard from "../components/ui/ProjectCard";
import projects from "../data/projects";

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="mx-auto min-h-[75vh] max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <section className="animate-fade-up">
        <SectionTitle>Meus projetos</SectionTitle>

        <p className="mb-8 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
          Projetos práticos que desenvolvi para aplicar conhecimentos de
          programação, explorar soluções para necessidades reais e continuar
          evoluindo como desenvolvedor.
        </p>

        <div className="mb-10 flex flex-wrap gap-3 text-xs text-slate-300 sm:text-sm">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2">
            <FaCodeBranch className="text-blue-400" />
            Código disponível no GitHub
          </span>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2">
            <FaExternalLinkAlt className="text-green-400" />
            Demonstrações online
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;
