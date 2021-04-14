import React, { useState } from "react";
import "./ContactButton.css";
import { Link } from "react-router-dom";

/**
 * @author
 * @function ContactButton
 **/

const ContactButton = () => {
  const [open, handleOpen] = useState(false);

  return (
    <div className="contact-icons-container">
      <button className="contact-btn" onClick={() => handleOpen(!open)}>
        <i className="fas fa-phone-alt align-icon"></i>
      </button>
      <div
        className={
          open
            ? "contact-options-container opt-updated"
            : "contact-options-container"
        }
      >
        <a
          className="whatsapp"
          href="https://api.whatsapp.com/send?phone=919022266503"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-whatsapp fa-2x"></i>
        </a>

        <Link to="/contactUs" className="contact">
          <i className="fas fa-user-alt fa-2x"></i>
        </Link>
      </div>
    </div>
  );
};

export default ContactButton;
