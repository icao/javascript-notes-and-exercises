/* 
Reto 2: ¡Atrapa a esos ciber criminales!

Problema

Un grupo de ciber criminales están usando mensajes encriptados para comunicarse. El FBI nos ha pedido ayuda para descifrarlos.

Los mensajes son cadenas de texto que incluyen números enteros muy largos y espacios en blanco. Aunque los números no parecen tener sentido... una chica llamada Alice ha descubierto que podrían usar el código ASCII de las letras en minúscula.

Con su método ha conseguido descifrar estos mensajes:

"109105100117" -> midu
"9911110010110998101114" -> codember
"9911110010110998101114 109105100117" -> codember midu
"11210897121 116101116114105115" -> play tetris
Pero han interceptado un mensaje más largo que no han podido y nos han dicho que es muy importante que lo descifremos:

11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101

Ahora que ya sabes esto, https://codember.dev/encrypted.txt

Pistas
Recuerda que los mensajes son cadenas de texto conformadas por números y espacios en blanco.
Parece que los números tienen algo que ver con el código ASCII.
Los espacios en blanco parece que son simplemente espacios...
Cómo enviar la solución
Usa el comando "submit" para enviar tu solución con la frase descifrada, en minúsculas y respetando los espacios en blanco. Por ejemplo:

$ submit this is fine
*/

import fetch from "node-fetch";

const getDataEncrypted = async () => {
  const respose = await fetch("https://codember.dev/encrypted.txt");
  const dataText = await respose.text();

  return dataText;
};

getDataEncrypted().then((res) => {
  const messageDecrypted = decryptData(res)
  console.log(messageDecrypted);
});

function decryptData(data) {
  let currentCharacter = ""; // variable acumuladora temporal que almacena 3 caracteres
  let messageDecrypted = []; // Arreglo con los caracteres del mensaje

  // Recorremos toda la cadena de texto caracter por caracter
  for (const character of data) {
    currentCharacter = currentCharacter + character; // concatenamos el caracter anterior con el siguiente
    
    // por cada iteracion, evaluamos si el caracter actual en la variable acumuladora cumpre la restriccion de ser minuscula en ascii
    if (Number(currentCharacter) >= 97 && Number(currentCharacter) <= 122) {
      // agregamos al areglo de caracteres el codigo convertido a caracter
      messageDecrypted.push(String.fromCharCode(currentCharacter));
      // limpiamos la variable acumuladora para obtener el sig codigo del siguiente caracter
      currentCharacter = "";
    } else if (currentCharacter === " ") { // si encontramos un espacio, agregamos un espacio a nuestro arreglo que contiene todos los caracteres del mensaje decriptado
      messageDecrypted.push(String.fromCharCode(32));
    }
  }

  // retornamos una funcion que reduce el arreglo de caracteres con el mensaje a un string.
  return messageDecrypted.reduce(
    (char, acumulador) => char + acumulador
  );

}
