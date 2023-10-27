const express = require ("express");
const app = express();
const port = 3030;
const mainRoutes = require ("./src/routes/mainRoutes")


/* definimos la carpeta de archivos estaticos */
app.use(express.static("public"))

/* parsea los datos recibidos por post */
app.use(express.urlencoded())
app.use(express.json())

/* rutas de la aplicacion */
app.use("/",mainRoutes)
/* app.use("/shop",ShopRoutes)
app.use("/admin",adminRoutes) */

/* app.use(norFoundPage) */


app.listen(port,()=>{
    console.log(`Servidor ok en el puerto ${port}`);
})


