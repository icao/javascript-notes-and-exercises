/*
prueba de código #1 - IDENTIFICADOR DE PARES DE PARENTESIS -> VALIDOS

crear una función que reciba una cadena y verifique si la cadena es valida
se considera valida la cadena si todos los paréntesis que sean abiertas son cerradas correctamente

ejemplos valores validos

testString = '()' 
testString = '(1 == 1)'
testString = '(()()((1 != 2)))'

ejemplos valores no validos

testString = '('
testString = '(test()'
testString = ')('
testString = '(1 == 1) )( (2 == 2)'
*/

/**
 * Creare un arreglo con el que vea si cada parentesis tiene su par (apertura con cierre),
 * en el caso de que este arreglo al final del recorrido del string, tenga elementos sin pares,
 * el string entonces sería invalido.
 *
 * En caso contrario, de que quede el arreglo de elementos vacio, significaria que todos encontraron sus pares,
 * por consiguiente la cadena de strings provista, es valida.
 *
 * Implementacion:
 * Recorrere la cadena, conforme encuentre elementos que coincidan con un '(' o ')', los agregare al arreglo.
 * Si el parentesis de apertur '(' consigue una pareja que lo cierre,
 * entonces los eliminare de el arreglo/pila que contenga los parentesis.
 *
 * Quedandome solo con lo elementos que aun no tengan pares.
 *
 * Si, una vez terminado el buble y escanear todos los caracteres de la cadena, aun existen en mi arreglo elementos, entonces la cadena de string a evaluar, sera falsa.
 *
 * Sí y solo si el arreglo no contenga ningun elemento, significa que todos los parentesis que ingresaron, tuvieron pareja y conforme se fueron encontrando, se fueron eliminando, quedando asi en un caso ideal de 0 elementos.
 */
function testString(string) {
  let elementosSinPares = [];

  for (const character of string) {
    console.log(elementosSinPares);
    if (character === "(") {
      elementosSinPares = [...elementosSinPares, character];
    }
    // si el ultimo elemento del arreglo es igual a '(' y el actual es igual a ')'
    else if (
      elementosSinPares[elementosSinPares.length - 1] === "(" &&
      character === ")"
    ) {
      console.log("Pareja encontrada / par de parentesis cerrado");
      elementosSinPares.pop();
    }
    // si mi arreglo esta vacio y entra un ')'
    else if (elementosSinPares.length === 0 && character === ")") {
      return false;
    }
    console.log(character);
  }

  console.log(elementosSinPares);

  // retorna TRUE, Si no tenemos elementos en nuestro arreglo, entonces todos tuvieron pareja
  return elementosSinPares.length === 0;
}

console.log(testString("(1 == 1)")); // true
console.log(testString("(1 == (1))")); // true

console.log(testString("()")); // true
console.log(testString("(1 == 1)")); // true
console.log(testString("(()()((1 != 2)))")); // true

console.log(testString("(")); // false
console.log(testString(")")); // false
console.log(testString("(test()")); // false
console.log(testString(")(")); // false
console.log(testString("(1 == 1) )( (2 == 2)")); // false
console.log(testString("(()()))(")); // false
