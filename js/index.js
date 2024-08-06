// Agregar un evento de clic a todos los enlaces del menú

document.querySelectorAll(".navbar-nav .nav-link").forEach((item) => {
  item.addEventListener("click", () => {

    let navbarToggler = document.querySelector(".navbar-toggler");
    if (navbarToggler && !navbarToggler.classList.contains("collapsed")) {
      navbarToggler.click();
    }
  });
});

// Event listener solo para los enlaces dentro del div "redes"
document.querySelectorAll('.redes a').forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    const url = item.getAttribute('href');
    if (url) {
      window.open(url, '_blank');
    }
  });
});

// Definir una función para activar/desactivar los bordes de una sección
// Aparecer borde izquierdo cuando el borde superior del contenedor está dentro del viewport
function activarDesactivarBordes(contenedor) {
  // Obtener las dimensiones y la posición del contenedor con respecto al viewport
  let rect = contenedor.getBoundingClientRect();

  // Aparecer borde superior cuando el borde superior del contenedor está dentro del viewport
  if (rect.top <= window.innerHeight) {
    contenedor.classList.add("border-visible-top");
    console.log(`Borde superior de ${contenedor.id} activado`);
  } else {
    contenedor.classList.remove("border-visible-top");
    console.log(`Borde superior de ${contenedor.id} desactivado`);
  }

  // Aparecer borde izquierdo cuando el borde superior del contenedor está dentro del viewport
  if (rect.top <= window.innerHeight) {
    contenedor.classList.add("border-visible-left");
    console.log(`Borde izquierdo de ${contenedor.id} activado`);
  } else {
    contenedor.classList.remove("border-visible-left");
    console.log(`Borde izquierdo de ${contenedor.id} desactivado`);
  }
}


window.addEventListener("scroll", function () {
  let videosContainer = document.getElementById("videosContainer");
  activarDesactivarBordes(videosContainer);

  let musicaContainer = document.getElementById("musicaContainer");
  activarDesactivarBordes(musicaContainer);

  let contactoContainer = document.getElementById("contactoContainer");
  activarDesactivarBordes(contactoContainer);
});

function activarBordesBioContainer(contenedor) {
  contenedor.classList.add("border-visible-top");
  contenedor.classList.add("border-visible-left");
  console.log(`Bordes de ${contenedor.id} activados`);
}

let bioContainer = document.getElementById("bioContainer");
activarBordesBioContainer(bioContainer);


// Función para agregar desplazamiento suave al hacer clic en enlaces de la barra de navegación
function smoothScroll(target) {
  let targetElement = document.querySelector(target);
  let targetPosition = targetElement.offsetTop;
  let navbarHeight = document.querySelector(".navbar").offsetHeight; // Obtener la altura de la barra de navegación

  // Usar window.scrollTo() para agregar desplazamiento suave
  window.scrollTo({
    top: targetPosition - navbarHeight,
    behavior: "smooth",
  });
}
// Obtener todos los enlaces de la barra de navegación y agregar un evento de clic a cada uno
let navLinks = document.querySelectorAll(".navbar-nav a");
navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function (event) {
    let target = this.getAttribute("href");

    // Excluir los enlaces de "PARTITURAS" y "PEDAGOGIA" del comportamiento de desplazamiento suave
    if (this.classList.contains("partitura") || this.classList.contains("pedagogia")|| this.classList("colaboracion")){
      return;
    }

    event.preventDefault();
    smoothScroll(target);
  });
});



/* ICONOS PARA MOSTRAR PARRAFOS DE BIO */
document.addEventListener('DOMContentLoaded', () => {
  const toggleIcons = document.querySelectorAll('.toggle-icon');
  const paragraphs = document.querySelectorAll('.bio-parrafo');

  toggleIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      const currentParagraph = icon.closest('.bio-parrafo');
      const isOpen = currentParagraph.classList.toggle('open');
      
      // Close all other paragraphs except the current one
      paragraphs.forEach(paragraph => {
        if (paragraph !== currentParagraph && paragraph.classList.contains('open')) {
          paragraph.classList.remove('open');
        }
      });

      // Adjust scroll to ensure the expanded paragraph is in view
      if (isOpen) {
        // Use a small delay to ensure the CSS transition is complete
        setTimeout(() => {
          // Get the h4 element inside the current paragraph
          const title = currentParagraph.querySelector('h4')|| currentParagraph.querySelector('h3');
          // Get the top position of the h4 relative to the viewport
          const rect = title.getBoundingClientRect();
          // Scroll the h4 into view, aligning it to the top of the viewport
          window.scrollTo({
            top: window.scrollY + rect.top - 20, // Adjust the offset if necessary
            behavior: 'smooth'
          });
        }, 1000); // Ensure this matches the CSS transition duration
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







/* FORMULARIO DE CONNTACTO */
/* 
document.getElementById('contactoForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita el envío del formulario

  // Obtener los valores del formulario
  const nombreUsuario = document.getElementById('nombreUsuario').value;
  const mailUsuario = document.getElementById('mailUsuario').value;
  const mensajeUsuario = document.getElementById('mensajeUsuario').value;

  // Guardar datos en el localStorage
  localStorage.setItem("nombreUsuario", nombreUsuario);
  localStorage.setItem("mailUsuario", mailUsuario);
  localStorage.setItem("mensajeUsuario", mensajeUsuario);

  // Mostrar el mensaje de agradecimiento y ocultar el formulario
  const mensajeSaludo = document.getElementById('mensajeSaludo');
  mensajeSaludo.style.display = 'block';
  mensajeSaludo.innerHTML = `¡Gracias ${nombreUsuario} por escribirnos!`;

  const formulario = document.getElementById('contactoForm');
  formulario.style.display = 'none';

  setTimeout(() => {
    mensajeSaludo.style.display = 'none';
    formulario.style.display = 'block';
  }, 8000);

  formulario.reset();
})*/