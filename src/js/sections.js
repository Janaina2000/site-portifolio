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
  // Carregar HTML
  loadHTML('src/html/pages/home/sections/01_hero.html', '#hero');
  loadHTML('src/html/pages/home/sections/02_biography.html', '#biography');
  loadHTML('src/html/pages/home/sections/03_experience.html', '#experience');
  loadHTML('src/html/pages/home/sections/04_dreams.html', '#dreams');
  loadHTML('src/html/pages/home/sections/05_skil.html', '#skil');
  loadHTML('src/html/pages/home/sections/06_hobbis.html', '#hobbis');
  loadHTML('src/html/pages/home/sections/07_projects.html', '#projects');

  
  setTimeout(() => {
    const experience = new Swiper('.swipper-experience', {
      // Configurações do Swiper
      loop: true,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
      breakpoints: {
        // quando a largura for menor que 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // quando a largura for maior ou igual a 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // quando a largura for maior ou igual a 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }

    });

    const hobbis = new Swiper('.swipper-hobbis', {
      // Configurações do Swiper
      loop: true,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
      breakpoints: {
        // quando a largura for menor que 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // quando a largura for maior ou igual a 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // quando a largura for maior ou igual a 1024px
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }

    });

    

  }, 100)

});

