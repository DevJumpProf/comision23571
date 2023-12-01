const express = require ("express")
const router = express.Router()

// controlador
const {index,dato} = require ("../controllers/autosControllers.js")
const {show} = require ("../controllers/marcasControllers.js")

router.get ("/", index)
 router.get ("/:marca", show)
router.get ("/:marca/:dato", dato)

module.exports = router