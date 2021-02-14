import React from "react";
import PropTypes from "prop-types";

const Pokemon = ({ name, url }) => {
  return (
    <div className="pokemon-name">
      <p>{name}</p>
      <span>{url}</span>
    </div>
  );
};

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Pokemon;
