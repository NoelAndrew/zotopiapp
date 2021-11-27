import { useState, useEffect } from "react";
import Navbar from '../../../Components/Navbar/Navbar';
import Head from 'next/head';
import {Container, Row, Col, ListGroupItem, Card, Button, Breadcrumb, ListGroup} from 'react-bootstrap'

function Elefante() {


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
        <Breadcrumb.Item>Elefante</Breadcrumb.Item>

      </Breadcrumb>
  
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/assets/animales/elefante.jpg" />
        <Card.Body>
            <Card.Title>Elefante</Card.Title>
            <Card.Text>
            Los elefantes o elefántidos son una familia de mamíferos placentarios del orden Proboscidea. Antiguamente 
            se clasificaban, junto con otros mamíferos de piel gruesa,
             en el orden, ahora inválido, de los paquidermos​​​​.
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem><strong>Nombre científico:</strong> Elephantidae</ListGroupItem>
            <ListGroupItem><strong>Promedio de vida: </strong>60 – 70 años,</ListGroupItem>
            <ListGroupItem><strong>Masa Corporal: </strong>6.000 kilos</ListGroupItem>
            <ListGroupItem><strong>Altura: </strong>3.2 m</ListGroupItem>
            <ListGroupItem><strong>Alimentación: </strong>Hervivoro</ListGroupItem>
            <Card.Img variant="" src="/assets/mapasH/me.jpg" />

        </ListGroup>
        </Card>
    </div>
    </>
  );
}

export default Elefante;
