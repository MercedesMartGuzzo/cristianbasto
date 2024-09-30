
function activarBordesPartituras(contenedor) {
    contenedor.classList.add("border-visible-top");
    contenedor.classList.add("border-visible-left");
    console.log(`Bordes de ${contenedor.id} activados`);
}

document.addEventListener("DOMContentLoaded", function () {
    let partituras1container = document.getElementById("partituras1Container");
    console.log(partituras1container); // Verifica si el elemento se obtiene correctamente
    if (partituras1container) {
        activarBordesPartituras(partituras1container);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const pianoParts = document.querySelectorAll('.piano-partes');

    pianoParts.forEach(part => {
        const icono = part.querySelector('.mostrar-icono');
        const previsualizaciones = part.querySelector('.previsualizaciones');
        const previsualizacionImages = previsualizaciones.querySelectorAll('.previsualizacion');
        const portadaContainer = part.querySelector('.piano-portada');
        const portada = portadaContainer.querySelector('.portada-img');
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



//ACTIVAR-DESACTIVAR DARK-MODE//
document.addEventListener("DOMContentLoaded", () => {
    const botonColorMode = document.querySelector("#color-mode");
    const body = document.body;

    let darkMode = localStorage.getItem("dark-mode");

    function activarDarkMode() {
        body.classList.add("dark-mode");
        botonColorMode.classList.replace("bi-moon-stars-fill", "bi-sun-fill");
        localStorage.setItem("dark-mode", "activado");
    }

    function desactivarDarkMode() {
        body.classList.remove("dark-mode");
        botonColorMode.classList.replace("bi-sun-fill", "bi-moon-stars-fill");
        localStorage.setItem("dark-mode", "desactivado");
    }

    if (darkMode === "activado") {
        activarDarkMode();
    } else {
        desactivarDarkMode();
    }

    botonColorMode.addEventListener("click", () => {
        darkMode = localStorage.getItem("dark-mode");

        if (darkMode === "activado") {
            desactivarDarkMode();
        } else {
            activarDarkMode();
        }
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

