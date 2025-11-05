import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import sonido from '../sounds/sonido.mp3';
import FormJuegos from "../Componets/formJuegos";
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Games.css'
function Games () {
    const navegacion = useNavigate();

    const ejecutarSonido = () => {

     const audio = new Audio(sonido);
     audio.play()
     };
    
    const manejarClickImagen = () => {
        ejecutarSonido();
        navegacion("/");

    };
    return (
        <Container className="games-container fade-in">
            <Row className="games-header">
                <Col>
                    <h1 className="display-4 mb-4">Juegos</h1>
                </Col>
            </Row>
            
            <Row className="mb-4">
                <Col>
                    <Card>
                        <Card.Body>
                            <p className="lead">
                                Lorem ipsum
                                <Link to="/contact" className="mx-1">dolor</Link>
                                sit amet consectetur adipisicing elit. Reprehenderit magnam nostrum error sapiente.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col md={6} className="mx-auto text-center">
                    <img 
                        src={logo} 
                        className="img-fluid rounded shadow" 
                        onClick={manejarClickImagen}
                        style={{ cursor: 'pointer', maxWidth: '100%' }}
                        alt="Logo del juego"
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card className="mb-4">
                        <Card.Header>
                            <h2 className="mb-0">Cargar Juegos</h2>
                        </Card.Header>
                        <Card.Body>
                            <FormJuegos />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <h2 className="mb-0">Lista de Juegos</h2>
                        </Card.Header>
                        <Card.Body>
                            {/* Aquí irá la lista de juegos */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Games;
