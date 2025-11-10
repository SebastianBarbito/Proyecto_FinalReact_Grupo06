import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAutorizacion } from '../hooks/useAutorizacion';
import '../assets/style/Login.css';

export default function Login() {
  const { login } = useAutorizacion();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleSubmit = async (e) => { // Agregar async para manejar la respuesta
    e.preventDefault();

    const result = await login({ 
      email: email, 
      password: password 
    });

    if (result.success) {
      nav('/');
    } else {
      alert(result.message); 
    }
  };


  const handleRegistro = () => {
    nav('/register');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Iniciar sesión</h2>
        <div className="form-group">
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
        </div>
        <button type="submit" className="login-button">Ingresar</button>
        <button type="button" onClick={handleRegistro} className="register-button">
          Registrarse
        </button>
      </form>
    </div>
  );
}
