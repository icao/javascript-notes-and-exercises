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
 * Entrada: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio']
 * Resultado: ['enero', 'febrero', 'mayo', 'junio']
 *
 * Eliminar 2 meses, marzo y abril
 */

const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio"];
// Apartir del index 2, eliminar 2, insertar 0
meses.splice(2, 2);

console.log(meses);

/**
 * Eliminar 1 elemento desde el índice -2
 *
 * Entrada: ['cesar', 'karime', 'carlos','carla', 'hachiko']
 * Resultado: ['cesar', 'karime', 'carlos', 'hachiko']
 *
 * Eliminar el nombre de carla
 */

const nombres = ["cesar", "karime", "carlos", "carla", "hachiko"];
//Apartir del index -2, eliminar 1, insetar 0
nombres.splice(-2, 1);

console.log(nombres);

/**
 * Eliminar todos los elementos tras el índice 2 (incl.)
 *
 * Entrada: ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado']
 * Resultado: ['domingo', 'lunes']
 *
 * Eliminar 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'
 */

const dias = [
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
];

// Apartir del index 2, eliminar TODO, insertar 0
dias.splice(2);

console.log(dias);
