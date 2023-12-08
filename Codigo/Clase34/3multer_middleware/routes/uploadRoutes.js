const express = require ("express")
const router = express.Router()
const {uploadView,uploadOk} = require ("../controllers/uploadController.js")
const multer = require ("../middlewares/upload_middleware.js")

router.get("/",uploadView)
router.post("/",multer.single("image") ,uploadOk)

module.exports = router