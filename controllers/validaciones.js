//Validacion del login
const loginButton = document.querySelector("[data-button]");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = document.querySelector("[data-nombre]").value;
    const pass = document.querySelector("[data-password]").value;

    if (username === "admin" && pass === "admin") {
        location.href = "http://127.0.0.1:5500/screens/lista-producto.html";
    
    } else {
        location.href = "http://127.0.0.1:5500/screens/index.html";
        alert("error");
    }
})

//Validacion de contacto
