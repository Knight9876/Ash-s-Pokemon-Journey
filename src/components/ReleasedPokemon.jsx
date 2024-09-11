import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import PokemonCard from "./PokemonCard";

function ReleasedPokemon({ groupedPokemonReleased }) {
  const [showReleased, setShowReleased] = useState(false);

  const toggleReleased = () => {
    setShowReleased(!showReleased);
  };

  return (
    <div className="pokemon-released pokemon">
      <div
        className="d-flex justify-content-between align-items-center section-header"
        onClick={toggleReleased}
      >
        <h2>Pokémon Released</h2>
        <FontAwesomeIcon icon={showReleased ? faMinus : faPlus} size="2x" />
      </div>
      <div className={`animated-container ${showReleased ? "expanded" : ""}`}>
        {showReleased && (
          <div className="pokemon-list d-flex flex-column">
            {groupedPokemonReleased.length > 0 ? (
              groupedPokemonReleased.map((group, index) => (
                <div key={index}>
                  <h3>{group.league}</h3>
                  <div className="pokemon-list d-flex flex-column">
                    {group.pokemon.map((poke, idx) => (
                      <PokemonCard
                        key={idx}
                        image={poke.image}
                        name={poke.name}
                        description={poke.description}
                        url={poke.url}
                      />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p className="lead">No Pokémon Released.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ReleasedPokemon;
