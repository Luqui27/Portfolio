// Projects.js
import React from 'react';
import BasicExample from './ProjectCard/ProjectCard';
import { Container, Row, Col } from 'react-bootstrap';

function Projects() {
  return (
    <section id="projects" className="row">
      <div >
        <h2>Projects</h2>
        <Container fluid>
            <Row className="justify-content-md-center" >
                <Col md="auto"><BasicExample/></Col>
                <Col md="auto"><BasicExample/></Col>
                <Col md="auto"><BasicExample/></Col>
                <Col md="auto"><BasicExample/></Col>
                <Col md="auto"><BasicExample/></Col>
                <Col md="auto"><BasicExample/></Col>
                <Col md="auto"><BasicExample/></Col>

            </Row>

        </Container>

      </div>
    </section>
  );
}

export default Projects;
