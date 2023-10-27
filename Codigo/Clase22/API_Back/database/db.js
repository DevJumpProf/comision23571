const {Sequelize} = require ("sequelize")
/* console.log(Sequelize); */

// nombre de la db - user - contraseña . {donde esta alojada?,lenguaje,puerto}


const db = new Sequelize ("post23570","root","",{
host: "localhost",
dialect:"mysql",
port:3306

})

module.exports = db