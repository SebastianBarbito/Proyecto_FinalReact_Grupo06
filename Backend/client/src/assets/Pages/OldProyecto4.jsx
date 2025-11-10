import JuegoEstrella from '../../PoyectosAnteriores/Proyecto04/assets/Componets/JuegoEstrella';
import Games from '../../PoyectosAnteriores/Proyecto04/assets/Pages/Games';

export default function OldProyecto4() {
  return (
    <div>
      <h2>Proyecto 4 (Juego Estrella)</h2>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <section style={{ flex: '1 1 400px', padding: '1rem', border: '1px solid #ddd' }}>
          <h3>Juego Estrella</h3>
          <JuegoEstrella />
        </section>

        <section style={{ flex: '1 1 400px', padding: '1rem', border: '1px solid #ddd' }}>
          <h3>Otros juegos</h3>
          <Games />
        </section>
      </div>
    </div>
  );
}