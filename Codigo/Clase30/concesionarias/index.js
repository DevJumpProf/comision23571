const express = require ("express")
const path = require ("path")

const port = 3000

const app = express()

const mainRouter= require ("./routes/main.js")
const sucursalesRouter= require ("./routes/sucursal.js")
const marcasRouter = require("./routes/marcas.js")
// rutas
 /*  sucursales
 marcas
 autos */

// configuramos nuestro motor de vistas y su carpeta

app.set ("views",path.join(__dirname,"views"))
app.set ("view engine", "ejs")

app.use (express.static(path.join(__dirname,"public")))

//definir las rutas
app.use ("/",mainRouter) 
app.use("/sucursales",sucursalesRouter)
app.use ("/marcas",marcasRouter)


app.listen(port,()=>{
    console.log( `Servidor de concesionarias OK en el puerto ${port}`);
})
