/**
 * ------------------------------
 * Shift
 * ------------------------------
 *
 * El método shift() elimina el primer elemento(con indice 0) de un array y lo retorna.
 * Si el array es vacio, retorna undefined.
 *
 * El método shift() MUTA el array, cambiando su longitud original.
 *
 * Sintaxis: arreglo.shift(elemento(s))
 *
 * elemento: string, number, object o cualquier elemento contenido en el array.
 *
 */

const arregloStrings = ["leon", "lobo", "tigre", "perro"];

arregloStrings.shift();
console.log(arregloStrings);

const arregloNumeros = [4, 5, 6];

arregloNumeros.shift();
console.log(arregloNumeros);

const objetoPersona = [
  { name: "Bob", age: 30, live: true },
  { name: "Marina", age: 35, live: false },
  { name: "Martha", age: 40, live: true },
];

objetoPersona.shift();
console.log(objetoPersona);

const automoviles = ["Porche", "Ferrari", "Mercedes", "Audi", "Honda"];

console.log(`Mis automoviles son: ${automoviles}`);
console.log(`Vendí  mi auto ${automoviles.shift()}`);
console.log(`Vendí  mi auto ${automoviles.shift()}`);
console.log(`Vendí  mi auto ${automoviles.shift()}`);
console.log(`Ahora solo me quedan: ${automoviles}`);
