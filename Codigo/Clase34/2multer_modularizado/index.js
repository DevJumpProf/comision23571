const express = require ("express")

const app = express()
const port = 3000

const uploadRouter = require ("./routes/uploadRoutes.js")

app.set ("view engine", "ejs")

app.use ("/upload",uploadRouter)

app.listen(port,()=>{
    console.log(`Servidor ok en el puerto ${port}`);
})