/**
 * ------------------------------
 * push
 * ------------------------------
 *
 * El método push() añade uno o mas elementos al FINAL de un array,
 * y devuelve la longitud nueva del array.
 *
 * El método push() MUTA el arreglo original.
 *
 * Sintaxis: array.push(elemento(s))
 *
 */

const animales = ["perro", "gato", "cerdo", "pony"];

animales.push("elefante");
console.log(animales);

const numeros = [4, 5, 6];

numeros.push(7, 8, 9);
console.log(numeros);

const personas = [
  { name: "Bob", age: 30, live: true },
  { name: "Marina", age: 35, live: false },
  { name: "Martha", age: 40, live: true },
];
personas.push({ name: "Bety", age: 70, live: true });

console.log(personas);