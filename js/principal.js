
import { valida } from "./validacion.js";

const formContact = document.querySelector("[data-form-contact]");

formContact.addEventListener("submit",(e)=>{
    e.preventDefault();
    const infoNombre = formContact.querySelector("[data-contact-nombre]").value;
    const infoMensaje = formContact.querySelector("[data-contact-mensaje]").value;
    valida(infoNombre,infoMensaje);
});

