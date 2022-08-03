
import {  validation  } from "./validacion-contacto.js";
import { singInScreen, singValidationForm } from "./validacion-registro.js";
/*usa la funcion valida que comprueba el formulario contacto*/
const formContact = document.querySelector("[data-form-contact]");

formContact.addEventListener("submit",(e)=>{
    e.preventDefault();
    const infoNombre = formContact.querySelector("[data-contact-nombre]").value;
    const infoMensaje = formContact.querySelector("[data-contact-mensaje]").value;
    validation(infoNombre,infoMensaje);
});

//Permite al usuario accceder a la pantalla de registro
const btnSingIn = document.querySelector("[data-btn-singIn]");

btnSingIn.addEventListener("click",()=>{
    const sectionLogin = document.querySelector("[data-section-login]");
    const sectionSingin = document.querySelector("[data-section-singin]");
    singInScreen(sectionLogin,sectionSingin);
});

const singInForm = document.querySelector("[data-singin-form]");

singInForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const singInEmail = document.querySelector("[data-singin-email]").value;
    const singInPassword1 = document.querySelector("[data-singin-password1]").value;
    const singInPassword2 = document.querySelector("[data-singin-password2]").value;
    singValidationForm(singInEmail,singInPassword1,singInPassword2);
})