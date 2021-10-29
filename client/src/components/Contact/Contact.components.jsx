import React from "react";
import "./Contact.styles.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div id="#section4" className="contact-container">
      <div className="flex-contact">
        <a href="tel:+1(484)-309-3456">
          <FontAwesomeIcon id="icon" icon={faPhone} size="1x" />
        </a>
        <Link
          to="#"
          onClick={(e) => {
            window.open("mailto:reptilegoodies@yahoo.com");
            e.preventDefault();
          }}
        >
          <FontAwesomeIcon id="icon" icon={faEnvelope} size="1x" />
        </Link>
        <a
          href="https://www.instagram.com/dragonfeeders"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon id="icon" icon={["fab", "instagram"]} size="1x" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
