document.addEventListener('DOMContentLoaded', function () {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('#navbarNav');
  const openIcon = document.querySelector('.open-icon');
  const closeIcon = document.querySelector('.close-icon');

  if (!navbarToggler || !navbarCollapse) return;

  /* ===============================
     Toggle menú (solo mobile)
  =============================== */
  navbarToggler.addEventListener('click', function () {
    if (window.innerWidth >= 992) return; // ⛔ desktop no toca nada

    const isOpen = navbarCollapse.classList.contains('show');

    if (isOpen) {
      navbarCollapse.classList.remove('show');
      openIcon.classList.remove('d-none');
      closeIcon.classList.add('d-none');
    } else {
      navbarCollapse.classList.add('show');
      openIcon.classList.add('d-none');
      closeIcon.classList.remove('d-none');
    }
  });

  /* ===============================
     Cerrar menú al click (mobile)
  =============================== */
  document.querySelectorAll('.navbar-nav .nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
        openIcon.classList.remove('d-none');
        closeIcon.classList.add('d-none');
      }
    });
  });

  /* ===============================
     Reset al pasar a desktop
  =============================== */
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) {
      navbarCollapse.classList.remove('show');
      openIcon.classList.remove('d-none');
      closeIcon.classList.add('d-none');
    }
  });

  /* ===============================
     Redes → nueva pestaña
  =============================== */
  document.querySelectorAll('.redes a').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const url = item.getAttribute('href');
      if (url) window.open(url, '_blank');
    });
  });
});




/* gsap */

gsap.from(".nav-item", {
  y: -100,
  duration: 1,
  ease: "power3.out",
  stagger: 0.15,

})

// Selecciona el contenedor y aplica la animación


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



function smoothScroll(target) {
  let targetElement = document.querySelector(target);
  let targetPosition = targetElement.offsetTop;
  let navbarHeight = document.querySelector(".navbar").offsetHeight;
  // Ajustar el scroll para que deje suficiente espacio para el header sticky
  window.scrollTo({
    top: targetPosition - navbarHeight - 20, // Ajusta el valor "20" según sea necesario para mayor o menor espacio
    /*   behavior:"smooth",  */
  });
}

// Obtener todos los enlaces de la barra de navegación y agregar un evento de clic a cada uno
let navLinks = document.querySelectorAll(".navbar-nav a");
navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function (event) {
    let target = this.getAttribute("href");

    // Excluir los enlaces de "PARTITURAS" y "PEDAGOGIA" del comportamiento de desplazamiento suave
    if (this.classList.contains("partitura") || this.classList.contains("pedagogia") || this.classList.contains("colaboracion")) {
      return;
    }

    event.preventDefault();
    smoothScroll(target);
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


/* FADE-IN */


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


