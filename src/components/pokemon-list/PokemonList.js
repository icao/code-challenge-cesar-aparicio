import React, { useState } from "react";
import useFetchPokemons from "../../hooks/useFetchPokemons";
import PokemonDetails from "../pokemon-details/PokemonDetails";
import useFetchDetailsPokemon from "../../hooks/useFetchDetailsPokemon";
import Pokemon from "../pokemon/Pokemon";
import "./PokemonList.scss";

const PokemonList = () => {
  const [pokemons, error, isLoading] = useFetchPokemons();
  let [numberPokemon, setNumberPokemon] = useState(null);
  const [detailsPokemon] = useFetchDetailsPokemon(numberPokemon);

  function getDetailPokemon(number) {
    setNumberPokemon(number);
  }

  // console.log(detailsPokemon);

  return (
    <>
      {isLoading && <h2>Loading....</h2>}
      {error && <h2>{error}</h2>}
      {!isLoading && (
        <>
          <div className="pokemon-list">
            <h3 className="pokemon-list__title">
              Click on any Pokemon to see more details about it:
            </h3>
            {pokemons.map((pokemon, index) => (
              <Pokemon
                key={index}
                number={index + 1}
                {...pokemon}
                getDetailPokemon={getDetailPokemon}
              />
            ))}
          </div>

          <div className="pokemon-detail">
            {detailsPokemon.length !== 0 && (
              <PokemonDetails {...detailsPokemon} />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default PokemonList;
