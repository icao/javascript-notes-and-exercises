/**
 * ------------------------------
 * Slice
 * ------------------------------
 *
 * El método slice() devuelve una copia del array dentro de un nuevo array empezando por inicio hasta fin(fin no incluido).
 *
 * El método slice() NO MUTA el arreglo original.
 *
 * Sintaxis: arreglo.slice(inicio, fin)
 *
 * inicio: Índice donde empieza la extracción.
 *        - Por default el índice es 0.
 *        - Si el índice es negativo, indica un desplazamiento desde el final del arreglo.
 *        - Si es mayor a la lognitud del arreglo, se devuelve un arreglo vacio.
 *        - OPCIONAL
 *
 * fin: Índice que marca el final de la extracción.
 *        - Por default es el ultimo elemento.
 *        - Si el índice es negativo, indica un desplazamiento desde el final del arreglo,
 *          comienza a contar desde el ultimo elemento hacia atras.
 *        - Si es omitido, toma por default el index del ultimo elemento del arreglo.
 *        - Si es mayor a la lognitud del arreglo, toma por default el index del ultimo
 *          elemento del arreglo.
 *        - OPCIONAL
 *
 * El valor retornado por slice() es un nuevo arreglo con los valores extraidos.
 *
 */

// Extrae solo el primer elemento del arreglo
const arregloStrings = ["leon", "lobo", "tigre", "perro", "gato"];

// Del arreglo extrae lo que hay, iniciando en el primer elemento (index 0), hasta el segundo elemento (index 1)
const primerElemento = arregloStrings.slice(0, 1);
console.log(arregloStrings); // ["leon", "lobo", "tigre", "perro", "gato"]
console.log(primerElemento); // ["leon"]

// Extrae el elemento de enmedio del arreglo de 3 elementos
const arregloNumeros = [4, 5, 6];

// Del arreeglo extrae iniciando en el elemento(index 1), hasta el elemento final (index === arregloNumeros.length)
const numeroDeEnmedio = arregloNumeros.slice(1, 2);
console.log(arregloNumeros); // [4, 5, 6]
console.log(numeroDeEnmedio); // [5]

// Extrae todos los elementos, menos el primero
const arregloPersonas = [
  { name: "Bob", age: 30, live: true },
  { name: "Marina", age: 35, live: false },
  { name: "Martha", age: 40, live: true },
];

// Del arreglo extrae todo apartir del elemento 2 (index 1)
const personasFiltradas = arregloPersonas.slice(1)
console.log(arregloPersonas);
console.log(personasFiltradas);
