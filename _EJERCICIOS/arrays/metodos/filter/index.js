/** Método filter() es una forma de obtener una serie de resultados que cumplan una condición.
 * Este a su vez retorna un nuevo arreglo, por lo que no muta el arreglo orioginal.
 */

let almuerzos = [
  { principal: "arepa", postre: "helado" },
  { principal: "taco", postre: "cheese cake" },
  { principal: "pizza", postre: "galletas" },
  { principal: "sushi", postre: "gelatina" },
  { principal: "taco", postre: "helado" },
  { principal: "taco", postre: "arroz con leche" },
];

/** Obtener una lista de postres cuando se comen tacos*/
function obtenerPostresDeclarativo(almuerzos) {
  let postres = [];
  for (i = 0; i < almuerzos.length; i++) {
    if (almuerzos[i].principal === "taco") {
      postres.push(almuerzos[i].postre);
    }
  }

  return postres;
}

console.log(obtenerPostresDeclarativo(almuerzos));

// ----------------------------------------------------
function obtenerPostresForEach(almuerzos) {
  let postres = [];
  almuerzos.forEach((almuerzo) => {
    if (almuerzo.principal === "taco") {
      postres.push(almuerzo.postre);
    }
  });

  return postres;
}

console.log(obtenerPostresForEach(almuerzos));

// ----------------------------------------------------
// NOTA: forOf para arrays, y forIn para objetros (no usar con arrays, si el orden del index importa)

function obtenerPostresForOf(almuerzos) {
  let postres = [];

  for (const almuerzo of almuerzos) {
    if (almuerzo.principal === "taco") {
      postres.push(almuerzo.postre);
    }
  }
  return postres;
}

console.log(obtenerPostresForOf(almuerzos));

// ----------------------------------------------------
function obtenerPostresFilter(almuerzos) {
  // return almuerzos
  //   .filter(function (almuerzo) {
  //   return almuerzo.principal === "taco";
  //   })
  //   .map(function (almuerzo) {
  //   return almuerzo.postre
  // })
  return almuerzos
    .filter((almuerzo) => almuerzo.principal === "taco")
    .map((almuerzo) => almuerzo.postre);
}

console.log(obtenerPostresFilter(almuerzos));
