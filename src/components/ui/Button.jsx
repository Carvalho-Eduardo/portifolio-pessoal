function Button({ children, href, variant = "primary" }) {
  const estilos = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary:
      "border border-white/15 text-slate-200 hover:border-blue-400 hover:text-blue-400",
  };

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition ${estilos[variant]}`}
    >
      {children}
    </a>
  );
}

export default Button;
