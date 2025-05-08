
document.addEventListener("DOMContentLoaded", () => {
    const eventosLista = document.getElementById('eventos');

    const eventos = [
        {
            name: "UNIÓN Y PERSEVERANCIA / COMUNA 12",
            date: "03-05-2025",
            time: "18:30 hs",
            location: "La Locura Tango Musik Festival – Innsbruck",
            mapUrl: "https://maps.app.goo.gl/Lc3PWEADmLYDYxC37"
        },
        {
            name: "CLAUDIA SERENI CUARTETO",
            date: "04-05-2025",
            time: "15:45 hs",
            location: "La Locura Tango Musik Festival ,Innsbruk",
            mapUrl: "https://maps.app.goo.gl/Lc3PWEADmLYDYxC37"
        },
        {
            name: "UNIÓN Y PERSEVERANCIA",
            date: "04-05-2025",
            time: "14:00 hs",
            location: "La Locura Tango Musik Festival ,Innsbruk",
            mapUrl: "https://maps.app.goo.gl/Lc3PWEADmLYDYxC37"
        },
        {
            name: "UNIÓN Y PERSEVERANCIA",
            date: "06-05-2025",
            time: "19:00 hs",
            location: "Café Stockwerk – Graz",
            mapUrl: "https://maps.app.goo.gl/h8hj3RsvVf2Py8BR7"
        },
        {
            name: "UNIÓN Y PERSEVERANCIA",
            date: "07-05-2025",
            time: "19:00 hs",
            location: "Sargfabrik – Viena",
            mapUrl: "https://maps.app.goo.gl/5qcUUUzUZ6rLiDjZ8"
        },
        {
            name: "WORKSHOP – ORQUESTRA LISBOA TANGUERA",
            date: "13-05-2025",
            time: "19:00 hs",
            location: "A Voz do Operário – Lisboa",
            mapUrl: "https://maps.app.goo.gl/V5QpVwrdjyUJY7PMA"
        },
        {
            name: "ORQUESTRA ASSINTOMÁTICA",
            date: "14-05-2025",
            time: "19:00 hs",
            location: "A Voz do Operário – Lisboa",
            mapUrl: "https://maps.app.goo.gl/V5QpVwrdjyUJY7PMA"
        },
        {
            name: "MARIANO SICCARDI TRÍO",
            date: "17-05-2025",
            time: "19:00 hs",
            location: "Múnich",
            mapUrl: "https://maps.app.goo.gl/V5QpVwrdjyUJY7PMA"
        },
        {
            name: "ALTERTANGO + DIEGO VAINER",
            date: "21-05-2025",
            time: "19:00 hs",
            location: "Sala Paral·lel 62 – Barcelona",
            mapUrl: "https://maps.app.goo.gl/UynrSFxbghoZYnp47"
        },
        {
            name: "INVITADO DE NOELIA SINKUNAS",
            date: "22-05-2025",
            time: "19:00 hs",
            location: "Librería Byron – Barcelona",
            mapUrl: "https://maps.app.goo.gl/ZqgbvhET3X5HZ8ft7"
        },
        {
            name: "SONDER TANGO",
            date: "25-05-2025",
            time: "19:30 hs",
            location: "Daje Festival – Roma",
            mapUrl: "https://maps.app.goo.gl/mXLU85q1VhNA2R576"
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
            return; // no agregar el evento si ya pasó
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
