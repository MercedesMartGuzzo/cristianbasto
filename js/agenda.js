document.addEventListener("DOMContentLoaded", () => {
    const eventosLista = document.getElementById('eventos');

    // Lista de eventos a ser actualizada por el programador
    const eventos = [
        {
            name: "SOCIAL TANGO",
            date: " 24, 25, 26-10-2024",
            time: "20:00 hs",
            location: "Dance House (Vancouver-British Columbia)",
            mapUrl: "https://maps.app.goo.gl/kaGV8gkUmBJFtZvE7"

        },
        {
            name: "SOCIAL TANGO",
            date: "28-10-2024",
            time: "20:00 hs",
            location: "The Vernon and District Performing Arts Centre (Vernon-British Columbia",
            mapUrl: "https://maps.app.goo.gl/BPwxvcnxVqkyzSya6"
        },
        {
            name: "SOCIAL TANGO",
            date: "30-10-2024",
            time: "20:00 hs",
            location: "Trail & District Arts Council (Trail-British Columbia)",
            mapUrl: "https://maps.app.goo.gl/nj5unJm8kve2CeYg9"
        },
        {
            name: "SOCIAL TANGO",
            date: "03-11-2024",
            time: "20:00 hs",
            location: "Arts Commons (Calgary-Alberta",
            mapUrl: "https://maps.app.goo.gl/zam1u6tg52okvRGu7"
        },
        {
            name: "SOCIAL TANGO",
            date: "05-11-2024",
            time: "20hs",
            location: "Centre culturel de l Université de Sherbrooke (Sherbrooke-Québec",
            mapUrl: "https://maps.app.goo.gl/CnPnE8h7MDYYLzCq8"
        },
        {
            name: "SOCIAL TANGO",
            date: "09-11-2024",
            time: "20:00 hs",
            location: "Salle Pauline-Julien (Sainte-Geneviève-Québec)",
            mapUrl: "https://maps.app.goo.gl/dXNTAx9D1jQCdiRc9"
        },
        {
            name: "SOCIAL TANGO",
            date: "13-11-2024",
            time: "20:00 hs",
            location: "Place des arts (Montréal-Québec)",
            mapUrl: "https://maps.app.goo.gl/hhQrhy5L6eKqn51B7"
        },
        {
            name: "SOCIAL TANGO",
            date: "15-11-2024",
            time: "20:00 hs",
            location: "Flato Markham Theatre (Markham-Ontario)",
            mapUrl: "https://maps.app.goo.gl/XmRzsCE8chab9yZ38"
        },
        {
            name: "SOCIAL TANGO",
            date: "16-11-2024",
            time: "20:00 hs",
            location: "The Burlington performing Arts Centre (Burlington-Ontario)",
            mapUrl: "https://maps.app.goo.gl/nrVLodVoMUG42ZfNA"
        },
        {
            name: "SOCIAL TANGO",
            date: "17-11-2024",
            time: "20:00 hs",
            location: "First Ontario Performing Arts Centre (Ste. Catharines-Ontario)",
            mapUrl: "https://maps.app.goo.gl/Lp5yYSpfxoVg3cJQ7"
        },
        {
            name: "ORQUESTA ASSINTOMATIC",
            date: "24-11-2024",
            time: "20:00 hs",
            location: "Santa Casa, Porto Alegre",
            mapUrl: "https://maps.app.goo.gl/D58ERuNEZTJ623458"
        },
        {
            name: "ORQUESTA ASSINTOMATIC",
            date: "8-11-2024",
            time: "20:00 hs",
            location: " Café Berlín, CABA",
            mapUrl: "https://maps.app.goo.gl/BfSAKwoNu81tTGYH8"
        },
        {
            name: "PABLO ESTIGARRIBIA TANGOJAZZHOP",
            date: "05-12-22024",
            time: "20:00 hs",
            location: "La Paz arriba ,CABA",
            mapUrl: "https://maps.app.goo.gl/Xk6wEHzwXCCib6Tk9"
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