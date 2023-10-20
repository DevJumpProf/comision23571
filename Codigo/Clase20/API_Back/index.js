const express = require ("express")
const cors = require ("cors")
const PostRouter = require ("./routes/PostRoutes.js")

const app = express()
const port = 3030

app.use(cors())
app.use(express.json())

app.use ("/posteos",PostRouter)


app.listen(port,()=>{
    console.log(`servidor ok en el puerto ${port}`);
})