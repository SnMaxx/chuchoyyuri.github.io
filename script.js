const pages = document.querySelectorAll('.page');
let currentPage = 0;

document.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        pages[currentPage].style.transform = 'rotateY(-180deg)';
        currentPage++;
    } else {
        currentPage = 0;
        pages.forEach(page => page.style.transform = 'rotateY(0deg)');
    }
});
