let btnLogin = document.querySelector("#btn-login");
let paginaLogin = false;
btnLogin.addEventListener("click",function(e){
    e.preventDefault
    console.log(btnLogin);
    paginaLogin = true;
    if(paginaLogin){
        btnLogin.classList.add("invisible");
    }
    console.log(paginaLogin);
});
