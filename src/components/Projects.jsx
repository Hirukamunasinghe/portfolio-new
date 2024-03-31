import * as React from 'react';
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

const images = [adviceimg, cal, huddle, lpage, pingpong, properties];
const projectHeadings = ['ADVICE GENERATOR', 'TIP CALCULATOR', 'HUDDLING LANDING PAGE', 'CLIPBOARD LANDING PAGE', 'PING PONG GAME', 'PROPERTIES WEBSITE'];
const projectDescriptions = [
  '<span style="color: lightblue">HTML</span> <span style="color: orange">CSS</span> <span style="color: yellow">JAVASCRIPT</span>',
  '<span style="color: lightblue">HTML</span> <span style="color: orange">CSS</span> <span style="color: yellow">JAVASCRIPT</span>',
  '<span style="color: lightblue">HTML</span> <span style="color: orange">CSS</span>',
  '<span style="color: lightblue">HTML</span> <span style="color: orange">CSS</span>',
  '<span style="color: lightblue">HTML</span> <span style="color: orange">CSS</span> <span style="color: yellow">JAVASCRIPT</span>',
  '<span style="color: lightblue">HTML</span> <span style="color: orange">CSS</span> <span style="color: yellow">JAVASCRIPT</span> <span style="color: cyan">REACT</span>'
];

const githubLinks = [
  'https://github.com/example1', // Link for ADVICE GENERATOR
  'https://github.com/example2', // Link for TIP CALCULATOR
  'https://github.com/example3', // Link for HUDDLING LANDING PAGE
  'https://github.com/example4', // Link for CLIPBOARD LANDING PAGE
  'https://github.com/example5', // Link for PING PONG GAME
  'https://github.com/example6'  // Link for PROPERTIES WEBSITE
];

export default function MultiActionAreaCard() {
  const handleExploreButtonClick = (githubLink) => {
    window.open(githubLink, '_blank');
  };

  return (
    <div id='projects'>
      <h1 className='projectsh1'>PROJECTS</h1>
      <div className='projects-grid'>
        {images.map((image, index) => (
          <Card key={index} className='card' sx={{ maxWidth: 800, backgroundColor:'#232A47',width:'550px' }}>
            <CardActionArea sx={{ width: '100%' }}>
              <CardMedia
                component="img"
                height="150"
                image={image}
                alt={`Project ${index + 1}`}
                sx={{ width: '550px', height: '350px', objectFit: 'cover' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
                  {projectHeadings[index]}
                </Typography>
                <Typography variant="body2" color="text.secondary" dangerouslySetInnerHTML={{ __html: projectDescriptions[index] }} style={{ fontSize: '1rem', color: 'white' }} />
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
