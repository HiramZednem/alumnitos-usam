
let puertas = 4;
let prendido = false;
let kilometraje = 164000

console.log('El carro tiene un kilometraje de', kilometraje);



// Diego va a su casa
// prender el carro
prendido = true;

let kmMover = 4;
if (prendido == true) {
    kilometraje = kilometraje + kmMover
    console.log('El carro ahora tiene un kilometraje de', kilometraje);
} else {
    console.log('El carro esta apagado tonoto');
}
// apaga el carro porque llego a su casa
prendido = false;


// Diego le presta el carro a Hiram
// Hiram prende el carro
prendido = true;
kmMover = 20;
if (prendido == true) {
    kilometraje = kilometraje + kmMover
    console.log('El carro ahora tiene un kilometraje de', kilometraje);
} else {
    console.log('El carro esta apagado tonoto');
}
// Hiram apaga el carro
prendido = false;


// Diego le presta el carro a Liz
// Liz prende el carro
prendido = true;
kmMover = 5;
if (prendido == true) {
    kilometraje = kilometraje + kmMover
    console.log('El carro ahora tiene un kilometraje de', kilometraje);
} else {
    console.log('El carro esta apagado tonoto');
}
// Liz apaga el carro
prendido = false;







// console.log('puertas', puertas);



// // prints
// console.log(`El color del carro es ${color}`);
// console.log(`El carro tiene ${puertas} puertas`);
// console.log(`La marca del carro es ${marca}`);
// console.log(`El modelo del carro es ${modelo}`);
// console.log(`El año del carro es ${anio}`);
// console.log(`El carro esta prendido ${prendido}`);
// console.log(`El kilometraje del carro es ${kilometraje}`);
// console.log(`Las personas que van en el carro son ${personas}`);