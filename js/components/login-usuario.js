export const saveUser = (user) => {
    const users = JSON.parse(localStorage.getItem("user")) || [];
    users.push(user);
    localStorage.setItem("user", JSON.stringify(users));
    return users
}

export const validateUser = (loginEmail, loginPassword) => {
    const users = JSON.parse(localStorage.getItem("user")) || [];
    const loginFail = document.querySelector("[data-login-fail]");
    let userValide;
    users.forEach(user => {
        if (user.email == loginEmail.toLowerCase() && user.passwordUser == loginPassword) {
            const indice = users.indexOf(user);
            user.estado = 1; //1 estado activo
            userValide = user;
            console.log(indice)
            users.splice(indice,1,userValide);
            localStorage.setItem("user", JSON.stringify(users));
        } else {
            console.log("No existe el usuario");
        }
    });

    if (loginEmail.length == 0 || loginPassword.length == 0) {
        const contenido = `<i class="fa-solid fa-triangle-exclamation"></i> Los campos no pueden estar vacios.`
        loginFail.classList.remove("invisible");
        loginFail.innerHTML = contenido
        return false
    } else if (userValide == undefined) {
        const contenido = `<i class="fa-solid fa-triangle-exclamation"></i> Verifique los datos ingresados.`
        loginFail.classList.remove("invisible");
        loginFail.innerHTML = contenido
        return false
    } else {
        loginFail.classList.add("invisible");
        window.location.href = "/screens/productos.html";
        return true
    }
}


export const userView = (users) =>{
    users.forEach((user) => {
        console.log(user)
        if (user.estado == 1) {
            const btnLeave = document.querySelector("[ data-btn-leave]");
            btnLeave.classList.remove("invisible");
            
            const btnNewProduct = document.querySelector("[data-new-product]");
            btnNewProduct.classList.remove("invisible");
            
            const iconsProducts = document.querySelector("[data-icons-product]");
            console.log(iconsProducts);
            //iconsProducts.classList.add("productos__iconos");
            //iconsProducts.classList.remove("invisible");
        }
    })
}