const express = require('express');
const personajesRoutes = require('./src/routes/personajesRoutes.js');
const app = express();
const port = 3000;

/* Estáticos */
app.use(express.static('public'));

/* Rutas */
app.use('/', personajesRoutes);

/* Listen */
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

