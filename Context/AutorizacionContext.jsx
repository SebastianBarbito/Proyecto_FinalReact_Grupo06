// Context/AutorizacionContext.jsx
import { createContext, useState, useEffect } from 'react';

export const AutorizacionContext = createContext();

export const AutorizacionProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(() => {
    const guardado = localStorage.getItem('usuario');
    return guardado ? JSON.parse(guardado) : null;
  });

  useEffect(() => {
    if (usuario) localStorage.setItem('usuario', JSON.stringify(usuario));
    else localStorage.removeItem('usuario');
  }, [usuario]);

  const login = (email, password) => {
    // Aquí podés conectar al backend más adelante.
    if (email && password) {
      const nuevoUsuario = { email, rol: 'CLIENTE' };
      setUsuario(nuevoUsuario);
      return true;
    }
    return false;
  };

  const logout = () => setUsuario(null);

  return (
    <AutorizacionContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AutorizacionContext.Provider>
  );
};
