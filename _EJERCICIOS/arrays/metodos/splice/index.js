/**
 * ------------------------------
 * Splice
 * ------------------------------
 *
 * El método splice() cambia el contenido de un array eliminando elementos existentes
 * y/o agrega/inserta uno o más nuevos elementos.
 *
 * El método splice() MUTA el objeto array original.
 * Sobre escribe el arreglo original.
 *
 *
 * Sintaxis:  arrar.splice(startIndex, howMany, element(s))
 *
 * starIndex: índice donde se comenzará a cambiar(agregar/remover) el array.
 * Si es negativo, empezara esa cantidad de elementos iniciando desde el final del arreglo.
 *
 * howMany: Número de elementos a remover.
 * Si es = 0 ó negativo. NO se eliminará ningún elemento
 *
 * element(s): Son los nuevos elementos que se van a agregar al array, empezando en el indice star(que se pasa como primer parametro a slice()).
 * Si no se especifica ningún elemento, splice() eliminará elementos del array.
 *
 */

// Arreglo de frutas
const frutas = ["Banana", "Orange", "Apple", "Mango"];

// En la posición 2, AGREGAR 2 nuevos elementos.
frutas.splice(2, 0, "Lemon", "Kiwi");
// Resumen: en el arreglo frutas, apartir de la posición 2, NO se ELIMINA nada, se agregan "Lemon" y "Kiwi".
console.log(frutas)

// En la posición 2, REMOVER/ELIMINAR 2 elementos
frutas.splice(2, 2)
console.log(frutas);

// Objeto personas
const personas = [
  { name: "Diana", age: 30, live: true },
  { name: "Marina", age: 35, live: false },
  { name: "Bettoven", age: 40, live: true },
  { name: "Bertha", age: 30, live: false },
  { name: "Marileth", age: 10, live: true },
];

// En la posiciones 2, REMOVER/ELIMINAR 1 elemento
// En el arreglo de personas, en la posición 2, remueve 1 elemento
personas.splice(2, 1)

console.log(personas)

//En la posición 3, agrega una nueva persona
//Ene el arreglo de personas, en la posición 3, no remuevas nada, agrega la nueva persona: { name:'Ralph' , age: 33, live: true}
personas.splice(3, 0, { name: "Ralph", age: 33, live: true });
console.log(personas);


