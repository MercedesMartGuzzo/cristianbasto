document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('[data-language]');
    let textsToChange = document.querySelectorAll('[data-section]');

    function updateTextContent(data) {
        textsToChange.forEach(el => {
            const section = el.dataset.section;
            const value = el.dataset.value;

            if (data[section] && data[section][value]) {
                const content = data[section][value];

                if (section === "bio" && value === "text1" && content["title-icon"]) {
                    el.innerHTML = `
                        <div class="bio-parrafo" data-section="bio" data-value="text1">
                            <h4>${content["title-icon"] || ''} 
                                <i class="bi bi-chevron-down toggle-icon"></i>
                            </h4>
                            <p>${content["text-p1"] || ''}</p>
                        </div>
                    `;
                } else if (section === "bio" && value === "text2" && content["title-span2"]) {
                    el.innerHTML = `
                        <div class="bio-parrafo" data-section="bio" data-value="text2">
                            <p><span class="span-bio">${content["title-span2"]}</span>
                            ${content["text-p2"] || ''}</p>
                        </div>
                    `;
                } else if (section === "bio" && value === "text3" && content["title-span3"]) {
                    el.innerHTML = `
                        <div class="bio-parrafo" data-section="bio" data-value="text3">
                            <p><span class="span-bio">${content["title-span3"]}</span>
                            ${content["text-p3"] || ''}</p>
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
    }

    function handleLanguageChange(language) {
        fetch(`../languages/${language}.json`)
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

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const language = button.dataset.language;
            handleLanguageChange(language);
        });
    });

    // Asignar eventos para el toggle de los párrafos y títulos
    function assignBioToggleEvents() {
        const toggleIcons = document.querySelectorAll('.bio .toggle-icon');
        const paragraphs = document.querySelectorAll('.bio-parrafo, .span-bio'); 
        toggleIcons.forEach(icon => {
            icon.addEventListener('click', () => {
                const currentParagraph = icon.closest('.bio-parrafo');
                const isOpen = currentParagraph.classList.toggle('open');

                // Toggle all related paragraphs
                const relatedParagraphs = document.querySelectorAll('.bio-parrafo[data-value="text1"], .bio-parrafo[data-value="text2"], .bio-parrafo[data-value="text3"]');
                relatedParagraphs.forEach(paragraph => {
                    if (isOpen) {
                        paragraph.classList.add('open');
                    } else {
                        paragraph.classList.remove('open');
                    }
                });

                paragraphs.forEach(paragraph => {
                    if (!relatedParagraphs.includes(paragraph) && paragraph.classList.contains('open')) {
                        paragraph.classList.remove('open');
                    }
                });

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
    assignBioToggleEvents();
});