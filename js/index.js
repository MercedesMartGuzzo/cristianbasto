   // Agregar un evento de clic a todos los enlaces del menú
   document.querySelectorAll('.navbar-nav .nav-link').forEach(item => {
    // Agregar un listener de clic a cada enlace
    item.addEventListener('click', () => {
        // Obtener el botón de la barra de navegación
        let navbarToggler = document.querySelector('.navbar-toggler');
        // Si el botón de la barra de navegación está presente y está expandido (es decir, el menú está abierto)
        if (navbarToggler && !navbarToggler.classList.contains('collapsed')) {
            // Hacer clic en el botón para cerrar el menú
            navbarToggler.click();
        }
    });
});


// Definir una función para activar/desactivar los bordes de una sección
function activarDesactivarBordes(contenedor) {

    // Obtener las dimensiones y la posición del contenedor con respecto al viewport
    let rect = contenedor.getBoundingClientRect();

    // Aparecer borde superior cuando el borde superior del contenedor está dentro del viewport
    if (rect.top <= window.innerHeight) {
        // Agregar la clase 'border-visible-top' al cont`videosConenedor para mostrar el borde superior
        contenedor.classList.add('border-visible-top');
        // Imprimir un mensaje en la consola indicando que el borde superior ha sido activado
        console.log(`Borde superior de ${videosContainer} activado`);
    } else {
        // Si el borde superior del contenedor no está dentro del viewport, quitar la clase 'border-visible-top'
        contenedor.classList.remove('border-visible-top');
        // Imprimir un mensaje en la consola indicando que el borde superior ha sido desactivado
        console.log(`Borde superior de ${videosContainer} desactivado`);
    }

    // Aparecer borde izquierdo cuando el borde superior del contenedor está dentro del viewport
    if (rect.top<= window.innerHeight) {
        // Agregar la clase 'border-visible-left' al contenedor para mostrar el borde izquierdo
        contenedor.classList.add('border-visible-left');
        // Imprimir un mensaje en la consola indicando que el borde izquierdo ha sido activado
        console.log(`Borde izquierdo de ${videosContainer} activado`);
    } else {
        // Si el borde superior del contenedor no está dentro del viewport, quitar la clase 'border-visible-left'
        contenedor.classList.remove('border-visible-left');
        // Imprimir un mensaje en la consola indicando que el borde izquierdo ha sido desactivado
        console.log(`Borde izquierdo de ${videosContainer} desactivado`);
    }
}
window.addEventListener('scroll', function () {
    // Obtener el contenedor de videos por su ID
    let videosContainer = document.getElementById('videosContainer');
    // Llamar a la función para el contenedor de videos
    activarDesactivarBordes(videosContainer);

    // Obtener el contenedor de la bio por su ID
    let bioContainer = document.getElementById('bioContainer');
    // Llamar a la función para el contenedor de la bio
    activarDesactivarBordes(bioContainer);

    let musicaContainer = document.getElementById('bioContainer');
    // Llamar a la función para el contenedor de la bio
    activarDesactivarBordes(musicaContainer);
});



