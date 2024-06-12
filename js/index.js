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
function activarDesactivarBordes(contenedor) {
  // Obtener las dimensiones y la posición del contenedor con respecto al viewport
  let rect = contenedor.getBoundingClientRect();
  if (rect.top <= window.innerHeight) {
    contenedor.classList.add("border-visible-top");

    console.log(`Borde superior de ${videosContainer} activado`);
  } else {
    contenedor.classList.remove("border-visible-top");
  
    console.log(`Borde superior de ${videosContainer} desactivado`);
  }

  // Aparecer borde izquierdo cuando el borde superior del contenedor está dentro del viewport
  if (rect.top <= window.innerHeight) {
    contenedor.classList.add("border-visible-left");
    console.log(`Borde izquierdo de ${videosContainer} activado`);
  } else {
    contenedor.classList.remove("border-visible-left");
    console.log(`Borde izquierdo de ${videosContainer} desactivado`);
  }
}
window.addEventListener("scroll", function () {

  let videosContainer = document.getElementById("videosContainer");
  activarDesactivarBordes(videosContainer);


  let bioContainer = document.getElementById("bioContainer");
  activarDesactivarBordes(bioContainer);

  let contactoContainer =document.getElementById("contactoContainer");
  activarDesactivarBordes(contactoContainer);
});

function activarBordesMusicaContainer(contenedor) {
  contenedor.classList.add("border-visible-top");
  contenedor.classList.add("border-visible-left");

  console.log(`Bordes de ${contenedor.id} activados`);
}
let musicaContainer = document.getElementById("musicaContainer");
activarBordesMusicaContainer(musicaContainer);

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
    event.preventDefault();

    let target = this.getAttribute("href");
    smoothScroll(target);
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
}); */


