import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function Section({ regionName, description, image, year }) {
  return (
    <div className="section d-flex gap-5 align-items-center">
      <div className="timeline-line bg-white"></div>
      <div className="other-than-timeline-part d-flex align-items-center gap-5">
        <div className="point-arrow-img d-flex flex-row align-items-center">
          <div className="timeline-point bg-white" />
          <div className="timeline-arrow text-white">
            <FontAwesomeIcon className="arrow" icon={faPlay} />
          </div>
          <img loading="lazy" 
            src={image}
            alt={`${regionName} region`}
            className="p-3 timeline-image"
          />
        </div>
        <div className="text-white text-start">
          <h1>{regionName} Region</h1>
          <h5>{year}</h5>
          <p className="lead justify">{description}</p>
          <Link to={`/timeline/${regionName.toLowerCase()}`}>
            <button className="cssbuttons-io-button">
              More
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
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Section;
