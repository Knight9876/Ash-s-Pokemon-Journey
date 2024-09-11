import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import BackgroundSlideShow from "./BackgroundSlideShow";
import CapturedPokemon from "./CapturedPokemon";
import ReleasedPokemon from "./ReleasedPokemon";
import GymBattles from "./GymBattles";
import LeagueBattles from "./LeagueBattles";
import RankBattles from "./RankBattles";
import TravelingCompanions from "./TravelingCompanions";

import regionDescription from "../data/regionDescription";
import capturedPokemon from "../data/capturedPokemon";
import releasedPokemon from "../data/releasedPokemon";
import gymBattles from "../data/gymBattles";
import leagueBattles from "../data/leagueBattles";
import rankBattles from "../data/rankBattles";
import travelingCompanions from "../data/travelingCompanions";

const RegionDetails = () => {
  const [showButton, setShowButton] = useState(false);
  const { regionName } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/timeline");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };  

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const descriptionData = regionDescription[regionName];
  const pokemonCaptured = capturedPokemon[regionName] || [];
  const pokemonReleased = releasedPokemon[regionName] || [];
  const battlesGym = gymBattles[regionName] || [];
  const battlesLeague = leagueBattles[regionName] || [];
  const companionsTraveling = travelingCompanions[regionName] || [];

  // Grouping Pokémon by league
  const pokemonCapturedLeagues = [
    ...new Set(pokemonCaptured.map((poke) => poke.league)),
  ];
  const groupedPokemonCaptured = pokemonCapturedLeagues.map((league) => ({
    league,
    pokemon: pokemonCaptured.filter((poke) => poke.league === league),
  }));

  // Grouping Pokémon by league
  const pokemonReleasedLeagues = [
    ...new Set(pokemonReleased.map((poke) => poke.league)),
  ];
  const groupedPokemonReleased = pokemonReleasedLeagues.map((league) => ({
    league,
    pokemon: pokemonReleased.filter((poke) => poke.league === league),
  }));

  // Grouping Gym Battles by league

  const gymBattleLeagues = [...new Set(battlesGym.map((gym) => gym.league))];
  const groupedGymBattles = gymBattleLeagues.map((league) => ({
    league,
    gyms: battlesGym.filter((gym) => gym.league === league),
  }));

  // Grouping League Battles by league
  const leagueBattleLeagues = [
    ...new Set(battlesLeague.map((battle) => battle.league)),
  ];
  const groupedLeagueBattles = leagueBattleLeagues.map((league) => ({
    league,
    leagues: battlesLeague.filter((battle) => battle.league === league),
  }));

  // Grouping Traveling Companions by league
  const companionsLeagues = [
    ...new Set(companionsTraveling.map((companion) => companion.league)),
  ];
  const groupedCompanions = companionsLeagues.map((league) => ({
    league,
    leagues: companionsTraveling.filter(
      (companion) => companion.league === league
    ),
  }));

  return (
    <>
      <BackgroundSlideShow />
      <div className="overlay"></div>
      <FontAwesomeIcon icon={faArrowLeft} className="back-button text-white z-index-1000 position-fixed" onClick={handleGoBack} size="2x"/>
      <div className="region container mt-5 mb-5 text-white text-start">
        <div className="region-details">
          <h1>
            {regionName.charAt(0).toUpperCase() + regionName.slice(1)} Region
          </h1>

          {/* Display the league image and description */}
          {descriptionData && (
            <div>
              <div className="league-details d-flex gap-5 align-items-center region-image-description-1">
                <p className="lead justify">{descriptionData.description1}</p>
                <img loading="lazy" 
                  src={descriptionData.image1}
                  alt={`${regionName} League`}
                  className="league-image"
                />
              </div>
              <br />
              {regionName === "galar" || regionName === "kanto" ? (
                <div className="league-details d-flex gap-5 align-items-center region-image-description-2">
                  <img loading="lazy" 
                    src={descriptionData.image2}
                    alt="Rank Pyramid"
                    className="league-image"
                  />
                  <p
                    className="lead"
                    dangerouslySetInnerHTML={{
                      __html: descriptionData.description2,
                    }}
                  />
                </div>
              ) : (
                ""
              )}
              {regionName === "kanto" ? (
                <div className="league-details d-flex gap-5 align-items-center region-image-description-1">
                  <p
                    className="lead"
                    dangerouslySetInnerHTML={{
                      __html: descriptionData.description3,
                    }}
                  />
                  <img loading="lazy" 
                    src={descriptionData.image3}
                    alt="Rank Pyramid"
                    className="league-image"
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          )}

          <CapturedPokemon groupedPokemonCaptured={groupedPokemonCaptured} />
          <ReleasedPokemon groupedPokemonReleased={groupedPokemonReleased} />
          <GymBattles groupedGymBattles={groupedGymBattles} />
          <LeagueBattles groupedLeagueBattles={groupedLeagueBattles} />
          <RankBattles
            rankBattles={regionName === "galar" ? rankBattles : []}
          />
          <TravelingCompanions groupedCompanions={groupedCompanions} />
        </div>

        {showButton && (
          <div onClick={scrollToTop} className="scroll-to-top text-white z-index-1000 d-flex flex-column">
            <FontAwesomeIcon icon={faChevronUp} />
            <FontAwesomeIcon icon={faChevronUp} />
          </div>
        )}
      </div>
    </>
  );
};

export default RegionDetails;
