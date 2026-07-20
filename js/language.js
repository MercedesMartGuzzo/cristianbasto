document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('[data-language]');
    let textsToChange = document.querySelectorAll('[data-section]');

/* function updateTextContent(data) {
    textsToChange.forEach(el => {
        const section = el.dataset.section;
        const value = el.dataset.value;

        if (data[section] && data[section][value]) {
            const content = data[section][value];

            if (section === "bio" && value === "text1" && content["title-icon"]) {
                el.innerHTML = `
                    <div class="bio-parrafo" data-section="bio" data-value="text1">
                        <h4 data-section="bio" data-value="title-icon">${content["title-icon"] || ''}
                            <i class="bi bi-chevron-down toggle-icon"></i>
                        </h4>
                        <p data-section="bio" data-value="text-p1">${content["text-p1"] || ''}</p>
                    </div>
                `;
            } else if (section === "bio" && value === "text2" && content["title-span2"]) {
                el.innerHTML = `
                    <div class="bio-parrafo" data-section="bio" data-value="text2">
                        <h4 class="span-bio-header">
                            <span class="span-bio" data-section="bio" data-value="title-span2">${content["title-span2"]}</span>
                            <i class="bi bi-chevron-down toggle-icon"></i>
                        </h4>
                        <p data-section="bio" data-value="text-p2">${content["text-p2"] || ''}</p>
                    </div>
                `;
            } else if (section === "bio" && value === "text3" && content["title-span3"]) {
                el.innerHTML = `
                    <div class="bio-parrafo" data-section="bio" data-value="text3">
                        <h4 class="span-bio-header">
                            <span class="span-bio" data-section="bio" data-value="title-span3">${content["title-span3"]}</span>
                            <i class="bi bi-chevron-down toggle-icon"></i>
                        </h4>
                        <p data-section="bio" data-value="text-p3">${content["text-p3"] || ''}</p>
                    </div>
                `;
            } else {
                el.innerHTML = content;
            }
        } else if (data[section] && data[section]["text"]) {
            el.innerHTML = data[section]["text"];
        } else {
            console.warn(`No se encontró contenido para ${section} -> ${value}`);
        }
    });

    textsToChange = document.querySelectorAll('[data-section]');
    assignBioToggleEvents();
} */

    function handleLanguageChange(language) {
        // Guardar el idioma seleccionado en localStorage
        localStorage.setItem('selectedLanguage', language);

        // Detectar si estamos en un subdirectorio
        const isInSubdirectory = window.location.pathname.includes('/pages/');
        const basePath = isInSubdirectory ? '../languages/' : './languages/';
        const fetchUrl = `${basePath}${language}.json`;

        fetch(fetchUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error al cargar el archivo JSON: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                updateTextContent(data);
            })
            .catch(error => {
                console.error('Error al procesar el cambio de idioma:', error);
            });
    }

    // Leer el idioma guardado en localStorage al cargar la página
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'es'; // Por defecto 'es'
    handleLanguageChange(savedLanguage);

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const language = button.dataset.language;
            handleLanguageChange(language);
        });
    });

    // Asignar eventos para el toggle de los párrafos y títulos
/* function assignBioToggleEvents() {
    const toggleIcons = document.querySelectorAll('.bio .toggle-icon');
    toggleIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const currentParagraph = icon.closest('.bio-parrafo');
            const isOpen = currentParagraph.classList.toggle('open');

            if (isOpen) {
                setTimeout(() => {
                    const title = currentParagraph.querySelector('h4');
                    if (title) {
                        const rect = title.getBoundingClientRect();
                        window.scrollTo({
                            top: window.scrollY + rect.top - 66,
                            behavior: 'smooth'
                        });
                    }
                }, 1000);
            }
        });
    });
}
assignBioToggleEvents(); */
});

let textsToChange = document.querySelectorAll('[data-section]');

function buildToggleSection(num, titleSpan, textP) {
    return `
        <h4 class="span-bio-header">
            <span class="span-bio" data-section="bio" data-value="title-span${num}">${titleSpan || ''}</span>
            <i class="bi bi-chevron-down toggle-icon"></i>
        </h4>
        <p data-section="bio" data-value="text-p${num}">${textP || ''}</p>
    `;
}

function updateTextContent(data) {
    textsToChange.forEach(el => {
        const section = el.dataset.section;
        const value = el.dataset.value;

        if (!data[section]) return;

        // Secciones plegables text1 a text4: misma plantilla para todas
        if (section === "bio" && /^text[1-4]$/.test(value) && data[section][value]) {
            const num = value.replace('text', '');
            const content = data[section][value];
            el.innerHTML = buildToggleSection(
                num,
                content[`title-span${num}`],
                content[`text-p${num}`]
            );
        }
        // Campos simples: title, subtitle, text, text-extra
        else if (data[section][value] !== undefined) {
            el.innerHTML = data[section][value];
        } else {
            console.warn(`No se encontró contenido para ${section} -> ${value}`);
        }
    });

    // Recalcular referencias porque se reemplazó innerHTML de los contenedores text1-text4
    textsToChange = document.querySelectorAll('[data-section]');
    assignBioToggleEvents();
}

function assignBioToggleEvents() {
    const toggleIcons = document.querySelectorAll('.bio .toggle-icon');
    toggleIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const currentParagraph = icon.closest('.bio-parrafo');
            const wasOpen = currentParagraph.classList.contains('open');

            // Cierra todas las pestañas abiertas
            document.querySelectorAll('.bio-parrafo.open').forEach(p => {
                p.classList.remove('open');
            });

            // Si la clickeada estaba cerrada, la abre (si estaba abierta, queda cerrada)
            if (!wasOpen) {
                currentParagraph.classList.add('open');

                setTimeout(() => {
                    const title = currentParagraph.querySelector('h4');
                    if (title) {
                        const rect = title.getBoundingClientRect();
                        window.scrollTo({
                            top: window.scrollY + rect.top - 66,
                            behavior: 'smooth'
                        });
                    }
                }, 1000);
            }
        });
    });
}