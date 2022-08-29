/**
 * Entrada: 1, 2, 3
 * Salida: 6
 */

function total(entrada) {
  let salida = entrada.reduce((total, item) => total + item)
  return salida
}

const entradaT = [1, 2, 3]
console.log(total(entradaT))


/**
 * Entrada: 1, 2, 3
 * Salida: "123"
 */

function concatenarString(entrada) {
  let salida = entrada.reduce((total, item) => total + item.toString())
  return salida
}

const entradaSC = [1, 2, 3, 4, 5]
console.log(concatenarString(entradaSC))



/**
 * Entrada:[
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
 */

const votantes = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false }
]

function totalVotos(entrada) {
  let salida = entrada.filter((item) => item.voted === true)
  return salida.length
}

console.log(totalVotos(votantes))




/**
 * Entrada: [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
  ]
  
 * Salida: 227005
 */

const wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];


function compraTotal(entrada) {
  let salida = entrada.reduce((total, { price }) => price + total, 0)
  return salida
}

console.log(compraTotal(wishlist));


/** 
 * Entrada: [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]
 * 
 * Salida: ["1", "2", "3", true, 4, 5, 6]
 * 
 * */

const arrays = [
  ["1", "2", "3"],
  [true],
  [4, 5, 6]
];

function unirArreglos(entrada) {

  let salida = entrada.reduce((total, item) => total.concat(item))
  return salida
}

console.log(unirArreglos(arrays));


/**
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

 * Salida: { numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}

 *
 * Rango de edades: 
 * Joven: 18-25
 * Adulta: 26-35
 * Vieja: 36-55
*/

const poblacion = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false }
]

function resultadoVotacion(entrada) {
  let genteJoven = cantidadGenteParticipante(entrada, 18, 25)
  let genteJovenVoto = cantidadVotos(genteJoven)

  let genteAdulta = cantidadGenteParticipante(entrada, 26, 35)
  let genteAdultaVoto = cantidadVotos(genteAdulta)

  let genteVieja = cantidadGenteParticipante(entrada, 36, 55)
  let genteViejaVoto = cantidadVotos(genteVieja)

  return {
    numYoungVotes: genteJovenVoto.length,
    numYoungPeople: genteJoven.length,
    numMidVotesPeople: genteAdultaVoto.length,
    numMidsPeople: genteAdulta.length,
    numOldVotesPeople: genteViejaVoto.length,
    numOldsPeople: genteVieja.length
  }

}

function cantidadGenteParticipante(personas, edadMinima, edadMaxima) {
  const resultado = personas.filter(persona => persona.age >= edadMinima && persona.age <= edadMaxima)
  return resultado

}

function cantidadVotos(personas) {
  let resultado = personas.filter(persona => persona.voted === true)
  return resultado
}

console.log(resultadoVotacion(poblacion))