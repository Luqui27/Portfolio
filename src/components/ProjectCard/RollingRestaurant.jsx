import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiVitest } from "react-icons/si";
import { SiNetlify } from "react-icons/si";

function RollingRestaurant() {
  return (
    <Card  className='m-4' style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/65a801bcfd9c85049c0d0245/screenshot_2024-01-17-16-35-15-0000.webp&fit=cover&h=500&w=800" />
      <Card.Body>
        <Card.Title>Rolling Restaurant</Card.Title>
        <Card.Text>
        Plataforma de restaurante con menú, carrito, compra, login, pago, y funciones administrativas CRUD para menús, usuarios y pedidos.
        </Card.Text>
        <Button variant="secondary m-1"><FaHtml5 /></Button>
        <Button variant="secondary m-1"><FaCss3 /></Button>
        <Button variant="secondary m-1"><IoLogoJavascript /></Button>
        <Button variant="secondary m-1"><SiMongodb /></Button>
        <Button variant="secondary m-1"><FaReact /></Button>
        <Button variant="secondary m-1"><SiVitest /></Button>
        <Button variant="secondary m-1"><SiNetlify /></Button>
      </Card.Body>
    </Card>
  );
}

export default RollingRestaurant;