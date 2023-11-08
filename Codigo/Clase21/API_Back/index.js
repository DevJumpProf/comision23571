const express = require ("express")
const cors = require ("cors")
const PostRouter = require ("./routes/PostRoutes.js")
const db = require ("./database/db.js")

const app = express()
const port = 3030



app.use(cors())
app.use(express.json())

app.use ("/posteos",PostRouter)

// funcion para conectarme a la base de datos

const conexionDB = async () =>{
try {
    await db.authenticate()
    console.log("estas conectado a la base de datos");
} catch (error) {
    console.log(`hay un error y es el error: ${error}`);
}
}


app.listen(port,()=>{
    conexionDB()
    console.log(`servidor ok en el puerto ${port}`);
})