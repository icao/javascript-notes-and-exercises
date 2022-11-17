/**
 * ------------------------------
 * findIndex()
 * ------------------------------
 *
 * El método findIndex() retorna el índice del primer elemento de un array que cumpla
 * con la función callback proporcionada.
 *  - Si el valor es encontrado, regresa el index de la posición del elemento en el array.
 *  - Si el valor NO es encontrado, regresa -1, como indicador de que no se encontro el elemento dentro del array.
 *
 * findIndex() ejecuta la función callback una vez por cada índice hasta que encuentre uno donde el callback regrese un valor verdadero.
 * findIndex() puede aplicarse a arreglos con que contienen elementos con valores no primitivos (objetos, etc)
 *
 * Sintaxis: array.findIndex(callback(currentValue, index, array), thisValue)
 * Donde:
 *  - callback: Función que recorrera cada elemento del array hasta que devuelve true,
 *              indicando que elemento que cumple la condición fué encontrado.
 *              Recibe 3 argumentos:
 *                - currentValue(opcional): El elemento actual que esta siendo procesado en el array
 *                - index(opcional): El índice del elemento actual que esta siendo procesado en el array
 *                - array(opcional): El Array sobre el que se ha llamado findIndex()
 *
 *  - thisValue: Objeto opcional que se usa como "this" cuando se ejecuta el callback.
 *               Si se pasa el parámetro, se utilizará como "this" dentro de cada invocación del callback.
 *
 * Retorno: El índice del primer elemento quer pasa la prueba. De otra manera regresa -1.
 * */

const conjuntoNumeros = [2, 7, 1, 5, 3, 9, 1, 8, 9, 1, 2];

// Encuentra el primer elemento con el valor 2 y regresame el index
console.log(conjuntoNumeros.findIndex((numero) => numero === 2)); // 0
// Encuentra el primer elemento con el valor 10
console.log(conjuntoNumeros.findIndex((numero) => numero === 10)); // -1 : NO EXISTE
// Encuentra el primer elemento con el valor 1 y regresame el index
console.log(conjuntoNumeros.findIndex((numero) => numero === 1)); // 2

// Observamos que podemos tener acceso al index
console.log(
  conjuntoNumeros.findIndex((numero, index, conjuntoNumerosParam) => {
    // console.log(conjuntoNumerosParam); // Imprime [2, 7, 1, 5, 3, 9, 1, 8, 9, 1] en cada iteración.
    conjuntoNumerosParam[0] = 7000; // [1]  - AQUI MUTO EL ARREGLO: [7000, 7, 1, 5, 3, 9, 1, 8, 9, 1]
    const conjuntoNumerosParamDoble = conjuntoNumerosParam.map(
      (element) => element * 2
    );

    console.log(index); // 0
    console.log(conjuntoNumerosParamDoble[index] + 1); // index alternativo
    console.log(conjuntoNumeros[index]); // 7000 - muta el arreglo conjuntoNumeros

    return numero === 2; // [2]
  })
); // 0

console.log(conjuntoNumeros); // [7000, 7, 1, 5, 3, 9, 1, 8, 9, 1]

/**
 * [1] .- El 3er parámetro de la función callback es el arreglo que es recorrido.
 * El valor es pasado por referencia, por lo que si lo usamos dentro del callback y mutamos algún valor.
 * Este se vera reflejado en el arreglo original.
 * Debemos tener cuidado con el uso del parametro dentro para evitar futuros errores.
 *
 * [2] .- la evaluación sigue tomando el valor del arreglo antes de ser mutado, por lo que vemos que regresar
 * el valor de 0, que es el index de la posición del primer elemento con valor 2.
 * Cabe mencionar que se mantiene el valor de 2 porque al ser pasado al callback este tenia en ese momento el valor 2.
 *
 * PERO al ser llamado de nuevo esa misma declaración, este nos retorna otro valor diferente.
 * */

console.log(conjuntoNumeros.findIndex((numero) => numero === 2)); // 10 - Posicion del ahora primer valor que cumple la condición
