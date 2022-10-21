const formulario = document.getElementById('formulario'); //acceder al formulario
const inputs = document.querySelectorAll('#formulario input'); //almacenamiento de datos ingresados

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, números, guión y guión_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 dígitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 números.
}

const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false
}//al comienzo, los campos están vacíos, por lo tanto son inválidos

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario'); //comprobaciones de cada campo (código a ejecutar más abajo "if-else")
		break; // salir del switch
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto'); //elimina dato erróneo
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');//agrega dato correcto
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');//selecciona ícono tilde verde
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');//elimina ícono x roja
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');//oculta mensaje de error
		campos[campo] = true; //todo esto si es correcto
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');//activa mensaje de error
		campos[campo] = false;//todo esto si es incorrecto
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');//acceso para identificar contraseña
	const inputPassword2 = document.getElementById('password2');//acceso para compararla con la anterior

	if(inputPassword1.value !== inputPassword2.value){ //si la contraseña no es igual a la repetida
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;//activa mensaje de error como cartel
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;//oculta mensaje de error como cartel
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario); //tecla levantada
	input.addEventListener('blur', validarFormulario); //clic fuera de la caja
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault(); //no ejecuta nada

	const terminos = document.getElementById('terminos');//acceder al checkbox de Términos y condiciones
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
		formulario.reset();//si todos estos campos son verdaderos, se blanquean los campos

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {//mensaje de formulario completado exitoso
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);//conteo de 5 segundos para que se elimine mensaje automáticamente

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');//elimina íconos de validación
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');//mensaje de error como cartel si hay campos vacíos
	}
});