const express = require ("express")
const router = express.Router()

// controlador
const {index,} = require ("../controllers/sucursalesControllers.js")

router.get ("/", index)

/* router.get ("/:sucursal", show)
 */

module.exports = router