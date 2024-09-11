import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import BackgroundSlideShow from "./BackgroundSlideShow";
import Section from "./Section";

const Timeline = () => {
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
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

  return (
    <>
      <BackgroundSlideShow />
      <div className="overlay"></div>
      <FontAwesomeIcon icon={faArrowLeft} className="back-button text-white z-index-1000 position-fixed" onClick={handleGoBack} size="2x"/>
      <div className="container mt-5 mb-5">
        <Section
          regionName={"Galar"}
          year={"2019 - 2023"}
          description={
            "A land of historical landmarks and modern cities, Galar offers a blend of tradition and innovation. Explore the Wild Area for dynamic Pokémon encounters, challenge Gym Leaders in spectacular stadiums, and participate in the intense Champion Cup."
          }
          image="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031366/bg/bg1_ftc8ii.png"
        />
        <Section
          regionName={"Alola"}
          year={"2016 - 2019"}
          description={
            "A tropical paradise comprised of four islands, Alola is where the bond between people and Pokémon thrives. Experience the unique Island Challenge instead of traditional Gyms, and encounter regional variants of familiar Pokémon."
          }
          image="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031400/bg/bg7_pvkgoh.png"
        />
        <Section
          regionName={"Kalos"}
          year={"2013 - 2016"}
          description={
            "A region inspired by France, Kalos is known for its beauty, fashion, and elegance. From the iconic Prism Tower to the mysterious ruins, Kalos is a place of cultural richness and deep mysteries, with Mega Evolution playing a significant role in battles."
          }
          image="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031400/bg/bg8_f6dskv.png"
        />
        <Section
          regionName={"Unova"}
          year={"2010 - 2013"}
          description={
            "An expansive region with a modern, metropolitan feel, Unova is inspired by New York City. It features a wide variety of environments, from bustling cities to serene forests, and introduces many new Pokémon species unique to the region."
          }
          image="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031973/unova_ixfcvn.png"
        />
        <Section
          regionName={"Sinnoh"}
          year={"2006 - 2010"}
          description={
            "A region of myths and legends, Sinnoh is known for its rugged mountain ranges and ancient history. The majestic Mount Coronet stands at its heart, and Trainers often find themselves exploring the origins of the Pokémon world itself."
          }
          image="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031390/bg/bg18_cnsbd1.png"
        />
        <Section
          regionName={"Hoenn"}
          year={"2002 - 2005"}
          description={
            "A region with a diverse ecosystem, Hoenn is surrounded by vast oceans and dotted with volcanic activity. Known for its tropical climate, this region emphasizes nature and environmental themes, including dynamic weather changes during gameplay."
          }
          image="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031969/hoenn_uig4qq.png"
        />
        <Section
          regionName={"Johto"}
          year={"1999 - 2002"}
          description={
            "Johto is steeped in tradition and history, sharing a close connection with the Kanto region. It’s known for its beautiful architecture, legendary Pokémon, and the introduction of new battle mechanics like held items and breeding."
          }
          image="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031391/bg/bg24_zwqckq.png"
        />
        <Section
          regionName={"Kanto"}
          year={"1997 - 1999, 2005 - 2006"}
          description={
            "The original and most iconic Pokémon region, Kanto is where it all began. Featuring familiar locales like Pallet Town and Cerulean City, it’s a region full of nostalgia and adventure, setting the stage for the entire Pokémon world."
          }
          image="https://res.cloudinary.com/dlnvozmgw/image/upload/v1726031969/kanto_waqgem.png"
        />

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

export default Timeline;
