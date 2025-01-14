const menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


// Seleccionar el menú
const navbar = document.getElementById('navbar');

// Agregar un evento de desplazamiento
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Si el scroll supera los 50px
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});




//Recomendaciones para ti 
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const container = document.querySelector('.carousel-container');

let scrollPosition = 0;
const itemWidth = document.querySelector('.carousel-item').offsetWidth + 20; // Ancho del ítem + margen

nextBtn.addEventListener('click', () => {
    scrollPosition += itemWidth;
    container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    scrollPosition -= itemWidth;
    container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
});

