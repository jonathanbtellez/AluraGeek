import { clientServices } from "../service/client.service.js";
const formProducts = document.querySelector("[data-form-products]");

formProducts.addEventListener("submit", (evento) => {
    evento.preventDefault();
    

    const url = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-valor]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    console.log(url, nombre, precio, descripcion,categoria);
    clientServices.crearProductos(url, nombre, precio, descripcion,categoria)
        .then(() => {
            window.location.href = "/screens/formulario-enviado.html"
        }).catch((err) => console.log(err));
});