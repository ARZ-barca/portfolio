import React from "react";
import "./styles/Contact.css";

function Contact(props) {
  return (
    <div className="contact-info">
      <h2 className="contact-info-heading">Contact info</h2>
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:alireza.zabihi@yahoo.com">alireza.zabihi@yahoo.com</a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
