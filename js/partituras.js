
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
/* 
<div class="photo-grid">
<img src="./img/orsay14.jpg" alt="Foto 1" class="vertical">
<img src="./img/foto-bioNueva.jpg" alt="Foto 2" class="horizontal">
<img src="./img/colab.jpg" alt="Foto 3" class="horizontal">
<img src="./img/ensambleswiper.jpg" alt="Foto 4" class="horizontal">
<img src="./img/crischus-contra.jpg" alt="Foto 5" class="horizontal">
<img src="./img/colaboraciones.jpg" alt="Foto 6" class="vertical">
<img src="./img/fondo-videos.jpg" alt="Foto 7" class="horizontal">
<img src="./img/swipper2.jpg" alt="Foto 8" class="horizontal">
<img src="./img/quasimodo-swipper.jpg" alt="Foto 9" class="horizontal">
<img src="./img/crischus-swipper.jpg" alt="Foto 10" class="horizontal">
<img src="./img/crischusswipper2.jpg" alt="Foto 11" class="horizontal">
<img src="./img/crischusswipper3.jpg" alt="Foto 12" class="horizontal">
</div>  <!-- Modal con slider -->
            <div class="modal" id="photo-modal">
                <span class="close-button" id="close-modal">&times;</span>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="./img/orsay14.jpg" alt="Foto 1"></div>
                        <div class="swiper-slide"><img src="./img/foto-bioNueva.jpg" alt="Foto 2"></div>
                        <div class="swiper-slide"><img src="./img/colab.jpg" alt="Foto 3"></div>
                        <div class="swiper-slide"><img src="./img/ensambleswiper.jpg" alt="Foto 4"></div>
                        <div class="swiper-slide"><img src="./img/crischus-contra.jpg" alt="Foto 5"></div>
                        <div class="swiper-slide"><img src="./img/colaboraciones.jpg" alt="Foto 6"></div>
                        <div class="swiper-slide"><img src="./img/fondo-videos.jpg" alt="Foto 7"></div>
                        <div class="swiper-slide"><img src="./img/swipper2.jpg" alt="Foto 8"></div>
                        <div class="swiper-slide"><img src="./img/quasimodo-swipper.jpg" alt="Foto 9"></div>
                        <div class="swiper-slide"><img src="./img/crischus-swipper.jpg" alt="Foto 10"></div>
                        <div class="swiper-slide"><img src="./img/crischusswipper2.jpg" alt="Foto 11"></div>
                        <div class="swiper-slide"><img src="./img/crischusswipper3.jpg" alt="Foto 12"></div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-pagination"></div>
                </div>
            </div> */