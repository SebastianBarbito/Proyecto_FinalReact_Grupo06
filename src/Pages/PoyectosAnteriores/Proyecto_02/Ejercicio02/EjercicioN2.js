document.getElementById("Numeros").addEventListener("submit", function(e){
e.preventDefault();
let num1 = parseInt(document.getElementById("num1").value);
let num2 = parseInt(document.getElementById("num2").value);
let num3 = parseInt(document.getElementById("num3").value);


    let promedio = (num1 + num2 + num3) / 3;
    document.getElementById("resultadoPromedio").innerText = "El promedio de los tres números es: " + promedio;
});