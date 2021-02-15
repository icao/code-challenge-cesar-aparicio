import React from "react";
import PokemonList from "../pokemon-list/PokemonList";
import "./Home.scss";

const Home = () => {
  return (
    <div className="section">
      <div className="home-container">
        <PokemonList />
      </div>
    </div>
  );
};

export default Home;
