import { FaGithub, FaExternalLinkAlt, FaCheck } from "react-icons/fa";

function ProjectCard({ project }) {
  const isVoting = project.cover === "votacao";

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-[#293442] bg-[#161b22] transition duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:shadow-[0_18px_45px_rgba(0,0,0,0.22)]">
      <div
        className={`relative flex min-h-[210px] items-center overflow-hidden p-6 sm:min-h-[230px] sm:p-7 ${
          isVoting
            ? "bg-[radial-gradient(circle_at_85%_15%,rgba(83,155,245,0.35),transparent_38%),linear-gradient(135deg,#142c49,#152133_70%,#101720)]"
            : "bg-[radial-gradient(circle_at_85%_15%,rgba(255,177,92,0.25),transparent_40%),linear-gradient(135deg,#42271e,#2b2020_70%,#101720)]"
        }`}
      >
        <div className="relative z-10 max-w-full">
          <span className="mb-4 grid h-12 w-12 place-items-center rounded-[13px] border border-white/20 bg-white/[0.09] text-2xl text-white" aria-hidden="true">
            {isVoting ? "▤" : "☷"}
          </span>
          <p className={`mb-2 text-[10px] font-bold uppercase tracking-[1.2px] ${isVoting ? "text-[#b7d8ff]" : "text-[#ffd2a6]"}`}>
            {project.category}
          </p>
          <h3 className="text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-1 text-xs text-white/75">{project.subtitle}</p>
        </div>
        <span className="absolute -bottom-2 right-6 text-6xl font-extrabold leading-none text-white/[0.08] sm:text-[72px]" aria-hidden="true">
          {String(project.id).padStart(2, "0")}
        </span>
        <span className="absolute -right-11 -top-24 h-[220px] w-[220px] rounded-full border border-white/10" aria-hidden="true" />
        <span className="absolute -bottom-24 right-0 h-40 w-40 rounded-full border border-white/10" aria-hidden="true" />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap gap-2 text-[11px] text-[#a5b1c2] sm:gap-x-4">
          <span>Projeto prático</span>
          <span aria-hidden="true">•</span>
          <span>Aplicação web</span>
        </div>

        <h4 className="mb-3 text-lg font-bold leading-relaxed text-[#f0f6fc]">O que é</h4>
        <p className="mb-5 text-sm leading-7 text-[#a5b1c2]">{project.description}</p>

        <h4 className="mb-3 text-sm font-semibold text-slate-200">Principais funcionalidades</h4>
        <ul className="mb-5 grid gap-2.5">
          {project.features?.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-xs leading-relaxed text-[#c3cedb] sm:text-sm">
              <FaCheck className="mt-1 shrink-0 text-[#3fb950]" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mb-5 mt-auto">
          <h4 className="mb-3 text-sm font-semibold text-slate-200">Tecnologias</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span key={technology} className="rounded-md border border-[#2b3b4d] bg-[#111a25] px-2.5 py-1.5 text-[10px] font-medium text-[#a8cfff] sm:text-xs">
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-[#293442] pt-5 sm:flex-row">
          <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`Abrir demonstração de ${project.title} em nova aba`} className="botao botao-principal min-w-0 flex-1">
            <FaExternalLinkAlt aria-hidden="true" /> Ver demonstração
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Ver código-fonte de ${project.title} no GitHub em nova aba`} className="botao botao-secundario min-w-0 flex-1">
            <FaGithub aria-hidden="true" /> Código-fonte
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
