import axios from 'axios';

// Configuración base de axios para todas las peticiones
const instance = axios.create({
    baseURL: 'http://localhost:3000/api', // Ajusta esto según tu configuración
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Interceptor para manejar tokens
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor para manejar errores
instance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('LOCAL_STORAGE_KEY');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default instance;