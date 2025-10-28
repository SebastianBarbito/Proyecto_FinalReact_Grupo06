import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Layout from '../src/assets/Components/Layout';
import Home from './assets/Pages/Home';
import Game from './assets/Pages/Games';
import AboutUs from './assets/Pages/AboutUs';
import Error from './assets/Pages/Error';

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='games' element={<Game />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
