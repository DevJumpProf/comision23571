/* requerir el modelo */
const PostModel = require("../models/PosteosModel.js");

// FUNCIONES DEL CRUD
/* LEER TODOS LOS REGISTRO = R */
const getAllPosts = async (req, res) => {
  try {
    const posts = await PostModel.findAll();
    res.json(posts);
  } catch (error) {
    res.json({ message: error.message });
  }
};
/* LEER UN LOS REGISTRO = R */
const getPost = async (req, res) => {
  try {
    const post = await PostModel.findByPk(req.params.id);
    res.json(post);
  } catch (error) {
    res.json({ message: error.message });
  }
};

/* CREAR UN REGISTRO = C */

const createPost = async (req, res) => {
  try {
    await PostModel.create(req.body);
    res.json({
      message: "registro creado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

/* ACTUALIZAR UN REGISTRO 

BORRAR UN REGISTRO */

module.exports = { getAllPosts, getPost, createPost };
