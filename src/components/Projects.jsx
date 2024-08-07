import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import adviceimg from './adv22.jpg';
import cal from './calone.png';
import huddle from './huddling-page.jpg';
import lpage from './lpage.jpg';
import pingpong from './pingpong.jpg';
import properties from './properties.png';
import webx from './webxbg.png'
import webxsphere from './webxsphereimage.png'

const images = [adviceimg, webx, huddle, lpage, webxsphere, properties];
const projectHeadings = ['ADVICE GENERATOR', 'WEBX - PERSONAL WEBSITE', 'HUDDLING LANDING PAGE', 'CLIPBOARD LANDING PAGE', 'WEBXSPHERE - STARTUP WEBSITE', 'PROPERTIES WEBSITE'];
const projectDescriptions = [
  '<span style="color: lightblue">HTML</span> <span style="color: orange">CSS</span> <span style="color: yellow">JAVASCRIPT</span>',
  '<span style="color: lightblue">HTML</span> <span style="color: orange">TAILWIND-CSS</span> <span style="color: yellow">JAVASCRIPT</span> <span style="color: cyan">REACT</span>',
  '<span style="color: lightblue">HTML</span> <span style="color: orange">CSS</span>',
  '<span style="color: lightblue">HTML</span> <span style="color: orange">CSS</span>',
  '<span style="color: yellow">WORDPRESS</span>',
  '<span style="color: lightblue">HTML</span> <span style="color: orange">CSS</span> <span style="color: yellow">JAVASCRIPT</span> <span style="color: cyan">REACT</span>'
];

const githubLinks = [
  'https://hirukamunasinghe.github.io/advice-generator-application/', // Link for ADVICE GENERATOR
  'https://hirukamunasinghe.github.io/webx/', // Link for WEBX
  'https://hirukamunasinghe.github.io/huddle-landing-page/', // Link for HUDDLING LANDING PAGE
  'https://hirukamunasinghe.github.io/clipboard-landing-page/', // Link for CLIPBOARD LANDING PAGE
  'https://webxsphere.com', // Link for PING PONG GAME
  'https://hirukamunasinghe.github.io/properties-website/'  // Link for PROPERTIES WEBSITE
];

export default function MultiActionAreaCard() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById('projects');
      const sectionPosition = projectsSection.getBoundingClientRect().top;
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

  const handleExploreButtonClick = (githubLink) => {
    window.open(githubLink, '_blank');
  };
 
  return (
    <div id="projects" className={animated ? 'projects-section fade-in' : 'projects-section'}>
      <h1 className="projectsh1">PROJECTS</h1>
      <div className="projects-grid">
        {images.map((image, index) => (
          <Card id='cardid' key={index} className={animated ? 'card fade-in' : 'card'} sx={{ maxWidth: 800, backgroundColor:'#232A47',width:'500px' }}>
            <CardActionArea sx={{ width: '100%' }}>
              <CardMedia 
                component="img"
                height="150"
                image={image}
                alt={`Project ${index + 1}`}
                sx={{ width: '100%', height: '300px', objectFit: 'cover' }} // Modified to be responsive
                className="imgmedia" // Added a class to apply styles
              />
              <CardContent>
                <Typography className='htypo' gutterBottom variant="h5" component="div" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>
                  {projectHeadings[index]}
                </Typography>
                <Typography className='destypo' variant="body2" color="text.secondary" dangerouslySetInnerHTML={{ __html: projectDescriptions[index] }} style={{ fontSize: '1rem', color: 'white' }} />
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="medium" sx={{ backgroundColor: 'cyan',  color: 'black', '&:hover': { backgroundColor: 'lightblue', color:'black' },width:'150px' }} onClick={() => handleExploreButtonClick(githubLinks[index])}>
                Explore
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
