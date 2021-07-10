import React from "react";
import "./Contact.styles.css";

const Contact = () => {
  return (
    <div id="#section4" className="contact-container">
      <div className="flex-contact">
        <div>
          <p>Phone: +1(484)-309-3456</p>
          <p>Email: reptilegoodies@yahoo.com</p>
          <i>Instagram</i>
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
