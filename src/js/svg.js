// Função para carregar o arquivo JSON com ícones
async function loadIconsJSON(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Rede não disponível');
        return await response.json();
    } catch (error) {
        console.error('Erro ao carregar JSON de ícones:', error);
    }
}

// Função para extrair viewBox do SVG
function extractViewBox(svgContent) {
    const viewBoxMatch = svgContent.match(/viewBox="([^"]*)"/);
    return viewBoxMatch ? viewBoxMatch[1] : '0 0 22 22'; // Valor padrão
}

// Função para preencher um SVG específico com o ícone correspondente
function fillSVGIcons(iconsData) {
    const svgElements = document.querySelectorAll('svg[name]');
    svgElements.forEach(svg => {
        const iconName = svg.getAttribute('name');
        const iconData = iconsData.icons.find(icon => icon.id === iconName);

        if (iconData) {
            const svgContent = iconData.svg
                .replace(/<svg[^>]*>/, '')
                .replace(/<\/svg>/, '');

            if (!svgContent) {
                console.error(`Conteúdo SVG vazio para o ícone ${iconName}`);
                return;
            }

            svg.innerHTML = svgContent; // Preserve atributos do SVG original

            const viewBox = extractViewBox(iconData.svg);
            svg.setAttribute('viewBox', viewBox);

            const widthMatch = iconData.svg.match(/width="([^"]*)"/);
            const heightMatch = iconData.svg.match(/height="([^"]*)"/);
            if (widthMatch) svg.setAttribute('width', widthMatch[1]);
            if (heightMatch) svg.setAttribute('height', heightMatch[1]);

        } else {
            console.error(`Ícone com nome ${iconName} não encontrado.`);
        }
    });
}

// Inicializa o carregador de ícones
async function initializeIconLoader() {
    const iconsData = await loadIconsJSON('/src/svg/icons.json');
    if (iconsData) {
        console.log('Ícones carregados:', iconsData); // Log para depuração
        fillSVGIcons(iconsData);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM completamente carregado e analisado');
    initializeIconLoader();
});
