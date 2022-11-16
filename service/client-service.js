const listaClientes = () =>
  fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());

const crearCliente = (nombre, precio, descripcion, imagen, categoria) => {
  return fetch("http://localhost:3000/producto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, precio, descripcion, imagen, categoria, id: uuid.v4() }),
  });
};

const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "DELETE",
  });
};

const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`).then((respuesta) =>
    respuesta.json()
  );
};

const actualizarCliente = (nombre, precio, descripcion, imagen, categoria, id) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, precio, descripcion, imagen, categoria }),
  })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
};
