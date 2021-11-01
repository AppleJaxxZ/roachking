import React from "react";
import "./Footer.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <h3>Copyright 2021 Dragon Feeders </h3>
      </div>
      <div className="payments-icons">
        <FontAwesomeIcon id="icon2" icon={["fab", "cc-mastercard"]} size="2x" />
        <FontAwesomeIcon id="icon2" icon={["fab", "cc-discover"]} size="2x" />
        <FontAwesomeIcon id="icon2" icon={["fab", "cc-visa"]} size="2x" />
        <FontAwesomeIcon id="icon2" icon={["fab", "cc-amex"]} size="2x" />
        <FontAwesomeIcon id="icon2" icon={["fab", "cc-stripe"]} size="2x" />
      </div>
    </div>
  );
};

export default Footer;
