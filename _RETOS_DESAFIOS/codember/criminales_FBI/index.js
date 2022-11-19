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

import fetch from 'node-fetch'

const getDataEncrypted = async () => {
  const respose = await fetch("https://codember.dev/encrypted.txt");
  const dataText = await respose.text();

  return dataText;
};

getDataEncrypted().then((res) => {
  const dataExtracted = res.split(" ");
  console.log(dataExtracted);
  const arrayEncryptedCodes = dataExtracted.map((code) => BigInt(code));
  console.log(arrayEncryptedCodes);
  // todo: implement a function to read the string word, trying to read each of the characters and compare with 97 - 122 range, which corresponds to a lower case alphabet letter
});
