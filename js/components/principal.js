import { validation } from "./validacion-contacto.js";
import { singInScreen, singValidationForm } from "./validacion-registro.js";

const formContact = document.querySelector("[data-form-contact]");

/*usa la funcion valida que comprueba el formulario contacto*/
formContact.addEventListener("submit", (e) => {
    
    e.preventDefault();
    
    const infoNombre = formContact.querySelector("[data-contact-nombre]").value;
    const infoMensaje = formContact.querySelector("[data-contact-mensaje]").value;
    
    validation(infoNombre, infoMensaje);
});

const btnSingIn = document.querySelector("[data-btn-singIn]");

//Permite al usuario accceder a la pantalla de registro
btnSingIn.addEventListener("click", () => {
    const sectionLogin = document.querySelector("[data-section-login]");
    const sectionSingin = document.querySelector("[data-section-singin]");

    singInScreen(sectionLogin, sectionSingin);
});

const singInForm = document.querySelector("[data-singin-form]");

//Valida los datos del registro del usuario para crear su User
singInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const singInEmail = document.querySelector("[data-singin-email]").value;
    const singInPassword1 = document.querySelector("[data-singin-password1]").value;
    const singInPassword2 = document.querySelector("[data-singin-password2]").value;

    const formValide = singValidationForm(singInEmail, singInPassword1, singInPassword2);
    console.log(formValide)
});