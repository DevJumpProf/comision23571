//funcion
//pedimos los datos a la persona.(nombre - edad)
// indicar si la pérsona es mayor de 18 puede pasar
// si la persona llego antes de las 2 no paga entrada
// si la persona llego despues de las 2 paga en pesos la suma de las letras de su nombre + su edad

// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString ="Batman";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 3;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

const devolverString=str=> str;console.log(devolverString("hola"));

const suma = (x, y)=> x+y; console.log(suma(10,2));

const resta= (x, y)=>x-y; console.log(resta(10,5));

const multiplica = (x, y)=> x*y; console.log(multiplica (10,2));

const divide = (x, y)=>x/y; console.log(divide(21,7));

const sonIguales= (x, y) => x===y; console.log(sonIguales(10,11));

const tienenMismaLongitud = (str1, str2)=> str1.length===str2.length;console.log(tienenMismaLongitud("hola","1234"));

const menosQueNoventa=num=>num<90;console.log(menosQueNoventa(91));

const mayorQueCincuenta=num=> num>50;console.log(mayorQueCincuenta(50));

const obtenerResto= (x, y)=> x%y;console.log(obtenerResto(22,7));

const esPar = num=> num%2===0;console.log(esPar(1));

const esImpar=num=> num%2!==0;console.log(esImpar(1));

/* const elevarAlCuadrado=num=> num*num ;console.log(elevarAlCuadrado(4)) */
/* const elevarAlCuadrado=num=> num**2 ;console.log(elevarAlCuadrado(4)) */
const elevarAlCuadrado=num=>Math.pow(num,2);console.log(elevarAlCuadrado(4))

const elevaralCubo=num=>Math.pow(num,3);console.log(elevaralCubo(4))

const elevar=(num,elevar)=>Math.pow(num,elevar);console.log(elevar(4,5))

const redondearNumero=num => Math.round(num);console.log(redondearNumero(6.7));

const redondearHaciaArriba=num=>Math.ceil(num);console.log(redondearHaciaArriba(6.9));

const numeroRandom = () => Math.random();console.log(numeroRandom());
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
/* const esPositivo = numero=> {
if(numero>0){
  return "Es positivo"
}else if (numero<0){
  return "Es negativo"
}else{
  return false
}
}
console.log(esPositivo(0)); */

// if ternario
const esPositivo = numero => numero===0?"es cero":numero>0? "Es positivo": "Es negativo"

console.log(esPositivo(-1));

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
return `${str}!`
}
console.log(agregarSimboloExclamacion("hola mundo"));

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:
return `soy ${nombre} ${apellido}`
}
console.log(combinarNombres("Natalio","Bonavena"));

const obtenerSaludo=nombre=> `${nombre}!`; console.log(obtenerSaludo("Juan"));

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
return alto*ancho
}
console.log(obtenerAreaRectangulo(10,4));

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
return lado *4
}
console.log(retornarPerimetro(10));

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
return (base * altura)/2

}
console.log(areaDelTriangulo(10,4));

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
return euro*1.2
}
console.log(deEuroAdolar(200));

  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí

function esVocal(letra){
  if(letra.length!=1){
    return "Dato incorrecto"
  }else if (letra=="a"||letra=="e"||letra=="i"||letra=="o"||letra=="u"){
return `la letra ${letra} es vocal`
  }else {
    return `la letra ${letra} No es vocal`
  }


}
console.log(esVocal("W"));
