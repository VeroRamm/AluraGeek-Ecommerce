import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nombre = document.querySelector("[data-nombre]").value;
  const precio = document.querySelector("[data-precio]").value;
  const descripcion = document.querySelector("[data-descripcion]").value;
  const imagen = "http://127.0.0.1:5500/assets/img/consolas/" + document.querySelector("[data-imagen]").value.substring(11);
  clientServices
    .crearCliente(nombre, precio, descripcion, imagen)
    .then(() => {
      window.location.href = "../screens/lista-producto.html";
    })
    .catch((err) => console.log(err));
});