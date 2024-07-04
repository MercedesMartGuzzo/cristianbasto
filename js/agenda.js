document.addEventListener("DOMContentLoaded", () => {
    const eventosLista = document.getElementById('eventos');

    // Lista de eventos a ser actualizada por el programador
    const eventos = [
        {
            name: "Quasimodo Trío y Cristian Basto Ensamble",
            date: "26-06-2024",
            time: "20:00 hs",
            location: "La Tierra Invisible",
            mapUrl: "https:///maps.app.goo.gl/sUn7cwrhY9UWFiiw9"
        },
        {
            name: "Feria del Libro",
            date: "2024-07-10",
            time: "10:00",
            location: "Centro de Convenciones",
            mapUrl: "https://www.google.com/maps?q=Centro+de+Convenciones"
        },
        {
            name: "Conferencia de Tecnología",
            date: "2024-08-15",
            time: "09:00",
            location: "Hotel Hilton",
            mapUrl: "https://www.google.com/maps?q=Hotel+Hilton"
        },
        {
            name: "Festival de Cine",
            date: "2024-09-05",
            time: "20:00",
            location: "Parque Central",
            mapUrl: "https://www.google.com/maps?q=Parque+Central"
        }
    ];

    // Función para agregar un evento a la lista
    function addEvent(name, date, time, location, mapUrl) {
        const eventItem = document.createElement('li');

        eventItem.innerHTML = `
            <div>
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