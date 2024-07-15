document.addEventListener("DOMContentLoaded", () => {
    const eventosLista = document.getElementById('eventos');

    // Lista de eventos a ser actualizada por el programador
    const eventos = [
        {
            name: "SOCIAL TANGO PROYECT",
            date: "17,18,19,20,21-07-2024",
            time: "20:00 hs",
            location: "Jacob’s Pillow Dance Festival - Ted Shawn Theatre Becket, Massachusetts (US)",
            mapUrl:"https://maps.app.goo.gl/5Y561pZwMJhWVvt8A"
        },
        {
            name:"SOCIAL TANGO PROYECT",
            date: "24,25-07-2024",
            time: "20:00 hs",
            location: "Ottawa - Ontario (Canada) National Arts Centre (NAC) Babs Asper Theatre",
            mapUrl: "https://maps.app.goo.gl/s5ZxcdWH3zYGvVop7"
        },
        {
            name: "SOCIAL TANGO PROYECT",
            date: "27-07-2024",
            time: "20:00 hs",
            location: "Saint-Sauveur - Quebec (Canada)  Festival des arts de Saint-Sauveur",
            mapUrl: "https://maps.app.goo.gl/sbjYGzK3G98htUPSA"
        },
        {
            name: "AMORES TANGO",
            date: "03-08-2024",
            time: "20: 30 hs",
            location: "Café Berlín -CABA",
            mapUrl: "https://maps.app.goo.gl/DUyM2Gc5isybBHBT8"
        },
        {
            name: "MARIANA MAZU CUARTETO",
            date: "22-08-2024",
            time: "14:00 hs 18:00 hs",
            location: "Aéroport Tarbes Lourdes-Francia",
            mapUrl: "https://maps.app.goo.gl/UUU7ykSHmA71htpd8"
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