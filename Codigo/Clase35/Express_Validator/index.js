const express = require ("express")
const app = express()
const port = 3000
// un objeto tal cual recomienda la documentacion
const {body,validationResult} = require ("express-validator")

//vamos a capturar datos
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//configuro el motor de vistas = ejs
app.set("view engine", "ejs")
//configurar la ruta de la carpeta view

app.get ("/", (req, res)=>{
    res.render ("index")
})

app.post ("/registrar",[
    //name del input
    body ("nya","Ingrese un nombre y apellido valido")
    .exists()
    .isLength({min:5}),

    body ("email","Ingrese un email valido")
    .exists()
    .isEmail(),

    body ("edad","Ingrese un valor numerico")
    .exists()
    .isNumeric(),


], (req,res)=>{
   const errores = validationResult(req)
/*    console.log(errores) */
   if (!errores.isEmpty()) {
    console.log(req.body);
    const valores = req.body
    const validaciones = errores.array()
    res.render ("index", {validaciones:validaciones,valores:valores})
   }else{
    res.send("Validaciones OK")
   }
})

app.listen(port,()=>{
    console.log(`Server Ok en : http://localhost:${3000}`);
})





