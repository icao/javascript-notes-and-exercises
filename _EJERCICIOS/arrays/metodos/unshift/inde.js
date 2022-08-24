/**
 * ------------------------------
 * Unshift
 * ------------------------------
 *
 * El método unshift() agrega/inserta uno o más elementos al inicio de un array,
 * y devuelve la nueva longitud del array.
 * Lo que se traduce a que el método ushift() MUTA el objeto array original.
 *
 * Sintaxis:  array.unshift(elemento)
 */

const arregloStrings = ["leon", "lobo", "tigre", "perro"];
arregloStrings.unshift("dragon");

console.log(arregloStrings);

const arregloNumeros = [4, 5, 6];
arregloNumeros.unshift(1, 2, 3);

console.log(arregloNumeros);

const objetoPersona = [
  { name:'Bob' , age: 30, live: true},
  { name: 'Marina', age: 35, live: false },
  { name: 'Martha', age: 40, live: true}
]

objetoPersona.unshift({ name: 'Jose', age: 40, live: true});

console.log(objetoPersona);
