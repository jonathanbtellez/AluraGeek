/*Esta funcion recibe los datos del formulario contacto 
valida que los datos cumplan con los parametros establecidos
si los datos son correcto reenvia al usuario ala pagina registro completo*/

export const validation = (infoNombre, infoMensaje) => {
    let contenido = "";
    const mensajeError = document.querySelector("#formulario__contacto__error");
    mensajeError.innerHTML = contenido;
    let nombreValido = false;
    let mensajeValido = false;
    if (3 > infoNombre.length) {
        contenido = `<i class="fa-solid fa-triangle-exclamation"></i> El nombre debe tener entre 3 y 20 caracteres.<br>`;
        mensajeError.classList.remove("invisible");
        mensajeError.innerHTML += contenido;
        document.querySelector("[data-contact-nombre]").value="";
        nombreValido = false;
    } else {
        mensajeError.classList.add("invisible");
        nombreValido = true;
        console.log(nombreValido);
        if (10 > infoMensaje.length) {
            contenido = `<i class="fa-solid fa-triangle-exclamation"></i> El mensaje debe tener entre 10 y 100 caracteres.<br>`;
            mensajeError.classList.remove("invisible");
            mensajeError.innerHTML += contenido;
            document.querySelector("[data-contact-mensaje]").value ="";
            mensajeValido = false;
        } else {
            mensajeError.classList.add("invisible");
            mensajeValido = true;
        }
    }
    if (nombreValido && mensajeValido) {
        window.location.href = "/screens/formulario-enviado.html";
    }
}


