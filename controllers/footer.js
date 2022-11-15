const texto = document.createElement('div');
const relleno = `
<div class="footer">
    <div class="footer-links">
        <div class="logo-footer">
            <img src="../assets/img/logo/Vector.png" alt="">
            <img src="../assets/img/logo/AluraGeek.png" alt="">
            <img src="../assets/img/logo/AluraGeek (1).png" alt="">
        </div>
        <div>
            <a class="footer-list" href="#">Quienes somos</a>
            <a class="footer-list" href="#">Politica de privacidad</a>
            <a class="footer-list" href="#">Programa de fidelidad</a>
            <a class="footer-list" href="#">Nuestras tiendas</a>
            <a class="footer-list" href="#">Quiero ser franquiciado</a>
            <a class="footer-list" href="#">Anuncie aqui</a>
        </div>
    </div>
    <div class="contacto">
        <h6 class="tituloFooter">Hable con nosotros</h6>
        <form action="" class="formulario" data-formulario>
            <input class="box" type="text" placeholder="Nombre" data-contactoNombre>
            <textarea class="box" name="" id="" cols="20" rows="5" placeholder="Escribe tu mensaje" data-contactoMensaje></textarea>
            <div id="error"></div>
            <button class="boton"type="submit" id="fornBoton">Enviar mensaje</button>
        </form>
    </div>
</div>`;
const footer = document.querySelector("[data-footer]");
texto.innerHTML = relleno;
footer.appendChild(texto);

const nombre = document.querySelector("[data-contactoNombre]");
const txt = document.querySelector("[data-contactoMensaje]");
const formulario = document.querySelector("[data-formulario]");
let error = document.getElementById('error');
let mensajeError = [];

function validarNombre() {
	if(nombre.value.length < 3|| nombre.value ==0) {
		mensajeError.push('El nombre no puede estar vacio.');
		nombre.style.border = '1px solid red';
	}
}
function validarTxt() {
	if(txt.value.length ==0) {
		mensajeError.push('Debe escribir su consulta o sugerencia.');
		txt.style.border = '1px solid red';
	}
}

formulario.addEventListener('submit', function(e) {
	e.preventDefault();
	validarNombre();
	validarTxt();
	if (mensajeError.length > 0) {
		error.innerHTML = mensajeError.join('<br>');
		setTimeout((mensajeError) => {
			alert('Vuelva a ingresar los datos.');
			formulario.submit();
		}, 2000);
	} else {
	alert('Formulario enviado');
		formulario.submit();
	}
});

