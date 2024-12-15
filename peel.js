document.addEventListener('DOMContentLoaded', () => {
    const book = document.querySelector('#book');
    const topPage = document.querySelector('.peel-top');
    const backPage = document.querySelector('.peel-back');
    const bottomPage = document.querySelector('.peel-bottom');

    let currentAngle = 0;

    book.addEventListener('click', () => {
        currentAngle -= 180; // Avanza al siguiente lado
        topPage.style.transform = `rotateY(${currentAngle}deg)`;
        backPage.style.transform = `rotateY(${currentAngle - 180}deg)`;
        bottomPage.style.transform = `rotateY(${currentAngle - 360}deg)`;
    });
});
