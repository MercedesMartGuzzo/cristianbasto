


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
        threshold: 0.20
    });

    // Observar todos los elementos seleccionados
    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.05
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header-wrapper");
    const portada = document.querySelector(".portada-colaboraciones");
    const imagen = document.querySelector(".portada-img-colaboraciones");
    const titulo = document.querySelector(".colaboraciones-titulo");

    function actualizarScroll() {
        const scrollY = window.scrollY;

        // Mostrar header
        if (scrollY > 20) {
            header.classList.add("show-header");
        } else {
            header.classList.remove("show-header");
        }

        // Efectos mientras la portada esté visible
        if (portada && imagen) {
            const rect = portada.getBoundingClientRect();

            if (rect.bottom > 0) {
                // Parallax de la imagen
const desplazamiento = scrollY * 0.45;

const escala = Math.max(
    1.20 - scrollY * 0.0007,
    1
);

imagen.style.transform = `
    translate3d(0, ${desplazamiento}px, 0)
    scale(${escala})
`;

                // Parallax del título
                if (titulo) {
                    const movimientoTitulo = scrollY * 0.35;

                    titulo.style.transform = `translateY(calc(-50% + ${movimientoTitulo}px))`;
                    titulo.style.opacity = Math.max(1 - scrollY / 350, 0);
                }
            }
        }
    }

    actualizarScroll();
    window.addEventListener("scroll", actualizarScroll, { passive: true });
});