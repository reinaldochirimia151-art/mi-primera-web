// Botón de bienvenida
function saludo() {
    alert("¡Gracias por visitar mi sitio web!");
}

// Validación básica del formulario
const formulario = document.getElementById("formulario");

if (formulario) {
    formulario.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Mensaje enviado correctamente ✅");
        formulario.reset();
    });
}