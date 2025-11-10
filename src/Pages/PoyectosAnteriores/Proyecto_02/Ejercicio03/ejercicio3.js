const valor = prompt("ingrese los numeros:");

function resolver(cadena){
  let nuevaCadena ='';
  for (let i = 0; i < cadena.length; i++) {  
    const caracter = cadena[i];
     if (caracter === '?'){
        let izquierda = Number(cadena[i - 1])||0;
        let derecha = Number(cadena[i + 1])||0;
        nuevaCadena += izquierda + derecha
    }else{
        nuevaCadena += caracter;
    }
}
return nuevaCadena;
}

const resultado = resolver(valor);

alert("Resultado: " + resultado);

document.getElementById("resultado").innerText = + resultado;