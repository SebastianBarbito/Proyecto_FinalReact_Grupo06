import { Link, Outlet } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

export default function Layout() {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="mb-3">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/about">Nosotros</Nav.Link>
              <Nav.Link as={Link} to="/juegos">Juegos</Nav.Link>
              <NavDropdown title="Proyecto 01" id="proyecto01-nav-dropdown">
                <NavDropdown.Item as={Link} to="/proyecto01/barbitosebastianhtml">BarbitoSebastian</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/proyecto01/camperocruzhtml">CamperoCruz</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/proyecto01/mamanilautarhtml">MamaniLautaro</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/proyecto01/martinezsebastianhtml">MartinezSebastian</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/proyecto01/munozrominahtml">MunozRomina</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/proyecto02">Proyecto 02</Nav.Link>
              <Nav.Link as={Link} to="/proyecto03">Proyecto 03</Nav.Link>
              <Nav.Link as={Link} to="/proyecto04">Proyecto 04</Nav.Link>
              <NavDropdown title="Proyecto 05" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/Games">Games</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/JuegoEstrella">Juego Estrella</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />

      {/* Aquí se renderizan las páginas hijas */}
      <Outlet />
    </div>
  );
}
