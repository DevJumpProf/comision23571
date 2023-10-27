const express = require ("express")
const router = express.Router()

const {getAllPosts,getPost,createPost,updatePost,deletePost } = require ("../controllers/Post.Controllers.js")

router.get ("/", getAllPosts)
router.get("/:id", getPost)
router.post ("/", createPost)
router.put ("/:id", updatePost )
router.delete ("/:id", deletePost)  

module.exports =router
