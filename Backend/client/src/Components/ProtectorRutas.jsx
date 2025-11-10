import { Navigate } from 'react-router-dom';
import { useAutorizacion } from "../hooks/useAutorizacion";
export default function ProtectorRutas({ children }) {
  const { usuario } = useAutorizacion();
  return usuario ? children : <Navigate to="/login" replace />;
}
