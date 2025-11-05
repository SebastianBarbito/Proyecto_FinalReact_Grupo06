import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './assets/Pages/Layout';
import Home from './assets/Pages/Home';
import Game from './assets/Pages/Games';
import AboutUs from './assets/Pages/AboutUs';
import JuegoEstrella from './assets/Componets/JuegoEstrella';

function AppEstrella() {
  return (
    <Container>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="games" element={<Game />} />
          <Route path="juegoestrella" element={<JuegoEstrella />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default AppEstrella;
