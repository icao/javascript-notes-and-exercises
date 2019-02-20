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

// Se invoca usando al variuable.
saludo();
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
saludar(decirHola, 'Cesar');

//NOTA: La función que pasamos como argumento a otra función, se llama función Callback. 
//'saludar' es una función Callback.
