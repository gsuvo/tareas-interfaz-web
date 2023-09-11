// Este código asegura que el menú se despliegue correctamente
document.addEventListener("DOMContentLoaded", function() {
    var navToggle = document.querySelector(".navbar-toggler");
    var navMenu = document.querySelector(".navbar-collapse");

    navToggle.addEventListener("click", function() {
        navMenu.classList.toggle("show");
    });
});