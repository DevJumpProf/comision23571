const express = require ("express")
const router = express.Router()

const {indexController,detalleController,bioController  } = require ("../controllers/heroesController")

router.get("/",indexController)
router.get("/:id",detalleController)
router.get("/:id/:bio?",bioController)




module.exports = router