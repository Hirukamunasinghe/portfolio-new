import { useState } from "react";
import logo from "./myimage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Button from "@mui/material/Button";
import Reactlogo from './reacthomelogo.png';

function Home() {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  const downloadCV = () => {
    // Assuming your CV file is named 'cv.pdf'
    const cvURL = "hirukacv.pdf"; // Replace this with the actual path to your CV file
    const link = document.createElement("a");
    link.href = cvURL;
    link.download = "hirukacv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      {/* navigation bar */}
      <nav>
        <div className="left">
          <h1 className="portfolio-heading">PORT<span className="folio">FOLIO</span></h1>
        </div>
        <div className="right">
          <ul className={showNavLinks ? "show" : ""}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button className="toggle-btn" onClick={toggleNavLinks}>&#9776;</button>
        </div>
      </nav>

      {/* home page div */}
      <div className="container">
        <div className="textcont">
          <h1 className="webh1"><span className="web">WEB</span> DEVELOPER</h1>
          <p className="first-para">
            Hi! I'm Hiruka Munasinghe, <br />a passionate web
            developer
          </p>
          <div className="icons-div">
            <a href="https://www.facebook.com/profile.php?id=100081236807984" className="icon fb">
              <FontAwesomeIcon icon={faFacebook} />{" "}
            </a>
            <a href="https://www.instagram.com/hiruka_mun/" className="icon ig">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com/Hiruka1299" className="icon tw">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://github.com/Hirukamunasinghe" className="icon gh">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/hiruka-munasinghe-b82752217/" className="icon lin">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div className="btn-content">
            <Button
              onClick={downloadCV}
              sx={{
                backgroundColor: "white",
                color: "black",
                border: "1px solid black",
                borderRadius: "15px",
                width: "260px",
                height: "60px",
                marginTop: "40px",
                fontWeight: "bold",
                fontSize: "1.1rem",
                "&:hover": {
                  backgroundColor: "cyan",
                  color: "black",
                },
              }}
              variant="contained"
            >
              Download CV
            </Button>
            <div className="homebottom">
              <hr/>
              <img src={Reactlogo} className="logoimg"/>
            </div>
          </div>
        </div>
        <div className="image-div">
          <img className="image" src={logo} />
        </div>
      </div>
    </div>
  );
}

export default Home;
