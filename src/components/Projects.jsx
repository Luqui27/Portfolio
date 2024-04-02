// Projects.js
import React from 'react';
import BasicExample from './ProjectCard/ProjectCard';
import { Container, Row, Col } from 'react-bootstrap';

function Projects() {
  return (
    <section id="projects">
      <div >
        <h2 className="section-title mt-5">Projects</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quis asperiores excepturi illo nemo corrupti 
            cumque magni! Quae maiores atque necessitatibus cumque unde quasi provident labore, hic, saepe neque vitae.</p>
        <Container fluid>
            <Row className="justify-content-sm-center" >
                <Col sm="auto"><BasicExample/></Col>
                <Col sm="auto"><BasicExample/></Col>
                <Col sm="auto"><BasicExample/></Col>
            </Row>

        </Container>

      </div>
    </section>
  );
}

export default Projects;
