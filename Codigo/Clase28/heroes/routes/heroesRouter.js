const express = require ("express")
const router = express.Router()

const heroesController = require ("../controllers/heroesController.js")

// controladores

router.get("/",heroesController.index)
router.get("/:id",heroesController.detalle)
router.get("/:id/:bio?",heroesController.bio)



module.exports = router