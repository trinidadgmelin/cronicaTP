
const abrir = document.getElementById("abrirMenu");

const menu = document.getElementById("menuPopup");

const cerrar = document.getElementById("cerrarMenu");

abrir.addEventListener("click", function(){

    menu.classList.add("active")

});

cerrar.addEventListener("click", function(){

    menu.classList.remove("active")

});

/* BOTONES */

// 1. Seleccionamos todos tus botones
const botones = document.querySelectorAll(
  '.actualidad ul button, .sociedad ul button, .entretenimiento ul button, .agenda ul button, .vida ul button'
);

// 2. Le asignamos el evento de clic a cada uno
botones.forEach(boton => {
  boton.addEventListener('click', () => {
    // Obtenemos la ruta del atributo 'data-url'
    const urlDestino = boton.getAttribute('data-url');
    
    // Si el botón tiene una URL definida, redirigimos
    if (urlDestino) {
      window.location.href = urlDestino;
    }
  });
});

// Seleccionamos únicamente los botones de seguir
const botonesSeguir = document.querySelectorAll('.btn-seguir');

botonesSeguir.forEach(boton => {
  boton.addEventListener('click', () => {
    // Alterna la clase activo
    boton.classList.toggle('activo');
    
    // Cambia el texto del botón
    if (boton.classList.contains('activo')) {
      boton.textContent = 'SIGUIENDO ✓';
    } else {
      boton.textContent = 'SEGUIR +';
    }
  });
});