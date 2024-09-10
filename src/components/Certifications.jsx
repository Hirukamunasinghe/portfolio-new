import React, { useState, useEffect } from "react";
import Python from "./python-cert.jpg";
import Hackathon from "./hackathon.png";
import webDev from "./webdev.jpg";
import uiux from "./ui-ux-cert.jpg";

const URLH= "https://www.linkedin.com/in/hiruka-munasinghe-b82752217/overlay/1714037563826/single-media-viewer/?profileId=ACoAADa_7RIBZPDbFDStLOBbwcmgheXdvJ3JICo"
const URLP = "https://www.udemy.com/certificate/UC-2a2c8b36-2de1-4797-bc03-79efb4850772/"
const URLW = "https://www.linkedin.com/in/hiruka-munasinghe-b82752217/details/certifications/"
const URLUI = "https://www.linkedin.com/in/hiruka-munasinghe-b82752217/overlay/1725959063703/single-media-viewer/?profileId=ACoAADa_7RIBZPDbFDStLOBbwcmgheXdvJ3JICo"

const Certifications = () => {
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const certificationsSection = document.getElementById('certifications');
            const sectionPosition = certificationsSection.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (!animated && sectionPosition < screenHeight * 0.7) {
                setAnimated(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [animated]);

    return (
        <div id="certifications" className={animated ? 'certifications-section fade-in' : 'certifications-section'}>
            <h1 className="cert-h1">CERTIFICATIONS</h1>
            <div className="images-div">
                <a href={URLP}><img className="cert-img" src={Python} alt=""/></a>
                <a href={URLH}><img className="cert-img" src={Hackathon} alt=""/></a>
                <a href={URLW}><img className="cert-img" src={webDev} alt=""/></a>
                <a href={URLUI}><img className="cert-img" src={uiux} alt=""/></a>
            </div>
        </div>
    );
}

export default Certifications;
