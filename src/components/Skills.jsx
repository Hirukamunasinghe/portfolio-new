import { useState, useEffect } from "react";

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const [rotating, setRotating] = useState(false); // State to track rotation

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills");
      const sectionPosition = skillsSection.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (sectionPosition < screenHeight * 0.7) {
        setVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogoClick = () => {
    setRotating(!rotating); // Toggle rotating state
  };

  return (
    <div
      id="skills"
      className={visible ? "skills-section fade-in" : "skills-section"}
    >
      <h1 className="skillsh1">Skills</h1>
      <div className="logos">
        <img
          className="programming-logo"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          alt="HTML"
        />
        <img
          className="programming-logo"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
          alt="CSS"
        />
        <img
          className="programming-logo"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          alt="JavaScript"
        />
        <img
          className="programming-logo"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          alt="React"
        />
        <img
          className="programming-logo"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          alt="Tailwind CSS"
        />
        <img 
        className="programming-logo"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
        alt="bootstrap" />
        <img
          className="programming-logo"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
          alt="Java"
        />
        
        <img className="programming-logo" 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" 
        alt="node" />

        <img className="programming-logo" 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
        alt="node" />

        <img className="programming-logo" 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
        alt="node" />

        <img className="programming-logo" 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
        alt="node" />

        <img className="programming-logo" 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
        alt="node" />

      </div>
    </div>
  );
};

export default Skills;