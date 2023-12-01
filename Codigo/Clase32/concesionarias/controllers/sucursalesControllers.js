const fs = require ("fs")
const concesionaria = JSON.parse (fs.readFileSync("./data/concesionarias.json","utf-8"))


module.exports = {

index: (req,res)=>{
    res.render("sucursales",{title:"Sucursales",nombre:"CAC Autos - Sucursales",concesionaria: concesionaria})
},
show: (req,res)=>{
    //guarda en una varianle el nombre de la sucursal (enviado por params)
    //declarar variables cuyo valor pasamos luego
    let sucursalReq = req.params.sucursal
    let nombreSucursal
    let direccionSucursal
    let telefonoSucursal
    let cantidadAutos
    let autosArray

    concesionaria.forEach(sucursal=>{ //lo recorremos y cuando machee la sucursal que enviamos por paramos con la sucursal de la base de datos , le paso los valores a las variables declaradas
      if (sucursalReq== sucursal.sucursal){
        nombreSucursal = sucursal.sucursal
        direccionSucursal = sucursal.direccion
        telefonoSucursal = sucursal.telefono
        cantidadAutos = sucursal.autos.length
        autosArray = sucursal.autos

        res.render("sucursalDetalle",{
            nombreSucursal, direccionSucursal, telefonoSucursal , cantidadAutos,autosArray,title: `${nombreSucursal}`
        })
      }
      
    })

    res.render("error",{titulo:"no pudimos encontrar esa sucursal", descripcion: "intentalo nuevamente en las sucursales habilitadas",title:"ERROR"})

}
}





