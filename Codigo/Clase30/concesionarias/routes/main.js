    const express = require ("express")
    const router = express.Router()

    // controlador
    const {index} = require ("../controllers/mainControllers.js")

    router.get ("/", index)

    module.exports = router