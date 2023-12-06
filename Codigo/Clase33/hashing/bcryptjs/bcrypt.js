const bcryptjs = require("bcryptjs"); 

let password = "juanito"
let hash = bcryptjs.hashSync(password,8)

console.log(hash);

let comparacion =  bcryptjs.compareSync("juanito",hash)

console.log(comparacion);




