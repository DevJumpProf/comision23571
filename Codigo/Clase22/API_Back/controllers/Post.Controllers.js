/* requerir el modelo */
const PostModel = require ("../models/PostModel.js")

//metodos del C-R-U-D
 
//MOSTRAR TODOS LOS REGISTROS   - READ - GET
const getAllPosts = async (req,res) =>{
    try {
          const posts = await PostModel.findAll()  
          res.json (posts)
    } catch (error) {
        res.json ({message:error.message})
    }
}   

//mostrar un registro - READ - GET
const getPost = async (req,res) =>{
try {
    const post = await PostModel.findByPk(req.params.id)
    res.json(post)
} catch (error) {
    res.json ({message:error.message})
}
}

//crear un registo - CREATE - POST

const createPost=async(req,res)=>{
    try {
       await PostModel.create(req.body)
       res.json({
        "message": "registro creado correctamente"
       })
    } catch (error) {
        res.json ({message:error.message})
    }
}

//ACTUALIZAR UN REGISTRO - U - UPDATE - => PUT
const updatePost = async (req,res)=>{
  try {
 await PostModel.update(req.body,{
    where:{id:req.params.id}
 })
 res.json({
    "message": "registro editado correctamente"
   })
  } catch (error) {
    res.json ({message:error.message})
  }
}


//BORRAR UN REGISTRO - D - DELETE - => DELETE

const deletePost = async(req,res)=>{
    try {
        await PostModel.destroy({
            where:{id:req.params.id}
         })
         res.json({
            "message": "registro borrado correctamente"
           })   
    } catch (error) {
        res.json ({message:error.message}) 
    }
}



module.exports = {getAllPosts,getPost,createPost,updatePost,deletePost  }