/**
 * ------------------------------
 * indexOf()
 * ------------------------------
 *
 * El método indexOf() retorna la posición de la primera aparicion de un valor buscado en un array.
 *  - Si el valor es encontrado, regresa el index de la posición del elemento en el array.
 *  - Si el valor NO es encontrado, regresa -1, como indicador de que no se encontro el elemento dentro del array.
 *
 * indexOf() compara los elementos haciendo una igualdad estricta. Funciona con valores primitivos.
 *
 * Sintaxis: arrray.indexOf(seachElement, fromIndex)
 * Donde:
 *  - searchElement: El valor del elemento a buscar.
 *  - fromIndex: El valor de indice desde donde comenzará la busqueda.
 *               Por default es 0, por lo tanto es un parámetro opcional.
 *               Si el valor es mayor que la longitud del array, devolverá -1,
 *               ya que no se encuentra dentro de la longitud del array.
 *               Si el valor es negativo, comenzará apartir del ultimo elemento
 *               restando las posiciones.
 *
 * Retorno: El primer indice del elemento encontrado.
 *          -1 Si no es encontrado
 * */

const conjuntoNumeros = [2, 7, 1, 5, 3, 9, 1, 8, 9, 1];

// Encuentra el primer elemento con el valor 2 y regresame el index
console.log(conjuntoNumeros.indexOf(2)); // 0
// Encuentra el primer elemento con el valor 10
console.log(conjuntoNumeros.indexOf(10)); // -1 : NO EXISTE
// Encuentra el primer elemento con el valor 1 y regresame el index
console.log(conjuntoNumeros.indexOf(1)); // 2
// Encuentra el primer elemento con el valor 1 apartir del index 5
console.log(conjuntoNumeros.indexOf(1, 5)); // 6
// Encuentra el primer elemento con el valor 1 apartir del index 50
console.log(conjuntoNumeros.indexOf(1, 50)); // -1 : NO EXISTE
// Encuentra el primer elemento con el valor 1 apartir del elemento -3
console.log(conjuntoNumeros.indexOf(1, -3)) // 9

