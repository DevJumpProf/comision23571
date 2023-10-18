const express = require ("express")
const app = express()

const port = 3030

app.get("/",(req, res)=>{
res.send("Home")
})

app.listen(port,()=>{
    console.log(`servidor ok en el puerto ${port}`);
})