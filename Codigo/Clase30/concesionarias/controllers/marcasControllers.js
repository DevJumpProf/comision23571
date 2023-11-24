const fs = require("fs");
const concesionaria = JSON.parse(
  fs.readFileSync("./data/concesionarias.json", "utf-8")
);

module.exports = {
  index: (req, res) => {
    let marcas = [];
 concesionaria.forEach ((sucursal)=>{
 sucursal.autos.forEach((auto)=>{
if (marcas.includes(auto.marca)==false){
       marcas.push(auto.marca)
}
 })
 })
res.render ("marcas",{title:"Marcas",marcas})
  },
};
