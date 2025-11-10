import { Link, Outlet, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { useAutorizacion } from '../hooks/useAutorizacion';


export default function Layout() {
  const { usuario, logout } = useAutorizacion();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div>
      <Navbar bg="light" expand="lg" className="mb-3">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/about">Nosotros</Nav.Link>
              {/* Enlace principal de Juegos, apunta a la ruta protegida */}
              <Nav.Link as={Link} to="/games">Juegos</Nav.Link> 

              <NavDropdown title="Proyecto 01" id="proyecto01-nav-dropdown">
                {/* RUTAS RESTAURADAS con el prefijo "/proyecto01/" */}
                <NavDropdown.Item as={Link} to="/proyecto01/barbitosebastianhtml">BarbitoSebastian</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/proyecto01/camperocruzhtml">CamperoCruz</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/proyecto01/mamanilautarhtml">MamaniLautaro</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/proyecto01/martinezsebastianhtml">MartinezSebastian</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/proyecto01/munozrominahtml">MunozRomina</NavDropdown.Item>
              </NavDropdown>

              {/* RUTAS RESTAURADAS a rutas simples */}
              <Nav.Link as={Link} to="/proyecto02">Proyecto 02</Nav.Link>
              <Nav.Link as={Link} to="/proyecto03">Proyecto 03</Nav.Link>
              <Nav.Link as={Link} to="/proyecto04">Proyecto 04</Nav.Link>

              <NavDropdown title="Proyecto 05" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/juego">Game</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/juegoestrella">Juego Estrella</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {usuario && (
              <Nav className="ms-auto">
                <Nav.Item>
                  <Button variant="outline-danger" size="sm" onClick={handleLogout} className="ms-2">
                    Cerrar sesión
                  </Button>
                </Nav.Item>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />

      {/* Aquí se renderizan las páginas hijas */}
      <Outlet />
    </div>
  );
}