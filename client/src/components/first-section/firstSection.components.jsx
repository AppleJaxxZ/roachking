import React from "react";
import "./firstSection.styles.scss";
import roachbkg from "../../media/roachesbackground.jpg";

const FirstSection = () => {
  return (
    <div className="section-container">
      <img className="bgimage" alt="roach colony" src={roachbkg} />
      <div className="overlay-text">
        <h1 className="titleOver">
          SITE UNDER CONSTRUCTION - COME BACK MID OCTOBER 2021
        </h1>
        <p className="textOver">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
          <br /> Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </div>
  );
};

export default FirstSection;
