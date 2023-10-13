const express = require('express');
const router = express.Router();

module.exports = router;

const path = require('path');
const fs = require('fs');

/* Leemos el archivo JSON*/
const traerPersonajes = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/personajes.json')));

/* Respondemos con TODOS los personajes */
router.get("/personajes", (req, res) => {
    let data;
    /* Si tiene un status filtramos por lo que cumplen con esa condición */
    if (req.query.status) {
        const status = req.query.status;
        const resultados = traerPersonajes.filter(personaje => personaje.status.toLowerCase() == status)
        data = resultados;
    } else {
        data = traerPersonajes;
    }
    res.send(data);
})

/* Respondemos con el personaje que corresponde al ID */
router.get("/personajes/:id", (req, res) => {
    // lógica
    const id = req.params.id;
    const personaje = traerPersonajes.find( personaje => personaje.id == id);

    res.send(personaje);
})

