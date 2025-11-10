import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Alert } from 'react-bootstrap';

function Error() {
    const navigate = useNavigate();
    const [seconds, setSeconds] = useState(5);

    useEffect(() => {
        // Redirige a Layput después de 5 segundos 
        const timer = setTimeout(() => {
            navigate('/', { replace: true });
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    useEffect(() => {
        // Cuenta regresiva visual
        const sec = setInterval(() => {
            setSeconds((s) => (s > 0 ? s - 1 : 0));
        }, 1000);
        return () => clearInterval(sec);
    }, []);

    return (
        <Container
            fluid
            className="p-0"
            style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
            <style>{`
                .error-box { max-width:480px; width:90%; padding:24px; text-align:center; }
                .dots { display:flex; gap:10px; justify-content:center; margin:16px 0; }
                .dot { width:14px; height:14px; border-radius:50%; background:#dc3545; opacity:0.25; transform:translateY(0); animation: jump 0.8s infinite; }
                .dot:nth-child(1){ animation-delay:0s; }
                .dot:nth-child(2){ animation-delay:0.16s; }
                .dot:nth-child(3){ animation-delay:0.32s; }
                @keyframes jump { 0%{opacity:0.25; transform:translateY(0);} 50%{opacity:1; transform:translateY(-8px);} 100%{opacity:0.25; transform:translateY(0);} }
            `}</style>

            <div className="error-box">
                <h4>Intentando buscar la dirección que pusiste</h4>

                <div className="dots" aria-hidden>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>

                <Alert variant="danger">
                    <Alert.Heading>Mala suerte Rey </Alert.Heading>
                    <Alert.Heading>¡Página no encontrada!</Alert.Heading>
                    <p>La dirección a la que  intentaste acceder no existe.</p>
                    <hr />
                    <p className="mb-0">Serás redirigido a la página principal en {seconds} segundos...</p>
                </Alert>
            </div>
        </Container>
    );
}

export default Error;