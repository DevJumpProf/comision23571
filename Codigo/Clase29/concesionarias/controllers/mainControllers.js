const fs = require ("fs")
const concesionariaJSON = JSON.parse (fs.readFileSync("./data/concesionarias.json","utf-8"))


module.exports = {

index: (req,res)=>{
    res.render("main",{
        title:"Concesionarias",
        nombre:"CAC Autos",
        concesionaria: concesionariaJSON
    })
}
}


