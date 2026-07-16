document.addEventListener("DOMContentLoaded", () => {
    // ==========================================================================
    // 1. LÓGICA DE SELECCIÓN DE BOTONES DE INTERÉS
    // ==========================================================================
    const botonesInteres = document.querySelectorAll(".lista-intereses button");

    botonesInteres.forEach(boton => {
        boton.addEventListener("click", (e) => {
            // Evita que el botón ejecute la acción nativa de enviar el formulario
            e.preventDefault(); 
            
            // Alterna la clase 'seleccionado' para aplicar los estilos de hover
            boton.classList.toggle("seleccionado");
        });
    });

    // ==========================================================================
    // 2. ENVIAR FORMULARIO Y REDIRIGIR A INICIO CON EL NOMBRE
    // ==========================================================================
    
    // Como cambiaste el HTML, ahora sí existen estos elementos:
    const input_nombre = document.getElementById("nombre");
    const input_submit = document.getElementById("botonEnviar"); 

    // Aquí asociamos el botón con la función de abajo
    if (input_submit) {
        input_submit.addEventListener("click", feedbackFormulario); 
    }

    // Esta es la función que procesa el click y hace la redirección
    function feedbackFormulario(event) {
        // Evita que la página se recargue o intente procesar el formulario acá
        event.preventDefault();

        // Obtenemos el valor del nombre y lo codificamos de forma segura para la URL
        let valor_nombre = encodeURIComponent(input_nombre.value.trim());

        // Si el usuario no ingresó nombre, le asignamos uno por defecto
        if (!valor_nombre) {
            valor_nombre = encodeURIComponent("Usuario");
        }

        // Redirige a indexlog.html pasando el nombre en la URL
        window.location.href = `indexlog.html?registro=exito&nombre=${valor_nombre}`;
    }

}); // <--- ¡MUY IMPORTANTE! Esta llave y paréntesis cierran el DOMContentLoaded. 
    // Todo tu código debe quedar por encima de esta línea.