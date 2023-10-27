const express = require ("express")
const cors = require ("cors")
const PostRouter = require ("./routes/PostRouter.js")
const db = require ("./database/db.js")

const app = express()
const port = 3030

app.use (cors());
app.use(express.json());

app.use ("/posts",PostRouter)

//conexion a la database
const conexionDB = async ()=>{
    try {
        await db.authenticate()
        console.log(`ok conectado a la base de datos`);
    } catch (error) {
        console.log(`hay un error y es el siguiente : ${error}`);
    }
}



app.listen(port,()=>{
    conexionDB()
    console.log(`servidor ok en el puerto ${port}`);
})