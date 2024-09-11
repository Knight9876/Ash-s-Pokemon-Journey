import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function TravelingCompanions({ groupedCompanions }) {
  const [showCompanions, setShowCompanions] = useState(false);

  const toggleCompanions = () => {
    setShowCompanions(!showCompanions);
  };

  // Add a fallback check if groupedCompanions is not an array or empty
  if (!Array.isArray(groupedCompanions) || groupedCompanions.length === 0) {
    return <p>No traveling companions found.</p>;
  }

  return (
    <div className="gym-battles last-section pokemon">
      <div
        className="d-flex justify-content-between align-items-center section-header"
        onClick={toggleCompanions}
      >
        <h2>Traveling Companions</h2>
        <FontAwesomeIcon icon={showCompanions ? faMinus : faPlus} size="2x" />
      </div>
      <div className={`animated-container ${showCompanions ? "expanded" : ""}`}>
        {showCompanions && (
          <div className="traveling-companions-list d-flex flex-column gap-5">
            {groupedCompanions.map((group, index) => (
              <div className="d-flex flex-column gap-5" key={index}>
                <h3>{group.league}</h3>
                {group.leagues.map((companion, idx) => (
                  <div key={idx} className="d-flex align-items-center gap-5">
                    <div className="d-flex align-items-center gap-5">
                      <div className="traveling-companion text-center align-items-center">
                        <img loading="lazy" 
                          className="traveling-companion-image"
                          src={companion.image}
                          alt={companion.name}
                        />
                        <h6 className="traveling-companion-name">
                          {companion.name}
                        </h6>
                      </div>
                      <div className="traveling-companion-role-description">
                        <h4>{companion.role}</h4>
                        <p
                          className="lead justify"
                          dangerouslySetInnerHTML={{
                            __html: companion.companionDescription,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TravelingCompanions;
