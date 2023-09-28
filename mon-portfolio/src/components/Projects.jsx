import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../styles/Projects.scss"

const projectsData = [
  {
    title: 'Création du site de réservation Booki',
    description: 'HTML et CSS',
    githubLink: 'https://github.com/CarolineScla/CarolineScla-P2-Creation-site-Booki',
  },
  {
    title: 'Créez une page web dynamique',
    description: 'JavaScript',
    githubLink: 'https://github.com/CarolineScla/Portfolio-architecte-sophie-bluel',
  },
  {
    title: 'Débuggez et optimisez un site de photographe',
    description: 'SEO et optimisation',
    githubLink: 'https://github.com/CarolineScla/De-buggez-et-optimisez-un-site-de-photographe',
  },
  {
    title: 'Créer une application de location immobilière',
    description: 'React',
    githubLink: 'https://github.com/CarolineScla/Creeez-une-application-web-de-location-immobilie-re-avec-React_Caroline_Sclavon1',
  },
  {
    title: 'Développez le back-end d un site de notation de livres',
    description: 'Node.js',
    githubLink: 'https://github.com/CarolineScla/Mon_Vieux_Grimoire',
  },
  ];

function Projects() {
  return (
    <div className="projects">
      {projectsData.map((project, index) => (
        <Card key={index} style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <Button variant="primary" href={project.githubLink} target="_blank">
              Voir le repo GitHub
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Projects;
