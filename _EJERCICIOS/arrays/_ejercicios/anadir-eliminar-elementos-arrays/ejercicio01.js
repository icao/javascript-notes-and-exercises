/**
 * Añadiendo elementos a un arreglo.
 */

const animales = ["leon", "lobo", "tigre", "perro", "ballena", "rinoceronte"];
const nuevoAnimal = "AGUILA";

// Añadir un elemento al inicio - MUTANDO
// animales.unshift(nuevoAnimal);
// console.log(animales); // ["AGUILA", "leon", "lobo", "tigre", "perro", "ballena", "rinoceronte"]

// Añadir un elemento al inicio - SIN MUTAR
// const nuevosAnimales = [nuevoAnimal, ...animales];
// console.log(nuevosAnimales); // ["AGUILA", "leon", "lobo", "tigre", "perro", "ballena", "rinoceronte"]

// Añadir un elemento al final - MUTANDO
// animales.push(nuevoAnimal);
// console.log(animales); // ["leon", "lobo", "tigre", "perro", "ballena", "rinoceronte", "AGUILA"]

// Añadir un elemento al final - SIN MUTAR
// const nuevosAnimales = [...animales, nuevoAnimal]
// console.log(nuevosAnimales); // ["leon", "lobo", "tigre", "perro", "ballena", "rinoceronte", "AGUILA"]

// Añadir un elemento en el indice N - MUTANDO
const index = 2;
// animales.splice(index, 0, nuevoAnimal);
// console.log(animales); // ["leon", "lobo", "AGUILA","tigre", "perro", "ballena", "rinoceronte"]
// console.log(animales[index]); // "AGUILA"

// Añadir un elemento en el indice N - SIN MUTAR
const nuevosAnimales = [
  ...animales.slice(0, 2), // ["leon", "lobo"]
  nuevoAnimal, // ["AGUILA"]
  ...animales.slice(2), // ["tigre", "perro", "ballena", "rinoceronte"]
];


console.log(nuevosAnimales) // ["leon", "lobo", "AGUILA","tigre", "perro", "ballena", "rinoceronte"]
console.log(nuevosAnimales[index]) // "AGUILA"
