import React from "react";
import PropTypes from "prop-types";
import "./Pokemon.scss";

const Pokemon = ({ number, name, url, getDetailPokemon }) => {
  return (
    <>
      <div className="pokemon">
        <button
          className="pokemon__button"
          onClick={() => getDetailPokemon(number)}
        >
          <span className="pokemon__number">{number}</span>
          {" - "}
          <span className="pokemon__name">{name}</span>
        </button>
      </div>
    </>
  );
};

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Pokemon;
