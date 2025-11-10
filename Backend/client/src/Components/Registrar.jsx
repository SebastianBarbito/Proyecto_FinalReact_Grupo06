import { useState, useEffect } from 'react';
import { useAutorizacion } from '../hooks/useAutorizacion';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button, ListGroup, Badge } from 'react-bootstrap';

function Registrar() {
    const nav = useNavigate();
    const { login, register } = useAutorizacion();
    const [form, setForm] = useState({
        nombre: '',
        apellido: '',
        edad: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        motivo: '',
        horas: '',
    });

    const [errors, setErrors] = useState({});
    const [pwChecks, setPwChecks] = useState({
        lower: false,
        upper: false,
        number: false,
        symbol: false,
    });

    useEffect(() => {
        const pwd = form.password || '';
        setPwChecks({
            lower: /[a-z]/.test(pwd),
            upper: /[A-Z]/.test(pwd),
            number: /\d/.test(pwd),
            symbol: /[^A-Za-z0-9]/.test(pwd),
        });

        // live check for confirm password
        setErrors((prev) => ({ ...prev, confirmPassword: form.confirmPassword && form.password !== form.confirmPassword ? 'Las contraseñas no coinciden' : undefined }));
    }, [form.password, form.confirmPassword]);

    const validate = () => {
        const e = {};
        if (!form.nombre.trim()) e.nombre = 'Ingrese su nombre';
        if (!form.apellido.trim()) e.apellido = 'Ingrese su apellido';
        if (!form.edad || isNaN(form.edad) || Number(form.edad) <= 0) e.edad = 'Edad inválida';
        if (!form.email.match(/^\S+@\S+\.\S+$/)) e.email = 'Email inválido';
        if (!form.username.trim()) e.username = 'Ingrese un nombre de usuario';
        if (!(pwChecks.lower && pwChecks.upper && pwChecks.number && pwChecks.symbol)) e.password = 'La contraseña debe contener mayúscula, minúscula, número y un símbolo';
        if (form.password !== form.confirmPassword) e.confirmPassword = 'Las contraseñas no coinciden';
        if (!form.motivo.trim()) e.motivo = 'Indique el motivo';
        if (form.horas === '' || isNaN(form.horas) || Number(form.horas) < 0) e.horas = 'Horas inválidas';
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const handleSubmit = async (e) => { // La función DEBE ser async
        e.preventDefault();
        if (validate()) {
            // 1. Preparar los datos solo con los campos que el BACKEND necesita
            const userData = {
                username: form.username,
                correo: form.email, 
                password: form.password,
                nombre: form.nombre,
                apellido: form.apellido,
                edad: form.edad,
                motivo: form.motivo,    
                horas: form.horas
            };

        // 2. Llamada al endpoint de REGISTRO
        const registerResult = await register(userData);

            if (registerResult.success) {
                // 3. Si el registro fue exitoso, intentar LOGIN automáticamente
                const loginResult = await login({ correo: form.email, password: form.password });

                if (loginResult.success) {
                    alert('¡Registro exitoso! Ya puedes acceder a los juegos.');
                    nav('/Games');
                } else {
                    alert('Registro exitoso, pero ocurrió un error al iniciar sesión automáticamente. Intenta iniciar sesión manualmente.');
                    nav('/login');
                }
            } else {
                // Error en el registro (ej: usuario ya existe)
                alert(`Error al registrar: ${registerResult.message}`);
            }
        }
    };

    const CheckItem = ({ ok, text }) => (
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <span>{text}</span>
            <Badge bg={ok ? 'success' : 'secondary'} pill>
                {ok ? 'OK' : '✕'}
            </Badge>
        </ListGroup.Item>
    );

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col xs={12} md={10} lg={8}>
                    <Card className="shadow-lg">
                        <Card.Body>
                            <h2 className="mb-4">Crear nueva cuenta</h2>
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control name="nombre" value={form.nombre} onChange={handleChange} isInvalid={!!errors.nombre} />
                                        <Form.Control.Feedback type="invalid">{errors.nombre}</Form.Control.Feedback>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <Form.Label>Apellido</Form.Label>
                                        <Form.Control name="apellido" value={form.apellido} onChange={handleChange} isInvalid={!!errors.apellido} />
                                        <Form.Control.Feedback type="invalid">{errors.apellido}</Form.Control.Feedback>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={4} className="mb-3">
                                        <Form.Label>Edad</Form.Label>
                                        <Form.Control name="edad" value={form.edad} onChange={handleChange} type="number" min="1" isInvalid={!!errors.edad} />
                                        <Form.Control.Feedback type="invalid">{errors.edad}</Form.Control.Feedback>
                                    </Col>
                                    <Col md={8} className="mb-3">
                                        <Form.Label>Correo electrónico</Form.Label>
                                        <Form.Control name="email" value={form.email} onChange={handleChange} type="email" isInvalid={!!errors.email} />
                                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label>Nombre de usuario</Form.Label>
                                    <Form.Control name="username" value={form.username} onChange={handleChange} isInvalid={!!errors.username} />
                                    <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                                </Form.Group>

                                <Row>
                                    <Col md={6} className="mb-3">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control name="password" value={form.password} onChange={handleChange} type="password" isInvalid={!!errors.password} autoComplete="new-password" />
                                        <ListGroup className="mt-2">
                                            <CheckItem ok={pwChecks.lower} text="Contiene letra minúscula" />
                                            <CheckItem ok={pwChecks.upper} text="Contiene letra mayúscula" />
                                            <CheckItem ok={pwChecks.number} text="Contiene número" />
                                            <CheckItem ok={pwChecks.symbol} text="Contiene símbolo" />
                                        </ListGroup>
                                        {errors.password && <div className="text-danger mt-2">{errors.password}</div>}
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <Form.Label>Confirmar contraseña</Form.Label>
                                        <Form.Control name="confirmPassword" value={form.confirmPassword} onChange={handleChange} type="password" isInvalid={!!errors.confirmPassword} autoComplete="new-password" />
                                        <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
                                        {!errors.confirmPassword && form.confirmPassword && (
                                            <div className="text-success mt-2">Las contraseñas coinciden</div>
                                        )}
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label>¿Por qué quieres estudiar inglés?</Form.Label>
                                    <Form.Control as="textarea" rows={3} name="motivo" value={form.motivo} onChange={handleChange} isInvalid={!!errors.motivo} />
                                    <Form.Control.Feedback type="invalid">{errors.motivo}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>¿Cuántas horas puedes dedicar al día?</Form.Label>
                                    <Form.Control name="horas" value={form.horas} onChange={handleChange} type="number" min="0" isInvalid={!!errors.horas} />
                                    <Form.Control.Feedback type="invalid">{errors.horas}</Form.Control.Feedback>
                                </Form.Group>

                                <div className="d-grid">
                                    <Button variant="primary" size="lg" type="submit">Registrar</Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Registrar;