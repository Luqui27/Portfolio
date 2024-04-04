import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ShapeExample() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Image src="https://img2.joyreactor.cc/pics/thumbnail/post-4749050.jpg" roundedCircle />
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;