import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import PokemonCard from "./PokemonCard";

function CapturedPokemon({ groupedPokemonCaptured }) {
  const [showCaptured, setShowCaptured] = useState(false);

  const toggleCaptured = () => {
    setShowCaptured(!showCaptured);
  };

  return (
    <div className="pokemon-captured pokemon">
      <div
        className="d-flex justify-content-between align-items-center section-header"
        onClick={toggleCaptured}
      >
        <h2>Pokémon Captured</h2>
        <FontAwesomeIcon icon={showCaptured ? faMinus : faPlus} size="2x" />
      </div>
      <div className={`animated-container ${showCaptured ? "expanded" : ""}`}>
        {showCaptured && (
          <div className="pokemon-list d-flex flex-column">
            {groupedPokemonCaptured.map((group, index) => (
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CapturedPokemon;
