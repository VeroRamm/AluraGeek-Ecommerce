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
  const imagen = document.querySelector("[data-imagen]");

  try {
    const producto = await clientServices.detalleCliente(id);
    if (producto.nombre && producto.precio && producto.descripcion && producto.imagen) {
      nombre.value = producto.nombre;
      precio.value = producto.precio;
      descripcion.value = producto.descripcion;
      imagen.value = producto.imagen;
    }/* else {
      throw new Error();
    }*/
  } catch (error) {
    window.location.href = "../screens/error.html";
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
  const imagen = document.querySelector("[data-imagen]").value;
  clientServices.actualizarCliente(nombre, precio, descripcion, imagen, id).then(() => {
   alert("Edicion concluida con exito");
  });
});