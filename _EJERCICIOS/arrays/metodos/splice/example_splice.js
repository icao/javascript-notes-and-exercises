// TODO: HACER LOS EJERCICIOS DE LA DOCUMENTACION: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// TODO: HACER LOS EJERCICIOS DE: https://www.freecodecamp.org/espanol/news/javascript-splice-como-ulitizar-el-metodo-splice-de-arreglo-en-js/

/**
 * Eliminar 0 elementos desde el índice 2 e insertar "Jhon Doe"
 *
 * Entrada: ['manzana', 'platano', 'piña', 'coco']
 * Resultado: ['manzana', 'platano', 'Jhon Doe', 'piña', 'coco']
 *
 * Insertar 'Jhon Doe' en la posición con índice 2
 *  */

const frutas = ["manzana", "platano", "piña", "coco"];

// apartir del index 2, Eliminar 0, Insertar 'Jhon Doe'
frutas.splice(2, 0, "Jhon Doe");

console.log(frutas);

/**
 * Eliminar un elemento desde el índice 3
 *
 * Entrada: ['primero', 'segundo', 'tercero', 'cuarto', 'quinto']
 * Resultado: ['primero', 'segundo', 'tercero', 'quinto']
 *
 * Eliminar el elemento 'cuarto'
 */

const prioridad = ["primero", "segundo", "tercero", "cuarto", "quinto"];

// Apartir del index 3, elminar 1, insertar 0
prioridad.splice(3, 1);
console.log(prioridad);

/**
 * Eliminar 1 elemento desde el índice 2 e insertar "Jhon Doe"
 *
 * Entrada: ['zanahoria', 'pepino', 'calabaza', 'brocoli', 'lechuga']
 * Resultado: ['zanahoria', 'pepino', 'Jhon Doe', 'brocoli', 'lechuga']
 *
 * Reemplazar 'calabaza' por 'Jhon Doe'
 */

const verduras = ["zanahoria", "pepino", "calabaza", "brocoli", "lechuga"];

// Apartir del index 2, eliminar 1, insertar 'Jhon Doe'
verduras.splice(2, 1, "Jhon Doe");
console.log(verduras);

/**
 * Eliminar 2 elementos desde el índice 0 e insertar "Jhon Doe", "Jhon Wick" y "Jhon Titor"
 *
 * Entrada: ['bicicleta', 'automovil', 'motocicleta', 'barco', 'avion']
 * Resultado: ['Jhon Doe', 'Jhon Wick', 'Jhon Titor',motocicleta', 'barco', 'avion']
 *
 * Eliminar los primeros 2 elementos del arreglo e insertar 3 nuevos elementos
 */

const mediosTransporte = [
  "bicicleta",
  "automovil",
  "motocicleta",
  "barco",
  "avion",
];

// Apartir del index 0, eliminar 2, insertar "Jhon Doe", "Jhon Wick" y "Jhon Titor"
mediosTransporte.splice(0, 2, "Jhon Doe", "Jhon Wick", "Jhon Titor");

console.log(mediosTransporte);

/**
 * Eliminar 2 elementos desde el índice 2
 *
 */

/**
 * Eliminar 1 elemento desde el índice -2
 *
 */

/**
 * Eliminar todos los elementos tras el índice 2 (incl.)
 *
 */
