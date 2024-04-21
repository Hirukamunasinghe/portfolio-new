import { useState, useEffect } from 'react';
import devlogo from "./developer.jpg";
import Button from "@mui/material/Button";


function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const sectionPosition = aboutSection.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (sectionPosition < screenHeight * 0.7) {
        setVisible(true);
        // Remove the event listener once the section is visible
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="about" className={visible ? 'about-section fade-in' : 'about-section'}>
      <h1 className="abouth1">ABOUT</h1>
      <div className="about-cont">
        <div className="textdiv">
          <p className="para">Driven by his intuitive and optimistic approach towards problem-solving,<br /> Hiruka has the ability
            to come up with new ideas and innovative solutions<br /> for business problems. Passionate about
            exploring new technologies in<br /> the IT industry and he is a talented Computer Science Undergraduate
            who<br /> is able to apply his development skills for developing quality software. Along<br /> with
            knowledge and skills he pursues, Hiruka is seeking for an opportunity to <br /> expose his skills
            into the industry, involve in real-world projects for<br />  improving the quality of software.
          </p>
          <a href='https://www.frontendmentor.io/profile/Hirukamunasinghe'>
            <Button
              sx={{
                backgroundColor: "white",
                color: "black",
                border: "1px solid black",
                borderRadius: "15px",
                width: "260px",
                height: "60px",
                marginTop: "60px",
                fontWeight: "bold",
                fontSize: "1.1rem",
                textDecoration:"none",
                "&:hover": {
                  backgroundColor: "cyan",
                  color: "black",
                  textDecoration:"none"
                },
              }}
              variant="contained"
            >
              Front End Mentor
            </Button>
          </a>
        </div>
        <div className="imgdiv">
          <img className="about-image" src={devlogo} alt="Developer" />
        </div>
      </div>
    </div>
  );
}

export default About;
