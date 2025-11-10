import { useState } from 'react';
import axiosInstance from '../../config/axiosConfig';
import { useNavigate } from 'react-router-dom';
import { useAutorizacion } from '../../hooks/useAutorizacion.js';

function Registrar() {
    const [formData, setFormData] = useState({
        username: '',
        correo: '',
        password: '',
        nombre: '',
        rol: 'alumno'
    });
    const [error, setError] = useState(null);
    const nav = useNavigate();
    const { refreshUsers } = useAutorizacion();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const res = await axiosInstance.post('/crearUsuario', formData);
            if (res.status === 201) {
                alert('Usuario creado correctamente');
                try { await refreshUsers(); } catch (e) { /* ignore */ }
                nav('/login');
            }
        } catch (err) {
            console.error('Error creando usuario', err);
            setError(err.response?.data?.message || 'Error al crear usuario');
        }
    };

    return (
        <div style={{ maxWidth: 480, margin: '1rem auto' }}>
            <h2>Registro de usuario</h2>
            <form onSubmit={handleSubmit} className="needs-validation">
                <div className="mb-3">
                    <label className="form-label">Nombre de usuario</label>
                    <input
                        type="text"
                        name="username"
                        className="form-control"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Correo</label>
                    <input
                        type="email"
                        name="correo"
                        className="form-control"
                        value={formData.correo}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Rol</label>
                    <select
                        name="rol"
                        className="form-select"
                        value={formData.rol}
                        onChange={handleChange}
                    >
                        <option value="alumno">Alumno</option>
                    </select>
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">Registrar</button>
                </div>
            </form>
        </div>
    );
}

export default Registrar;