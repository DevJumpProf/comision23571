const cryptoJS = require ("crypto-js")

const mensaje = "Mensaje Secreto"
const clave = "ClaveSecreta12345"

//encriptarlo

const mensajeEncriptado = cryptoJS.AES.encrypt(mensaje,clave).toString();
console.log(mensajeEncriptado);


//decrifrarlo
const mensajeDesencriptado= cryptoJS.AES.decrypt(mensajeEncriptado, "ClaveSecreta12345").toString(cryptoJS.enc.Utf8);

console.log(mensajeDesencriptado);