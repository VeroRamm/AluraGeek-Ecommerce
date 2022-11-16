const buscar = document.querySelector('#buscar');
const btnBusqueda = document.querySelector('#btnBusqueda');

function filtrar (evento){
     console.log(buscar.value);
    const texto = buscar.value.toLowerCase();
    const lista = document.querySelectorAll('div');
    lista.forEach(element => {
        const textoLi = element.textContent.toLowerCase();
        if(textoLi.includes(texto)){
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
    
};
btnBusqueda.addEventListener('click', e=>{
    e.preventDefault();
    filtrar();
});
