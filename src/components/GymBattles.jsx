import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function GymBattles({ groupedGymBattles }) {
  const [showGymBattles, setShowGymBattles] = useState(false);

  const toggleGymBattles = () => {
    setShowGymBattles(!showGymBattles);
  };

  return (
    <div className="gym-battles pokemon">
      <div
        className="d-flex justify-content-between align-items-center section-header"
        onClick={toggleGymBattles}
      >
        <h2>
          {groupedGymBattles.length > 0 &&
          groupedGymBattles.some(
            (group) => group.league === "Manalo Conference"
          )
            ? "Grand Trials"
            : "Gym Battles"}
        </h2>
        <FontAwesomeIcon icon={showGymBattles ? faMinus : faPlus} size="2x" />
      </div>
      <div className={`animated-container ${showGymBattles ? "expanded" : ""}`}>
        {showGymBattles && (
          <div className="gym-battles-list d-flex flex-column gap-5">
            {groupedGymBattles.length > 0 ? (
              groupedGymBattles.map((group, index) => (
                <div className="d-flex flex-column gap-5" key={index}>
                  <h3>{group.league}</h3>
                  {group.gyms.map((gym, idx) => (
                    <div key={idx} className="d-flex align-items-center gap-5">
                      <div className="d-flex align-items-center gap-5">
                        <div className="gym-leader d-flex gap-5 justify-content-between text-center align-items-center">
                          <div className="gym-leader-image-name text-center align-items-center">
                            <img loading="lazy" 
                              className="gym-leader-image"
                              src={gym.gymLeaderImage}
                              alt={gym.gymLeaderName}
                            />
                            <h6 className="gym-leader-name">
                              {gym.gymLeaderName}
                            </h6>
                          </div>

                          <div className="gym-badge-image-name text-center align-items-center">
                            <img loading="lazy" 
                              className="gym-badge-image"
                              src={gym.gymBadgeImage}
                              alt={gym.gymBadgeName}
                            />
                            <h6
                              className="gym-badge-name"
                              dangerouslySetInnerHTML={{
                                __html: gym.gymBadgeName,
                              }}
                            />
                          </div>
                        </div>
                        <div className="description">
                          <h4 className="gym-name">{gym.gymName}</h4>
                          <p
                            className="lead"
                            dangerouslySetInnerHTML={{
                              __html: gym.gymDescription,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))
            ) : (
              <p className="lead">No gym battles found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default GymBattles;
