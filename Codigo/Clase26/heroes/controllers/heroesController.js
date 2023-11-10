const fs = require ("fs")  //requiero fs


//solucionado era con un punto solo y nada mas :( (ademas arregle un problema en la vista)
/* decia : <%=heroes.nombre%> en lugar de  <%=heroe.nombre%>  */
const heroesJson =fs.readFileSync ("./data/heroes.json","utf-8") //de fs utilizamos readFileSync , para poder leer el json, pero no esta traducido para JS, usamos utf-8 para que tome acentos y simbolos
const heroes = JSON.parse (heroesJson)// json.parse, nos traduce la lectura de fs.readFileSync a JS , le pasamos como parametro la constante que leyo el json


const indexController = (req,res) =>{
res.render("heroes",{titulo:"heroes",heroes:heroes}) // enviamos el parametro de la lectura + traduccion del archivo heroes.json
}

const detalleController = (req,res) =>{
    res.send("vista con detalle de un/a heroes")
    }


const bioController = (req,res)=>{
    res.send("vista con biografia de un/a heroes")
}

module.exports = {indexController,detalleController,bioController  }