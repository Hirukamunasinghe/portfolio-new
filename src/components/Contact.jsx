import { useState, useEffect } from "react";
import contactImage from "./contact.jpg";

function Contact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      const sectionPosition = contactSection.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (sectionPosition < screenHeight * 0.7) {
        setVisible(true);
        // Remove the event listener once the section is visible
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="contact" className={visible ? "contact-section fade-in" : "contact-section fade-out"}>
      <div className="contact-card">
        <h1 className="contacth1">Contact</h1>
        <form action="https://formsubmit.co/munasinghehiruka@gmail.com" method="POST">
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
            data-validation-required-message="Please enter your email."
          />
          <input
            className="msginput"
            type="text"
            id="msg"
            name="message"
            required
            placeholder="Message"
            data-validation-required-message="Please enter your message."
          />
          <button className="sendbtn" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
