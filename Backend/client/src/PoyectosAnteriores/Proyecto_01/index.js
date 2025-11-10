function multiplicarSalarios(horasAlMes, pagoPorHora) {
    if (horasAlMes <= 160) {
        return horasAlMes * pagoPorHora;
    } else {
        let horasNormales = 160;
        let horasExtra = horasAlMes - 160;

        let pagoNormal = horasNormales * pagoPorHora;
        let pagoExtra = horasExtra * (pagoPorHora * 1.2);

        return pagoNormal + pagoExtra;
    }
}

document.getElementById("resultado").style.display = "none";

document.getElementById("calcular").onclick = function() {
    let horasAlMes = Number(document.getElementById("horasAlMes").value);
    let pagoPorHora = Number(document.getElementById("pagoPorHora").value);

    let resultado = multiplicarSalarios(horasAlMes, pagoPorHora);
    
    document.getElementById("resultado").innerText = "Tu pago mensual es: " + resultado;
    document.getElementById("resultado").style.display = "inline";
}