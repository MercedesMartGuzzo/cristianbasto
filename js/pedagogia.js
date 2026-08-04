

document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los elementos que deseas animar
    const elements = document.querySelectorAll('.fade-in');

    // Crear el observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.05// 10% del elemento visible
    });

    // Observar todos los elementos seleccionados
    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los elementos que deseas animar
    const elements = document.querySelectorAll('.fade-in1');

    // Crear el observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.20// 10% del elemento visible
    });

    // Observar todos los elementos seleccionados
    elements.forEach(element => {
        observer.observe(element);
    });
});


document.addEventListener("DOMContentLoaded", () => {

    const hero = document.querySelector(".hero-pedagogia");
    const imagen = document.querySelector(".hero-img-pedagogia");
    const titulo = document.querySelector(".hero-title-pedagogia");

    function actualizarHero() {

        if (!hero || !imagen) return;

        const scrollY = window.scrollY;
        const rect = hero.getBoundingClientRect();

        if (rect.bottom > 0) {

            const desplazamiento = scrollY * 0.45;

            const escala = window.innerWidth <= 768
                ? Math.max(1.0 - scrollY * 0.0003, 1)
                : Math.max(1 - scrollY * 0.0002, 1);

            imagen.style.transform =
                `translate3d(0,${desplazamiento}px,0) scale(${escala})`;

            if (titulo) {

                const movimientoTitulo = scrollY * 0.65;

                titulo.style.transform =
                    `translateY(calc(-50% + ${movimientoTitulo}px))`;

                titulo.style.opacity =
                    Math.max(1 - scrollY / 500, 0);
            }
        }
    }

    actualizarHero();

    window.addEventListener("scroll", actualizarHero, {
        passive: true
    });

});

