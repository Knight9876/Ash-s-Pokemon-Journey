import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function RankBattles({ rankBattles }) {
  const [showRankBattles, setShowRankBattles] = useState(false);

  const toggleRankBattles = () => {
    setShowRankBattles(!showRankBattles);
  };

  return (
    <div className="rank-battles pokemon">
      <div
        className="d-flex justify-content-between gap-5 align-items-center section-header"
        onClick={toggleRankBattles}
      >
        <h2>Rank Battles</h2>
        <FontAwesomeIcon icon={showRankBattles ? faMinus : faPlus} size="2x" />
      </div>
      <div
        className={`animated-container ${showRankBattles ? "expanded" : ""}`}
      >
        {showRankBattles && (
          <div>
            <div className="rank-battles-list d-flex flex-column gap-5">
              {rankBattles.length > 0 ? (
                rankBattles.map((battle, index) => (
                  <div key={index} className="d-flex align-items-center gap-5">
                    <div className="d-flex align-items-center gap-5">
                      <div className="trainer d-flex gap-5 justify-content-between text-center align-items-center">
                        <div className="trainer-image-name text-center align-items-center">
                          <img loading="lazy" 
                            className="trainer-image"
                            src={battle.trainerImage}
                            alt={battle.trainerName}
                          />
                          <h6 className="trainer-name">{battle.trainerName}</h6>
                        </div>
                        <div className="class-image-name text-center align-items-center">
                          <img loading="lazy" 
                            className="class-image"
                            src={battle.classImage}
                            alt={battle.class}
                          />
                          <h6 className="class-name">{battle.class}</h6>
                        </div>
                      </div>
                      <div className="description">
                        <h4 className="battle-rank">{battle.battleRank}</h4>
                        <p
                          className="lead"
                          dangerouslySetInnerHTML={{
                            __html: battle.battleDescription,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="lead">No rank battles found.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RankBattles;
