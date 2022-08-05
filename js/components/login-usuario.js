
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
            users.splice(indice, 1, userValide);
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
        const contenido = `<i class="fa-solid fa-triangle-exclamation"></i> Verifique los datos ingresados o registrese.`
        loginFail.classList.remove("invisible");
        loginFail.innerHTML = contenido
        return false
    } else {
        loginFail.classList.add("invisible");
        window.location.href = "/screens/productos.html";
        return true
    }
}


export const userViewProduct = (users) => {
    users.forEach((user) => {
        console.log(user)
        if (user.estado == 1) {
            const btnLeave = document.querySelector("[ data-btn-leave]");

            if (btnLeave != undefined) {
                btnLeave.classList.remove("invisible");
            }

            const btnNewProduct = document.querySelector("[data-new-product]");
            if (btnNewProduct != undefined) {
                btnNewProduct.classList.remove("invisible");
            }

            const iconsProducts = document.querySelectorAll("[data-icons-product]");
            console.log(iconsProducts);
            iconsProducts.forEach((icons) => {
                icons.classList.add("productos__iconos");
            });
        }
    });

}

export const userViewHome = (users) => {
    users.forEach((user) => {
        console.log(user)
        if (user.estado == 1) {
            const btnLog = document.querySelector("[data-header-container]");
            if (btnLog != undefined) {
                btnLog.classList.remove("invisible")
                document.querySelector("[data-log-btn]").remove();
                const contenido = `<button data-btn-leave class="header__link btn"><i class="fa-solid fa-arrow-right-from-bracket btn--rojo"></i></button>`;
                btnLog.innerHTML += contenido;
            }
        }
    })
}

export const closeSeccion = (users) => {
 
    users.forEach(user => {
        const indice = users.indexOf(user);
        user.estado = 0; //1 estado activo
  
        const userValide = user;
        users.splice(indice, 1, userValide);
        localStorage.setItem("user", JSON.stringify(users));

        window.location.href="../index.html";
    });
}