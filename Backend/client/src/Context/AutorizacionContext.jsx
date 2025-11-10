// Context/AutorizacionContext.jsx
import { createContext, useState, useMemo, useCallback, useEffect } from 'react';
import axiosInstance from '../config/axiosConfig';

export const AutorizacionContext = createContext(null);

export function AutorizacionProvider({ children }) {
  const [usuarioDB, setUsuarioDB] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
   
  const [usuario, setUsuario] = useState(() => {
    try {
      const usuarioAlmacenado = localStorage.getItem('LOCAL_STORAGE_KEY');
      return usuarioAlmacenado ? JSON.parse(usuarioAlmacenado) : null;
    } catch (error) {
      console.error('Error al recuperar usuario del localStorage:', error);
      localStorage.removeItem('LOCAL_STORAGE_KEY');
      return null;
    }
  });

  const buscarUsuarios = useCallback(async () => {
    try {
      setIsLoading(true);
  const response = await axiosInstance.get('/obtenerUsuarios');
      setUsuarioDB(response.data);
      console.log("Usuarios Cargados:", response.data);
    } catch (error) {
      console.error("Error al cargar usuarios:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = useCallback(async (credentials) => {
    try {
      setIsLoading(true);
  // Llamamos al endpoint /login del backend para validar credenciales
  const response = await axiosInstance.post('/login', credentials);
      const usuarioDesdeBackend = response.data;
      setUsuario(usuarioDesdeBackend);
      return { success: true };
    } catch (error) {
      // Si el backend devuelve 401, mando mensaje de credenciales inválidas
      if (error?.response?.status === 401) {
        return { success: false, message: 'Credenciales inválidas' };
      }
      console.error("Error en login:", error);
      setUsuario(null);
      return { success: false, message: error?.response?.data?.message || 'Error en el proceso de login' };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setUsuario(null);
    localStorage.removeItem('LOCAL_STORAGE_KEY');
  }, []);

  useEffect(() => {
    if (usuario) {
      localStorage.setItem('LOCAL_STORAGE_KEY', JSON.stringify(usuario));
    }
  }, [usuario]);

  useEffect(() => {
    buscarUsuarios();
  }, [buscarUsuarios]);

  const valorDelContexto = useMemo(() => ({
    usuario,
    isAuthenticated: !!usuario,
    isLoading,
    login,
    logout,
    refreshUsers: buscarUsuarios
  }), [usuario, login, logout, isLoading]);

  return (
    <AutorizacionContext.Provider value={ valorDelContexto }>
      { children }
    </AutorizacionContext.Provider>
  ) ;
};
