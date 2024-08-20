function activarBordesPedagogia(contenedor) {
    contenedor.classList.add("border-visible-top");
    contenedor.classList.add("border-visible-left");
    console.log(`Bordes de ${contenedor.id} activados`);
}

document.addEventListener("DOMContentLoaded", function () {
    let pedagogiasContainer = document.getElementById("pedagogiasContainer");
    console.log(pedagogiasContainer);
    if (pedagogiasContainer) {
        activarBordesPedagogia(pedagogiasContainer);
    }
});


