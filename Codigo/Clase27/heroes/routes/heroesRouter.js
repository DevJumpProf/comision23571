const express = require ("express")
const router = express.Router()

const heroesController= require ("../controllers/heroesController")

router.get("/",heroesController.indexController)
router.get("/:id",heroesController.detalleController)
router.get("/:id/:bio?",heroesController.bioController)




module.exports = router