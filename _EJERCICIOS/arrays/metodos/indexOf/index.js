const arrayNumerico = [1, 2, 3, 4, 5];
const index = arrayNumerico.indexOf(8);
console.log(index); //-1

const existe = arrayNumerico.includes(8);
console.log(existe); // false

const index2 = arrayNumerico.indexOf(5);
console.log(index2); // 4
const existe2 = arrayNumerico.includes(5);
console.log(existe2); // true

function inventario(name) {
  const arrayRopa = ["short", "playera", "pantalon", "camisa", "jersey"];

  console.log(arrayRopa);

  console.log(`Valor del index name(${name}) es: ${arrayRopa.indexOf(name)}`);
  console.log(arrayRopa.filter((item) => item !== name));
  console.log(arrayRopa);
}
inventario("pantalon");
