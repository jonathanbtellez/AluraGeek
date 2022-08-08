import { clientServices } from "../service/client.service.js";


const obtenerInformacion = async () => {
    const direccion = new URL(window.location);
    const id = direccion.searchParams.get("id");
    console.log(id)
    
    if (id === null) {
        window.location.href = "/screens/error.html"
    }
    
    const url = document.querySelector("[data-url]");
    const categoria = document.querySelector("[data-categoria]");
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-valor]");
    const descripcion = document.querySelector("[data-descripcion]");    // espera la respuesta del servidor remplaza el then
    try {
        const producto = await clientServices.detalleProducto(id)
        console.log(producto)
        url.value = producto.url;
        categoria.value = producto.categoria;
        nombre.value = producto.nombre;
        precio.value = producto.precio;
        descripcion.value = producto.description;
    } catch (error) {
        console.log("catch error -", error)
    }
}

obtenerInformacion();
console.log("aqui esta el error")

const form = document.querySelector("[data-form-edit]");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const direccion = new URL(window.location);
    const id = direccion.searchParams.get("id");
    const url = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-valor]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    clientServices.actualizarProducto(url, nombre, precio, descripcion, categoria, id)
        .then(() => {
            window.location.href = "/screens/formulario-enviado.html"
        }).catch((err) => console.log(err));
})