import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function LeagueBattles({ groupedLeagueBattles }) {
  const [showLeagueBattles, setShowLeagueBattles] = useState(false);

  const toggleLeagueBattles = () => {
    setShowLeagueBattles(!showLeagueBattles);
  };

  return (
    <div className="league-battles pokemon">
      <div
        className="d-flex justify-content-between align-items-center section-header"
        onClick={toggleLeagueBattles}
      >
        <h2>League Battles</h2>
        <FontAwesomeIcon
          icon={showLeagueBattles ? faMinus : faPlus}
          size="2x"
        />
      </div>
      <div
        className={`animated-container ${showLeagueBattles ? "expanded" : ""}`}
      >
        {showLeagueBattles && (
          <div className="league-battles-list d-flex flex-column gap-5">
            {groupedLeagueBattles.length > 0 ? (
              groupedLeagueBattles.map((group, index) => (
                <div className="d-flex flex-column gap-5" key={index}>
                  <h3>{group.league}</h3>
                  {group.leagues.map((battle, idx) => (
                    <div
                      key={idx}
                      className="d-flex justify-content-between align-items-center gap-5"
                    >
                      <div className="d-flex align-items-center gap-5">
                        <div className="trainer text-center align-items-center">
                          <img loading="lazy" 
                            className="trainer-image"
                            src={battle.trainerImage}
                            alt={battle.trainerName}
                          />
                          <h6 className="trainer-name">{battle.trainerName}</h6>
                        </div>
                        <div className="description">
                          <h4 className="battle-rank">{battle.battleRank}</h4>
                          <p
                            className="lead text-start"
                            dangerouslySetInnerHTML={{
                              __html: battle.battleDescription,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))
            ) : (
              <p className="lead">No league battles found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default LeagueBattles;
