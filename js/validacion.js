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
        nombreValido = false;
    } else {
        mensajeError.classList.add("invisible");
        nombreValido = true;
        console.log(nombreValido);
        if (10 > infoMensaje.length) {
            contenido = `<i class="fa-solid fa-triangle-exclamation"></i> El mensaje debe tener entre 10 y 100 caracteres.<br>`;
            mensajeError.classList.remove("invisible");
            mensajeError.innerHTML += contenido;
            mensajeValido = false;
        } else {
            mensajeError.classList.add("invisible");
            mensajeValido = true;
        }
    }

    if (nombreValido && mensajeValido) {
        const enviado = window.location.href = "/screens/formulario-enviado.html";
        infoNombre = "";
        infoMensaje = "";
    }
}

/*Esta funcion captura los elementos de ingreso y 
registro si el usuario no esta registrado al pulsar el 
boton mostrara el formulario registro*/

export const singInScreen = (sectionLogin, sectionSingin) => {
    sectionLogin.classList.add("invisible");
    sectionSingin.classList.remove("invisible");
}

/*Esta funcion recibe los datos del formulario registro 
valida que los datos cumplan con los parametros establecidos
si los datos son correctos le muestra al usuario el panel de acceso*/

export const singValidationForm = (singInEmail, singInPassword1) => {
    testEmail(singInEmail);
    testPassword1(singInPassword1);
    //testPassword2(singInPassword2);
    //createUser(emailValide,password1Valide)
};


const testEmail = (singInEmail) => {
    const regex = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
    const singInEmailFail = document.querySelector("[data-singin-email-error]");
    let contenido = "";
    if (regex.test(singInEmail)) {
        singInEmailFail.classList.add("invisible");
        const emailValide = singInEmail.toLowerCase();
        regex.test(singInEmail);
        return emailValide;
    } else {
        singInEmailFail.classList.remove("invisible");
        contenido = `<i class="fa-solid fa-triangle-exclamation"></i> El correo ${singInEmail} no es valido, debe tener el siguiente formato nombre@correo.com.`;
        singInEmailFail.innerHTML = contenido;
    }
}

const testPassword1 = (singInPassword1,singInPassword2) =>{
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    const singInPasswordFail = document.querySelector("[data-singin-password1-error]");
    let contenido = "";
    if (regex.test(singInPassword1)) {
        singInPasswordFail.classList.add("invisible");
        const password1Valide = singInPassword1;
        console.log(password1Valide);
        regex.test(singInPassword1);
        const singInPassword2 = document.querySelector("[data-singin-password2]").value;
        testPassword2(password1Valide,singInPassword2)
        return password1Valide;
    } else {
        singInPasswordFail.classList.remove("invisible");
        contenido = `<i class="fa-solid fa-triangle-exclamation"></i> La contraseña no es valido, debe tener el siguiente formato:<br>
        <i class="fa-solid fa-triangle-exclamation"></i>Al menos 8 caracteres<br>
        <i class="fa-solid fa-triangle-exclamation"></i>Una letra mayuscula y una minuscula<br>
        <i class="fa-solid fa-triangle-exclamation"></i>Puede contener caracteres especiales`
        singInPasswordFail.innerHTML = contenido;
    }
}

const testPassword2 = (password1Valide,singInPassword2) =>{
    const singInPasswordFail = document.querySelector("[data-singin-password2-error]");
    let contenido = "";
    console.log(password1Valide)
    console.log(singInPassword2)
    if (password1Valide == singInPassword2) {
        singInPasswordFail.classList.add("invisible");
        const passwordUser = singInPassword2;
        console.log(singInPassword2);
        return passwordUser;
    } else {
        singInPasswordFail.classList.remove("invisible");
        contenido = `<i class="fa-solid fa-triangle-exclamation"></i> La contraseña no es valida, debe ser igual a la contraseña anterior`
        singInPasswordFail.innerHTML = contenido;
    }
}
