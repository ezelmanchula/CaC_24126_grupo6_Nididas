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
