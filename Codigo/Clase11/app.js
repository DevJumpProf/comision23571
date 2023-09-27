// Math
//Math Pow :devolver un número elevado a un exponente

/* console.log(Math.pow(2,2));
console.log(Math.pow(3,2));  
console.log(Math.pow(3,3));
 */
//Math.round
//Math.round : .round` redondeará un número al número entero más cercano.
/* console.log(Math.round(6.5));
console.log(Math.round(6.45)); */

//Math.floor
//floor` siempre redondeará un número al número entero más cercano hacia abajo
/* console.log(Math.floor(6.9999));
 */
/* Math.ceil */
//Math.ceil : .ceil` siempre se redondeará al número entero más cercano hacia arriba.
/* console.log(Math.ceil(6.01)); */

//Math max devuelve el numero mayor
/* console.log(Math.max(1000,20,50,100)); */

//Math Random
/* console.log(Math.round(Math.random()*10));
console.log(Math.round(Math.random()*10));
console.log(Math.round(Math.random()*42));
console.log(Math.round(Math.random()*42));
console.log(Math.round(Math.random()*42));
console.log(Math.round(Math.random()*42));

console.log(Math.random()*10);

console.log(Math.random()); */

//comparacion

let num1 = 32;
let num2 = "32";
let num3 = 45;
let num4 = 32;
let edad = 17;

//OR ||
console.log(num1 == num2 || num3 < edad);
//        true        false
//and &&
console.log(num1 == num2 && num3 > edad);
//        true        true

console.log(num1 < num3);
console.log(num1 > num3);

console.log(edad >= 18);
console.log(edad <= 18);

console.log(num1 == num2);
console.log(num1 === num2);

console.log(num1 != num2);
console.log(num1 !== num2);

//.length

let password = "1234567";
console.log(password.length);

// condicionales
edad = 18;

if (edad >= 18 && password.length >= 8) {
  console.log("edad y pass Ok");
} else {
  console.log("edad y pass NO Ok");
}

if (edad >= 18) {
  console.log("podes pasar");
} else {
  console.log("no podes pasar");
}

//TERNARIO
edad >= 18 ? console.log("podes pasar") : console.log("no podes pasar");

// SWITCH

let semaforo = "AZUL";

switch (semaforo.toUpperCase()) {
  case "ROJO":
    console.log("No podes pasar");
    break;

  case "AMARILLO":
    console.log("PRECACUCION");
    break;
  case "VERDE":
    console.log("PODES AVANZAR");
    break;
  default:
    console.log("NO PUSISTE UN COLOR CORRECTO");
}


// FUNCIONES

function saludo (){
    console.log("hola Codo a codo");
}
saludo()

function saludo2(nombre,edad){
    console.log(`hola ${nombre} tenes ${edad} años`);
}
saludo2("Juan",35)
saludo2("PePe",36)
saludo2("Agostina",87)

function sumar (num1,num2){
    console.log(num1+num2);
}
sumar(10,10)
sumar(20,10)
sumar(40,10)

//funcion flecha - arrow function

const saludo3 = ()=>{
    console.log("hola Codo a codo"); 
}
saludo3()

const resta = (num1,num2) =>{
return (num1-num2);
}
console.log(resta(10,5));

const calificacion = (num)=>{

    return num>=7? "Pasaste":   "NO Pasaste"
    //if ternario con return
}
console.log(calificacion (7));


const saludar4 = nombre=>`hola ${nombre}`;console.log(saludar4("Pepe"));




