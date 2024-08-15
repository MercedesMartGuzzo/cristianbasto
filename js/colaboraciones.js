// Asegurarse de que el DOM esté completamente cargado
function activarBordesColaboraciones(contenedor) {
    contenedor.classList.add("border-visible-top");
    contenedor.classList.add("border-visible-left");
    console.log(`Bordes de ${contenedor.id} activados`);
}
document.addEventListener("DOMContentLoaded", function () {
    let colaboracionesContainer = document.getElementById("colaboracionesContainer");
    if (colaboracionesContainer) {
        activarBordesColaboraciones(colaboracionesContainer);
    } else {
        console.error("No se encontró el contenedor colaboracionesContainer");
    }
});