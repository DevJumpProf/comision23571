
// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Batman";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 3;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


const devolverString=str =>document.write (str + "</br>");devolverString("Hola Codo a Codo")

const suma=(x, y)=> document.write ((x+y)+ "</br>");suma(10,10)


const resta= (x, y)=> {
  document.write ((x-y)+ "</br>")
}
resta(10, 5)

const multiplica=(x, y)=> {
  document.write ((x*y)+ "</br>")
}
multiplica(21,3)

const divide= (x, y)=> {
  document.write ((x/y)+ "</br>")
}
divide(10, 2)

const sonIguales=(x, y)=> {
document.write((x===y)+ "</br>")
/* if (x===y){
  document.write(true)
}else{
  document.write(false) 
} */
}
sonIguales(30, 32)


const tienenMismaLongitud=(str1, str2)=> {
document.write((str1.length===str2.length)+ "</br>")
}
tienenMismaLongitud("pepe", "pepo")



const menosQueNoventa =num =>document.write ((num<90)+ "</br>");menosQueNoventa(80)

const mayorQueCincuenta=num =>
document.write ((num>50)+ "</br>")
mayorQueCincuenta(50)

const obtenerResto =(x, y)=> {
  document.write ((x%y)+ "</br>")
}
obtenerResto (27, 2)

const esPar=num =>
document.write (( num % 2 === 0)+ "</br>")
esPar (7)


const esImpar = num =>
document.write (( num % 2 !== 0)+ "</br>")
/* document.write (( num % 2 === 1)+ "</br>") */
esImpar (8)

const elevarAlCuadrado= num =>
document.write ((Math.pow(num, 2))+ "</br>")
elevarAlCuadrado(6)



const elevarAlCubo = num=>
  document.write ((Math.pow(num, 3))+ "</br>")
  elevarAlCubo(3)

const elevar= (num, exponent)=> {
  document.write ((Math.pow(num, exponent))+ "</br>")
}
elevar(3,4)

const redondearNumero = num => 
document.write ((Math.round(num))+ "</br>")
redondearNumero (6.4)


const redondearHaciaArriba =num =>
document.write ((Math.ceil(num))+ "</br>")
redondearHaciaArriba(6.9)


const numeroRandom=()=> 
document.write (Math.random(0,1)+ "</br>")
numeroRandom()

/* const esPositivo=numero =>{
 if(numero>0){
  document.write("es Positivo"+ "</br>")
}else if (numero<0){
document.write("es Negativo"+ "</br>")
}else{
  document.write(false)
}
} 
esPositivo(0)  */

//if ternario
const esPositivo = numero => numero === 0 ? document.write(false) : numero > 0 ? document.write("es Positivo"+ "</br>"): document.write("es Negativo"+ "</br>");
esPositivo(-1)


const agregarSimboloExclamacion=str=>
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
document.write (`${str} !`+ "</br>" )
agregarSimboloExclamacion ("Hola Codo a Codo")

const combinarNombres = (nombre, apellido) =>{
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:
  document.write (`Soy ${nombre} ${apellido}`+ "</br>" )
};
combinarNombres("Bruce", "Wayne")

const obtenerSaludo = nombre =>  document.write (`Hola ${nombre}`+ "</br>");obtenerSaludo("martin")



const obtenerAreaRectangulo= (alto, ancho)=> {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
document.write(alto*ancho+ "</br>" )
}
obtenerAreaRectangulo(10,20)

const retornarPerimetro=lado=>
document.write(lado*4+ "</br>")
retornarPerimetro(34)

const areaDelTriangulo = (base, altura)=> {
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
document.write ((base*altura)/2+ "</br>")
}
areaDelTriangulo(10,8)

const deEuroAdolar = euro=>document.write (`el cambio en dolares es ${euro*1.2}`);deEuroAdolar(100)
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí

  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí

const esVocal=letra=>{
  if(letra.length!=1){
   alert ("Dato incorrecto ingresaste mas de un caracter")
  }else if (letra=="a"||letra=="e"||letra=="i"||letra=="o"||letra=="u"){
    alert (`Efectivamente la letra ${letra} es vocal XD`)
  }else {
    alert (`Ingresaste ${letra} NO es vocal :(`)
  }
};
esVocal(prompt("escribe una letra").toLowerCase())



/* Gabriel Pescio
let vocales = ["a","e","i","o","u"];
if (letra.length === 1){
  for(i=0; i<vocales.length; i++){
    if (letra.toLowerCase() == vocales[i]){
      alert("Es vocal.");
      }}
    }
  alert("Dato incorrecto.");
 */


/*   Francisco Astudillo
  const letra = (letraIng) => {
    let message = (letraIng=='a'||letraIng=='e'||letraIng=='i'||letraIng=='o'||letraIng=='u') ? document.write("¡Es una vocal!") : document.write("¡Es una consonante!");
  };
  
letra (prompt("Ingresa una letra y te digo si es vocal o consonante")); */

/* Yoel Zito */
/* function esVocal(letra){
  letra = prompt('Ingrese una letra').toLocaleLowerCase();
  if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
    return 'Es vocal';
  }else if(letra.length > 1){
    return 'Dato incorrecto';
  } else{
    return 'Dato incorrecto';
  }
}
console.log(esVocal()); */