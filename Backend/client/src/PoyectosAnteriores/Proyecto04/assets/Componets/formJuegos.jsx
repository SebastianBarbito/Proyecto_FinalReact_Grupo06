import { useState, useEffect, useCallback } from "react";
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';

function FormJuegos() {
    const [juegos, setJuegos] = useState([]);
    const [mensaje, setMensaje] = useState(null);
    const [editando, setEditando] = useState(false);

    const [formulario, setFormulario] = useState({
        id: '',
        nombre: '',
        precio: '',
        tipo: '',
        plataforma: '',
        edad: '',
        estado: true,
        modificado: true
    });
    useEffect(() => {
        console.log(juegos)
    }, [juegos]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({ ...formulario, [name]: value });
    };

    const agregarJuego = (e) => {
        e.preventDefault();
        if (!formulario.nombre || !formulario.precio || !formulario.tipo || !formulario.plataforma || !formulario.edad) {
            setMensaje({ tipo: 'danger', texto: 'Por favor, complete todos los campos' });
            return;
        }
        if (editando) {
            // Guardar cambios
            setJuegos(juegos.map(j => j.id === formulario.id ? {
                ...j,
                nombre: formulario.nombre,
                precio: parseFloat(formulario.precio),
                tipo: formulario.tipo,
                plataforma: formulario.plataforma,
                edad: parseInt(formulario.edad)
            } : j));
            setMensaje({ tipo: 'success', texto: '¡Juego modificado exitosamente!' });
        } else {
            // Agregar nuevo
            const nuevoJuego = {
                id: Date.now(),
                nombre: formulario.nombre,
                precio: parseFloat(formulario.precio),
                tipo: formulario.tipo,
                plataforma: formulario.plataforma,
                edad: parseInt(formulario.edad),
            };
            setJuegos([...juegos, nuevoJuego]);
            setMensaje({ tipo: 'success', texto: '¡Juego agregado exitosamente!' });
        }
        setFormulario({
            id: '',
            nombre: '',
            precio: '',
            tipo: '',
            plataforma: '',
            edad: '',
            estado: true,
            modificado: true
        });
        setEditando(false);
    };

    const agregar_modificado = (juego_modificado) => {
        const nuevo_juego = juegos.map(j => {
            if (j.id === juego_modificado.id) {
                return juego_modificado;
            }
            return j;
        });
        setJuegos(nuevo_juego);
    }

    const modificar = (j) => {
        setFormulario({
            id: j.id,
            nombre: j.nombre,
            precio: j.precio,
            tipo: j.tipo,
            plataforma: j.plataforma,
            edad: j.edad,
            estado: true,
            modificado: true
        });
        setEditando(true);
    };

    return (
        <>
            <Form onSubmit={agregarJuego} className="p-3">
                <Row className="g-3">
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Nombre del Juego</Form.Label>
                            <Form.Control
                                type="text"
                                name="nombre"
                                value={formulario.nombre}
                                onChange={handleChange}
                                placeholder="Ej: The Last of Us"
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                                type="number"
                                name="precio"
                                value={formulario.precio}
                                onChange={handleChange}
                                placeholder="Ej: 50"
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Tipo</Form.Label>
                            <Form.Control
                                type="text"
                                name="tipo"
                                value={formulario.tipo}
                                onChange={handleChange}
                                placeholder="Ej: Acción"
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Plataforma</Form.Label>
                            <Form.Control
                                type="text"
                                name="plataforma"
                                value={formulario.plataforma}
                                onChange={handleChange}
                                placeholder="Ej: PlayStation"
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Edad</Form.Label>
                            <Form.Control
                                type="number"
                                name="edad"
                                value={formulario.edad}
                                onChange={handleChange}
                                placeholder="Ej: 18"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <div className="d-grid gap-2 mt-4">
                    <Button variant={editando ? "warning" : "primary"} type="submit" size="lg">
                        {editando ? "Guardar Cambios" : "Agregar Juego"}
                    </Button>
                </div>
            </Form>
            {juegos.length > 0 &&  <h2>Lista de Juegos</h2>}
            <ul>
                {juegos.map(j => (
                                        <li key={j.id}>
                                            <div>
                                                <strong>ID:</strong> {j.id} <br/>
                                                <strong>Nombre:</strong> {j.nombre} <br/>
                                                <strong>Precio:</strong> {j.precio} <br/>
                                                <strong>Plataforma:</strong> {j.plataforma} <br/>
                                                <strong>Edad:</strong> {j.edad} <br/>
                                                <strong>Tipo:</strong> {j.tipo}
                                            </div>
                                            <button onClick={() => modificar(j)}>Modificar</button>
                                        </li>
                ))}
            </ul>
        </>
    );
}

export default FormJuegos;