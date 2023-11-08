const express = require('express');
const app = express();
const methodOverride = require('method-override');
const mainRoutes = require('./src/routes/mainRoutes.js');
require('dotenv').config();

const PORT = process.env.PORT;

/* Estáticos */

app.use(express.static('public'));

/*
* Convertimos los datos entrantes en formato
* application/x-www-form-urlencoded y application/json
* a un formato entendible por el servidor
*/

app.use(express.urlencoded());
app.use(express.json());


/* Override para habilitar los métodos PUT y DELETE */

app.use(methodOverride('_method'));

/* Rutas */

app.use('/', mainRoutes);


// Middleware para manejar el error 404

app.use((req, res, next) => {
    res.status(404).send('Recurso no encontrado');
});


/* Listen */

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));



