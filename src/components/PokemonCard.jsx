import React from "react";

const PokemonCard = ({ image, name, description, url }) => {
  const handleButtonClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div className="pokemon-div d-flex align-items-center gap-4">
      <img loading="lazy" src={image} alt={name} className="pokemon-image" />
      <div className="name-entry-pokedex d-flex flex-column">
        <h4 className="pokemon-name">{name}</h4>
        <p
          className="lead pokedex-entry"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <button
          onClick={handleButtonClick}
          className="cssbuttons-io-button pokedex-button"
        >
          Pokédex
          <div className="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PokemonCard;
