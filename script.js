// Selecciona todas las páginas
const pages = document.querySelectorAll('.page');
let currentPage = 0;

// Evento de clic para cambiar de página
document.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        pages[currentPage].style.transform = 'rotateY(-180deg)';
        currentPage++;
    } else {
        // Reinicia las páginas al principio
        currentPage = 0;
        pages.forEach(page => page.style.transform = 'rotateY(0deg)');
    }
});
