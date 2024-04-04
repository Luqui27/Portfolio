import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function ContactForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Podes contactarme via mail por el siguiente formulario: </Form.Label>
        <Form.Control type="email" placeholder="JonDoe@gmail.com" />
        
      </Form.Group>

      <InputGroup>
        <InputGroup.Text>Cuerpo del mensaje</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
      <Button className='m-3' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;