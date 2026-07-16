document.addEventListener("DOMContentLoaded", () => {
    // 1. Obtener los parámetros que vienen en la URL
    const urlParams = new URLSearchParams(window.location.search);
    const registro = urlParams.get('registro');
    const nombre = urlParams.get('nombre');

    // 2. Referencias a los elementos del Pop-up
    const popup = document.getElementById("popupExito");
    const nombreUsuarioSpan = document.getElementById("nombreUsuarioPopup");
    const botonCerrar = document.getElementById("cerrarPopup");
    const botonAceptar = document.getElementById("botonAceptarPopup");

    // 3. Si el parámetro 'registro' es igual a 'exito', mostramos el Pop-up
    if (registro === "exito") {
        // Colocamos el nombre que vino por la URL (limpio de caracteres raros)
        if (nombre) {
            nombreUsuarioSpan.textContent = decodeURIComponent(nombre);
        } else {
            nombreUsuarioSpan.textContent = "Usuario";
        }

        // Mostramos el contenedor usando flex para centrarlo vertical y horizontalmente
        popup.style.display = "flex";
    }

    // 4. Lógica para cerrar el Pop-up
    function cerrarPopupExito() {
        popup.style.display = "none";
        
        // OPCIONAL: Limpiar los parámetros de la URL para que si el usuario recarga la página, 
        // el pop-up no vuelva a saltar.
        const nuevaUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        window.history.replaceState({ path: nuevaUrl }, '', nuevaUrl);
    }

    if (botonCerrar) {
        botonCerrar.addEventListener("click", cerrarPopupExito);
    }

    if (botonAceptar) {
        botonAceptar.addEventListener("click", cerrarPopupExito);
    }

    // Cerrar también si hacen click fuera de la caja blanca del pop-up
    window.addEventListener("click", (event) => {
        if (event.target === popup) {
            cerrarPopupExito();
        }
    });
});