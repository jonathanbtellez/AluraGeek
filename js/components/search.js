export const search = () => {
    const inputSearch = document.querySelector("[data-input-search]");
    inputSearch.addEventListener("keyup", (e) => {
        //captura los valores del campo de busqueda
        const consult = e.target.value.toLowerCase();
        let regexp = new RegExp(consult);
        console.log(consult)
        
        //oculta el banner a pulsar una tecla
        
        const banner = document.querySelector("[data-banner]");
        if (banner != undefined) {
            if (consult.length == 0) {
                banner.classList.remove("invisible");
            } else {
                banner.classList.add("invisible");
            }
        }
        //Oculta los elementos que no tienen coincidencias
        const productos = document.querySelectorAll(".productos__card__titulo");

        productos.forEach(producto => {
            const product = producto.textContent.toLowerCase();

            if (regexp.test(product)) {
                producto.parentElement.classList.remove("invisible");

            } else {
                producto.parentElement.classList.add("invisible");
            }
            console.log(regexp.test(product))
        });

        //oculta los titulos
        /*const productosTitulo = document.querySelectorAll(".productos__contenedor__titulo");
        productosTitulo.forEach(producto=>{
            if (consult.length == 0) {
                producto.classList.remove("invisible");
                producto.classList.add("productos__contenedor__titulo")

            } else {
                producto.classList.add("invisible");
                producto.classList.remove("productos__contenedor__titulo")
            }
        })*/;
    });
}



