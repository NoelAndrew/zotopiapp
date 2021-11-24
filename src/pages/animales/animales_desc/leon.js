import { useState, useEffect } from "react";
import Navbar from '../../../Components/Navbar/Navbar';
import Head from 'next/head';
import {Container, Row, Col, ListGroupItem, Card, Button, Breadcrumb, ListGroup} from 'react-bootstrap'

function Leon() {


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
        <Breadcrumb.Item>León</Breadcrumb.Item>

      </Breadcrumb>
  
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/assets/animales/leon.jpg" />
        <Card.Body>
            <Card.Title>Guepardo</Card.Title>
            <Card.Text>
            Caza gracias a su vista y a su gran velocidad. Es el animal terrestre más veloz,
            ya que alcanza una velocidad punta de 115 km/h en carreras de hasta cuatrocientos o quinientos metros.​​​​
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem><strong>Nombre científico:</strong> Panthera leo</ListGroupItem>
            <ListGroupItem><strong>Familia: </strong>Felidae</ListGroupItem>
            <ListGroupItem><strong>Promedio de vida: </strong>10 – 15 años (Adulto, En libertad), 8 – 10 años (Adulto, En libertad)</ListGroupItem>
            <ListGroupItem><strong>Masa Corporal: </strong>190 kg (Adulto), 130 kg (Adulto)</ListGroupItem>
            <ListGroupItem><strong>Altura: </strong>1.2 m (Adulto, Al hombro), 90 – 110 cm (Adulto, Al hombro)</ListGroupItem>
            <ListGroupItem><strong>Longitud: </strong>1.8 – 2.1 m (Cabeza y cuerpo), 1.6 – 1.8 m (Cabeza y cuerpo)</ListGroupItem>
            <ListGroupItem><strong>Alimentación: </strong>Carnivoro</ListGroupItem>
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

export default Leon;
