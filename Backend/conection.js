const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://sebastianbarbito:Ro-47437932@aprendizajedeingles.ntia6se.mongodb.net/BD_Ingles?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexión exitosa a MongoDB Atlas');
}).catch(err => {
    console.error('Error conectando a MongoDB:', err);
});

mongoose.connection.on('error', err => {
    console.error('Error en la conexión de MongoDB:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB desconectado');
});

module.exports = mongoose;
