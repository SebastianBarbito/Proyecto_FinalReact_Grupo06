import { Navigate, Outlet } from 'react-router-dom';
import { useAutorizacion } from "../../hooks/useAutorizacion.js";
export default function ProtectorRutas() {
  const { usuario } = useAutorizacion();
  if (!usuario) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
