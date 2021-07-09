import React from "react";
import "./Mid-Section.styles.scss";
import { colonyData } from "../../Data/Data";

const MidSection = () => {
  return (
    <div className="mid-container">
      <div className="flex-colony">
        {colonyData.map((items) => (
          <img
            className="colonyImages"
            src={items.imageUrl}
            alt={items.title}
            key={items.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MidSection;
