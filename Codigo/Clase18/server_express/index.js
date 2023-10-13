const express = require ("express");
const app = express()
const port = 3030

app.get ("/",(req,res)=>{
res.send ("estas en el home con el servidor express")
});

app.get ("/conocenos",(req,res)=>{
res.send ("estas en conocenos")
})

app.listen(port,()=>{
console.log(`Server ok en el puerto ${port}`);
})
    