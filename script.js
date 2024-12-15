// Selecciona todas las páginas
const pages = document.querySelectorAll('.page');
let currentPage = 0;

// Inicializar: ocultar todas las páginas excepto la primera
pages.forEach((page, index) => {
    if (index !== 0) {
        page.classList.add('hidden');
    }
});

// Evento de clic para cambiar de página
document.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        // Oculta la página actual
        pages[currentPage].classList.add('hidden');

        // Muestra la siguiente página
        currentPage++;
        pages[currentPage].classList.remove('hidden');
    } else {
        // Reinicia al principio
        pages[currentPage].classList.add('hidden');
        currentPage = 0;
        pages[currentPage].classList.remove('hidden');
    }
});
