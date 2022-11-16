import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    window.location.href = "../screens/error.html";
  }

  const nombre = document.querySelector("[data-nombre]");
  const precio = document.querySelector("[data-precio]");
  const descripcion = document.querySelector("[data-descripcion]");
  const imagen = "http://127.0.0.1:5500/assets/img/" + document.querySelector("[data-imagen]").value.substring(11);

  try {
    const producto = await clientServices.detalleCliente(id);
    if (producto.nombre && producto.precio && producto.descripcion && producto.imagen) {
      nombre.value = producto.nombre;
      precio.value = producto.precio;
      descripcion.value = producto.descripcion;
      imagen.value = producto.imagen;
    } else {
      throw new Error();
    }
  } catch (error) {
    /*window.location.href = "../screens/error.html";*/
  }
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const nombre = document.querySelector("[data-nombre]").value;
  const precio = document.querySelector("[data-precio]").value;
  const descripcion = document.querySelector("[data-descripcion]").value;
  const imagen = "http://127.0.0.1:5500/assets/img/consolas/" + document.querySelector("[data-imagen]").value.substring(11);
  const categoria = document.querySelector("[data-categoria]").value;
  clientServices.actualizarCliente(nombre, precio, descripcion, imagen, categoria, id).then(() => {
   alert("Edicion concluida con exito");
     window.location.href = "../screens/lista-producto.html";
  });
});