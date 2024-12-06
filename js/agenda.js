document.addEventListener("DOMContentLoaded", () => {
    const eventosLista = document.getElementById('eventos');

    // Lista de eventos a ser actualizada por el programador
    const eventos = [
        {
            name: "SOCIAL TANGO PROJECT",
            date: "11-12-2024",
            time: "18:30 hs",
            location: "Teatro San Martín, CABA",
            mapUrl: "https://maps.app.goo.gl/1bqZTtGgMjtRarQLA",
        },
        {
            name: "LA CHICANA",
            date: "28-12-2024",
            time: "21:00 hs",
            location: "Torcuato Tasso, CABA",
            mapUrl: "https://maps.app.goo.gl/DkvU2mM38BE4snZy6"
        },
        {
            name: "NOELIA SINKUNAS CUARTETO",
            date: "04-05-2025",
            time: "14:00 hs",
            location: "La Locura Tango Musik Festival ,Innsbruk",
            mapUrl: "https://maps.app.goo.gl/Lc3PWEADmLYDYxC37"
        },
        {
            name: "CLAUDIA SERENI CUARTETO",
            date: "04-05-2025",
            time: "15:45 hs",
            location: "La Locura Tango Musik Festival ,Innsbruk",
            mapUrl: "https://maps.app.goo.gl/Lc3PWEADmLYDYxC37"
        } 
    ];

    // Función para agregar un evento a la lista
    function addEvent(name, date, time, location, mapUrl) {
        const eventItem = document.createElement('li');

        eventItem.innerHTML = `
            <div class= "nombre">
            <span>${name} </span>
            </div>
            <div>
            <span>${date}</span> 
            </div>
            <div>
            <span>${time} </span>  
            </div>
            <div>
            <span> ${location} </span> 
            </div>
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

    // Recorrer y agregar cada evento de la lista al DOM
    eventos.forEach(event => {
        addEvent(event.name, event.date, event.time, event.location, event.mapUrl);
    });
});