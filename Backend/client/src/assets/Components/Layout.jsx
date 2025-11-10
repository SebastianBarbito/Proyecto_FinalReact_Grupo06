import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAutorizacion } from '../../hooks/useAutorizacion.js';

export default function Layout() {
  const { usuario, isAuthenticated, logout } = useAutorizacion();
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Cerrando sesión...');
    logout();
    console.log('Usuario después de logout:', usuario);
    // Forzar la navegación de manera síncrona
    setTimeout(() => {
      navigate('/', { replace: true });
    }, 100);
  };

  return (
    <div>
      <nav style={{ margin: "10px", display: 'flex', gap: 12, alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <Link to="/">Inicio</Link> | {" "}
          <Link to="/about">Nosotros</Link> | {" "}
          {isAuthenticated && (
            <>
              <Link to="/juegos">Juegos</Link> | {" "}
            </>
          )}
          <Link to="/anteriores/proyecto1">Proyecto 1 (antiguo)</Link> | {" "}
          <Link to="/anteriores/proyecto2">Proyecto 2 (antiguo)</Link> | {" "}
          <Link to="/anteriores/proyecto3">Proyecto 3 (antiguo)</Link> | {" "}
          <Link to="/anteriores/proyecto4">Proyecto 4 (antiguo)</Link>
        </div>

        <div>
          {isAuthenticated ? (
            <>
              <span style={{ marginRight: 8 }}>Hola, {usuario?.nombre || usuario?.username}</span>
              <button className="btn btn-outline-secondary btn-sm" onClick={handleLogout}>Cerrar sesión</button>
            </>
          ) : (
            <Link to="/login">Iniciar sesión</Link>
          )}
        </div>
      </nav>
      <hr />

      {/* Aquí se renderizan las páginas hijas */}
      <Outlet />
    </div>
  );
}
