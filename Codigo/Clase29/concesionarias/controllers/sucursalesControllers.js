const fs = require ("fs")
const concesionarias = JSON.parse (fs.readFileSync("./data/concesionarias.json","utf-8"))


module.exports = {

index: (req,res)=>{
    res.render("sucursales",{title:"Sucursales",nombre:"CAC Autos - Sucursales",concesionarias: concesionarias})
}
}


