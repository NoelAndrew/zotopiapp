import { useState, useEffect } from "react";
import Navbar from '../../../Components/Navbar/Navbar';
import Head from 'next/head';
import {Container, Row, Col, ListGroupItem, Card, Button, Breadcrumb, ListGroup} from 'react-bootstrap'

function Jirafa() {


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
        <Breadcrumb.Item>Jirafa</Breadcrumb.Item>

      </Breadcrumb>
  
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/assets/animales/jirafa.jpg" />
        <Card.Body>
            <Card.Title>Jirafa</Card.Title>
            <Card.Text>
            La jirafa es una especie de mamífero artiodáctilo, de la
             familia Giraffidae propio de África. Es la más alta de todas las especies de animales
            terrestres existentes.
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem><strong>Nombre científico:</strong> Giraffa camelopardalis</ListGroupItem>
            <ListGroupItem><strong>Familia: </strong> Giraffidae</ListGroupItem>
            <ListGroupItem><strong>Promedio de vida: </strong>20-25 años</ListGroupItem>
            <ListGroupItem><strong>Masa Corporal: </strong>550 – 1,200 kg (Adulto), 800 – 930 kg (Adulto)</ListGroupItem>
            <ListGroupItem><strong>Altura: </strong>3.8 a 4.7 metros;</ListGroupItem>
            <ListGroupItem><strong>Longitud: </strong>4.2 m (Adulto)</ListGroupItem>
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

export default Jirafa;
