// Función para mostrar la imagen ampliada en el modal
function mostrarImagen(imagen) {
    var modal = document.getElementById("modal");
    var imagenModal = document.getElementById("imagenModal");

    // Cambiar la imagen del modal por la imagen seleccionada
    imagenModal.src = imagen.querySelector("img").src;
    modal.style.display = "flex"; // Mostrar el modal
}

// Función para cerrar el modal
document.getElementById("cerrar").addEventListener("click", function() {
    var modal = document.getElementById("modal");
    modal.style.display = "none"; // Ocultar el modal
});

// Cerrar el modal si se hace clic fuera de la imagen
window.addEventListener("click", function(event) {
    var modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none"; // Ocultar el modal si se hace clic fuera de la imagen
    }
});
