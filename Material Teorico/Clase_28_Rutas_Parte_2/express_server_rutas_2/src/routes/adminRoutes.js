const express = require('express');
const router = express.Router();

/* ADMIN ROUTES */

router.get('/admin', (req, res) => res.send("Administrar Productos"));
router.get('/create', (req, res) => res.send("Crear Producto"));
router.get('/edit', (req, res) => res.send("Editar Producto"));



module.exports = router;
