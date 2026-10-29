import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  const anoAtual = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  const [secaoPendente, setSecaoPendente] = useState(null);

  useEffect(() => {
    if (location.pathname === "/" && secaoPendente) {
      const id = secaoPendente;

      requestAnimationFrame(() => {
        if (id === "inicio") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
          });
        }

        setSecaoPendente(null);
      });
    }
  }, [location.pathname, secaoPendente]);

  function navegarParaSecao(id) {
    if (location.pathname !== "/") {
      setSecaoPendente(id);
      navigate("/");
      return;
    }

    if (id === "inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }

  const links = [
    { label: "Início", id: "inicio" },
    { label: "Sobre mim", id: "sobre" },
    { label: "Tecnologias", id: "tecnologias" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#0d1117]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
          <div className="max-w-sm">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xl font-bold text-slate-100 transition hover:text-blue-400"
            >
              Eduardo Carvalho<span className="text-blue-400">.</span>
            </Link>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Desenvolvedor em formação, estudante de ADS e apaixonado por
              tecnologia e desenvolvimento de soluções digitais.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-slate-100">Navegação</h2>

            <nav className="mt-3 flex flex-col items-start gap-3 text-sm text-slate-400">
              {links.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => navegarParaSecao(link.id)}
                  className="cursor-pointer transition hover:text-blue-400"
                >
                  {link.label}
                </button>
              ))}

              <Link to="/projetos" className="transition hover:text-blue-400">
                Projetos
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="font-semibold text-slate-100">Conecte-se comigo</h2>

            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://github.com/Carvalho-Eduardo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-400 transition hover:-translate-y-1 hover:text-blue-400"
              >
                <FaGithub size={23} />
              </a>

              <a
                href="https://www.linkedin.com/in/e-duardo-carvalho/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-400 transition hover:-translate-y-1 hover:text-blue-400"
              >
                <FaLinkedin size={23} />
              </a>

              <a
                href="mailto:e.duardo.carvalho@outlook.com"
                aria-label="Enviar e-mail"
                className="text-slate-400 transition hover:-translate-y-1 hover:text-blue-400"
              >
                <FaEnvelope size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-500">
            © {anoAtual} Eduardo Carvalho. Todos os direitos reservados.
          </p>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex cursor-pointer items-center gap-2 text-sm text-slate-400 transition hover:text-blue-400"
          >
            Voltar ao topo
            <FaArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
