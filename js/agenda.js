document.addEventListener("DOMContentLoaded", () => {
    const eventosLista = document.getElementById('eventos');


const eventos = [
    {
        name: "QUINTETO ASTOR PIAZZOLLA",
        date: "07-11-2026",
        time: "20:00",
        location: "Miami, Estados Unidos",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Adrienne+Arsht+Center+Miami"
    },
    {
        name: "NOELIA SINKUNAS QUARTET",
        date: "16-08-2026",
        time: "",
        location: "Tarbes, Francia",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Festival+Tarbes+en+Tango+Tarbes+France"
    },
    {
        name: "NOELIA SINKUNAS QUARTET",
        date: "17-08-2026",
        time: "",
        location: "Tarbes, Francia",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Festival+Tarbes+en+Tango+Tarbes+France"
    },
    {
        name: "QUINTETO ASTOR PIAZZOLLA",
        date: "22-07-2026",
        time: "",
        location: "San Sebastián, España",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Kursaal+San+Sebastian+Spain"
    },
    {
        name: "MARTÍN SUED & ORQUESTRA ASSINTOMÁTICA",
        date: "10-07-2026",
        time: "",
        location: "Espinho, Portugal",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Espinho+Portugal"
    },
    {
        name: "QUINTETO ASTOR PIAZZOLLA",
        date: "27-06-2026",
        time: "20:00",
        location: "Montreal, Canadá",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Maison+Symphonique+Place+des+Arts+Montreal"
    },
    {
        name: "QUINTETO ASTOR PIAZZOLLA",
        date: "25-06-2026",
        time: "",
        location: "Montreal, Canadá",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=L+Amphitheatre+du+Gesu+Montreal"
    },
    {
        name: "CUARTETO INSURGENTE & MARTÍN SUED",
        date: "13-06-2026",
        time: "",
        location: "Hohenems, Austria",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Markus+Sittikus+Saal+Hohenems+Austria"
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