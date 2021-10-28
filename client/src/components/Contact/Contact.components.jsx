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
        <div className="paragraphs">
          <div className="fa-contact-icons">
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
              <FontAwesomeIcon
                id="icon"
                icon={["fab", "instagram"]}
                size="1x"
              />
            </a>
          </div>
          <h5>
            Phone Calls Will Be Accepted between 10am and 6pm Eastern Standard
            Time. -Thank you! .{" "}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
