import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaLayerGroup,
} from "react-icons/fa";

import SectionTitle from "../components/ui/SectionTitle";
import technologies from "../data/technologies";

function Home() {
  const baseUrl = import.meta.env.BASE_URL;

  const emailSubject = encodeURIComponent(
    "Contato profissional pelo portfólio",
  );

  const emailBody = encodeURIComponent(
    "Olá, Eduardo!\n\nConheci seu portfólio e entrei em contato por meio do seu site.\n\nGostaria de conversar com você sobre uma oportunidade ou possível colaboração na área de tecnologia.\n\nFico à disposição para conversarmos.\n\nAtenciosamente,\n[Seu nome]",
  );

  const emailLink = `mailto:e.duardo.carvalho@outlook.com?subject=${emailSubject}&body=${emailBody}`;

  const categories = [
    { title: "Linguagens", icon: FaCode, group: "Linguagens" },
    { title: "Frontend", icon: FaLayerGroup, group: "Frontend" },
    { title: "Backend", icon: FaLaptopCode, group: "Backend" },
    { title: "Banco de dados", icon: FaDatabase, group: "Dados" },
    { title: "Ferramentas", icon: FaCode, group: "Ferramentas" },
  ];

  return (
    <main>
      {/* Apresentação principal */}
      <section
        id="inicio"
        className="animate-fade-up mx-auto flex min-h-[75vh] max-w-6xl flex-col items-center justify-between gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:flex-row"
      >
        <div className="max-w-3xl flex-1">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Estudante de ADS
          </span>

          <p className="mb-3 text-slate-400">Olá, eu sou</p>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Eduardo Carvalho
            <span className="text-blue-400">.</span>
          </h1>

          <h2 className="mt-5 text-xl font-semibold text-slate-300 sm:text-2xl">
            Desenvolvedor em formação
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
            Estudante de Análise e Desenvolvimento de Sistemas na Universidade
            Santa Cecília. Tenho interesse em programação, desenvolvimento de
            sistemas e criação de soluções tecnológicas para problemas reais.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`${baseUrl}projetos`}
              className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
            >
              Conheça meus projetos
            </a>

            <button
              type="button"
              onClick={() =>
                document.getElementById("contato")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="cursor-pointer rounded-lg border border-white/15 px-6 py-3 font-semibold text-slate-200 transition hover:border-blue-400 hover:text-blue-400"
            >
              Entre em contato
            </button>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href="https://github.com/Carvalho-Eduardo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 transition hover:text-blue-400"
            >
              <FaGithub size={25} />
            </a>

            <a
              href="https://www.linkedin.com/in/e-duardo-carvalho/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 transition hover:text-blue-400"
            >
              <FaLinkedin size={25} />
            </a>

            <a
              href={emailLink}
              aria-label="Enviar e-mail"
              className="text-slate-400 transition hover:text-blue-400"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Foto profissional */}
        <div className="relative w-64 shrink-0 sm:w-80">
          <div className="absolute -inset-3 rounded-3xl border border-blue-400/20" />

          <img
            src={`${baseUrl}img/image.png`}
            alt="Foto profissional de Eduardo Carvalho"
            className="relative aspect-[4/5] w-full rounded-2xl border border-[#293442] object-cover shadow-2xl shadow-blue-950/30"
            onError={(event) => {
              console.error(
                "Não foi possível carregar a foto:",
                event.currentTarget.src,
              );
            }}
          />
        </div>
      </section>

      {/* Sobre mim */}
      <section
        id="sobre"
        className="animate-fade-up mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <SectionTitle>Sobre mim</SectionTitle>

        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
          <div className="max-w-3xl space-y-5 leading-8 text-slate-400">
            <p>
              Sou estudante de Análise e Desenvolvimento de Sistemas na
              Universidade Santa Cecília e estou construindo minha trajetória
              profissional na área de tecnologia.
            </p>

            <p>
              Tenho interesse em desenvolvimento de software, aplicações web,
              organização de dados e criação de soluções que atendam a
              necessidades reais. Busco transformar os conhecimentos adquiridos
              nos estudos em projetos práticos.
            </p>

            <p>
              Meu objetivo é continuar evoluindo tecnicamente, aprimorar minha
              lógica de programação e desenvolver aplicações cada vez mais
              organizadas, funcionais e fáceis de utilizar.
            </p>
          </div>

          {/* Download do currículo */}
          <div className="rounded-2xl border border-[#293442] bg-[#161b22] p-6 md:w-64">
            <FaDownload className="mb-4 text-2xl text-blue-400" />

            <h3 className="text-lg font-semibold text-slate-100">
              Meu currículo
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Confira minha trajetória, formação e conhecimentos.
            </p>

            <a
              href={`${baseUrl}arquivos/curriculo-eduardo.pdf`}
              download="Curriculo-Eduardo-Carvalho.pdf"
              className="botao botao-principal mt-5 w-full"
            >
              <FaDownload />
              Baixar currículo
            </a>
          </div>
        </div>
      </section>

      {/* Experiência prática com projetos */}
      <section
        id="experiencia"
        className="animate-fade-up mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <SectionTitle>Experiência prática</SectionTitle>

        <p className="mb-8 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
          Estou desenvolvendo minha experiência por meio de projetos práticos,
          aplicando os conhecimentos da graduação e estudando como transformar
          necessidades em aplicações web funcionais.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-[#293442] bg-[#161b22] p-6 transition hover:border-blue-400/40">
            <FaLaptopCode
              className="mb-4 text-2xl text-blue-400"
              aria-hidden="true"
            />

            <h3 className="text-lg font-semibold text-slate-100">
              Sistema de votação escolar
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Projeto para organizar a votação do Grêmio Estudantil, com
              identificação dos alunos, prevenção de votos duplicados e
              apresentação das chapas e resultados.
            </p>

            <p className="mt-4 text-xs leading-6 text-slate-500">
              Prática com interfaces React, lógica de aplicação e publicação
              web.
            </p>

            <a
              href="https://votacao-gremio-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Ver projeto →
            </a>
          </article>

          <article className="rounded-2xl border border-[#293442] bg-[#161b22] p-6 transition hover:border-blue-400/40">
            <FaCode
              className="mb-4 text-2xl text-blue-400"
              aria-hidden="true"
            />

            <h3 className="text-lg font-semibold text-slate-100">
              Cardápio online
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Aplicação de cardápio digital que apresenta produtos de forma
              organizada e busca oferecer uma experiência simples em diferentes
              tamanhos de tela.
            </p>

            <p className="mt-4 text-xs leading-6 text-slate-500">
              Prática com componentes de interface, organização de conteúdo e
              responsividade.
            </p>

            <a
              href="https://cardapio-1.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Ver projeto →
            </a>
          </article>
        </div>
      </section>

      {/* Tecnologias */}
      <section
        id="tecnologias"
        className="animate-fade-up mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <SectionTitle>Tecnologias</SectionTitle>

        <p className="mb-8 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
          Tecnologias e ferramentas que estudo e utilizo em projetos práticos.
          Minha experiência varia conforme a ferramenta e continuo aprofundando
          meus conhecimentos.
        </p>

        <div className="grid gap-8">
          {categories.map((category) => {
            const Icon = category.icon;

            const items = technologies.filter(
              (technology) => technology.group === category.group,
            );

            if (items.length === 0) {
              return null;
            }

            return (
              <div key={category.group}>
                <h3 className="mb-4 flex items-center gap-2 text-base font-semibold text-slate-200">
                  <Icon className="text-blue-400" aria-hidden="true" />
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                  {items.map((technology) => (
                    <div
                      key={technology.name}
                      className="rounded-xl border border-[#293442] bg-[#161b22] p-4 transition duration-200 hover:-translate-y-1 hover:border-blue-400/60"
                    >
                      <h4 className="font-semibold text-slate-100">
                        {technology.name}
                      </h4>

                      <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
                        {technology.category}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contato */}
      <section
        id="contato"
        className="animate-fade-up mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <SectionTitle>Vamos conversar?</SectionTitle>

        <div className="mt-8 max-w-3xl rounded-2xl border border-[#293442] bg-[#161b22] p-8 sm:p-10">
          <p className="text-lg leading-8 text-slate-300">
            Estou aberto a conhecer novas oportunidades, colaborar em projetos e
            trocar experiências com outros profissionais da área de tecnologia.
          </p>

          <p className="mt-4 leading-7 text-slate-400">
            Escolha um dos canais abaixo para conhecer meu trabalho ou entrar em
            contato comigo.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/Carvalho-Eduardo"
              target="_blank"
              rel="noopener noreferrer"
              className="botao botao-secundario"
            >
              <FaGithub size={20} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/e-duardo-carvalho/"
              target="_blank"
              rel="noopener noreferrer"
              className="botao botao-principal"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>

            <a href={emailLink} className="botao botao-secundario">
              <FaEnvelope size={20} />
              E-mail
            </a>
          </div>

          <div className="mt-6 border-t border-[#293442] pt-5">
            <p className="text-sm text-slate-400">E-mail profissional</p>

            <a
              href="mailto:e.duardo.carvalho@outlook.com"
              className="mt-2 inline-block break-all text-slate-200 transition hover:text-blue-400"
            >
              e.duardo.carvalho@outlook.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
