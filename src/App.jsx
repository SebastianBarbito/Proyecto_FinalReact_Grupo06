import { Routes, Route } from 'react-router-dom';
import { AutorizacionProvider } from '../Context/AutorizacionContext';
import Layout from './assets/Components/Layout';
import Home from './assets/Pages/Home';
import AboutUs from './assets/Pages/AboutUs';
import Login from './assets/Components/Login';
import Registrar from './assets/Components/Registrar';
import Error from './assets/Pages/Error';
import ProtectorRutas from './assets/Components/ProtectorRutas';
import ListJuegos from './assets/Pages/ListJuegos';
import Proyecto2 from "./assets/Pages/Proyecto2";
import Proyecto03 from './assets/Pages/Proyecto03';
import AppProyecto03 from './PoyectosAnteriores/Proyecto_03/csr/AppProyecto03';
// Si más adelante agregás Games o Users, usar:
// import Games from './assets/Pages/Games';
// import Users from './assets/Pages/Users';

function App() {
  return (
    <AutorizacionProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registrar />} />
          <Route path="proyecto2" element={<Proyecto2 />} />
          <Route path="proyecto03" element={<Proyecto03/>} />
           <Route path="AppProyecto03" element={<AppProyecto03/>} />
          

          {/* Rutas protegidas */}
          <Route
            path="juegos"
            element={
              <ProtectorRutas>
                <ListJuegos />
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
