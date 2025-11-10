import { Routes, Route } from 'react-router-dom';
import { AutorizacionProvider } from './Context/AutorizacionContext';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Login from './Pages/Login';
import Registrar from './Components/Registrar';
import Error from './Pages/Error';
import ProtectorRutas from './Components/ProtectorRutas';
import Games from './Pages/Games';
// Corregida la ruta de los imports de AppProyecto04, Juegos y JuegoEstrella (faltaba 'Pages/')
import AppProyecto04 from './PoyectosAnteriores/Proyecto_04/AppProyecto04';
import Juegos from './PoyectosAnteriores/Proyecto_05/Juego';
import JuegoEstrella from './PoyectosAnteriores/Proyecto_05/Componets/JuegoEstrella';

// HTML Imports (Se mantienen iguales, la ruta estaba bien)
const barbitoHtml = new URL('./PoyectosAnteriores/Proyecto_01/BarbitoSebastianHTML/index.html', import.meta.url).href;
const camperoHtml = new URL('./PoyectosAnteriores/Proyecto_01/CamperoCruzHTML/index.html', import.meta.url).href;
const mamaniHtml = new URL('./PoyectosAnteriores/Proyecto_01/MamaniLautaroHTML/index.html', import.meta.url).href;
const martinezHtml = new URL('./PoyectosAnteriores/Proyecto_01/MartinezSebastianHTML/index.html', import.meta.url).href;
const munozHtml = new URL('./PoyectosAnteriores/Proyecto_01/MunozRominaHTML/index.html', import.meta.url).href;
const menuHtml = new URL('./PoyectosAnteriores/Proyecto_02/Menu.html', import.meta.url).href;
const registroMascotasHtml = new URL('./PoyectosAnteriores/Proyecto_03/RegistroMascotas.html', import.meta.url).href;


const IframeWrapper = ({ src, title }) => (
  <div style={{ width: '100%', height: '100vh' }}>
    <iframe
      src={src}
      title={title}
      style={{ width: '100%', height: '100%', border: 'none' }}
    />
  </div>
);

const BarbitoSebastian = () => <IframeWrapper src={barbitoHtml} title="BarbitoSebastian" />;
const CamperoCruz = () => <IframeWrapper src={camperoHtml} title="CamperoCruz" />;
const MamaniLautaro = () => <IframeWrapper src={mamaniHtml} title="MamaniLautaro" />;
const MartinezSebastian = () => <IframeWrapper src={martinezHtml} title="MartinezSebastian" />;
const MunozRomina = () => <IframeWrapper src={munozHtml} title="MunozRomina" />;
const Menu = () => <IframeWrapper src={menuHtml} title="Menu" />;
const RegistroMascotas = () => <IframeWrapper src={registroMascotasHtml} title="RegistroMascotas" />;

function App() {
  return (
    <AutorizacionProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registrar />} />

          {/* RUTAS PROYECTO 01 (Se mantienen con el prefijo "proyecto01/") */}
          <Route path="proyecto01/barbitosebastianhtml" element={<BarbitoSebastian />} />
          <Route path="proyecto01/camperocruzhtml" element={<CamperoCruz />} />
          <Route path="proyecto01/mamanilautarhtml" element={<MamaniLautaro />} />
          <Route path="proyecto01/martinezsebastianhtml" element={<MartinezSebastian />} />
          <Route path="proyecto01/munozrominahtml" element={<MunozRomina />} />

          {/* RUTAS PROYECTO 02, 03, 04 (Se mantienen sin sufijos adicionales) */}
          <Route path="proyecto02" element={<Menu />} />
          <Route path="proyecto03" element={<RegistroMascotas />} />
          <Route path="proyecto04" element={<AppProyecto04 />} />
          
          {/* RUTAS PROYECTO 05 (Unificadas a minúsculas) */}
          <Route path="juego" element={<Juegos />} />
          <Route path="juegoestrella" element={<JuegoEstrella />} />

          {/* Ruta protegida (Unificada a minúsculas y usada como ruta principal de juegos) */}
          <Route
            path="games"
            element={
              <ProtectorRutas>
                <Games />
              </ProtectorRutas>
            }
          />
        </Route>

        {/* Ruta de error fuera del layout */}
        <Route path="*" element={<Error />} />
      </Routes>
    </AutorizacionProvider>
  );
}

export default App;