//array
//                 0        1       2       3        4
/* let animales = ["Gato", "Perro","Conejo","Perro","Rata"] */
let numeros = [1,2,8,7,4,6,7,3,12]

/* 
animales.splice (1,0,"Cocodrilo","Tortuga")
console.log(animales)  
 */
// .PUSH()
/* animales.push("Cocodrilo")
console.log(animales) */
//.pop ()
// elimina elemento al final del array
/* animales.pop()
console.log(animales) */

//unshift
//Agrega un dato al inicio del array
/* animales.unshift("Tortuga")
console.log(animales) */

//shift
//elimina un dato al inicio del array
/* animales.shift()
console.log(animales); */


//SLICE
/* slice() : Devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.  */
/* let nuevoArray = animales.slice(0,4)
console.log(nuevoArray); */

//find
/* .find() : Recorre el array y retorna la primera coincidencia del elemento que se busca.
.find */

/* const nuevoArray = numeros.find (e=>e>7) */
/* const nuevoArray = animales.find (e=>e.length>4)
console.log(nuevoArray)
 */
/* .forEach() : Permite iterar el contenido de un array. Recibe un callback que toma como parámetro el elemento actual de la iteración y el indice del mismo.
forEach */

/* animales.forEach((elements,i)=>{
    console.log(`el animal ${elements} está en la posicion "${i+1}`);
})
 */


/* .filter() : Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición
.filter */
/* let nuevoArray=animales.filter (elements=>elements ==="Perro"||elements==="Rata" )
console.log(nuevoArray); */

//map.
/* .map() : Permite recorre el array y modificar los elements presentes en él, 
retornando un nuevo array con la misma longitud que el original. */

/* let nuevoArray = numeros.map (elements=>elements*10)
console.log(nuevoArray); */

//while

/* let numero = 450

while (numero<1000){
numero++;
console.log(numero);
if(numero===500){
    break;
}
} */

/* do while */
/* let numero = 21

do {
  numero ++;
  console.log(numero);  
}while (numero<20) */

         //       0        1        2       3      4
/* let animales = ["Gato", "Perro","Conejo","Perro","Rata"]
    // .length     1       2       3        4       5

for (let i=0; i<animales.length; i++){
    console.log(animales[i]);
} */

//OBJETOS
/* CLAVES  - VALORES */

const celular = {
    marca: "motorola",
    modelo: "V3",
    stock: true,
    encender: ()=>{
        console.log(`celular ${celular.marca}`);
    }
/*     encender:function (){
        console.log(`el celular es ${this.marca} modelo ${this.modelo}`);
    } */
}

/* this. */
/* celular.encender() */


//notacion de puntos
/* console.log(`el celular es ${celular.marca}`); */
// notacion corchetes
/* console.log(celular["marca"]); */


//spread operator objetos

let generoAccion = {
    nombreGenero: "Accion",
    apta: true,
    ranking: 1
}

let soyLeyenda={
    actor: "Will Smith",
    duracion: 2.10,
    ...generoAccion
}

console.log(soyLeyenda);


/* copiar datos sin destructuring */
/* let actor = soyLeyenda.actor
console.log(actor); */

/* copiar datos con destructuring */
/* 
let {actor:actorazo,duracion} = soyLeyenda
console.log(actor); */






