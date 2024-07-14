//SECCION QUE APARECE Y DESAPARECE EL MENU SELECCIONADO
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";
}

//DESAPARECER MENU

var x = document.getElementById("nav");
x.className = "";

// FUNCION QUE MUESTRA AL MENU RESPONSIVE 
function responsiveMenu(){
    var x= document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }
    else{
        x.className="";
    }
}
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

//contacto
/*document.getElementById('contactForm').addEventListener('submit', function(event) {
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

const carouselContainer = document.querySelector('.carousel-container');
        const items = carouselContainer.querySelectorAll('.carousel-item');
        let index = 0;

        document.getElementById('next').addEventListener('click', () => {
            index = (index + 1) % items.length;
            updateCarousel();
        });

        document.getElementById('prev').addEventListener('click', () => {
            index = (index - 1 + items.length) % items.length;
            updateCarousel();
        });

        function updateCarousel() {
            carouselContainer.style.transform = `translateX(${-index * 100}%)`;
        }
*/