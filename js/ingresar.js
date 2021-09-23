var usuario=document.getElementById('usuario');
var contraseña=document.getElementById('contraseña');
// var nombre=document.getElementById('nombe');
// var apellido=document.getElementById('apellido');
// var email=document.getElementById('email');
// var puesto=document.getElementById('puesto');
// var salario=document.getElementById('salario');

var error=document.getElementById('error');
error.style.color='red';

function enviarFormulario(){
	console.log('Enviado formulario');
	var mensajesError=[];

	if(usuario.value === null || usuario.value === ''){
		mensajesError.push('Ingresar Usuario');
 	}

 	if(contraseña.value === null || contraseña.value === ''){
		mensajesError.push('Ingresar Contraseña');
 	}

 	// if(nombre.value === null || nombre.value === ''){
		// mensajesError.push('Ingresar Nombre');
 	// }

 	// if(apellido.value === null || apellido.value === ''){
		// mensajesError.push('Ingresar Apellido');
 	// }
 	// if(email.value === null || email.value === ''){
		// mensajesError.push('Ingresar Email');
 	// }
 	// if(puesto.value === null || puesto.value === ''){
		// mensajesError.push('Ingresar Puesto');
 	// }
 	// if(salario.value === null || salario.value === ''){
		// mensajesError.push('Ingresar Salario');
 	// }

 	error.innerHTML = mensajesError.join(', ');
	return false;

}


