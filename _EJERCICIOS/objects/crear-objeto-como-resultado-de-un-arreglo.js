/*
creame un objeto de Javascript  que contengan llave valor, donde la llave es es accesor y el valor es value, del siguiente arreglo: const options = [
  { value: true, label: 'China', acessor: 'name' },
  { value: false, label: 'italy', acessor: 'country'  },
  { value: true, label: 'Germany', acessor: 'description'},
  { value: true, label: 'Japan', acessor: 'state'  }
].
*/


/*
Para crear un objeto de Javascript que contenga llave valor, donde la llave es el accesor y el valor es el value, del arreglo que me has dado, puedes usar el método Object.fromEntries (). Este método toma un arreglo de pares [llave, valor] y devuelve un objeto con esas propiedades. Por ejemplo:
*/


const options = [
  { value: true, label: 'China', acessor: 'name' },
  { value: false, label: 'italy', acessor: 'country'  },
  { value: true, label: 'Germany', acessor: 'description'},
  { value: true, label: 'Japan', acessor: 'state'  }
]


// Creamos un arreglo de pares [acessor, value] a partir de options
const pairs = options.map(option => [option.acessor, option.value]);
// Mostramos el objeto resultante
console.log(pairs);

// Creamos un objeto a partir de los pares
const obj = Object.fromEntries(pairs);

// Mostramos el objeto resultante
console.log(obj);
// { name: true, country: false, description: true, state: true }

