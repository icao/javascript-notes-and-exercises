/** Dada una matriz de números, devuelve una nueva matriz que sólo tiene los números que son 5 o mayor a 5.*/
const numerosAleatorios = [3, 6, 8, 2, 1, 15, 8, 4];

function obtenerNumeros(numeros) {
  return numeros.filter((numero) => numero >= 5);
}
console.log(obtenerNumeros(numerosAleatorios));

/**Dada una matriz de números, devuelve una nueva matriz que sólo incluye los números pares. */
function obtenerNumerosParesDeclarativo(numeros) {
  let numerosPares = [];
  for (numero of numeros) {
    if (numero % 2 === 0) {
      numerosPares.push(numero);
    }
  }
  return numerosPares;
}
console.log(obtenerNumerosParesDeclarativo(numerosAleatorios));

//Funcional
function obtenerNumerosPares(numeros) {
  return numeros.filter((numero) => numero % 2 === 0);
}
console.log(obtenerNumerosPares(numerosAleatorios));

/**Dada una matriz de cadenas, devuelve una nueva matriz que sólo incluye las que tienen 5 caracteres o menos de longitud */
const animales = [
  "perico",
  "loro",
  "serpiente",
  "gato",
  "elefante",
  "lobo",
  "tigre",
  "oso",
  "jirafa",
  "cerdo",
];

function obtenerAnimales(animales) {
  let resultados = animales.filter((animal) => animal.length >= 5);
  return resultados;
}
console.log(obtenerAnimales(animales));

/** Dado un array de objetos personas, devuelve un nuevo array que ha filtrado todos los que no pertenecen al club.*/
const miembros = [
  { name: "Angelina Jolie", member: true },
  { name: "Eric Jones", member: false },
  { name: "Paris Hilton", member: true },
  { name: "Kayne West", member: false },
  { name: "Bob Ziroll", member: true },
];

function obtenerNoAfiliados(miembros) {
  let miembrosNoAfiliados = miembros.filter((miembro) => !miembro.member);
  let nombresNoAfiliados = miembrosNoAfiliados.map((miembro) => miembro.name);
  return nombresNoAfiliados;
}
console.log(obtenerNoAfiliados(miembros));

/** Dada una lista de personas, filtrar a las perosnasque tienen la edad suficiente para votar*/
const personas = [
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 2,
  },
  {
    name: "Paris Hilton",
    age: 5,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",
    age: 18,
  },
];

function obtenerVotantes(personas) {
  let personasVotantesEdad = personas.filter((persona) => persona.age >= 18);
  let posiblesVotantes = personasVotantesEdad.map((persona) => persona.name);
  return posiblesVotantes;
}
console.log(obtenerVotantes(personas));

/**
 * Filtra la matríz en función de un criterio de búsqueda (query)
 */
const frutas = ["durazno", "platano", "uvas", "mango", "naranja", 'manzana', 'melon', 'sandia', 'papaya', 'mamey', 'fresa', 'frambuesa'];

function filtrarFrutasQuery(frutas, query) {
  return frutas.filter(fruta => fruta.includes(query))
}
console.log(filtrarFrutasQuery(frutas, 'an'))
console.log(filtrarFrutasQuery(frutas, 'esa'))
console.log(filtrarFrutasQuery(frutas, 'no'))
