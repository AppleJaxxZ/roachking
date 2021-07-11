import React from "react";
import "./Contact.styles.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div id="#section4" className="contact-container">
      <div className="flex-contact">
        <div>
          <p>Phone: +1(484)-309-3456</p>
          <p>Email: reptilegoodies@yahoo.com</p>
          <a href="tel:+1(484)-309-3456">
            <FontAwesomeIcon id="icon" icon={faPhone} size="3x" />
          </a>
          <Link
            to="#"
            onClick={(e) => {
              window.open("mailto:reptilegoodies@yahoo.com");
              e.preventDefault();
            }}
          >
            <FontAwesomeIcon id="icon" icon={faEnvelope} size="3x" />
          </Link>
          <a href="https://www.instagram.com/dragonfeeders" target="_blank">
            <FontAwesomeIcon id="icon" icon={["fab", "instagram"]} size="3x" />
          </a>
        </div>
      </div>

      <div className="paragraphs">
        <h5>
          Please feel free to give us call ANYDAY between 10am and 7pm Eastern
          Standard Time.{" "}
        </h5>

        <h5>
          If your in the Lehigh Valley, Pa area you can also scheudle a pickup!
        </h5>
      </div>
    </div>
  );
};

export default Contact;
