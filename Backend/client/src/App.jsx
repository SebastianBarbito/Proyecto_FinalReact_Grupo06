import { Routes, Route } from 'react-router-dom';
import { AutorizacionProvider } from './Context/AutorizacionContext.jsx';
import Layout from './assets/Components/Layout.jsx';
import Home from './assets/Pages/Home.jsx';
import AboutUs from './assets/Pages/AboutUs.jsx';
import Login from './assets/Components/Login.jsx';
import Registrar from './assets/Components/Registrar';
import Error from './assets/Pages/Error';
import ProtectorRutas from './assets/Components/ProtectorRutas';
import ListJuegos from './assets/Pages/ListJuegos';
import { useEffect } from 'react';
import axiosInstance from './config/axiosConfig';
import OldProyecto1 from './assets/Pages/OldProyecto1';
import OldProyecto2 from './assets/Pages/OldProyecto2';
import OldProyecto3 from './assets/Pages/OldProyecto3';
import OldProyecto4 from './assets/Pages/OldProyecto4';
// Si más adelante agregás Games o Users, usar:
// import Games from './assets/Pages/Games';
// import Users from './assets/Pages/Users';

function App() {
  // Verificar la conexión con el backend al inicio
  useEffect(() => {
    const verificarConexion = async () => {
      try {
        await axiosInstance.get('/health');
        console.log('Conexión con el backend establecida');
      } catch (error) {
        console.error('Error al conectar con el backend:', error);
      }
    };

    verificarConexion();
  }, []);

  return (
    <AutorizacionProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Rutas públicas */}
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registrar />} />

          {/* Proyectos anteriores (acceso directo) */}
          <Route path="anteriores/proyecto1" element={<OldProyecto1 />} />
          <Route path="anteriores/proyecto2" element={<OldProyecto2 />} />
          <Route path="anteriores/proyecto3" element={<OldProyecto3 />} />
          <Route path="anteriores/proyecto4" element={<OldProyecto4 />} />

          {/* Rutas protegidas */}
          <Route element={<ProtectorRutas />}>
            <Route path="juegos" element={<ListJuegos />} />
          </Route>
        </Route>

        {/* Ruta de error */}
        <Route path="*" element={<Error />} />
      </Routes>
    </AutorizacionProvider>
  );
}

export default App;
