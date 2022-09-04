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
animales.push(nuevoAnimal);
console.log(animales); // ["leon", "lobo", "tigre", "perro", "ballena", "rinoceronte", "AGUILA"]

// Añadir un elemento al final - SIN MUTAR
const nuevosAnimales = [...animales, nuevoAnimal]
console.log(nuevosAnimales); // ["leon", "lobo", "tigre", "perro", "ballena", "rinoceronte", "AGUILA"]

