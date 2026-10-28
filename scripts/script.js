
const anoAtual = document.querySelector("#ano-atual");

// Atualiza o ano do rodapé automaticamente.
if (anoAtual) {
  anoAtual.textContent = new Date().getFullYear();
}
