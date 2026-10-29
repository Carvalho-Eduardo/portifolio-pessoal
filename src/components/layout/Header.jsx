import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
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
    { label: "Início", sectionId: "inicio" },
    { label: "Sobre mim", sectionId: "sobre" },
    { label: "Tecnologias", sectionId: "tecnologias" },
    { label: "Projetos", href: "/projetos" },
    { label: "Contato", sectionId: "contato" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d1117]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-lg font-bold text-slate-100 transition hover:text-blue-400"
        >
          Eduardo Carvalho<span className="text-blue-400">.</span>
        </Link>

        <nav className="flex max-w-full items-center gap-5 overflow-x-auto whitespace-nowrap pb-1 sm:flex-wrap sm:overflow-visible sm:whitespace-normal">
          {links.map((link) => (
            <span key={link.label}>
              {link.sectionId ? (
                <button
                  type="button"
                  onClick={() => navegarParaSecao(link.sectionId)}
                  className="cursor-pointer border-0 bg-transparent p-0 text-sm text-slate-300 transition hover:text-blue-400"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  to={link.href}
                  className={`text-sm transition hover:text-blue-400 ${
                    location.pathname === link.href
                      ? "text-blue-400"
                      : "text-slate-300"
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
