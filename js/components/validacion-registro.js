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

export const singValidationForm = (singInEmail, singInPassword1, singInPassword2) => {
    const email = testEmail(singInEmail);
    const password = testPassword1(singInPassword1);
    const passwordUser = testPassword2(password, singInPassword2);

    if (!email == false || !email == undefined) {
        if (!passwordUser == false || !passwordUser == undefined) {       
            const user = {
                email: email,
                passwordUser: passwordUser,
                estado: 0  //0 estado activo
            }
            
            window.location.href="/screens/login.html";
            return user;
        } else {
            throw new Error("Verifique las credenciales");
        }
    } else {
        throw new Error("Verifique las credenciales");
    }
};

//valida que el email tenga el formato valido
const testEmail = (singInEmail) => {
    const regex = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
    const singInEmailFail = document.querySelector("[data-singin-email-error]");

    let contenido = "";
    
    if (singInEmail.length == 0) {
        singInEmailFail.classList.remove("invisible");
        
        contenido = `<i class="fa-solid fa-triangle-exclamation"></i> El correo no puede estar vacio.`
        singInEmailFail.innerHTML = contenido;

        document.querySelector("[data-singin-email]").focus();
    } else if (regex.test(singInEmail)) {
        singInEmailFail.classList.add("invisible");
        regex.test(singInEmail);
        
        const emailValide = singInEmail.toLowerCase();
        return emailValide;
    } else {
        document.querySelector("[data-singin-email]").value = "";
        document.querySelector("[data-singin-email]").focus();

        
        singInEmailFail.classList.remove("invisible");
        
        contenido = `<i class="fa-solid fa-triangle-exclamation"></i> El correo ${singInEmail} no es valido, el correo debe tener siguiente formato nombre@correo.com`;
        singInEmailFail.innerHTML = contenido;
        
        return false;
    }
}

//Valida que la contraseña cuente con el formato adecuado

const testPassword1 = (singInPassword1) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    const singInPasswordFail = document.querySelector("[data-singin-password1-error]");
    
    let contenido = "";
    
    if (singInPassword1.length == 0) {
        singInPasswordFail.classList.remove("invisible");
        
        contenido = `<i class="fa-solid fa-triangle-exclamation"></i> La contraseña no puede estar vacia`
        singInPasswordFail.innerHTML = contenido;
    }
    else if(regex.test(singInPassword1)) {
        singInPasswordFail.classList.add("invisible");
        regex.test(singInPassword1);

        const password1Valide = singInPassword1;
        return password1Valide;
    } else {
        singInPasswordFail.classList.remove("invisible");

        contenido = `La contraseña no es valida, debe tener el siguiente formato:<br>
        <i class="fa-solid fa-triangle-exclamation"></i> Al menos 8 caracteres<br>
        <i class="fa-solid fa-triangle-exclamation"></i> Una letra mayuscula y una minuscula<br>
        <i class="fa-solid fa-triangle-exclamation"></i> Puede contener caracteres especiales`
        singInPasswordFail.innerHTML = contenido;

        document.querySelector("[data-singin-password1]").value="";
        document.querySelector("[data-singin-password1]").focus();

        return false;
    }
}

//comprueba que las dos contraseñas son iguales
const testPassword2 = (password1Valide, singInPassword2) => {
    const singInPasswordFail = document.querySelector("[data-singin-password2-error]");
    
    let contenido = "";

    if (singInPassword2.length == 0) {
        singInPasswordFail.classList.remove("invisible");
        
        contenido = `<i class="fa-solid fa-triangle-exclamation"></i> La contraseña no puede estar vacia`
        singInPasswordFail.innerHTML = contenido;
    }
    else if (password1Valide == singInPassword2) {
        singInPasswordFail.classList.add("invisible");
        
        const passwordUser = singInPassword2;
        return passwordUser;
    } else {
        document.querySelector("[data-singin-password2]").value="";
        document.querySelector("[data-singin-password2]").focus();

        singInPasswordFail.classList.remove("invisible");

        contenido = `<i class="fa-solid fa-triangle-exclamation"></i> La contraseña no es valida, debe ser igual a la contraseña anterior`
        singInPasswordFail.innerHTML = contenido;

        return false;
    }
}