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
