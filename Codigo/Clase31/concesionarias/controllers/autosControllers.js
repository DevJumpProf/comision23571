const fs = require ("fs")
const concesionaria= JSON.parse (fs.readFileSync("./data/concesionarias.json","utf-8"))


module.exports = {

index: (req,res)=>{

    let autos = []

    concesionaria.forEach (sucursal=>{
        sucursal.autos.forEach(auto=>{
            autos.push (auto)
        })
    })
 res.render("autos",{title: "Autos",autos:autos})
},
}


