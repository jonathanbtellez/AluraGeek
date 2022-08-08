// CRUD   - Métodos HTTP
// Create - POST
// Read   - GET
// Update - PUT/PATCH
// Delete - DELETE

const listaProductos = () => fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());

const crearProductos = (url, nombre, precio, descripcion,categoria) => {
    return fetch("http://localhost:3000/producto",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({url, nombre, precio, id: uuid.v4(), descripcion, categoria})
    });
}
const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`,{
      method: "DELETE"
    })
}

const detalleProducto = (id) =>{
    return fetch(`http://localhost:3000/producto/${id}`).then((respuesta) => respuesta.json());
}



const actualizarProducto=(url, nombre, precio, descripcion,categoria, id) =>{
    return fetch(`http://localhost:3000/producto/${id}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({url, nombre, precio, descripcion,categoria, id})
    })
    .then(respuesta => respuesta)
    .catch((err) => console.log(err));
  }
export const clientServices = {
    listaProductos,
    crearProductos,
    eliminarProducto,
    detalleProducto,
    actualizarProducto
}