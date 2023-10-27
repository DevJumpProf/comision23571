// importo la base de datos

const db = require ("../database/db.js")

const {DataTypes} = require ("sequelize")

const PostModel = db.define ("posts",{
    title:{type:DataTypes.STRING},
    content:{type:DataTypes.STRING}
})

module.exports = PostModel

