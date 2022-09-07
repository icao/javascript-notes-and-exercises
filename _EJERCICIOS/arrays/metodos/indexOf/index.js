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

const arrayNumerico = [1, 2, 3, 4, 5];
const index = arrayNumerico.indexOf(8);
console.log(index); //-1

const existe = arrayNumerico.includes(8);
console.log(existe); // false

const index2 = arrayNumerico.indexOf(5);
console.log(index2); // 4
const existe2 = arrayNumerico.includes(5);
console.log(existe2); // true

function inventario(name) {
  const arrayRopa = ["short", "playera", "pantalon", "camisa", "jersey"];

  console.log(arrayRopa);

  console.log(`Valor del index name(${name}) es: ${arrayRopa.indexOf(name)}`);
  console.log(arrayRopa.filter((item) => item !== name));
  console.log(arrayRopa);
}
inventario("pantalon");
