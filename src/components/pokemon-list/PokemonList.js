import React, { useState } from "react";
import useFetchPokemons from "../../hooks/useFetchPokemons";
// import PokemonDetail from "../pokemon-detail/PokemonDetail";
import Pokemon from "../pokemon/Pokemon";

const PokemonList = () => {
  // const [pokemons, setPokemons] = useState([]);

  const [pokemons, error, isLoading] = useFetchPokemons();
  console.log("--------------------------------------------");
  // console.log("esta cargando...", isLoading);
  // console.log("RESULTADOS: ", pokemons);
  console.log("ERROR:..", error);
  return (
    <>
      {isLoading && <h2>Loading....</h2>}
      {/* {error && <h2>{error}</h2>} */}
      {!isLoading && (
        <>
          <div className="pokemon-list">
            <h3>Click on any Pokemon to see more details about it:</h3>
            {pokemons.map((pokemon, index) => {
              return <Pokemon key={`${index}-${pokemon.name}`} {...pokemon} />;
            })}
          </div>
          {/* <PokemonDetail url={pokemon.url} /> */}
        </>
      )}
    </>
  );
};

export default PokemonList;
