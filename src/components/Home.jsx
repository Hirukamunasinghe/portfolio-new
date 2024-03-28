import { useState } from "react";
import logo from "./myimage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/fontawesome-free-brands";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/fontawesome-free-brands";
import * as React from "react";
import Button from "@mui/material/Button";
import Reactlogo from './reacthomelogo.png';


function Home() {
  const downloadCV = () => {
    // Assuming your CV file is named 'cv.pdf'
    const cvURL = "/cv.pdf"; // Replace this with the actual path to your CV file
    const link = document.createElement("a");
    link.href = cvURL;
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
      {/* navigation bar */}
      <nav>
        <div className="left">
          <h1 className="portfolio-heading">PORTFOLIO</h1>
        </div>
        <div className="right">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>


      {/* home page div */}
      <div className="container">
        <div className="textcont">
          <h1 className="webh1"><span className="web">WEB</span> DEVELOPER</h1>
          <p className="first-para">
            Hi! I'm Hiruka Munasinghe, <br />a passionate Front end web
            developer
          </p>
          <div className="icons-div">
            <a className="icon fb">
              <FontAwesomeIcon icon={faFacebook} />{" "}
            </a>
            <a className="icon ig">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="icon tw">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className="icon gh">
              <FontAwesomeIcon icon={faGithub} />
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
              fontWeight:"bold",
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
