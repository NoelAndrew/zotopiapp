import { useState, useEffect } from "react";
import Navbar from '../../../Components/Navbar/Navbar';
import Head from 'next/head';
import {Container, Row, Col, ListGroupItem, Card, Button, Breadcrumb, ListGroup} from 'react-bootstrap'

function Tigre() {


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
        <Breadcrumb.Item>Tigre</Breadcrumb.Item>

      </Breadcrumb>
  
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/assets/animales/tigre.jpg" />
        <Card.Body>
            <Card.Title>Tigre</Card.Title>
            <Card.Text>
            El tigre es una de las especies​ de la subfamilia de los panterinos pertenecientes al género Panthera.
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem><strong>Nombre científico:</strong> Panthera tigris</ListGroupItem>
            <ListGroupItem><strong>Promedio de vida: </strong> 8 – 10 años</ListGroupItem>
            <ListGroupItem><strong>Masa Corporal: </strong>90 – 310 kg</ListGroupItem>
            <ListGroupItem><strong>Altura: </strong>70 – 120 cm</ListGroupItem>
            <ListGroupItem><strong>Longitud: </strong>2.5 – 3.9 m</ListGroupItem>
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

export default Tigre;
