const numeros = new Set([1, 1, 2, 5, 7, 9, 1, 9, 1, 3, 6, 3, 3, 7, 2]);
const animales = new Set([
  "leon",
  "jabali",
  "jirafa",
  "rinoceronte",
  "perro",
  "jabali",
  " leon",
]);
const mezcla = new Set(["1", 1, "jabali", 8, 8, "cadena de texto"]);

/**
 *	PROPIEDADES
 */
// size: tamaño del set
console.log(numeros);
console.log(`El numero de valores NO REPETIDOS es: ${numeros.size}`);
console.log(animales);
console.log(`El numero de animales NO REPETIDOS es: ${animales.size}`);

/**
 *MÉTODOS
 */
// has: Comprueba si el Set tiene un elemento en especifico
console.log(`¿Existe el numero '3' en numeros? ${numeros.has(3)}`);
console.log(`¿Existe al animal 'tigre' en animales? ${animales.has("tigre")}`);

// delete: Elmina un elemento del Set
numeros.delete(1);
console.log(`¿Existe el numero '1' en numeros? ${numeros.has(1)}`);

// add: Agrega un elemento al Set
numeros.add(100);
console.log(`¿Existe el numero '1' en numeros? ${numeros.has(100)}`);

animales.add("HIPOPOTAMO");
console.log(
  `¿Existe al animal 'HIPOPOTAMO' en animales? ${animales.has("HIPOPOTAMO")}`
);

console.log("------------------------------------------");
console.log(mezcla);
console.log(`El numero de elementos de mezcla NO REPETIDOS es: ${mezcla.size}`);

let codigos = { 34: "Espania", 33: "Fancia" };
mezcla.add(codigos); //[1]
mezcla.add({ 34: "Espania", 33: "Fancia" }); //[2]
console.log(`El numero de elementos de mezcla NO REPETIDOS es: ${mezcla.size}`);
// NOTA: aqui se inserto un objeto literal dos veces, pero la slaida es correcta, se ve que "duplica" el objeto, pero en verdad no lo es, porque si recordamos, los objetos se pasan por referencia, cuando lo pasamos [1] con el nombre del objeto, se incrusta en el Set, y si pasamos el mismo valor del objeto [2] de forma literal, al ser una nueva referencia en memoria, se pasa como un nuevo elemento.

//clear: Elimina TODOS los elementos de un Set
mezcla.clear();
console.log(`El numero de elementos de mezcla NO REPETIDOS es: ${mezcla.size}`);
console.log(mezcla);
