const express = require('express');
const routes = express.Router();

// Definición del esquema y modelo de usuario
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    username: { type: String, required: true, unique: true },
    correo: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    rol: { type: String, enum: ['alumno'], default: 'alumno' },
    nombre: { type: String, required: true },
    apellido: { type: String, required: true }, 
    edad: { type: Number, required: true, min: 1 }, 
    motivo: { type: String, required: true }, 
    horas: { type: Number, required: true, min: 0 } 
});

const Usuario = mongoose.models.Usuario || mongoose.model('Usuario', usuarioSchema);

// Rutas
// Obtener todos los usuarios
routes.get('/obtenerUsuarios', async (req, res) => {
    try {
        const docs = await Usuario.find({}, '-password'); // no devolver password
        res.json(docs);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ message: 'Error al obtener usuarios', error });
    }
});

// Crear un nuevo usuario
routes.post('/crearUsuario', async (req, res) => {
    try {
        let { username, correo, password, rol, nombre, apellido, edad, motivo, horas } = req.body;
        
        username = username?.trim();
        correo = correo?.trim();
        password = password?.trim();
        nombre = nombre?.trim();
        apellido = apellido?.trim();
        motivo = motivo?.trim();
        edad = Number(edad);
        horas = Number(horas);

        console.log('Datos recibidos (limpios):', { username, correo, rol, nombre, apellido, edad, motivo, horas });

        if (!username || !password || !nombre || !correo || !apellido || !motivo || isNaN(edad) || isNaN(horas) || edad <= 0 || horas < 0) {
            return res.status(400).json({ message: 'Todos los campos (username, correo, password, nombre, apellido, edad, motivo, horas) son requeridos y válidos' });
        }
        
        const nuevo = new Usuario({
            username,
            correo,
            password,
            rol: rol || 'alumno',
            nombre,
            apellido,    // Nuevo
            edad,        // Nuevo
            motivo,      // Nuevo
            horas        // Nuevo
        });

        await nuevo.save();
        console.log('Usuario guardado:', nuevo._id);

        const { password: _, ...sinPassword } = nuevo.toObject();
        res.status(201).json(sinPassword);
    } catch (error) {
        console.error('Error al crear usuario:', error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({ 
                message: 'Error de validación', 
                detalles: Object.values(error.errors).map(err => err.message) 
            });
        }
        res.status(500).json({ message: 'Error al crear usuario', error });
    }
});

    // Login: validar credenciales
routes.post('/login', async (req, res) => {
    try {
        // AÑADIR 'correo' a la de-estructuración de req.body
        let { username, password, email, correo } = req.body; 
        
        // Limpiar espacios en blanco
        username = username?.trim();
        password = password?.trim();
        email = email?.trim();
        correo = correo?.trim(); // Nuevo

        // Usar el primer identificador disponible (username, correo, o email)
        const identifier = username || correo || email; // <-- CORRECCIÓN CLAVE
        console.log('Intento de login (identifier):', { identifier });

        if (!identifier || !password) {
            return res.status(400).json({ message: 'username (o correo/email) y password son requeridos' });
        }

            const usuario = await Usuario.findOne({ $or: [ { username: identifier }, { correo: identifier } ] }).lean();
            console.log('Usuario encontrado:', usuario ? 'sí' : 'no');

            if (!usuario) {
                return res.status(401).json({ message: 'Credenciales inválidas' });
            }

            // En este ejemplo simple no hay hashing; comparamos directamente.
            if (usuario.password !== password) {
                console.log('Contraseña incorrecta');
                return res.status(401).json({ message: 'Credenciales inválidas' });
            }

            const { password: _, ...sinPassword } = usuario;
            console.log('Login exitoso:', sinPassword._id);
            return res.json(sinPassword);
        } catch (error) {
            console.error('Error en login:', error);
            return res.status(500).json({ message: 'Error en el proceso de login', error });
        }
    });

module.exports = routes;