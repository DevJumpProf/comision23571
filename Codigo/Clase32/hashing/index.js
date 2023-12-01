const express = require("express");
/* const bcryptjs = require("bcryptjs"); */
const port = 3000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// definimos la ruta
app.post("/login", async (req, res) => {
  //datos que vamos a cargar en thunder / formulario
  const user = req.body.user;
  const password = req.body.password;

  if (user == "admin" && password == 12345) {
    res.json({
      message: "AUTENTICACION CORRECTA",
    });
  } else {
    res.json({
      message: "DATOS ERRONEOS",
    });
  }
});

app.listen(port, () => {
  console.log("Servidor OK");
});
