/** 
 * Array Squared
 * Square value of every element in the array. Presume that you will get only numbers in the input array.
 * 
 * Entrada:   const input = [ 1, 2, 3, 4, 5 ];
 * Salida: [ 1, 4, 9, 16, 25]
*/

const numeros = [1, 2, 3, 4, 5];
function obtenerCuadrado(input) {

  let resultado = input.map(item => item * item)
  return resultado
}

console.log(obtenerCuadrado(numeros));


/**
 *
 * suma de todos los elementos positivos
 * Input es un arreglo de numeros, regresar la suma de todos los numeros positivos.
 * Si el arreglo esta vacio, o no existeun numero positivo, retornara 0
 * Input is an array of numbers, return the sum of all of the positives ones.
 * If the array is empty or there aren't any positive numbers return 0.
 *
 * Ayuda: 
 * Array.prototype.filter()
 * Array.prototype.reduce()
 * 
 * Entrada:   const input = [ 1, -4, 12, 0, -3, 29, -150];
 * Salida: [42
*/


const arregloNumeros = [1, -4, 12, 0, -3, 29, -150];

function sumarPositivos(numeros) {
  // let positivos = numeros.filter(number => number >= 0)
  // let resultado = positivos.reduce((total, elemento) => total + elemento, 0)
  // return resultado

  return numeros
    .filter(number => number >= 0)
    .reduce((total, elemento) => total + elemento, 0)
}

console.log(sumarPositivos(arregloNumeros));