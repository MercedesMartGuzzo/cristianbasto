document.addEventListener("DOMContentLoaded", () => {
    const eventosLista = document.getElementById('eventos');


const eventos = [
    {
        name: "ORQUESTRA ASSINTOMÁTICA",
        date: "27-10-2026",
        time: "",
        location: "Coímbra, Portugal",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=MATE+Festival+Coimbra+Portugal"
    },
    {
        name: "CUARTETO INSURGENTE",
        date: "01-11-2026",
        time: "",
        location: "Caldes de Montbui, España",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Espai+Can+Rius+Caldes+de+Montbui+Spain"
    },
    {
        name: "QUINTETO ASTOR PIAZZOLLA",
        date: "07-11-2026",
        time: "20:00",
        location: "Miami, Estados Unidos",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Knight+Concert+Hall+Adrienne+Arsht+Center+Miami"
    },
    {
        name: "QUINTETO ASTOR PIAZZOLLA",
        date: "09-11-2026",
        time: "",
        location: "Nueva York, Estados Unidos",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Zankel+Hall+Carnegie+Hall+New+York"
    },
    {
        name: "CUARTETO INSURGENTE",
        date: "13-11-2026",
        time: "",
        location: "Barcelona, España",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Teatro+Metamorfosis+Barcelona+Spain"
    },
    {
        name: "CUARTETO INSURGENTE",
        date: "20-11-2026",
        time: "",
        location: "Barcelona, España",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Teatro+Metamorfosis+Barcelona+Spain"
    },
    {
        name: "CUARTETO INSURGENTE",
        date: "04-12-2026",
        time: "",
        location: "Barcelona, España",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Espai+Mescladis+Altell+Barcelona+Spain"
    },
    {
        name: "CUARTETO INSURGENTE",
        date: "06-02-2027",
        time: "",
        location: "Barcelona, España",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Espai+Conclave+Barcelona+Spain"
    },
    {
        name: "SOCIAL TANGO PROJECT",
        date: "19-02-2027",
        time: "",
        location: "Waco, Estados Unidos",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Creative+Waco+Waco+Texas"
    },
    {
        name: "SOCIAL TANGO PROJECT",
        date: "26-02-2027",
        endDate: "27-02-2027",
        time: "",
        location: "Dallas, Estados Unidos",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=TITAS+UNBOUND+Dallas+Texas"
    },
    {
        name: "SOCIAL TANGO PROJECT",
        date: "03-03-2027",
        time: "",
        location: "Portland, Estados Unidos",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=White+Bird+Portland+Oregon"
    },
    {
        name: "SOCIAL TANGO PROJECT",
        date: "07-03-2027",
        time: "",
        location: "Boca Raton, Estados Unidos",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Festival+of+the+Arts+BOCA+Boca+Raton+Florida"
    },
    {
        name: "CUARTETO INSURGENTE",
        date: "27-05-2027",
        time: "",
        location: "Barcelona, España",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Centre+Cultural+Navas+Barcelona+Spain"
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