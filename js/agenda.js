document.addEventListener("DOMContentLoaded", () => {
    const eventosLista = document.getElementById('eventos');


    const eventos = [
        {
            name: "SONDER TANGO",
            date: "27-12-2025",
            time: "",
            location: "Oeiras Tango Festival – Oeiras, Portugal",
            mapUrl: "https://maps.app.goo.gl/9DnBqrVv8RGLhqNq8"
        },
        {
            name: "CUARTETO INSURGENTE & CUARTETO PRIMAVERA",
            date: "24-01-2026",
            time: "20:00 hs",
            location: "Museo Europeo de Arte Moderno (MEAM) – Barcelona, España",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Museo+Europeo+de+Arte+Moderno+Barcelona"
        },
        {
            name: "PATRICIO BONFIGLIO & EL SINDICATO MILONGUERO",
            date: "12-02-2026",
            time: "",
            location: "París, Francia",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Paris+France"
        },
        {
            name: "PATRICIO BONFIGLIO & EL SINDICATO MILONGUERO",
            date: "13-02-2026",
            time: "",
            location: "París, Francia",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Paris+France"
        },
        {
            name: "PATRICIO BONFIGLIO & EL SINDICATO MILONGUERO",
            date: "14-02-2026",
            time: "",
            location: "París, Francia",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Paris+France"
        },
        {
            name: "PATRICIO BONFIGLIO & EL SINDICATO MILONGUERO",
            date: "15-02-2026",
            time: "",
            location: "París, Francia",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Paris+France"
        },
        {
            name: "PATRICIO BONFIGLIO & EL SINDICATO MILONGUERO",
            date: "16-02-2026",
            time: "",
            location: "París, Francia",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Paris+France"
        },
        {
            name: "QUINTETO ASTOR PIAZZOLLA",
            date: "22-02-2026",
            time: "",
            location: "Wiener Konzerthaus – Viena, Austria",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Wiener+Konzerthaus+Viena+Austria"
        },
        {
            name: "QUINTETO ASTOR PIAZZOLLA",
            date: "24-02-2026",
            time: "",
            location: "Philharmonie Berlin – Berlín, Alemania",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Philharmonie+Berlin"
        },
        {
            name: "QUINTETO ASTOR PIAZZOLLA",
            date: "26-02-2026",
            time: "",
            location: "De Roma – Borgerhout, Bélgica",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=De+Roma+Borgerhout+Belgium"
        },
        {
            name: "QUINTETO ASTOR PIAZZOLLA",
            date: "28-02-2026",
            time: "",
            location: "Prinzregententheater – Múnich, Alemania",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Prinzregententheater+Munich+Germany"
        },
        {
            name: "QUINTETO ASTOR PIAZZOLLA",
            date: "01-03-2026",
            time: "",
            location: "Het Koninklijk Concertgebouw – Ámsterdam, Países Bajos",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Concertgebouw+Amsterdam"
        },
        {
            name: "QUINTETO ASTOR PIAZZOLLA",
            date: "02-03-2026",
            time: "",
            location: "Scala Club – Leverkusen, Alemania",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Scala+Club+Leverkusen+Germany"
        },
        {
            name: "QUINTETO ASTOR PIAZZOLLA",
            date: "03-03-2026",
            time: "",
            location: "Karlstorbahnhof – Heidelberg, Alemania",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Karlstorbahnhof+Heidelberg"
        },
        {
            name: "QUINTETO ASTOR PIAZZOLLA",
            date: "04-03-2026",
            time: "",
            location: "Treibhaus – Innsbruck, Austria",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Treibhaus+Innsbruck+Austria"
        },
        {
            name: "QUINTETO ASTOR PIAZZOLLA",
            date: "07-03-2026",
            time: "",
            location: "Teatro Municipal da Guarda – Guarda, Portugal",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Teatro+Municipal+da+Guarda+Portugal"
        },
        {
            name: "QUINTETO ASTOR PIAZZOLLA",
            date: "08-03-2026",
            time: "",
            location: "Casa da Cultura de Loulé – Loulé, Portugal",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Casa+da+Cultura+de+Loule+Portugal"
        },
        {
            name: "QUINTETO ASTOR PIAZZOLLA",
            date: "10-03-2026",
            time: "",
            location: "Anthroposophisches Zentrum – Kassel, Alemania",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Anthroposophisches+Zentrum+Kassel"
        },
        {
            name: "QUINTETO ASTOR PIAZZOLLA",
            date: "12-03-2026",
            time: "",
            location: "La Seine Musicale – Boulogne-Billancourt, Francia",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=La+Seine+Musicale+Boulogne+Billancourt"
        },
        {
            name: "QUINTETO ASTOR PIAZZOLLA",
            date: "15-03-2026",
            time: "",
            location: "Straz Center for the Performing Arts – Tampa, Florida, EE.UU.",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Straz+Center+for+the+Performing+Arts+Tampa"
        },
        {
            name: "QUINTETO ASTOR PIAZZOLLA",
            date: "21-03-2026",
            time: "",
            location: "The Soraya – Northridge, California, EE.UU.",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Soraya+Northridge+California"
        }
    ];


    function addEvent(name, date, time, location, mapUrl) {
        const eventItem = document.createElement('li');

        // Convertir fecha a formato Date
        const [day, month, year] = date.split('-');
        const eventDate = new Date(`${year}-${month}-${day}`);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // ignorar hora

        const isPast = eventDate < today;
        if (isPast) {
            eventItem.classList.add('evento-pasado');
        }

        eventItem.innerHTML = `
            <div class="nombre"><span>${name}</span></div>
            <div><span>${date}</span></div>
            <div><span>${time}</span></div>
            <div><span>${location}</span></div>
            <button class="view-more-btn">Ver más</button>
            <div class="event-details" style="display: none;">
                <a href="${mapUrl}" target="_blank" class="location-map">Ver en el mapa</a>
            </div>
        `;

        const viewMoreBtn = eventItem.querySelector('.view-more-btn');
        const eventDetails = eventItem.querySelector('.event-details');

        viewMoreBtn.addEventListener('click', () => {
            if (eventDetails.style.display === "none") {
                eventDetails.style.display = "block";
                viewMoreBtn.textContent = "Ver menos";
            } else {
                eventDetails.style.display = "none";
                viewMoreBtn.textContent = "Ver más";
            }
        });

        eventosLista.appendChild(eventItem);
    }

    eventos.forEach(event => {
        addEvent(event.name, event.date, event.time, event.location, event.mapUrl);
    });
});