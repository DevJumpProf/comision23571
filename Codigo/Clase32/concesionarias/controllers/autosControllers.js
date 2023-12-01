const fs = require("fs");
const concesionaria = JSON.parse(
  fs.readFileSync("./data/concesionarias.json", "utf-8")
);

module.exports = {
  index: (req, res) => {
    let autos = [];

    concesionaria.forEach((sucursal) => {
      sucursal.autos.forEach((auto) => {
        autos.push(auto);
      });
    });
    res.render("autos", { title: "Autos", autos: autos });
  },

  dato: (req, res) => {
    let marca = req.params.marca;
    let dato = req.params.dato;
    let autos = [];

    concesionaria.forEach((sucursal) => {
      sucursal.autos.forEach((auto) => {
        if (
          auto.marca == marca &&
          (auto.modelo == dato || auto.anio == dato || auto.color == dato)
        ) {
          autos.push(auto);
        }
      });
    });
    if (autos.length > 0) {
      res.render("dato", { marca, autos: autos, title: `${marca}` });
    } else
      res.render("error", {
        titulo: "no pudimos encontrar esa sucursal",
        descripcion: "intentalo nuevamente en las sucursales habilitadas",
        title: "ERROR",
      });
  },
};
