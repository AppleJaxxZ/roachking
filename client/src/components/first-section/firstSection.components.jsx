import React from "react";
import "./firstSection.styles.scss";
import roachbkg from "../../media/roachesbackground.jpg";

const FirstSection = () => {
  return (
    <div className="section-container">
      <img className="bgimage" alt="roach colony" src={roachbkg} />
      <div className="overlay-text">
        <h1 className="titleOver">
          SITE UNDER CONSTRUCTION - Completion Date - Nov 1st-2021
        </h1>
      </div>
    </div>
  );
};

export default FirstSection;