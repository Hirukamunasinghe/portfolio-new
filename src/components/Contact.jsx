import { useState } from "react";
import contact from "./contact.jpg";

function Contact() {
  return (
    <div id="contact">
      <div className="contact-card">
          <h1 className="contacth1">Contact</h1>
          <form
            action="https://formsubmit.co/munasinghehiruka@gmail.com"
            method="POST"
          >
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Name"
              data-validation-required-message="Please enter your name."
            />
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email Address"
              data-validation-required-message="Please enter your name."
            />
            <input
              className="msginput"
              type="text"
              id="msg"
              name="message"
              required
              placeholder="Message"
              data-validation-required-message="Message"
            />
            <button className="sendbtn" type="submit">
              Send
            </button>
          </form>
        </div>
    </div>
  );
}

export default Contact;
