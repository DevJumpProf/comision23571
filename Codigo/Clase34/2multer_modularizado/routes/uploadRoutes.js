const express = require ("express")
const router = express.Router()

const multer = require ("multer")
const path = require ("path")

const {uploadView,uploadOk} = require ("../controllers/uploadController.js")
//PEGO STORAGE DESDE LA DOCUMENTACIONDE MULTER
const storage = multer.diskStorage({ // contiene un objeto con toda la informacion relacionada al almacenamiento y nombre del archico a subir
    destination: function (req, file, cb) {
      cb(null, 'images')
    },
    filename: function (req, file, cb) {
  /*     cb(null, file.fieldname + '-' + Date.now()) */
     cb(null, Date.now()+path.extname(file.originalname)) 
    }
  })
  
  const upload = multer({ storage: storage })


router.get("/",uploadView)

router.post("/",upload.single("image") ,uploadOk)

module.exports = router