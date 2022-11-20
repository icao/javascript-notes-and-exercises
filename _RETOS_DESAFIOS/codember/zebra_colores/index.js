/* 
Reto 3: La zebra de colores

Problema

TMChein ya se está preparando para las fiestas y quiere empezar a decorar la casa con las luces de navidad.

Quiere comprar una pero sus favoritas son las que tienen dos colores que se van alternando. Como una zebra de dos colores.

Ha hecho que las luces sean Arrays y cada posición un color. Y quiere saber qué luces tienen las zebras más largas y cuál es el último color de esa sucesión de colores. Por ejemplo:

['red', 'blue', 'red', 'blue', 'green'] -> 4, blue
['green', 'red', 'blue', 'gray'] -> 2, gray
['blue', 'blue', 'blue', 'blue'] -> 1, blue
['red', 'green', 'red', 'green', 'red', 'green'] -> 6, green
['blue', 'red', 'blue', 'red', 'gray'] -> 4, red
['red', 'red', 'blue', 'red', 'red', 'red', 'green'] -> 3, red
['red', 'blue', 'red', 'green', 'red', 'green', 'red', 'green'] -> 6, green

['🔴', '🔵', '🔴', '🔵', '🟢'] -> 4, blue  => 4 veces se alterno y el utimo fue 🔵
['🟢', '🔴', '🔵', '⚫'] -> 2, gray => 2 veces se alterno y el utimo fue ⚫
['🔵', '🔵', '🔵', '🔵'] -> 1, blue => 1 veces se alterno y el utimo fue 🔵
['🔴', '🟢', '🔴', '🟢', '🔴', '🟢'] -> 6, green => 6 se alterno y el utimo fue 🟢
['🔵', '🔴', '🔵', '🔴', '⚫'] -> 4, red => 4 veces se alterno y el utimo fue 🔴
['🔴', '🔴', '🔵', '🔴', '🔴', '🔴', '🟢'] -> 3, red => 3 veces se alterno y el utimo fue 🔴
['🔴', '🔵', '🔴', '🟢', '🔴', '🟢', '🔴', '🟢'] -> 6, green => 6 veces se alterno y el ultimo fue 🟢

Fíjate que sólo quiere saber la longitud de cuando dos colores se van alternando. Una vez que se rompe la alternancia de los dos colores, deja de contar.

Ahora que ya sabes esto, https://codember.dev/colors.txt

Recuerda que una zebra de colores es cuando dos colores se alternan una y otra vez. Si se repite un color en la posición siguiente o es un tercer color, entonces se deja de contar.
Lo que queremos calcular es la tira de colores más larga en forma de zebra y el último color de esa tira de colores.
Cómo enviar la solución
Usa el comando "submit" para enviar tu solución. Por ejemplo:

$ submit 62@red
*/

import fetch from "node-fetch";

const getDataColors = async () => {
  try {
    const respose = await fetch("https://codember.dev/colors.txt");
    const dataText = await respose.text();

    return dataText;
  } catch (error) {
    throw new Error(error.message);
  }
};

getDataColors().then((colors) => {
  console.log(colors);
});
