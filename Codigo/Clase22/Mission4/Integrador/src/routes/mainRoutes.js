const express = require ("express");
const router = express.Router()

/* controladores */
const {
    homeview,
/*     contactView,
    aboutView,
    faqsView */
} = require ("../controllers/mainControllers.js")
/* rutas */

router.get("/home",homeview)
router.get("/contact",contactView)
router.get("/about",aboutView)
router.get("/faqs",faqsView)  
module.exports = router