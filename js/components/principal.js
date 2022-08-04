import { saveUser, userView, validateUser } from "./login-usuario.js";
import { validation } from "./validacion-contacto.js";
import { singInScreen, singValidationForm } from "./validacion-registro.js";

/*usa la funcion valida que comprueba el formulario contacto*/
const formContact = document.querySelector("[data-form-contact]");
formContact.addEventListener("submit", (e) => {
    
    e.preventDefault();
    
    const infoNombre = formContact.querySelector("[data-contact-nombre]").value;
    const infoMensaje = formContact.querySelector("[data-contact-mensaje]").value;
    
    validation(infoNombre, infoMensaje);
});

const users = JSON.parse(localStorage.getItem("user")) || [];
userView(users);

//Permite al usuario accceder a la pantalla de registro
const btnSingIn = document.querySelector("[data-btn-singIn]");
btnSingIn.addEventListener("click", () => {
    const sectionLogin = document.querySelector("[data-section-login]");
    const sectionSingin = document.querySelector("[data-section-singin]");

    singInScreen(sectionLogin, sectionSingin);
});

//Valida los datos del registro del usuario para crear su User
const singInForm = document.querySelector("[data-singin-form]");
singInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const singInEmail = document.querySelector("[data-singin-email]").value;
    const singInPassword1 = document.querySelector("[data-singin-password1]").value;
    const singInPassword2 = document.querySelector("[data-singin-password2]").value;

    const user = singValidationForm(singInEmail, singInPassword1, singInPassword2);
    saveUser(user);
});

//validando que el usuario ingresado se encuentre registrado
const logInForm = document.querySelector("[data-form-login]");
logInForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const loginEmail = document.querySelector("[data-login-email]").value;
    const loginPassword =document.querySelector("[data-login-password]").value;
    validateUser(loginEmail,loginPassword);
})


