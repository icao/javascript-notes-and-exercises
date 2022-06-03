/** REHACIENDO EJERCICIOS DEL EXCERCISE2 */

/***
 * Convertir una matriz de números en un total de todos los números
 * Entrada: [1,2,3]
 * Salida: 6
 * */

const numerosAleatorios = [1, 2, 3];

function obtenerTotal(numeros) {
  let total = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
  return total;
}
console.log(obtenerTotal(numerosAleatorios));

/**
 * Convierte una matriz de números en una cadena larga de todos esos números.
 * Entrada: [4, 2, 6, 8, 16, 12]
 * Salida: '42681612'
 */
const numerosPares = [4, 2, 6, 8, 16, 12];

function concatenarStrings(elementos) {
  return elementos.reduce((acumulador, elemento) => `${acumulador}${elemento}`); // Mas elegante
}
console.log(concatenarStrings(numerosPares));

/**
 * Convierte una matriz de objetos de votantes en un recuento de cuántas personas han votado
 * Entrada: [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
 *
 * Salida: 7
 * */

const votantes = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

function obtenerTotalVotantes(participantes) {
  //NOTA: NO NECESARIAMENTE se resuelve con reduce, es posible con filter, pero estamos practicando em método reduce() en este caso.
  return participantes.reduce(
    (acumulador, persona) => acumulador + persona.voted,
    0
  );
}
console.log(obtenerTotalVotantes(votantes));

/**
 * Dada una serie de artículos de tu lista de deseos, calcula cuánto costaría comprarlo todo de una vez 
 * Entrada: [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]
 * 
 * Salida: 227005
 * */

const listaCompras = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

function obtenerTotalCompra(lista) {
  let total = lista.reduce((acumulador, item) => acumulador + item.price, 0);
  return total;
}
console.log(obtenerTotalCompra(listaCompras));

/**
 * Dada una matriz de matrices, aplánelas en una sola matriz
 * Entrada:  [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]
 *  
 * Salida:  ["1", "2", "3", true, 4, 5, 6] 
 * */

const matrices = [["1", "2", "3"], [true], [4, 5, 6]];

function obtenerMatrizPlanaImperativa(entrada) {
  // IMPERATIVA
  let matrizPlana = [];
  for (const item of entrada) {
    matrizPlana.push(...item);
  }
  return matrizPlana;
}
console.log(obtenerMatrizPlanaImperativa(matrices));

function obtenerMatrizPlana(entrada) {
  // FUNCIONAL
  return entrada.reduce((acumulador, arreglo) => acumulador.concat(arreglo));
}
console.log(obtenerMatrizPlana(matrices));

/**
 * Dado un array de potenciales votantes, devolver un objeto que represente los resultados de la votación.
 * Incluya cuántos de los votantes potenciales estaban en las edades de 18-25, 
 * cuántos de 26-35, cuántos de 36-55, y cuántos de cada uno de esos rangos de edad votaron realmente. 
 * El objeto resultante que contiene estos datos debe tener 6 propiedades. 
 * 
 * Entrada: [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
 * 
 * Salida: { numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
 */

const personasVotantes = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

function estadisticasVotantes(datos) {
  return {
    numYoungVotes: datos.reduce((acumulador, persona) => {
      if (persona.age <= 25) return acumulador + persona.voted;
      return acumulador;
    }, 0),
    numYoungPeople: datos.reduce((acumulador, persona) => {
      if (persona.age <= 25) {
        return (acumulador += 1);
      }
      return acumulador;
    }, 0),
    numMidVotesPeople: datos.reduce((acumulador, persona) => {
      if (persona.age > 25 && persona.age <= 35)
        return acumulador + persona.voted;
      return acumulador;
    }, 0),
    numMidsPeople: datos.reduce((acumulador, persona) => {
      if (persona.age > 25 && persona.age <= 35)
        return acumulador + 1
      return acumulador
    }, 0),
    numOldVotesPeople: datos.reduce((acumulador, persona) => {
      if (persona.age > 35 && persona.age <= 55) {
        return acumulador + persona.voted;
      }
      return acumulador
    }, 0),
    numOldsPeople: datos.reduce((acumulador, persona) => {
      if (persona.age > 35 && persona.age <= 55) {
        return acumulador + 1
      }
      return acumulador
    }, 0)
  };
}

console.log(estadisticasVotantes(personasVotantes));
