const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const archivosDB = require('./conection');

// middleware para parsear JSON y permitir CORS desde el cliente
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

// endpoint raiz
app.get('/', (req, res) => {
    res.send('Hola Mundo desde el servidor con Express');
});

// health check para el cliente
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

// routing
const usuarios = require('./src/model/usuarios.js');

// middleware de rutas API
app.use('/api', usuarios);

//listening
// Iniciar servidor solo después de que MongoDB esté conectado
mongoose.connection.once('open', () => {
    app.listen(3000, () => {
        console.log('MongoDB conectado y servidor Express corriendo en el puerto 3000');
    });
});

// Manejar errores de aplicación
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Error interno del servidor', error: err.message });
});