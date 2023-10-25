const express = require ("express")
const {getAllPosts,getPost,createPost} = require ("../controllers/PostControllers.js")

const router = express.Router()

router.get ("/",getAllPosts)
router.get("/:id",getPost)
router.post("/",createPost)
/* router.post("/",funcion envia un post a la base de datos)
router.put("/:id",funcion actualiza un post a la base de datos)
router.delete("/:id",funcion borra un post) */

module.exports=router

//PostRouter
