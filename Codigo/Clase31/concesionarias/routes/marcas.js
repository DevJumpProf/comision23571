const express = require ("express")
const router = express.Router()

// controlador
const {index,show} = require ("../controllers/marcasControllers.js")

router.get ("/", index)

 router.get ("/:marca", show)


module.exports = router