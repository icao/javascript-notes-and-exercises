// TODO: este aun es un ejemplo, necesito teoria y adema anexar el ejercicio a una seccion de EJERCICIOS


const matrizEjemplo = [
  [
    ["nombre", "ramona"],
    ["edad", "19"],
    ["nick", "@ramones99"],
  ],
  [
    ["nombre", "philiberto"],
    ["edad", "99"],
    ["nick", "@cat23"],
  ],
  [
    ["edad", "30"],
    ["nombre", "shikimura"],
    ["correo", "paco@gmail.com"],
  ],
];

function obtenerObjeto(dato) {
  const objetoCreado = dato.map((usersCollection) => {
    return Object.fromEntries(usersCollection);
  });
  return objetoCreado;
}

console.log(obtenerObjeto(matrizEjemplo));
