
var contadorIntentos;
var cantidadMaximaIntentos = 3;

function validateForm(){
	//var palabra = document.getElementById('validation_text').value.replace(/\s/g,'');//Opcion 01: Utilizando expresion regular
	var palabra = eliminarEspaciosEnBlanco(document.getElementById('validation_text').value);//Opcion 02: Utilizando funcion hecha a mano
	
	if(!contadorIntentos){contadorIntentos = 0;}
	if(contadorIntentos < cantidadMaximaIntentos){
		if(palabra == ''){
			alert('Ingrese un palindromo');
			contadorIntentos++;
			return false;
		}
		if(!esPalindrome(palabra)){
			alert('Validacion palíndromo no superada');
			contadorIntentos++;
			return false;
		}
		else{
			alert('Formulario enviado exitosamente');
			contadorIntentos = 0;
			return true;
		}
	}
	else{
		alert('Superada cantidad máxima de intentos');
		document.getElementById('validation_text').value = '';
		contadorIntentos = 0;
		return false;
	}
}

function esPalindrome(s,i) {
 return(i=i||0)<0||i>=s.length>>1||s[i]==s[s.length-1-i]&&esPalindrome(s,++i);
}

function eliminarEspaciosEnBlanco(textoUsuario){
	var texto = textoUsuario;
	var coleccion = texto.split(' ');
	var posicionActual = 0, elementoActual, respuesta = "";
	if(coleccion.length <= 1){
		return texto;
	}
	else {
		while(posicionActual < coleccion.length){
			if(coleccion[posicionActual] != ' '){
				respuesta += coleccion[posicionActual];
			}
			posicionActual++;
		}
	}
	return respuesta;
}