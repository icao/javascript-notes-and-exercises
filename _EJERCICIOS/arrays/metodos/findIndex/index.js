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
