document.addEventListener("DOMContentLoaded", () => {
    const eventosLista = document.getElementById('eventos');

    const eventos = [
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
        },
        {
            name: "CRISTIAN BASTO ENSAMBLE",
            date: "02-06-2025",
            time: "18:30 hs",
            location: "Barcelona",
            mapUrl: "https://maps.app.goo.gl/ZqgbvhET3X5HZ8ft7"
        },
        {
            name: "ORQUESTA ASSINTOMÁTICA",
            date: "25-06-2025",
            time: "20:00 hs",
            location: "La Fábrica ,Lisboa",
            mapUrl: "https://maps.app.goo.gl/DSMAwgUsWgnuoS4FA"
        },
        {
            name: "NOELIA TOMASSI Y PABLO WOIZ ENSAMBLE",
            date: "27-06-2025",
            time: "19:00 hs",
            location: "Ingolstadt",
            mapUrl: "https://maps.app.goo.gl/KiFCEitt5Z5y6QUB7"
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