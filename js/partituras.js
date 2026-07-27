

document.addEventListener('DOMContentLoaded', function () {
    const pianoParts = document.querySelectorAll('.piano-partes');

    pianoParts.forEach(part => {
        const icono = part.querySelector('.mostrar-icono');
        const previsualizaciones = part.querySelector('.previsualizaciones');
        const previsualizacionImages = previsualizaciones.querySelectorAll('.previsualizacion');
        const portadaContainer = part.querySelector('.piano-portada');
        const portada = portadaContainer.querySelector('.portada-img1');
        let currentIndex = 0;

        icono.addEventListener('click', function () {
            // Ocultar la portada original o la imagen actual
            portada.style.display = 'none';
            previsualizacionImages.forEach(image => {
                image.style.display = 'none';
            });

            // Mostrar la siguiente previsualización
            if (currentIndex < previsualizacionImages.length) {
                previsualizacionImages[currentIndex].style.display = 'block';
                portadaContainer.appendChild(previsualizacionImages[currentIndex]);
                portadaContainer.appendChild(icono);  // Asegurar que el icono esté sobre la imagen actual
                currentIndex++;
            } else {
                // Reiniciar al inicio y mostrar la portada original
                currentIndex = 0;
                portada.style.display = 'block';
                portadaContainer.appendChild(portada);
                portadaContainer.appendChild(icono);  // Asegurar que el icono esté sobre la imagen de portada
            }
        });
    });
});

 document.addEventListener('DOMContentLoaded', function () {
    const pianoPartes = document.querySelectorAll('.piano-partes1');

    pianoPartes.forEach(part => {
        const icono1 = part.querySelector('.mostrar-icono1');
        const previsualizaciones1 = part.querySelector('.previsualizaciones1');
        const previsualizacionImages1 = previsualizaciones1.querySelectorAll('.previsualizacion1');
        const portadaContainer1 = part.querySelector('.piano-portada1');
        const portada1 = portadaContainer1.querySelector('.portada-img1');
        let currentIndex = 0;

        icono1.addEventListener('click', function () {
            // Ocultar la portada original o la imagen actual
            portada1.style.display = 'none';
            previsualizacionImages1.forEach(image => {
                image.style.display = 'none';
            });

            // Mostrar la siguiente previsualización
            if (currentIndex < previsualizacionImages1.length) {
                previsualizacionImages1[currentIndex].style.display = 'block';
                portadaContainer1.appendChild(previsualizacionImages1[currentIndex]);
                portadaContainer1.appendChild(icono1);  // Asegurar que el icono esté sobre la imagen actual
                currentIndex++;
            } else {
                // Reiniciar al inicio y mostrar la portada original
                currentIndex = 0;
                portada1.style.display = 'block';
                portadaContainer1.appendChild(portada1);
                portadaContainer1.appendChild(icono1);  // Asegurar que el icono esté sobre la imagen de portada
            }
        });
    });
}); 



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

    const hero = document.querySelector(".hero-partituras");
    const imagen = document.querySelector(".hero-img-partituras");
    const titulo = document.querySelector(".hero-title-partituras");

    function actualizarHero() {

        if (!hero || !imagen) return;

        const scrollY = window.scrollY;
        const rect = hero.getBoundingClientRect();

        if (rect.bottom > 0) {

            const desplazamiento = scrollY * 0.45;

            const escala = Math.max(
                1.20 - scrollY * 0.0007,
                1
            );

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