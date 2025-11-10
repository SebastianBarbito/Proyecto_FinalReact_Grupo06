document.getElementById("mostrarDatos").style.display = "none";

document.getElementById("cargar").onclick = function() {
    let nombre = String(document.getElementById("nombre").value);
    let apellido = String(document.getElementById("apellido").value);
    let lu = String(document.getElementById("lu").value);

    alert("Los datos ingresados son: "+ "Nombre: " + nombre + ", Apellido: " + apellido + ", LU: " + lu);
    document.getElementById("mostrarDatos").innerText = "Nombre: " + nombre + ", Apellido: " + apellido + ", LU: " + lu;
}