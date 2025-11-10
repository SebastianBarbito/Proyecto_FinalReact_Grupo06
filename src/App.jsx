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
const barbitoHtml = new URL('./Pages/PoyectosAnteriores/Proyecto_01/BarbitoSebastianHTML/index.html', import.meta.url).href;
const camperoHtml = new URL('./Pages/PoyectosAnteriores/Proyecto_01/CamperoCruzHTML/index.html', import.meta.url).href;
const mamaniHtml = new URL('./Pages/PoyectosAnteriores/Proyecto_01/MamaniLautaroHTML/index.html', import.meta.url).href;
const martinezHtml = new URL('./Pages/PoyectosAnteriores/Proyecto_01/MartinezSebastianHTML/index.html', import.meta.url).href;
const munozHtml = new URL('./Pages/PoyectosAnteriores/Proyecto_01/MunozRominaHTML/index.html', import.meta.url).href;
const menuHtml = new URL('./Pages/PoyectosAnteriores/Proyecto_02/Menu.html', import.meta.url).href;
const registroMascotasHtml = new URL('./Pages/PoyectosAnteriores/Proyecto_03/RegistroMascotas.html', import.meta.url).href;
import AppProyecto03 from './Pages/PoyectosAnteriores/Proyecto_04/AppProyecto03';
import Juegos from './Pages/PoyectosAnteriores/Proyecto_05/Juego';
import JuegoEstrella from './Pages/PoyectosAnteriores/Proyecto_05/Componets/JuegoEstrella';

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
          <Route path="proyecto01/barbitosebastianhtml" element={<BarbitoSebastian />} />
          <Route path="proyecto01/camperocruzhtml" element={<CamperoCruz />} />
          <Route path="proyecto01/mamanilautarhtml" element={<MamaniLautaro />} />
          <Route path="proyecto01/martinezsebastianhtml" element={<MartinezSebastian />} />
          <Route path="proyecto01/munozrominahtml" element={<MunozRomina />} />
          <Route path="proyecto02" element={<Menu />} />
          <Route path="proyecto03" element={<RegistroMascotas />} />
          <Route path="proyecto04" element={<AppProyecto03 />} />
          <Route path="Juego" element={<Juegos />} />
          <Route path="JuegoEstrella" element={<JuegoEstrella />} />

          {/* Rutas protegidas */}
          <Route
            path="Games"
            element={
              <ProtectorRutas>
                <Games />
              </ProtectorRutas>
            }
          />
        </Route>

        {/* Ruta de error fuera del layout para que muestre sólo su contenido */}
        <Route path="*" element={<Error />} />
      </Routes>
    </AutorizacionProvider>
  );
}

export default App;
