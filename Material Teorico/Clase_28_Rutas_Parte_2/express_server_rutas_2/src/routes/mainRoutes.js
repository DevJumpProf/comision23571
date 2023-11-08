const express = require('express');
const router = express.Router();

/* MAIN ROUTES */

router.get('/home', (req, res) => res.send("Página de Home"));
router.post('/home', (req, res) => res.send(req.body));
router.put('/home', (req, res) => res.send("Página de Home desde PUT"));
router.get('/contact', (req, res) => res.send("Página de Contacto"));
router.get('/about', (req, res) => res.send("Página Sobre Nosotros"));


module.exports = router;
