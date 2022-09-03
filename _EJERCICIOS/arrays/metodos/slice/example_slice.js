/**
 * Extraer todos los elementos desde el índice 0 hasta el final del arreglo.
 *
 * Entrada: ['Jhon Doe', 'Jhoon Snow', 'Jhon Wick', 'Jhon Titor']
 * Resultado: ['Jhon Doe', 'Jhoon Snow', 'Jhon Wick', 'Jhon Titor']
 *
 * Extraer los elementos desde el índice 0 al índice n
 *  */

const jhons = ["Jhon Doe", "Jhoon Snow", "Jhon Wick", "Jhon Titor"];

// Apartir del index 0, final sin especificar
const todosJhons = jhons.slice(0);

console.log(jhons);
console.log(todosJhons);

/**
 * Extraer el primer elemento que corresponde al index 0
 *
 * Entrada: ['manzana', 'platano', 'piña', 'coco']
 * Resultado: ['manzana']
 *
 * Extraer 'manzana' de las frutas
 *  */

const frutas = ["manzana", "platano", "piña", "coco"];

/**
 * Extraer el elemento con índice 3
 *
 * Entrada: ['primero', 'segundo', 'tercero', 'cuarto', 'quinto']
 * Resultado: ['primero', 'segundo', 'tercero', 'quinto']
 *
 * Extraer el elemento 'cuarto'
 */

const prioridad = ["primero", "segundo", "tercero", "cuarto", "quinto"];

/**
 * Extraer el ultimo elemento del arreglo con indice 4 || arreglo.length
 *
 * Entrada: ['zanahoria', 'pepino', 'calabaza', 'brocoli', 'lechuga']
 * Resultado: ['lechuga']
 *
 * Etraer el ultimo elemento 'lechuga'
 */

const verduras = ["zanahoria", "pepino", "calabaza", "brocoli", "lechuga"];

/**
 * Extraer 2 elementos desde el índice 1 al indice 2
 *
 * Entrada: ['bicicleta', 'automovil', 'motocicleta', 'barco', 'avion']
 * Resultado: ['automovil', 'motocicleta']
 *
 * Extrae los elementos 'automovil', 'motocicleta'
 */

const mediosTransporte = [
  "bicicleta",
  "automovil",
  "motocicleta",
  "barco",
  "avion",
];

/**
 * Extraer 1 elemento del índice -2
 *
 * Entrada: ['cesar', 'karime', 'carlos','carla', 'hachiko']
 * Resultado: ['carla']
 *
 * Extraer el nombre de carla
 */

const nombres = ["cesar", "karime", "carlos", "carla", "hachiko"];

/**
 * Extraer los ultimos 2 elementos.
 *
 * Entrada: ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado']
 * Resultado: ['viernes', 'sabado']
 *
 * Extraer 'viernes', 'sabado'
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
