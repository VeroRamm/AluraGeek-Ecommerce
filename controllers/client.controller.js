import { clientServices } from "../service/client-service.js";

//backticks
const crearNuevaLinea = (categoria, nombre, precio, descripcion, imagen, id) => {
  const linea = document.createElement("div");
  const contenido = `
  <div class= "card">
  <ul class="table__button-control">
    <li>
      <a href="../screens/editarProducto.html?id=${id}" class="iconoLista"><i class="fa-solid fa-wrench"></i></a>
    </li>
    <li>
      <button  class="iconoLista" type="button" id="${id}"><i class="fa-solid fa-trash"></i></button>
    </li>
  </ul>
    <h5>${categoria}</h5>
    <h4>${nombre}</h4>
    <h5>Precio: $${precio}</h5>
    <p>Descripcion: ${descripcion}</p>
    <img src="${imagen}" class="imagenCard">
    </div>
  `;
  linea.innerHTML = contenido;
  const btn = linea.querySelector("button");
  btn.addEventListener("click", () => {
    const id = btn.id;
    clientServices
      .eliminarCliente(id)
      .then((respuesta) => {
        console.log(respuesta);
      })
      .catch((err) => alert("Ocurrió un error"));
  });

  return linea;
};

const table = document.querySelector("[data-table]");

clientServices
  .listaClientes()
  .then((data) => {
    data.forEach(({ categoria, nombre, precio, descripcion, imagen, id }) => {
      const nuevaLinea = crearNuevaLinea(categoria, nombre, precio, descripcion, imagen, id);
      table.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrió un error"));
