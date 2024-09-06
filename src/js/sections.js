// Função para carregar o conteúdo de um arquivo HTML e inseri-lo em um elemento
function loadHTML(file, selector) {
  fetch(file)
      .then(response => {
          if (!response.ok) {
              throw new Error('Falha ao carregar ' + file);
          }
          return response.text();
      })
      .then(data => {
          document.querySelector(selector).innerHTML = data;
      })
      .catch(error => console.error('Erro ao carregar o HTML:', error));
}

// Função para carregar e injetar o conteúdo do SVG no DOM
function loadSVG(url) {
  return fetch(url)
      .then(response => {
          if (!response.ok) {
              throw new Error('Falha ao carregar ' + url);
          }
          return response.text();
      })
      .then(svgText => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
          const svgRoot = svgDoc.querySelector('svg');
          document.body.insertAdjacentHTML('afterbegin', svgRoot.outerHTML);
      })
      .catch(error => console.error('Erro ao carregar o SVG:', error));
}

// Carregar o cabeçalho e o rodapé ao carregar o documento
document.addEventListener('DOMContentLoaded', () => {
  // Carregar HTML
  loadHTML('src/html/pages/home/sections/01_hero.html', '#hero');
  loadHTML('src/html/pages/home/sections/02_biography.html', '#biography');
  loadHTML('src/html/pages/home/sections/03_experience.html', '#experience');
  loadHTML('src/html/pages/home/sections/04_dreams.html', '#dreams');
  loadHTML('src/html/pages/home/sections/05_skil.html', '#skil');
  loadHTML('src/html/pages/home/sections/06_hobbis.html', '#hobbis');
  loadHTML('src/html/pages/home/sections/07_social.html', '#social');
  

});
