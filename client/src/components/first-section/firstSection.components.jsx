import React from "react";
import "./firstSection.styles.scss";
import roachbkg from "../../media/roachesbackground.jpg";

const FirstSection = () => {
  return (
    <div className="section-container">
      <img className="bgimage" alt="roach colony" src={roachbkg} />
      <div className="overlay-text">
        <h1 className="titleOver">Dragon Feeder's Dubia Roaches</h1>
      </div>
    </div>
  );
};

export default FirstSection;
