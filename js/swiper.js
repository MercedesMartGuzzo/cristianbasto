// Inicializar Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Modal y grilla
const photoGrid = document.querySelector('.photo-grid');
const modal = document.querySelector('#photo-modal');
const closeModal = document.querySelector('#close-modal');

// Al hacer clic en una foto de la grilla
photoGrid.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        const index = parseInt(e.target.dataset.index, 10); // Obtener índice de la imagen
        swiper.slideTo(index + 1); // Mover slider al índice correspondiente
        modal.classList.add('active'); // Mostrar modal
    }
});

// Cerrar modal
closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Cerrar modal al hacer clic fuera del slider
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});
