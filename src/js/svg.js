// Função para carregar o arquivo JSON com ícones
function loadIconsJSON(url, callback) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (callback) callback(data);
        })
        .catch(error => console.error('Erro ao carregar JSON de ícones:', error));
}

// Função para preencher um SVG específico com o ícone correspondente
function fillSVGIcons(iconsData) {
    // Seleciona todos os elementos <svg> com o atributo "name"
    const svgElements = document.querySelectorAll('svg[name]');
    
    svgElements.forEach(svg => {
        const iconName = svg.getAttribute('name');
        const iconData = iconsData.icons.find(icon => icon.id === iconName);

        if (iconData) {
            svg.innerHTML = iconData.svg.replace(/<svg[^>]*>/, '').replace(/<\/svg>/, ''); // Remove tags <svg> existentes
        } else {
            console.error(`Ícone com nome ${iconName} não encontrado.`);
        }
    });
}

// Inicializa o carregador de ícones
function initializeIconLoader() {
    loadIconsJSON('/src/svg/icons.json', (iconsData) => {
        fillSVGIcons(iconsData);
    });
}

// Quando o documento estiver carregado, inicialize o carregador de ícones
document.addEventListener('DOMContentLoaded', initializeIconLoader);
