import { useState, useEffect } from "react";
import Navbar from '../../../Components/Navbar/Navbar';
import Head from 'next/head';
import {Container, Row, Col, ListGroupItem, Card, Button, Breadcrumb, ListGroup} from 'react-bootstrap'

function Loro() {


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
        <Breadcrumb.Item>Loro</Breadcrumb.Item>

      </Breadcrumb>
  
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/assets/animales/loro.jpg" />
        <Card.Body>
            <Card.Title>Loro</Card.Title>
            <Card.Text>
            Los psitacoideos són una superfamilia del 
            orden Psittaciformes, que incluye los loros típicos, un total de 369 especies.​
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem><strong>Nombre científico:</strong>  Psittacoidea</ListGroupItem>
            <ListGroupItem><strong>Masa Corporal: </strong>130 - 680 g.</ListGroupItem>
            <ListGroupItem><strong>Promedio de vida: </strong>5 - 50 años</ListGroupItem>
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

export default Loro;
