/**
 * eliminando elementos a un arreglo.
 */

const animales = ["leon", "lobo", "tigre", "perro", "ballena", "rinoceronte"];

// Eliminar un elemento al inicio - MUTANDO
// animales.shift();
// console.log(animales); // ["lobo", "tigre", "perro", "ballena", "rinoceronte"];

// Eliminar un elemento al inicio - SIN MUTAR
// const nuevosAnimales = [...animales.slice(1)];
// const nuevosAnimales = [...animales.slice(0)];
// console.log(nuevosAnimales); // ["lobo", "tigre", "perro", "ballena", "rinoceronte"];

// Eliminar un elemento al final - MUTANDO
// Usando pop()
// animales.pop();
// console.log(animales); // ["leon", "lobo", "tigre", "perro", "ballena"];

// Usando splice()
// animales.splice(animales.length - 1, 1);
// console.log(animales); // ["leon", "lobo", "tigre", "perro", "ballena"];

// Eliminar un elemento al final - SIN MUTAR
// const nuevosAnimales = [...animales.slice(0, animales.length - 1)];
// console.log(nuevosAnimales);

// Eliminar cualquier elemento de un array - MUTANDO
let indexToDelete = 2;
// console.log(animales) //  ["leon", "lobo", "tigre", "perro", "ballena", "rinoceronte"]
// animales.splice(indexToDelete, 1); // Elimina index 2 : 'TIGRE'
// console.log(animales); // [ 'leon', 'lobo', 'perro', 'ballena', 'rinoceronte' ]

// Eliminar cualquier elemento de un array - SIN MUTAR

const nuevosAnimales = [
  ...animales.slice(0, indexToDelete),
  ...animales.slice(indexToDelete + 1),
];

console.log(nuevosAnimales); // [ 'leon', 'lobo', 'perro', 'ballena', 'rinoceronte' ]
