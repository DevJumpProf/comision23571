const express = require ("express")
const path = require ("path")
const app = express()

const port = 3000

app.set ("views",path.join(__dirname,"views"))
app.set ("view engine","ejs")

const homeRouter = require ("./routes/homeRouter.js")
const heroesRouter = require ("./routes/heroesRouter.js")

app.use("/",homeRouter)
app.use("/heroes",heroesRouter)


app.listen (port,()=>{
    console.log(`Servidor ok en el puerto ${port}`);
})