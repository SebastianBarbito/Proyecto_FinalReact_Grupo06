import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Salida({ nombre, apellido, lu, volver }) {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <h1>¡¡SALUDOS!!</h1>
            <h2>Bienvenido {nombre} {apellido}</h2>
            <h2>Tu LU es: {lu}</h2>
            <Button variant="outline-dark" onClick={volver} className="mt-3">
                Volver al formulario
            </Button>
        </div>
    );
}

function Saludo() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [lu, setLu] = useState('');
    const [mostrarSaludo, setMostrarSaludo] = useState(false);

    const enviar = (e) => {
        e.preventDefault();
        setMostrarSaludo(true);
    };

    const regresar = () => {
        setMostrarSaludo(false);
        setNombre('');
        setApellido('');
        setLu('');
    };

    if (mostrarSaludo) {
        return <Salida nombre={nombre} apellido={apellido} lu={lu} volver={regresar} />;
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Form 
                onSubmit={enviar} 
                className="p-5 border rounded bg-light shadow-lg w-100" 
                style={{ maxWidth: 600 }}
            >
                <h1 className="text-center">¡Bienvenido!</h1>
                <h2 className="text-center mb-4" style={{ fontSize: '1.1rem' }}>
                    Introduzca los datos para enviar un saludo :D
                </h2>
                <Form.Group className="mb-4">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                        required
                        size="lg"
                    />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        type="text"
                        value={apellido}
                        onChange={e => setApellido(e.target.value)}
                        required
                        size="lg"
                    />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>LU</Form.Label>
                    <Form.Control
                        type="text"
                        value={lu}
                        onChange={e => setLu(e.target.value)}
                        required
                        size="lg"
                    />
                </Form.Group>
                <div className="d-flex justify-content-center">
                    <Button variant="outline-dark" type="submit" size="lg">
                        Enviar saludo
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default Saludo;