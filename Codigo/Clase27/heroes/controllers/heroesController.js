const fs = require("fs"); //requiero fs

//solucionado era con un punto solo y nada mas :( (ademas arregle un problema en la vista)
/* decia : <%=heroes.nombre%> en lugar de  <%=heroe.nombre%>  */
const heroesJson = fs.readFileSync("./data/heroes.json", "utf-8"); //de fs utilizamos readFileSync , para poder leer el json, pero no esta traducido para JS, usamos utf-8 para que tome acentos y simbolos
const heroes = JSON.parse(heroesJson); // json.parse, nos traduce la lectura de fs.readFileSync a JS , le pasamos como parametro la constante que leyo el json

module.exports = {
  indexController: (req, res) => {
    res.render("heroes", { titulo: "heroes", heroes: heroes }); // enviamos el parametro de la lectura + traduccion del archivo heroes.json
  },
  detalleController: (req, res) => {
    let { id } = req.params;

    heroes.forEach(heroe => {
      if (id == heroe.id) {
        res.send(`Soy ${heroe.nombre} y mi profesion es ${heroe.profesion}`);
      }
    });
    res.send("no encontramos el heroe");
  },

  bioController: (req, res) => {
    let { id, bio } = req.params;

    heroes.forEach(heroe => {
      if (bio == "bio" && id == heroe.id) {
        res.send(`${heroe.resenia}`);
      } else if (bio !== "bio" && heroe.id) {
        res.send(`${heroe.nombre} lamenta que no quieras ver su bio`);
      }
    });
  }
};
