import React from "react";
import "./Footer.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div>
      <h3>Copyright 2021 Dragon Feeders </h3>
      <div className="payments-icons">
        <FontAwesomeIcon id="icon" icon={["fab", "cc-mastercard"]} size="3x" />
        <FontAwesomeIcon id="icon" icon={["fab", "cc-discover"]} size="3x" />
        <FontAwesomeIcon id="icon" icon={["fab", "cc-paypal"]} size="3x" />
        <FontAwesomeIcon id="icon" icon={["fab", "cc-visa"]} size="3x" />
        <FontAwesomeIcon id="icon" icon={["fab", "cc-amex"]} size="3x" />
        <FontAwesomeIcon id="icon" icon={["fab", "cc-stripe"]} size="3x" />
      </div>
    </div>
  );
};

export default Footer;
