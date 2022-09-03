/**
 * ------------------------------
 * Pop
 * ------------------------------
 *
 * El método pop() elimina el ultimo elemento de un array, y lo devuelve.
 * Este método  cambia la longitud del array.
 * Si llama a pop() en un array vacio, devuelve undefined.
 *
 * El método pop() MUTA el objeto array original.
 *
 * Sintaxis:  array.pop()
 */

const arregloStrings = ["leon", "lobo", "tigre", "perro"];

console.log(`Eliminando el elemento ${arregloStrings.pop()} del final`);
console.log(arregloStrings);

const arregloNumeros = [4, 5, 6];

console.log(`Eliminando el elemento ${arregloNumeros.pop()} del final`);
console.log(arregloNumeros);

const objetoPersona = [
  { name: "Julia", age: 30, live: true },
  { name: "Marina", age: 35, live: false },
  { name: "Bob", age: 40, live: true },
];

console.log(
  `Eliminando el elemento ${JSON.stringify(objetoPersona.pop())} del final`
);
console.log(objetoPersona);
