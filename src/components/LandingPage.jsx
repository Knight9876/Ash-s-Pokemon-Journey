import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import BackgroundSlideShow from "./BackgroundSlideShow";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleButtonClickTimeline = () => {
    navigate("/timeline");
  };

  const handleButtonClickAbout = () => {
    navigate("/about");
  };

  return (
    <>
      <BackgroundSlideShow />
      <div className="overlay"></div>
      <div className="container-fluid d-flex justify-content-center align-items-center text-center min-vh-100 text-white">
        <div>
          <h1 className="display-2 fw-bold">
            Journey to Become the Ultimate Pokémon Master
          </h1>
          <p className="lead text-center">
            Relive Ash’s epic adventure from Pallet Town to the Pokémon World
            Championships.
          </p>
          <div className="buttons d-flex align-items-center justify-content-center gap-5">
            <button
              onClick={handleButtonClickAbout}
              className="cssbuttons-io-button about-him-button"
            >
              About Him
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

            <button
              onClick={handleButtonClickTimeline}
              className="cssbuttons-io-button about-his-journey-button"
            >
              About His Journey
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
      </div>
    </>
  );
};

export default LandingPage;
