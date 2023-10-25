// importar la base de datos
const db = require ("../database/db.js")
const {DataTypes} = require ("sequelize")

const PosteosModel = db.define("posteos",{
    title:{type:DataTypes.STRING} ,
    content:{type:DataTypes.STRING}  
})

module.exports= PosteosModel