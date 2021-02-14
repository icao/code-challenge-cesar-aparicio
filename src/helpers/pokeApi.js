// export function getPokemons() {
//   const ULR = "https://pokeapi.co/api/v2/pokemon?limit=10";
//   return fetch(ULR)
//     .then((response) => response.json())
//     .then((resp) => console.log(resp.results));
// }

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
