export async function getPokemons() {
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=10";
  try {
    const response = await fetch(URL);
    const { results } = await response.json();
    return results;
  } catch (error) {
    return `${error.message} - Could not get the pokemons`;
  }
}

export async function getDetailsPokemon(number) {
  const URL = `https://pokeapi.co/api/v2/pokemon/${number}/`;
  try {
    const response = await fetch(URL);
    const results = await response.json();
    return results;
  } catch (error) {
    return `${error.message} - 
No detail of the pokemon found`;
  }
}
