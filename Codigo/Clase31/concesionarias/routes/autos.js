const express = require ("express")
const router = express.Router()

// controlador
const {index} = require ("../controllers/autosControllers.js")

router.get ("/", index)
/* router.get ("/:marca", controlador)
router.get ("/:marca/:dato", controlador) */

module.exports = router