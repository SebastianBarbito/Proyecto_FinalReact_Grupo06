import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAutorizacion } from '../../hooks/useAutorizacion.js';

export default function Login() {
  const { login } = useAutorizacion();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
  const result = await login({ username, password });
      if (result?.success) {
        nav('/juegos');
      } else {
        alert(result?.message || 'Credenciales inválidas');
      }
    } catch (err) {
      console.error('Error en login:', err);
      alert('Ocurrió un error al iniciar sesión');
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: '1rem auto' }}>
      <form onSubmit={handleSubmit}>
        <h2>Iniciar sesión</h2>
        <div style={{ marginBottom: 8 }}>
          <label>Usuario</label>
          <input
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Usuario (username)"
            required
          />
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn btn-primary" type="submit">Ingresar</button>
          <button type="button" className="btn btn-outline-secondary" onClick={() => nav('/register')}>Registrarse</button>
        </div>
      </form>
    </div>
  );
}
