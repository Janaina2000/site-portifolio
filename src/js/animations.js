document.addEventListener('DOMContentLoaded', () => {

const hero = document.querySelectorAll('.c-figure svg');
console.log(hero)
let index = 0;

setInterval(() => {
    // Remove a classe "active" de todos os ícones
    hero.forEach(icon => icon.classList.remove('active'));
    
    // Adiciona a classe "active" ao ícone atual
    hero[index].classList.add('active');

    // Atualiza o índice
    index = (index + 1) % hero.length; // Reinicia quando chega ao fim
}, 1000); 
});