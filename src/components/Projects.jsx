// Projects.js
import React from 'react';
import RollingRestaurant from './ProjectCard/RollingRestaurant';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCode } from "react-icons/fa6";

function Projects() {
  return (
    <section id="projects" className="row">
      <div>
        <h2 className="section-title"><FaCode /> Projects</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quis asperiores excepturi illo nemo corrupti 
            cumque magni! Quae maiores atque necessitatibus cumque unde quasi provident labore, hic, saepe neque vitae.</p>
        <Container fluid>
            <Row className="justify-content-center" >
                <Col xs="auto"><RollingRestaurant/></Col>
                {/* <Col sm="auto"><BasicExample/></Col>
                <Col sm="auto"><BasicExample/></Col> */}
            </Row>

        </Container>

      </div>
    </section>
  );
}

export default Projects;
