const fs = require("fs"); // requerimos fs
/* console.log(fs); */
const heroesJSON = fs.readFileSync("./data/heroes.json", "utf-8"); // de FS usamos usamos el metodo readFileSync para poder ller el json,utilizamos utf-8 para que tome los acentos y simbolos , y poder leer todos los caracteres
const heroes = JSON.parse(heroesJSON); // //json.parse nos traduce la lectura de fs.readFileSync a javascript y le pasamos el parametro de la constante que leyo el json

module.exports = {
  index: (req, res) => {
    res.render("heroes", { titulo: "Home de /heroes", heroes: heroes }); //enviamos el parametro de la lectura + traduccion del archivo heroes.json.
  },
  detalle: (req, res) => {
    let { id } = req.params;

    heroes.forEach((heroe) => {
      if (id == heroe.id) {
        res.send(`soy ${heroe.nombre} y mi profesion es : ${heroe.profesion}`);
      }
    });
    res.send("no encotramos al heroe / heroina");
  },
  bio: (req, res) => {
    let { id, bio } = req.params;
    heroes.forEach((heroe) => {
      if (bio == "bio" && id == heroe.id) {
        res.send(heroe.resenia);
      } else if (bio !== "bio" && id== heroe.id) {
        res.send(`${heroe.nombre} lamenta que no quieras ver su bio`);
      }
    });
  },
};
