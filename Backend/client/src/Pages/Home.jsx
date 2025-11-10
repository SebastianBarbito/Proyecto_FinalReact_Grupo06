import Login from './Login';
import { useAutorizacion } from '../hooks/useAutorizacion';
import '../assets/style/Home.css';

function Home() {
    const { usuario } = useAutorizacion();

    if (!usuario) {
        return (
            <div className="home-container">
                <Login />
            </div>
        );
    }

    return (
        <div className="welcome-container">
            <div className="welcome-content bounce">
                <div className="welcome-emoji">👋</div>
                <h1>¡Bienvenido a Bilinguify!</h1>
                <p className="welcome-user">¡Hola {usuario?.email}!</p>
                <div className="welcome-cards">
                    <div className="welcome-card">
                        <span className="card-emoji">🎮</span>
                        <h3>Juegos Divertidos</h3>
                        <p>Aprende inglés jugando con nuestras actividades interactivas</p>
                    </div>
                    <div className="welcome-card">
                        <span className="card-emoji">🌟</span>
                        <h3>Gana Estrellas</h3>
                        <p>Completa ejercicios y colecciona estrellas</p>
                    </div>
                    <div className="welcome-card">
                        <span className="card-emoji">🎯</span>
                        <h3>Practica</h3>
                        <p>Mejora tu inglés con ejercicios divertidos</p>
                    </div>
                </div>
                <div className="welcome-actions">
                    <a href="/games" className="btn-kid">
                        ¡Empezar a jugar! 🎮
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;