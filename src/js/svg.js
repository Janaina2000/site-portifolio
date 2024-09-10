// Função para carregar o arquivo JSON com ícones
function loadIconsJSON(url, callback) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (callback) callback(data);
        })
        .catch(error => console.error('Erro ao carregar JSON de ícones:', error));
}

// Função para extrair viewBox do SVG
function extractViewBox(svgContent) {
    const viewBoxMatch = svgContent.match(/viewBox="([^"]*)"/);
    return viewBoxMatch ? viewBoxMatch[1] : '0 0 22 22'; // Valor padrão se não encontrado
}

// Função para preencher um SVG específico com o ícone correspondente
function fillSVGIcons(iconsData) {
    // Seleciona todos os elementos <svg> com o atributo "name"
    const svgElements = document.querySelectorAll('svg[name]');
    
    svgElements.forEach(svg => {
        const iconName = svg.getAttribute('name');
        const iconData = iconsData.icons.find(icon => icon.id === iconName);

        if (iconData) {
            // Extrai o conteúdo SVG sem a tag <svg> externa
            const svgContent = iconData.svg
                .replace(/<svg[^>]*>/, '') // Remove a tag <svg> inicial
                .replace(/<\/svg>/, ''); // Remove a tag </svg> final

            // Adiciona o conteúdo SVG ao elemento
            svg.innerHTML = svgContent;

            // Extrai e define o viewBox automaticamente
            const svgElementContent = iconData.svg;
            const viewBox = extractViewBox(svgElementContent);
            svg.setAttribute('viewBox', viewBox);

            // Define a largura e altura do SVG com base nos atributos
            const widthMatch = svgElementContent.match(/width="([^"]*)"/);
            const heightMatch = svgElementContent.match(/height="([^"]*)"/);
            if (widthMatch) svg.setAttribute('width', widthMatch[1]);
            if (heightMatch) svg.setAttribute('height', heightMatch[1]);

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
