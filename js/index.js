/* 
document.addEventListener('DOMContentLoaded', function () {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('#navbarNav');
  const openIcon = document.querySelector('.open-icon');
  const closeIcon = document.querySelector('.close-icon');

  if (!navbarToggler || !navbarCollapse) return;

  navbarToggler.addEventListener('click', function () {
    if (window.innerWidth >= 992) return;

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


  document.querySelectorAll('.navbar-nav .nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
        openIcon.classList.remove('d-none');
        closeIcon.classList.add('d-none');
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) {
      navbarCollapse.classList.remove('show');
      openIcon.classList.remove('d-none');
      closeIcon.classList.add('d-none');
    }
  });

  document.querySelectorAll('.redes a').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const url = item.getAttribute('href');
      if (url) window.open(url, '_blank');
    });
  });
}); */

document.addEventListener('DOMContentLoaded', function () {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('#navbarNav');
  const openIcon = document.querySelector('.open-icon');
  const closeIcon = document.querySelector('.close-icon');

  /* ===============================
     Toggle menú (solo mobile)
  =============================== */
  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', function () {
      if (window.innerWidth >= 992) return;

      const isOpen = navbarCollapse.classList.contains('show');

      if (isOpen) {
        navbarCollapse.classList.remove('show');
        if (openIcon) openIcon.classList.remove('d-none');
        if (closeIcon) closeIcon.classList.add('d-none');
      } else {
        navbarCollapse.classList.add('show');
        if (openIcon) openIcon.classList.add('d-none');
        if (closeIcon) closeIcon.classList.remove('d-none');
      }
    });
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 992 && navbarCollapse) {
      navbarCollapse.classList.remove('show');
      if (openIcon) openIcon.classList.remove('d-none');
      if (closeIcon) closeIcon.classList.add('d-none');
    }
  });

  /* ===============================
     Redes sociales
  =============================== */
  document.querySelectorAll('.redes a').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const url = item.getAttribute('href');
      if (url) window.open(url, '_blank');
    });
  });

  /* ===============================
     Smooth Scroll Unificado y Seguro
  =============================== */
  const navLinks = document.querySelectorAll(".navbar-nav a");

  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", function (event) {
      const href = this.getAttribute("href");

      // 1. Ignorar botón de dark mode u otros vacíos
      if (!href || href === "#") {
        event.preventDefault();
        return;
      }

      // 2. Si es un enlace a otra página externa o interna (.html), dejar que navegue normal
      if (!href.startsWith("#")) {
        return;
      }

      // 3. Excluir páginas independientes por clase
      if (
        this.classList.contains("partitura") ||
        this.classList.contains("pedagogia") ||
        this.classList.contains("colaboracion")
      ) {
        return;
      }

      event.preventDefault();

      // 4. Si el menú mobile está abierto, cerrarlo inmediatamente
      if (window.innerWidth < 992 && navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
        if (openIcon) openIcon.classList.remove('d-none');
        if (closeIcon) closeIcon.classList.add('d-none');
      }

      // 5. Buscar la sección de destino de forma precisa
      const targetElement = document.querySelector(href);
      if (!targetElement) return;

      // Usamos getBoundingClientRect para evitar errores de offsetTop con elementos transformados
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset;

      const header = document.querySelector(".header-wrapper") || document.querySelector(".navbar");
      const headerHeight = header ? header.offsetHeight : 70;
      const offsetTotal = offsetPosition - headerHeight - 3;

      // 6. Ejecutar el desplazamiento fluido
      window.scrollTo({
        top: offsetTotal,
        behavior: "smooth"
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header-wrapper");
  const hero = document.querySelector(".hero");
  const imagen = document.querySelector(".hero-img");
  const titulo = document.querySelector(".hero-title");

  function actualizarScroll() {
    const scrollY = window.scrollY;

    // Mostrar header
    if (scrollY > 20) {
      header.classList.add("show-header");
    } else {
      header.classList.remove("show-header");
    }

    if (hero && imagen) {
      const rect = hero.getBoundingClientRect();

      if (rect.bottom > 0) {

        const desplazamiento = scrollY * 0.45;

        const escala = window.innerWidth <= 768
          ? Math.max(1.0 - scrollY * 0.0003, 1)
          : Math.max(1.0 - scrollY * 0.0002, 1);


        imagen.style.transform =
          `translate3d(0, ${desplazamiento}px, 0) scale(${escala})`;

        if (titulo) {
          const movimientoTitulo = scrollY * 0.65;

          titulo.style.transform =
            `translateY(calc(-50% + ${movimientoTitulo}px))`;

          titulo.style.opacity =
            Math.max(1 - scrollY / 500, 0);
        }
      }
    }
  }

  actualizarScroll();
  window.addEventListener("scroll", actualizarScroll, { passive: true });
});


/* gsap */

gsap.from(".nav-item", {
  y: -100,
  duration: 1,
  ease: "power3.out",
  stagger: 0.15,

})

/* function smoothScroll(target) {
  let targetElement = document.querySelector(target);
  let targetPosition = targetElement.offsetTop;
  let navbarHeight = document.querySelector(".navbar").offsetHeight;
  // Ajustar el scroll para que deje suficiente espacio para el header sticky
  window.scrollTo({
    top: targetPosition - navbarHeight - 20, // Ajusta el valor "20" según sea necesario para mayor o menor espacio
    behavior: "smooth",
  });
}


let navLinks = document.querySelectorAll(".navbar-nav a");
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", function (event) {

    const href = this.getAttribute("href");

    // Ignorar el botón de dark mode (href="#")
    if (href === "#") {
      event.preventDefault();
      return;
    }

    // Si el enlace NO empieza con #, dejar que navegue normalmente
    if (!href.startsWith("#")) {
      return;
    }

    // Excluir páginas independientes
    if (
      this.classList.contains("partitura") ||
      this.classList.contains("pedagogia") ||
      this.classList.contains("colaboracion")
    ) {
      return;
    }

    event.preventDefault();
    smoothScroll(href);
  });
}); */


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


//***FORMULARIO CONTACTO***//

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contacto-form");
  const status = document.getElementById("contacto-status");

  async function handleSubmit(event) {
    event.preventDefault();

    // Opcional: Cambiar texto o dar feedback visual de carga
    status.innerHTML = "Enviando mensaje...";
    status.style.color = "#666";

    const data = new FormData(event.target);

    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        status.innerHTML = "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.";
        status.style.color = "white";
        status.style.fontFamily = "Bowlby One";
        form.reset();
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
          } else {
            status.innerHTML = "Hubo un error al enviar el mensaje. Inténtalo de nuevo.";
          }
          status.style.color = "red";
        });
      }
    }).catch(error => {
      status.innerHTML = "Error de conexión. Revisa tu red e inténtalo otra vez.";
      status.style.color = "red";
    });
  }

  form.addEventListener("submit", handleSubmit);
});
