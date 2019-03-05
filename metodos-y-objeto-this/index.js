 // TODO: Hacer sección de Global Object y global lexical Environment
 /**
  * Los objetos tiene propiedades.
  * Los métodos son funciónes dentro de un objeto.
  * Por consigiuente un método es una propiedad de un objeto, que tiene como valor una función.
  */

 /**
  * NOTA: Cada vez que declaramos una variable o función, este se ve alojado en el objeto global window(cliente)/global(node).
  * Con el estandar de ES6 cambian algunas cosas para las variables tipo let y const, estas solo se ejecutan en el entorno lexico global.
  */

 /** 
  * EJEMPLO DE UN OBJETO CON MÉTODOS
  */
 const trabajador = {
    nombre: 'John', //Parametro nombre
    apellido: 'Doe',
    edad: 31,
    nombreCompleto: function () { //Parametro combreCompleto -> Este es un método
       console.log(`${this.nombre} ${this.apellido}`);
    },
    direccion: {
       pais: 'Colombia',
       obtenerPais: function () { //Método obtenerPais
          console.log(`El pais es: ${this.pais}`);
       }
    }
 };


 // Acontinuacion tenemos un objeto con varias propiedades y entre ellas
 // el método 'nombreCompleto' y 'obtenerPais'

 const persona = {
    nombre: 'Juan',
    apellido: 'Doe',
    edad: 15,
    nombreCompleto: function () {
       console.log(`${persona.nombre} ${persona.apellido}`);
       console.log(`${this.nombre} ${this.apellido}`);
    },
    ubicacion: {
       coordenadas: {
          latitud: '19.428854',
          longitud: '-99.165519'
       },
       direccion: {
          calle: 'Calle Río Sena 110',
          colonia: 'Cuauhtémoc',
          cp: '06500',
          ciudad: 'Ciudad de México',
          pais: 'México',
          obtenerPais: function () {
             console.log(this);
             console.log(`El pais es: ${this.pais}`);
          }
       }
    }
 };

 //Ejecutamos el método nombreCompleto de persona
 persona.nombreCompleto(); //Imprime: Juan Doe


 // Para acceder a la propiedad 'nombre' y 'apellido', podemos hacer uso de la notacion punto
 // aunque no es aconsejable ya que en objetos con multiples anidaciones, sería poco legible y nada mantenible.
 // Por lo que en estos caso podemos hacemos uso del objeto 'this'
 // console.log(`${persona.nombre} ${persona.apellido}`);
 // console.log(`${this.nombre} ${this.apellido}`);

 //Ejecutamos el método obtenerPais de persona
 persona.ubicacion.direccion.obtenerPais(); //Imprime: El pais es: México

 /*** 
  * ===================================
  * Porque 'THIS'?
  * ===================================
  */

// this es una referencia que se crea cuando una función es invocada, no declarada.
// El valor de esa referencia depende al 100% del lugar en la que esa invocación se realice, llamado call-site.
// https://wmedia.es/aprender-usar-this-javascript/

// En general, el valor de this está determinado por cómo se llama a la función.
// No puede ser establecida por una asignación en tiempo de ejecución, y esto puede ser diferente cada vez que la función es llamada.
// ES5 introdujo el método bind() para establecer el valor de la función this independientemente de como es llamada.
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/this

// El valor de this es referenciada al contexto de donde es llamada y este puede variar en el momento de ejecución.
// En nuestro ejemplo this hace referencia a la instancia del método que lo contiene.

/*
direccion: {
   calle: 'Calle Río Sena 110',
   colonia: 'Cuauhtémoc',
   cp: '06500',
   ciudad: 'Ciudad de México',
   pais: 'México',
   obtenerPais: function () {
      console.log(this); // Object { calle: "Calle Río Sena 110", ..., pais: 'México',, obtenerPais: obtenerPais() }
      console.log(`El pais es: ${this.pais}`); //Imprime: El pais es: México
   }
}
// This en este caso referencia a la instancia del objeto direccion
*/


const persona2 = {
   nombre: 'Johan',
   apellido: 'Doe',
   nombreCompleto: function () {
      console.log(`${this.nombre} ${this.apellido}`);
   },
   ubicacion: {
      coordenadas: {
         latitud: '19.428854',
         longitud: '-99.165519'
      },
      direccion: {
         ciudad: 'Ciudad de Medellin',
         pais: 'Colombia',
         obtenerPais: function () {
            console.log(`El pais es: ${this.pais}`);

            let nuevoPais = function () {
               console.log(this); // Objeto window
               console.log(`El pais es: ${this.pais}`); 
            }

            nuevoPais();
         }
      }
   }
};

// Si declaramos un nueva función 'nuevoPais' dentro de nuestro método 'obtenerPais',
// 'this' ahora apunta al contexto global, nosotros esperariamos que apuntara al objeto que contiene a nuestro método,
// pero vemos que no es asi.
persona2.ubicacion.direccion.obtenerPais(); //Imprime: El pais es undefinded

// Para conseguir esto tenemos que hacer uso a una practica muy comun que se hace o hacia antes del estandar ES6, en este caso aun se usa en ES5.
// Y esto es hacer uso de una variable con la palabra "self", que apuntará a el this que esta a su vez apuntando a nuestro objeto que contiene el método.
const persona3 = {
   nombre: 'Johan',
   apellido: 'Doe',
   nombreCompleto: function () {
      console.log(`${this.nombre} ${this.apellido}`);
   },
   ubicacion: {
      coordenadas: {
         latitud: '19.428854',
         longitud: '-99.165519'
      },
      direccion: {
         ciudad: 'Ciudad de Medellin',
         pais: 'Colombia',
         obtenerPais: function () {
            console.log(`El pais es: ${this.pais}`);
            let self = this;
            let nuevoPais = function () {
               console.log(self); // Object { ciudad: "Ciudad de Medellin", pais: "Colombia", obtenerPais: obtenerPais() }
               console.log(`El pais es: ${self.pais}`);
            }

            nuevoPais();
         }
      }
   }
};

persona3.ubicacion.direccion.obtenerPais(); //Imprime: El pais es Colombia
// Como vemos ahora si accedemos al contexto que queríamos y tenemos el resultado deseado.
// Cabe recalcar que solo es adecuado usar esta forma si tenemos una declaracio nde este tipo dodne querramos acceder 
// a this desde una función como  en el ejemplo.
// La palabra "self" es solo una manera de llamar a esta variable que contiene nuestro this, puede ser cualquier nombre.
// "self" NO es una palabra reservada de javascript

// En ES6 tenemos las arrow functions y algunos métodos como bind(), call(), apply(), que nos ayudan a resolver estos problemas.
