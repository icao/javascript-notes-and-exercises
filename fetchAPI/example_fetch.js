/** ESTILO 1 con arrow functions */

/*
const url = " https://pokeapi.co/api/v2/pokemon/ditto";

const getPokemon = async () => {
  try {
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (error) {
    console.log(`Ups..!!! Hubo un error: ${error.message}`);
  }
};

const pokemon = getPokemon().then((pokemon) => console.log(pokemon));

console.log(pokemon);
*/

/** ESTILO 2 con funciones normales*/
const url = "https://pokeapi.co/api/v2/pokemon/ditto";

async function getPokemon() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`Ups..! hubo un error: ${error.message}`);
  }
}

getPokemon()
  .then((pokemon) => console.log(pokemon))
  .catch((e) => console.log(e))
  .finally(() => console.log("Peticion terminada"));