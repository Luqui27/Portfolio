// Presentation
import React from 'react';
import ShapeExample from './Presentation/Presentationimg';
import {Row, Col } from 'react-bootstrap';

function Presentation() {
  return (
    <section id="presentation" className="row">
      <div className="col-lg-6 mx-auto">
        <h2 className="section-title">Web Developer</h2>
        <Row>
            <Col>
            <ShapeExample/>
            </Col>
            <Col>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem libero debitis suscipit officia voluptate eaque natus similique quos maiores 
                repudiandae placeat pariatur corrupti voluptatibus accusamus perferendis omnis atque, consequatur corporis.</p>
                <i class="fi fi-brands-instagram"></i>
                <i class="fi fi-brands-facebook"></i>
                <i class="fi fi-brands-linkedin"></i>
                <i class="fi fi-brands-twitter-alt-circle"></i>
                <i class="fi fi-brands-github"></i>
            </Col>
        </Row>
        
        
      </div>
    </section>
  );
}

export default Presentation;
