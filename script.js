document.getElementById('contactForm').addEventListener('submit', function(event) {
    var formValid = true;
    var inputs = this.querySelectorAll('input, select, textarea');

    inputs.forEach(function(input) {
        if (!input.checkValidity()) {
            formValid = false;
        }
    });

    if (!formValid) {
        event.preventDefault();
        alert('Por favor complete todos los campos obligatorios.');
    }
});
//funciones para mi boton volver arriba
function volverArriba() {
    document.body.scrollTop = 0; // Para navegadores antiguos
    document.documentElement.scrollTop = 0; // Para navegadores modernos
}
    
    // Mostrar o ocultar el botón dependiendo de la posición de desplazamiento
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('volverArriba').style.display = 'block';
    } else {
        document.getElementById('volverArriba').style.display = 'none';
    }
};