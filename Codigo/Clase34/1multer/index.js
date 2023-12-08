const express = require ("express")
const multer = require ("multer")
const path = require ("path")

const app = express()
const port = 3000

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

app.set ("view engine", "ejs")


app.get("/upload",(req,res)=>{
    res.render ("upload")
})

app.post("/upload",upload.single("image") ,(req,res)=>{
res.send("image upload")
})

app.listen(port,()=>{
    console.log(`Servidor ok en el puerto ${port}`);
})