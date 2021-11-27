import { useState, useEffect } from "react";
import Navbar from '../../../Components/Navbar/Navbar';
import Head from 'next/head';
import {Container, Row, Col, ListGroupItem, Card, Button, Breadcrumb, ListGroup} from 'react-bootstrap'

function Cebra() {


  return (
    <>
     <Head>
        <title>Zootopiapp</title>
        <link rel="icon" href="/assets/Logo.png" />
      </Head>
    <Navbar/>
    <div className="animales-container">
    <Breadcrumb>
        <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
        <Breadcrumb.Item href="/animales/">Animales</Breadcrumb.Item>
        <Breadcrumb.Item>Cebra</Breadcrumb.Item>

      </Breadcrumb>
  
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/assets/animales/Cebra.jpg" />
        <Card.Body>
            <Card.Title>Cebra</Card.Title>
            <Card.Text>
            Se conocen como cebra​ a tres especies del género Equus
             propias de África —Equus quagga, ​ Equus zebra ​ y Equus grevyi ​— 
            cuya característica más distintiva es su coloración a base de rayas blancas sobre un fondo negro.​ 
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem><strong>Nombre científico:</strong> Equidae</ListGroupItem>
            <ListGroupItem><strong>Altura: </strong>120-140 cm.</ListGroupItem>
            <ListGroupItem><strong>Masa Corporal: </strong>350 – 450 kg</ListGroupItem>
            <ListGroupItem><strong>Longitud: </strong>2.7 m</ListGroupItem>
            <ListGroupItem><strong>Alimentación: </strong>Hervivoro</ListGroupItem>
            <Card.Img variant="" src="/assets/animales/leon.jpg" />

        </ListGroup>
        <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>
    </div>
    </>
  );
}

export default Cebra;
