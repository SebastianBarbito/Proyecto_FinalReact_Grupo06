import { Outlet, Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Layout() {
    const location = useLocation();

    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
                <Container>
                    <Navbar.Brand as={Link} to=".">Grupo 6</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link 
                                as={Link} 
                                to="."
                                active={location.pathname.endsWith("/AppEstrella")}>
                                Home
                            </Nav.Link>
                            <Nav.Link 
                                as={Link} 
                                to="games"
                                active={location.pathname.endsWith("/games")}>
                                Games
                            </Nav.Link>
                            <Nav.Link 
                                as={Link} 
                                to="juegoestrella"
                                active={location.pathname.endsWith("/juegoestrella")}>
                                Juego Estrella
                            </Nav.Link>
                            <Nav.Link 
                                as={Link} 
                                to="aboutus"
                                active={location.pathname.endsWith("/aboutus")}>
                                About Us
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className="flex-grow-1">
                <Outlet />
            </Container>
        </div>
    );
}

export default Layout;
