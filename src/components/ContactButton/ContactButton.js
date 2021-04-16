import React, { useRef, useState, useEffect } from "react";
import "./ContactButton.css";
import { Link } from "react-router-dom";

/**
 * @author
 * @function ContactButton
 **/

const ContactButton = () => {
  // State for our button
  const [open, handleOpen] = useState(false);

  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef();

  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => handleOpen(false));

  // Hook
  function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (e) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(e.target)) {
          return;
        }
        handler(e);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      }
    }, [ref, handler]);
  }


  return (
    <div ref={ref} className="contact-icons-container">
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
          <i className="fab fa-whatsapp fa-2x" onClick={() => handleOpen(!open)}></i>
        </a>

        <Link to="/contactUs" className="contact">
          <i className="fas fa-user-alt fa-2x" onClick={() => handleOpen(!open)}></i>
        </Link>
      </div>
    </div>
  );
};

export default ContactButton;
