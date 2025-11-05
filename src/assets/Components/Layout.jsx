import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav style={{ margin: "10px" }}>
        <Link to="/">Inicio</Link> |{" "}
        <Link to="/about">Nosotros</Link> |{" "}
        <Link to="/juegos">Juegos</Link> |{" "}
        <Link to="/login">Iniciar sesión</Link>
        <Link to="/proyecto2">Proyecto 2</Link> |{" "}
        <Link to="/proyecto03">Proyecto 03</Link> | {" "}
        <Link to="/AppProyecto03">Proyecto 04</Link> | {" "}
        <Link to="/AppEstrella">Proyecto 05</Link> | {" "}
      </nav>
      <hr />

      {/* Aquí se renderizan las páginas hijas */}
      <Outlet />
    </div>
  );
}
