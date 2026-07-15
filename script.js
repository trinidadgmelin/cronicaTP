
const abrir = document.getElementById("abrirMenu");

const menu = document.getElementById("menuPopup");

const cerrar = document.getElementById("cerrarMenu");

abrir.addEventListener("click", function(){

    menu.classList.add("active")

});

cerrar.addEventListener("click", function(){

    menu.classList.remove("active")

});