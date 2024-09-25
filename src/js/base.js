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

  
  // Carregar o cabeçalho e o rodapé ao carregar o documento
  document.addEventListener('DOMContentLoaded', () => {
    loadHTML('src/html/base/header.html', 'header');
    loadHTML('src/html/pages/home/index.html', 'main');
    loadHTML('src/html/base/footer.html', 'footer');

  });



