const express = require ("express")
const homeRouter = require ("./routes/homeRouter.js")
const heroesRouter = require ("./routes/heroesRouter.js")
const path = require ("path")


const app = express()
const port = 3000


app.set("views",path.join(__dirname,"views"))
app.set ("view engine","ejs")

app.use(express.static(path.join(__dirname,"public")))

app.use("/",homeRouter)
app.use("/heroes",heroesRouter)

app.listen (port,()=>{
    console.log(`Server ok en el puerto ${port}`);
})

