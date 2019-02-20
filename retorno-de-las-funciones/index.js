/**
 * Una Funcion puede regresar:
 * Tipo primitivo (string, number, boolean, symbol)
 * undefined
 * Objeto
 * Funciones
 * Null
 */

/** 
 * ==============================================
 * Funcion que regresa tipos primitivos
 * ==============================================
*/

/**
 *Esta función regresa una cadena de texto
 *
 * @returns {string} String Juan
 */
function obtenerNombre() {
   return "Juan"; //Es un String, puede ser un entero
}

// console.log(obtenerNombre() + " Banana"); //Juan

/**
 *Esta función retorna un número aleatorio
 *
 * @returns {number} Un númeor aleatorio entre el 0 y 1
 */
function obtenerAleatorio() {
   return Math.random();
}

// console.log(obtenerAleatorio()); //Numero aleatorio

/**
 *Esta función valida si el numero es mayor a 0.5
 *
 * @returns {boolean} Regresa un valor booleano verdadero si se cumple la condicion
 */
function esMayor05() { 
   if (obtenerAleatorio() > 0.5) {
      return true;
   } else { 
      return false;
   }
   //Si nosotros no definimos que va a regresar, por default regresa undefined
   //Las funciones siempre regresan algo
}


/** 
 * Podemos hacer una toma de desiciones con lo que retorna la funcion
*/
if (esMayor05()) {
   console.log("Es mayor a 0.5");
} else { 
   console.log("Es menor a 0.5");
}


/** 
 * ==============================================
 * Funcion que regresa Objetos
 * ==============================================
 */
//Las funciones pueden regresar objetos anonimos o explicitos,

/**
 * Esta funcion regresa un objeto con los parametros dados
 * @param {string} nombre 
 * @param {string} apellido 
 * @returns {object} Objeto creado
 */
function crearPersona(nombre, apellido) { 
   var obj = {
      nombre: nombre,
      apellido: apellido
   };
   return obj;
}
//Hay que saber cuando regresar un objeto eplicito, en este caso como solo regresa
//los parametros mismos, no es necesario definir el objeto, no podemoos ahorrar
//espacio en memoria.
console.log(crearPersona("Maria", "Magdalena")); //Object { nombre: "Maria", apellido: "Magdalena" }


/**
 * Esta funcion regresa un objeto con los parametros dados
 * @param {string} nombre 
 * @param {string} apellido 
 * @returns {object} Objeto creado
 */
function crearPersona2(nombre, apellido) {
   return {
      nombre: nombre,
      apellido: apellido
   };
}

 //Guardamos el objeto en la variable persona
var persona = crearPersona2("John", "Doe");
console.log(persona); //Object { nombre: "John", apellido: "Doe" }
//Como persona ahora es un objeto podemos manipularlo
console.log(persona.nombre); //John
console.log(persona.apellido); //Doe


/** 
 * ==============================================
 * Funciones que regresan funciones
 * ==============================================
 */


/**
 *Esta función regresa una función anónima
 *
 * @returns {function} Regresa una funcion anonima
 */
function crearFuncion() { 
   return function () {
      console.log("Me crearon!!!");
   };
}

var nuevaFuncion = crearFuncion();
//Como mi variable esta igualada a una funcion, la invocamos de la sig. manera
nuevaFuncion();


/**
 *Esta función regresa una función anónima
 *
 * @returns {function} Regresa una funcion anonima
 */
function crearFuncion2() {
   return function (nombre) {
      console.log("Me creó " + nombre);
      return function () { 
         console.log("Segunda función");
      }
   };
}


console.log("===============================================");
var nuevaFuncion = crearFuncion2();
console.log(nuevaFuncion); //function crearFuncion2()
//Podemos pasar parametros
nuevaFuncion(persona.nombre); //Me creó John
/*--------------------------------------------------------------- */
console.log("===============================================");
var nuevaFuncion = crearFuncion2();
var segundaFuncion = nuevaFuncion(persona.nombre); //Me creó John
segundaFuncion(); //Segunda función
