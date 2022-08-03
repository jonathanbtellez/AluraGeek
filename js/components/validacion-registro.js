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

export const singValidationForm = (singInEmail, singInPassword1,singInPassword2) => {
    testEmail(singInEmail);
    testPassword1(singInPassword1);
    testPassword2(testPassword1(singInPassword1),singInPassword2);

    if(!testPassword2(testPassword1(singInPassword1),singInPassword2) == false ||!testPassword2(testPassword1(singInPassword1),singInPassword2) == undefined ){
        const user ={
            email : testEmail(singInEmail),
            password :testPassword2(testPassword1(singInPassword1),singInPassword2)
        }
        window.location.href = "/screens/formulario-enviado.html";
        return user;
    }else{
        throw new console.error("Verifique las contraseñas") 
    }
};

//valida que el email tenga el formato valido
const testEmail = (singInEmail) => {
    const regex = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
    const singInEmailFail = document.querySelector("[data-singin-email-error]");
    let contenido = "";
    if(singInEmail.length == 0){
        singInEmailFail.classList.remove("invisible");
        contenido = `<i class="fa-solid fa-triangle-exclamation"></i>El campo correo no puede estar vacia`
        singInEmailFail.innerHTML = contenido;
    }else if (regex.test(singInEmail)) {
        singInEmailFail.classList.add("invisible");
        const emailValide = singInEmail.toLowerCase();
        regex.test(singInEmail);
        return emailValide;
    }else{
        singInEmailFail.classList.remove("invisible");
        contenido = `<i class="fa-solid fa-triangle-exclamation"></i> El correo ${singInEmail} no es valido, debe tener el siguiente formato nombre@correo.com`;
        singInEmailFail.innerHTML = contenido;
    }
}

//Valida que la contraseña cuente con el formato adecuado

const testPassword1 = (singInPassword1) =>{
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    const singInPasswordFail = document.querySelector("[data-singin-password1-error]");
    let contenido = "";
    if(singInPassword1.length == 0){
        singInPasswordFail.classList.remove("invisible");
        contenido = `<i class="fa-solid fa-triangle-exclamation"></i>La contraseña no puede estar vacia`
        singInPasswordFail.innerHTML = contenido;
    }
    else if (regex.test(singInPassword1)) {
        singInPasswordFail.classList.add("invisible");
        const password1Valide = singInPassword1;
        regex.test(singInPassword1);
        return password1Valide;
    } else {
        singInPasswordFail.classList.remove("invisible");
        contenido = `La contraseña no es valida, debe tener el siguiente formato:<br>
        <i class="fa-solid fa-triangle-exclamation"></i>Al menos 8 caracteres<br>
        <i class="fa-solid fa-triangle-exclamation"></i>Una letra mayuscula y una minuscula<br>
        <i class="fa-solid fa-triangle-exclamation"></i>Puede contener caracteres especiales`
        singInPasswordFail.innerHTML = contenido;
        return false;
    }
}

//comprueba que las dos contraseñas son iguales
const testPassword2 = (password1Valide,singInPassword2) =>{
    const singInPasswordFail = document.querySelector("[data-singin-password2-error]");
    let contenido = "";
    
    if(singInPassword2.length == 0){
        singInPasswordFail.classList.remove("invisible");
        contenido = `<i class="fa-solid fa-triangle-exclamation"></i>La contraseña no puede estar vacia`
        singInPasswordFail.innerHTML = contenido;
    }
    else if (password1Valide == singInPassword2) {
        singInPasswordFail.classList.add("invisible");
        const passwordUser = singInPassword2;
        return passwordUser;
    } else {
        singInPasswordFail.classList.remove("invisible");
        contenido = `<i class="fa-solid fa-triangle-exclamation"></i> La contraseña no es valida, debe ser igual a la contraseña anterior`
        singInPasswordFail.innerHTML = contenido;
        const passwordFail = false;
        return passwordFail;
    }
    
}