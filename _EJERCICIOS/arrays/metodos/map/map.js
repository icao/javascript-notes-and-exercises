const numeros = [1, 2, 3, 4, 5];
const nombres = ["marcos", "Jacobo", "RoMAn", "Ross", "RICK"];
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

/** Array de la potencia al cuadrado de cada entrada */
let potencia2 = numeros.map((numero) => {
  return Math.pow(numero, 2);
});
console.log(potencia2);

/** Conversion de los elementos de un array a strings */
let arrayStrings = numeros.map((numero) => numero.toString());
console.log(arrayStrings);

/** Poner en mayúsculas cada uno de un conjunto de nombres */
function nombresMayuscula(nombres) {
  return nombres.map((nombre) => nombre.toUpperCase());
}
console.log(nombresMayuscula(nombres));

/**Hacer una matriz de cadenas de los nombres */
function listaNombresPersonas(personas) {
  return personas.map((persona) => persona.name);
}
console.log(listaNombresPersonas(personas));

/** Hacer un arreglo donde muestre si es apta para ir a votar o no */
function aptosVotar(personas) {
  return personas.map((persona) => {
    if (persona.age < 18) {
      return `${persona.name}, no puede votar!!!`;
    }
    return `${persona.name}, es apta para ir a votar!!!`;
  });
}
console.log(aptosVotar(personas));

/**Haz un array con los nombres en h1, y las edades en h2 */
function generarTemplateHTML(personas) {
  return personas.map(persona => {
    return `<h1>${persona.name}</h1><h2>${persona.age}</h2>`;
  })
}
console.log(generarTemplateHTML(personas));