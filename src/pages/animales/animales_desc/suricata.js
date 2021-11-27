import { useState, useEffect } from "react";
import Navbar from '../../../Components/Navbar/Navbar';
import Head from 'next/head';
import {Container, Row, Col, ListGroupItem, Card, Button, Breadcrumb, ListGroup} from 'react-bootstrap'

function Suricata() {


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
        <Breadcrumb.Item>Suricata</Breadcrumb.Item>

      </Breadcrumb>
  
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/assets/animales/suricata.jpg" />
        <Card.Body>
            <Card.Title>Suricata</Card.Title>
            <Card.Text>
            La suricata​​​​​​​ es una especie de mamífero carnívoro de la familia 
            Herpestidae que habita la región del desierto de Kalahari y el Namib en África. 
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem><strong>Nombre científico:</strong>  Suricata suricatta</ListGroupItem>
            <ListGroupItem><strong>Masa Corporal: </strong>730 g </ListGroupItem>
            <ListGroupItem><strong>Promedio de vida: </strong>12 – 14 años</ListGroupItem>
            <ListGroupItem><strong>Longitud: </strong>25 – 35 cm</ListGroupItem>
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

export default Suricata;
