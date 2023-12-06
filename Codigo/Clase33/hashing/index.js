const express = require("express");
const bcryptjs = require("bcryptjs"); 
const port = 3000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let passwordHash

// definimos la ruta
app.post("/login", async (req, res) => {
  //datos que vamos a cargar en thunder / formulario
  const user = req.body.user;
  const password = req.body.password;

  if (user == "admin" && password == 12345) {
    /// dato a encriptar              -  salt salto
    passwordHash = await bcryptjs.hash(password,5)
    res.json({
      message: "AUTENTICACION CORRECTA",
      passwordHash:  passwordHash
    });
  } else {
    res.json({
      message: "DATOS ERRONEOS",
    });
  }
});

app.get ("/comparar",(req,res)=>{
  let comparar = bcryptjs.compareSync("12345",passwordHash)
  if (comparar){
    res.json({
      message: "comparacion CORRECTA"
    });
  } else{
    res.json({
      message: "comparacion incorrecta"
    });

  }
})

app.listen(port, () => {
  console.log("Servidor OK");
});
