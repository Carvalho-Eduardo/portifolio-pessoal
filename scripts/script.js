const anoAtual = document.querySelector("#ano-atual");

if (anoAtual) {
  anoAtual.textContent = new Date().getFullYear();
}
