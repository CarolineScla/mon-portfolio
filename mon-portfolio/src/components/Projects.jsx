import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../styles/Projects.scss"

const projectsData = [
  {
    title: 'Projet 1',
    description: 'Création du HTML et CSS du site de réservation Booki',
    githubLink: 'https://github.com/votre-utilisateur/projet-1',
  },
  {
    title: 'Projet 2',
    description: 'Créer une application de location immobilière avec React',
    githubLink: 'https://github.com/CarolineScla/Creeez-une-application-web-de-location-immobilie-re-avec-React_Caroline_Sclavon1/blob/master/Creeez-une-application-web-de-location-immobilie-re-avec-React_Caroline_Sclavon1-main/src/App.test.js',
  },
  {
    title: 'Projet 3',
    description: 'Créer une application de location immobilière avec React',
    githubLink: 'https://github.com/CarolineScla/Creeez-une-application-web-de-location-immobilie-re-avec-React_Caroline_Sclavon1/blob/master/Creeez-une-application-web-de-location-immobilie-re-avec-React_Caroline_Sclavon1-main/src/App.test.js',
  },
  {
    title: 'Projet 4',
    description: 'Créer une application de location immobilière avec React',
    githubLink: 'https://github.com/CarolineScla/Creeez-une-application-web-de-location-immobilie-re-avec-React_Caroline_Sclavon1/blob/master/Creeez-une-application-web-de-location-immobilie-re-avec-React_Caroline_Sclavon1-main/src/App.test.js',
  },
  {
    title: 'Projet 5',
    description: 'Créer une application de location immobilière avec React',
    githubLink: 'https://github.com/CarolineScla/Creeez-une-application-web-de-location-immobilie-re-avec-React_Caroline_Sclavon1/blob/master/Creeez-une-application-web-de-location-immobilie-re-avec-React_Caroline_Sclavon1-main/src/App.test.js',
  },
  {
    title: 'Projet 6',
    description: 'Créer une application de location immobilière avec React',
    githubLink: 'https://github.com/CarolineScla/Creeez-une-application-web-de-location-immobilie-re-avec-React_Caroline_Sclavon1/blob/master/Creeez-une-application-web-de-location-immobilie-re-avec-React_Caroline_Sclavon1-main/src/App.test.js',
  },];

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
