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
 * Al no pasarle el valor, solo muestra el conteenido que tiene actualmente, el undefined
 * */ 
imprimir("Juan"); //Juan undefined


/** 
 * Si yono mando nada, imprimiria undefined undefined
*/
imprimir();  //undefined undefined


/** Si elimino el parametro y quiero imprimir algo que no existe, marcaria ERROR, 
 * ya que no existe dicha propiedad. No existe en el objeto window.
*/

function imprimir2(nombre) {
   console.log(nombre + " " + apellido);
}

//imprimir2(); //Error: apellido is not defined

/** 
 * Una forma de asignar un valor por default si no viene el parametro, es la siguiente:
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
 * Podemos pasar Obejtos como parametros
 * ===================================================
 */

function imprimir4( persona ) { 
   console.log(persona);
   console.log(persona.nombre + " " + persona.apellido);

}

//En JS tambien podemos pasar objetos anonimos o definidos como parametros
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
 * Modificando un valor del parametro
 */

function imprimir4(persona) {
   console.log(persona.nombre + " " + persona.apellido);
   persona.nombre = "Jhon";
}

var obj = {
   nombre: "Ramiro",
   apellido: "Miro"
};

imprimir4(obj); // ramiro Miro
console.log(obj); //Object { nombre: "Jhon", apellido: "Miro" }

/** 
 * NOTA: Al modificar el valor del parametro persona.nombre = "Jhon",
 * el valor del objeto original cambia, ya que los valores del objeto se asignan por referencia.
 * Hay que tener cuidado con los objetos cuando se modifican sus valores.
 */


/**
 * ===================================================
 * Pasando Funciones como parametro
 * ===================================================
 */

function imprimirFn(fn) { 
   //Recibe como parametro la función y la ejecuta invocando el parametro como una función
   fn();
}

/**
 * Pasando na función anónimau
*/
imprimirFn(function () {
   console.log('Esta es una funcion anónima');
});

 /** 
  * Pasando una función explicita
 */
var fnExplicita = function () {
   console.log('Soy una función explicita'); 
};
imprimirFn(fnExplicita);



/**
 * ===================================================
 * NOTA IMPORTANTE!!!
 * ===================================================
 */

 //Las funciones siempre reciben los parametros con un orden.
function miFuncion(param1, param2, param3, param4) {
   console.log(param4);
   console.log(param3);
   console.log(param2);
   console.log(param1);
}


// El orden en que pasemos los parametros es el orden en que seran recibidos
miFuncion("valor1", "valor2", "valor3", "valor4");