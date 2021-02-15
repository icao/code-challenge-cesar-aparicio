import React from "react";
import "./PokemonDetails.scss";

const PokemonDetail = ({
  abilities,
  id,
  name,
  height,
  weight,
  sprites: { front_default },
}) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={front_default} alt={name} />
      </div>
      <div className="card__body">
        <h3 className="card__title">{name}</h3>
        <p>
          <strong>N.º {id}</strong>
        </p>
        <p>
          <span className="card__label">abilities: </span>
          {abilities.map(({ ability }, index) => (
            <span key={index}>
              {index !== 0 && ", "}
              {ability.name}
            </span>
          ))}
        </p>
      </div>

      <div className="card__footer">
        <p>
          <span className="card__label">height: </span>
          {height}
        </p>
        <p>
          <span className="card__label">weight: </span>
          {weight}
        </p>
      </div>
    </div>
  );
};

export default PokemonDetail;
