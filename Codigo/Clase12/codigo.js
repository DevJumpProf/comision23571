//array

// indices        0         1     2 
let animales = ["Gato","Perro","Tigre"]
                                         3
//acceder
console.log(animales[0]);
//cantidad
console.log(animales.length);

//acceder al ultimo elemento
console.log(animales[animales.length-1]);

//spread operator
let jugadores = ["Messi","Martinez","Montiel"]

let jugadoras = ["Banini","Larroquete","Correa"]

let equipoTotal = [...jugadores,...jugadoras,"Brown"]

console.log(equipoTotal);

//destructuring
// copiar datos sin destructuring

/* let leo = jugadores[0]
console.log(leo); */

// copiar datos con destructuring

let [leo,dibu,gonzalo]= jugadores
console.log(gonzalo);

                    
