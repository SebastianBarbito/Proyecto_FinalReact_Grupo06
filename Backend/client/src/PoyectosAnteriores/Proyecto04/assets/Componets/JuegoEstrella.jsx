import { useState, useEffect, useRef } from "react";
import Estrella from "../Componets/Estrella";
import Nigth from '../img/Night.jpg';
import star from '../sounds/star.mp3';
import '../styles/JuegoEstrella.css';

export default function JuegoEstrella() {
  const [puntaje, setPuntaje] = useState(0);
  const [posicionEstrella, setPosicionEstrella] = useState({ y: 0, x: 0 });
  const [visible, setVisible] = useState(false);
  const [juegoActivo, setJuegoActivo] = useState(true);
  const [mensaje, setMensaje] = useState("");
  const containerRef = useRef(null);

  const soundEffect = useRef(new Audio(star));

  const posicionAlAzar = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      
      // Calculamos los límites seguros (20% desde los bordes)
      const margen = 0.2; // 20% de margen desde los bordes
      const minX = rect.width * margen;
      const maxX = rect.width * (1 - margen);
      const minY = rect.height * margen;
      const maxY = rect.height * (1 - margen);

      // Calculamos posición aleatoria dentro de los límites seguros
      const x = (Math.random() * (maxX - minX) + minX) / rect.width * 100;
      const y = (Math.random() * (maxY - minY) + minY) / rect.height * 100;
      
      setPosicionEstrella({ x, y });
    }
  };

  useEffect(() => {
    if (!juegoActivo) return;

    const intervalo = setInterval(() => {
      posicionAlAzar();
      setVisible(true);
      // Ocultar la estrella despuÃ©s de 1.5 segundos
      setTimeout(() => {
        setVisible(false);
      }, 1500);
    }, 2000);
    return () => clearInterval(intervalo);
  }, [juegoActivo]);

  const agarrarEstrella = () => {
    setPuntaje(puntaje + 1);
    setVisible(false);
    soundEffect.current.play();
  };

  useEffect(() => {
    if (puntaje >= 10) {
      setJuegoActivo(false);
      setMensaje("¡GANASTE! Lograste atrapar 10 estrellas");
    }
  }, [puntaje]);

  // Reiniciar el juego
  const reiniciarJuego = () => {
    setPuntaje(0);
    setMensaje("");
    setJuegoActivo(true);
    setVisible(false);
  };

  return (
    <div 
      ref={containerRef}
      className="contenedor-juego"
      style={{ backgroundImage: `url(${Nigth})` }}
    >
      <h1>¡Atrapa las Estrellas!</h1>
      <p>Puntaje: {puntaje}</p>

      {mensaje && <h2>{mensaje}</h2>}

      {visible && juegoActivo && (
        <Estrella
          x={posicionEstrella.x}
          y={posicionEstrella.y}
          onClick={agarrarEstrella}
        />
      )}

      {!juegoActivo && (
        <button className="boton-reiniciar" onClick={reiniciarJuego}>
          Reiniciar
        </button>
      )}
    </div>
  );
}