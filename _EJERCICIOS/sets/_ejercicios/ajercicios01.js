// Dado un arreglo de calcetines, seeparar por pares y decir cuantos pares hay dentro del array

// const calcetines = [1, 2, 2, 3, 1, 3, 1, 1, 1, 2, 5];
const calcetines = [1, 1, 2, 2, 3, 3];

let numeroParesCalcetines = 0;

let paresCalcetines = new Set();

console.log(paresCalcetines);

for (let calcetin of calcetines) {
  if (paresCalcetines.has(calcetin)) {
    numeroParesCalcetines += 1;
    paresCalcetines.delete(calcetin);
  } else {
    paresCalcetines.add(calcetin);
  }
}

console.log(numeroParesCalcetines);

function fizzbuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  }
  if (num % 3 === 0) {
    return "Fizz";
  }
  if (num % 5 === 0) {
    return "Buzz";
  }
  return num;
}

function imprimir(n) {
  for (let i = 1; i <= n; i++) {
    console.log(fizzbuzz(i));
  }
}

imprimir(15);
