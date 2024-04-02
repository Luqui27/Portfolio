import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card  className='m-4' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/65a801bcfd9c85049c0d0245/screenshot_2024-01-17-16-35-15-0000.webp&fit=cover&h=500&w=800" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary m-1">Go</Button>
        <Button variant="secondary m-1">Go</Button>
        <Button variant="secondary m-1">Go</Button>
        <Button variant="secondary m-1">Go</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;