let numero1 = prompt("Ingrese un numero: ");
let numeroValido1 = parseInt(numero1);
let numero2 = prompt("Ingrese otro numero ");
let numeroValido2 = parseInt(numero2);
function CalcularMayor(numeroValido1, numeroValido2){
    if (numeroValido1 > numeroValido2){
      alert("El numero " + numeroValido1 + " es mayor que " + numeroValido2)   
    };
    if (numeroValido2 > numeroValido1){
        alert("El numero " + numeroValido2 + " es mayor que " + numeroValido1)
    };
    if (numeroValido1 === numeroValido2){
        alert("Los dos numeros son iguales")
    };
}
CalcularMayor(numeroValido1, numeroValido2);

document.getElementById("resultado").innerText = "Su número es: " + numeroValido1;