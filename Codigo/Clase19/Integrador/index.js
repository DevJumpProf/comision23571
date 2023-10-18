const express = require ("express")
const fs  = require ("fs")
const app = express();
const port = 3030;

app.use(express.static("public"))

app.get("/",(req,res)=>{
/* console.log(__dirname+"public/index.html"); */
res.sendFile(__dirname+"/public/index.html")
})

app.get("/heroes",(req,res)=>{
res.sendFile(__dirname+"/public/data/heroes.json")
})

/*     JSON.parse
    JSON.stringify */
    
app.get("/heroes/:id",(req,res)=>{
    const id = req.params.id
    const data = fs.readFileSync(__dirname+"/public/data/heroes.json")
    const result = JSON.parse (data)
    const filtered = result.filter(item=>item.id==id)
    res.send(filtered)
})

app.listen (port,()=>{
    console.log(`servidor ok en el puerto ${port}`);
})

