import React,{ useState, useEffect } from "react";

function Colores() {
    const colores = ['#001affff', '#00ff00ff', '#ff00ffff', '#00ffffff', '#ffa500ff']

    const [colorBoton, setColorBoton] = useState(colores.slice(0,4))
    const [mensaje, setMensaje] = useState('')
    const [contador, setContador] = useState(0)

   useEffect(() => {
    if (contador >= 50) {
        setMensaje('Perdiste, superaste los 50 intentos');
        return;
    }

    // Contar cuántas veces aparece cada color
    const conteoColores = {};
    colorBoton.forEach(color => {
        conteoColores[color] = (conteoColores[color] || 0) + 1;
    });

    // Revisar si algún color aparece 3 o más veces
    const maxRepetidos = Math.max(...Object.values(conteoColores));
    if (maxRepetidos >= 3) {
        setMensaje(`¡Ganaste en ${contador} intentos!`);
    } else {
        setMensaje(`Intentos: ${contador}`);
    }
}, [contador, colorBoton]);

    console.log(contador)
    const manejaClickBoton = () =>{
        const nuevosColores = colorBoton.map( () => {
            const indiceAleatorio = Math.floor (Math.random() *colores.length);
            return colores[indiceAleatorio];
        });
        setColorBoton(nuevosColores)

        setContador(contador + 1)
    }

    return(
        <>
        <div>
            <h1>Juego de colores</h1>
            <p>Presione cualquier boton para cambiar los colores. Si dos o más coinciden, ganas.</p>
            <div>
                {colorBoton.map((c, i) => (
                    <button
                        key={i}                        
                        onClick={manejaClickBoton}
                        style={{ backgroundColor: c }}
                    >
                        Botón {i + 1}
                    </button>
                ))}
            </div>
            <h2>{mensaje}</h2>
        </div>
        </>
    )
}

export default Colores;