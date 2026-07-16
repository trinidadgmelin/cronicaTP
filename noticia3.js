document.addEventListener("DOMContentLoaded", function() {
    const dockMenu = document.querySelector(".menu-lateral-dock");
    const toggleBtn = document.querySelector(".btn-toggle-dock");

    if (dockMenu && toggleBtn) {
        toggleBtn.addEventListener("click", function() {
            dockMenu.classList.toggle("cerrado");
        });
    }

    // Funcionalidad para desplazar la pantalla hasta la sección de comentarios
    const btnIrComentarios = document.getElementById("btnIrComentarios");
    const seccionComentarios = document.querySelector(".seccion-comentarios");

    if (btnIrComentarios && seccionComentarios) {
        btnIrComentarios.addEventListener("click", function(e) {
            e.preventDefault(); // Previene comportamientos por defecto si fuera un enlace

            // Desplazamiento suave (smooth scroll)
            seccionComentarios.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
            // 2. Cerrar automáticamente el menú lateral (agregando la clase 'cerrado')
            if (dockMenu) {
                dockMenu.classList.add("cerrado");
            }
        });
    }
});

const inputComentario = document.getElementById("inputNuevoComentario");
const btnEnviar = document.getElementById("btnEnviarComentario");
const contenedorComentarios = document.getElementById("contenedorComentarios");

function agregarComentario() {
    const texto = inputComentario.value.trim();

    if (texto === "") {
        alert("¡Escribí un comentario antes de enviar!");
        return;
    }

    const nuevoComentario = document.createElement("div");
    nuevoComentario.className = "comentario-item";

    nuevoComentario.innerHTML = `
            <div class="avatar-comentario"></div>
            <div class="comentario-contenido">
                <h4 class="comentario-autor">Yo</h4>
                <p class="comentario-texto">${texto}</p>
                <div class="comentario-acciones">
                    <button class="btn-responder">RESPONDER</button>
                    <div class="comentario-votos">
                        <span class="votos-conteo-comentario">0</span>
                        <button class="btn-voto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466L6.9 2.1c-.045.671-.27 1.307-.649 1.84L4.855 5.952c-.37.508-.914.85-1.53 1.006l-.422.108a.5.5 0 0 0-.393.384l-.004.017a.5.5 0 0 0 .384.585l.42.062a4.4 4.4 0 0 1 3.4 3.402l.06.422a.5.5 0 0 0 .586.384l.017-.004a.5.5 0 0 0 .384-.393l.108-.422c.156-.616.498-1.16 1.006-1.53l1.833-1.332A3.6 3.6 0 0 0 13.1 5.4l-.135-.61c-.135-.61-.63-1.076-1.246-1.178l-.348-.057c-.628-.1-1.155-.515-1.39-1.107l-.348-.876a1.2 1.2 0 0 0-1.117-.732z"/>
                            </svg>
                        </button>
                        <span class="votos-conteo-comentario">0</span>
                        <button class="btn-voto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M6.956 14.534c.064.936.952 1.659 1.908 1.42a1.2 1.2 0 0 0 1.117-.731l.348-.876c.235-.591.761-1.006 1.39-1.107l.348-.057c.616-.102 1.11-.567 1.246-1.177l.135-.611a3.6 3.6 0 0 0-1.333-3.61l-1.833-1.331a2.4 2.4 0 0 1-1.006-1.53l-.108-.422a.5.5 0 0 0-.384-.393l-.017-.004a.5.5 0 0 0-.586.384l-.06.422a4.4 4.4 0 0 1-3.4 3.402l-.42.062a.5.5 0 0 0-.384.585l.004.017a.5.5 0 0 0 .393.384l.422.108c.616.156 1.16.498 1.53 1.006l1.396 1.912c.379.534.604 1.17.649 1.84l.057.633z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;

    contenedorComentarios.prepend(nuevoComentario);

    inputComentario.value = "";
}

if (btnEnviar && inputComentario && contenedorComentarios) {
    btnEnviar.addEventListener("click", agregarComentario);

    inputComentario.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            agregarComentario();
        }
    });
}

// NUEVA COMPROBACIÓN: Evita pintar el botón de ir a comentarios
const botonesDock = document.querySelectorAll(".btn-dock");

botonesDock.forEach(boton => {
    boton.addEventListener("click", (e) => {
        e.stopPropagation();

        // Solo activa el color rojo en los botones que NO sean el de ir a comentarios
        if (boton.id !== "btnIrComentarios") {
            boton.classList.toggle("activo");
        }
    });
});

if (btnEnviar && inputComentario && contenedorComentarios) {
    btnEnviar.addEventListener("click", agregarComentario);

    inputComentario.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            agregarComentario();
        }
    });
}
const btnCampana = document.querySelector(".btn-campana");

if (btnCampana) {
    btnCampana.addEventListener("click", function() {
        this.classList.toggle("activa");
    });
}