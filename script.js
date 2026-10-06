(function () {
  var raiz = document.documentElement;
  var botao = document.getElementById('tema-btn');
  var texto = botao.querySelector('.tema-texto');

  function aplicar(tema) {
    raiz.dataset.theme = tema;
    var escuro = tema === 'dark';
    botao.setAttribute('aria-pressed', String(escuro));
    botao.setAttribute('aria-label', escuro ? 'Ativar modo claro' : 'Ativar modo escuro');
    texto.textContent = escuro ? 'Modo claro' : 'Modo escuro';
    try { localStorage.setItem('tema', tema); } catch (e) {}
  }

  botao.addEventListener('click', function () {
    aplicar(raiz.dataset.theme === 'dark' ? 'light' : 'dark');
  });

  aplicar(raiz.dataset.theme);
  document.getElementById('ano').textContent = new Date().getFullYear();
})();
