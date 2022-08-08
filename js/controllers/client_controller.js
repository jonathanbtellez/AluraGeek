import { clientServices } from "../service/client.service.js";

const loadProducto = (url, nombre, precio, categoria, id) => {

    const container = document.createElement("div");
    container.classList.add("productos__card");
    const altImagen = nombre;
    const content =
        `<div class="productos__card__imagen">
        <img class="card__imagen" src="${url}" alt="${altImagen}" title="${altImagen}">
    </div>
    <h2 class="productos__card__titulo">${nombre}</h2>
    <p class="productos__card__valor">${precio}</p>
    <a href="#" class="productos__card__link">Ver producto</a>`;
    const categoriaOnePiece = document.querySelector("[data-product-onePiece]");
    const categoriaConsoles = document.querySelector("[data-product-consoles]");
    const categoriaVarieties = document.querySelector("[data-product-varieties");
    
    const allProducts = document.querySelector("[data-product]");
    container.innerHTML = content;

    if (categoriaOnePiece == null && categoriaConsoles == null && categoriaVarieties == null){
        allProducts.appendChild(container)
        const users = JSON.parse(localStorage.getItem("user"));
        if(users != null){
        users.forEach(user => {
            if (user.estado == 1) {

                const containerBtns = document.createElement("div");
                containerBtns.classList.add("productos__iconos");
                let contentBtns = 
                `<a class ="btn" href="../screens/editarProducto.html?id=${id}"><i class="fa-solid fa-pencil productos__icono icono--gris"></i></a>
                <button class="btn" data-btn-delete ><i id="${id}" class=" fa-solid fa-trash productos__icono icono--red"></i></button>`;
                containerBtns.innerHTML = contentBtns;
                console.log(containerBtns)
                container.appendChild(containerBtns);

                const btn = container.querySelector("[data-btn-delete]");
                console.log(btn)
                btn.addEventListener("click",(e) => {
                    const id = e.target.id
                    console.log(id)
                    clientServices.eliminarProducto(id)
                    .then(() => {
                
                    }).catch((error) => alert("Ocurrio un "));
                  });
            }
        })}
    }else{
    if (categoria == "one_piece") { categoriaOnePiece.appendChild(container); }

    if (categoria == "console") categoriaConsoles.appendChild(container);

    if (categoria == "diversos") categoriaVarieties.appendChild(container);}
   
    return container;
}



clientServices.listaProductos()
    .then((data) => {

        data.forEach((element) => {
            loadProducto(element["url"], element["nombre"], element["precio"], element["categoria"], element["id"])
        });
    }).catch((error) => alert(error));
