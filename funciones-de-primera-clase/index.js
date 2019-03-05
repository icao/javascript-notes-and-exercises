/**
 * Un lenguaje de programación se dice que tiene Funciones de primera clase
 * cuando las funciones en ese lenguaje "son tratadas como cualquier otra variable".
 * Por ejemplo, en ese lenguaje, una función "puede ser pasada como argumento a otras funciones, 
 * puede ser retornada por otra función y puede ser asignada a una variable".
 * Otros ejemplos son aquellas funciones que son tratadas como clases 
 * y que se diferencian al iniciar su nombre con una letra capital.
 */


/**
 * =================================================
 * Ejemplo: Asignar una función a una variable.
 * =================================================
 */

const saludo = function () {
   console.log(`Hola Campeón!!!`);
}

// Se invoca usando la variuable.
saludo(); //Hola Campeón!!!
// Asignamos una función anónima en una variable, 
// luego usamos esa variable para invocar la función agregando paréntesis() al final.



/**
 * =================================================
 * Ejemplo: Pasando una función como un argumento
 * =================================================
 */
function decirHola() {
   return 'Hola :D';
}

/**
 * 
 * @param {function} mensaje 
 * @param {string} nombre 
 */
function saludar(mensaje, nombre) {
   console.log(`${mensaje()} ${nombre} !!!`);
}

// Pasamos a decirHola() como un argumento a la función saludar()
// esto explica cómo estamos tratando la función como un valor.
saludar(decirHola, 'Cesar'); //Hola :D Cesar !!!

//NOTA: La función que pasamos como argumento a otra función, se llama función Callback. 
//'decirHola' es una función Callback.

/**
 * =================================================
 * Ejemplo: Regresando una función
 * =================================================
 */
function mandarSaludo() {
   return function () {
      console.log('Regresando una función anónima');
   }
}
//Necesitamos devolver una función desde otra función: 
//podemos devolver una función porque tratamos la función en JavaScript como un valor.
const mensaje = mandarSaludo(); //Se asigna el retorno a mensaje
//Como mensaje tiene ahora el valor de una función anónima, la ejecutamos.
mensaje(); //Regresando una función anónima

//NOTA: Una función que devuelve una función se denomina "función de orden superior".

/** 
 * De vuelta a nuestro ejemplo;
 * Ahora, necesitamos invocar la función mandarSaludo y su función anónima devuelta.
 * Para ello, tenemos dos formas:
*/

/** 
 * 1.- Usando una variable
*/
const mandarSaludo2 = function () {
   return function () {
      console.log('Regresando una función anónima 2');
   }
}

const mensaje2 = mandarSaludo2();
mensaje2(); //Regresando una función anónima 2
//Tienes que usar otra variable(mensaje2). 
//Si invocó mandarSaludo2 directamente, 
//devolvería la función en sí sin invocar su función devuelta.

/** 
 * 2.- Usando doble parentesis
*/
function mandarMensaje3() {
   return function () {
      console.log('Regresando una función anónima 3');
   }
}

mandarMensaje3()(); //Regresando una función anónima 3
//También estamos utilizando paréntesis dobles()() para invocar la función devuelta.
