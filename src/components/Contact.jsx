import { useState, useEffect } from "react";
import emailjs from 'emailjs-com';
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

  const sendEmail = (e) => {
    e.preventDefault();

    const { name, email, message } = e.target; // Destructure form elements
    const senderName = name.value; // Get sender's name from form input

    console.log("Sender's name:", senderName); // Debugging: Log the sender's name

    const templateParams = {
      from_name: senderName,
      to_name: "Recipient", // You can specify the recipient's name here if needed
      message: message.value
    };

    emailjs.send('service_ryhhjh9', 'template_dv3jsim', templateParams, 'ZsGptO9Av7g-Jv4Ch')
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      }, (error) => {
        console.log(error.text);
        alert("Failed to send the message, please try again.");
      });

    e.target.reset();
  };

  return (
    <div id="contact" className={visible ? "contact-section fade-in" : "contact-section fade-out"}>
      <div className="contact-card">
        <h1 className="contacth1">Contact</h1>
        <form onSubmit={sendEmail}>
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
            id="message" // Corrected the ID to match the previous form
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
