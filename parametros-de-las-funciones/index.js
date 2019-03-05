/** 
 * ===================================================
 * Pasando valores de variable primitivas
 * ===================================================
*/

function imprimir(nombre, apellido) { 
   console.log(nombre + " " + apellido);
}


imprimir("Juan", "Juanes");
/** 
 * Si yo no mando el apellido, imprmiria undefined,
 * ya que cuando es definido en la function, se reserva espacio en memoria con valor indefinido.
 * Al no pasarle el valor, solo muestra el contenido que tiene actualmente: undefined.
 * */ 
imprimir("Juan"); //Juan undefined


/** 
 * Si yo no mando nada, imprimiria undefined undefined
*/
imprimir();  //undefined undefined


/** Si elimino el parámetro y quiero imprimir algo que no existe, marcaria ERROR, 
 * ya que no existe dicha propiedad. No existe en el objeto window.
*/

function imprimir2(nombre) {
   console.log(nombre + " " + apellido);
}

//imprimir2(); //Error: apellido is not defined

/** 
 * Una forma de asignar un valor por default si no viene el parámetro, es la siguiente:
*/
function imprimir3(nombre, apellido) { 
   // if (apellido === undefined) {
   //    apellido = "xxx";
   // }
   apellido = apellido || "xxx"; // Equivalente al if de arriba
   console.log(nombre + " " + apellido);
}

imprimir3("Ramona", "Ramirez"); //Ramona Ramirez
imprimir3("Ramona"); //Ramona xxx
imprimir3(); // undefined xxx


/** 
 * ===================================================
 * Podemos pasar Obejtos como parámetros
 * ===================================================
 */

function imprimir4( persona ) { 
   console.log(persona);
   console.log(persona.nombre + " " + persona.apellido);

}

//En JS tambien podemos pasar objetos anónimos o definidos como parámetros
imprimir4({
   nombre: "Juanin",
   apellido: "Bananin"
}); // Objeto / Juanin Bananin

var obj = {
   nombre: "Ruperto",
   apellido: "Rupertin"
};

imprimir4(obj); // Ruperto Rupertin


/**
 * Modificando un valor del parámetro
 */
function imprimir4(persona) {
   console.log(persona.nombre + " " + persona.apellido);
   persona.nombre = "Jhon";
}

var obj = {
   nombre: "Ramiro",
   apellido: "Miro"
};

imprimir4(obj); // Ramiro Miro
console.log(obj); //Object { nombre: "Jhon", apellido: "Miro" }

/** 
 * NOTA: Al modificar el valor del parámetro persona.nombre = "Jhon",
 * el valor del objeto original cambia, ya que los valores del objeto se asignan por referencia.
 * Hay que tener cuidado con los objetos cuando se modifican sus valores.
 */


/**
 * ===================================================
 * Pasando Funciones como parámetro
 * ===================================================
 */

function imprimirFn(fn) { 
   //Recibe como parámetro la función y la ejecuta invocando el parámetro como una función
   fn();
}

/**
 * Pasando una función anónima
*/
imprimirFn(function () {
   console.log('Esta es una función anónima');
}); //Esta es una función anónima

 /** 
  * Pasando una función explicita
 */
var fnExplicita = function () {
   console.log('Soy una función explicita'); 
};

imprimirFn(fnExplicita); //Esta es una función explicita



/**
 * ===================================================
 * NOTA IMPORTANTE!!!
 * ===================================================
 */

 //Las funciones siempre reciben los parámetros con un orden.
function miFuncion(param1, param2, param3, param4) {
   console.log(param4);
   console.log(param3);
   console.log(param2);
   console.log(param1);
}

// El orden en que pasemos los parámetros es el orden en que serán recibidos
miFuncion("valor1", "valor2", "valor3", "valor4");